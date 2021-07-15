import { useEffect, useState } from "react";
import { projectFirestore } from "../libs/firebase";

const useFirestore = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection("photos")
      .orderBy("dateCreated", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), docId: doc.id });
        });
        setPhotos(documents);
      });

    return () => unsub();
  }, []);
  return { photos };
};

export default useFirestore;
