import { projectStorage, projectFirestore } from "../libs/firebase";
import { useState, useEffect } from "react";
import useAuthUser from "../hooks/useAuthUser";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const { authUser } = useAuthUser();

  const posterId = authUser.uid;

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("photos");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error.message);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        await collectionRef.add({
          caption: file.name,
          comments: [],
          likes: [],
          dateCreated: Date.now(),
          photoId: Date.now(),
          photoSrc: url,
          posterId,
        });
        setUrl(url);
      }
    );
  }, [file, posterId]);

  return { progress, url, error };
};

export default useStorage;
