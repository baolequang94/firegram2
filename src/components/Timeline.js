import { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import {
  getUserByUserId,
  getPhotosByFollowingsUserId,
} from "../services/firebase";
import Post from "./Post";

const Timeline = () => {
  const { authUser } = useContext(UserContext);

  const [username, setUsername] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const { followings, username } = await getUserByUserId(authUser.uid);
      setUsername(username);
      if (followings.length === 0) {
        setPhotos([]);
        return;
      }
      const resultPhotos = await getPhotosByFollowingsUserId(followings);
      setPhotos(resultPhotos);
    };

    if (authUser) {
      getUserInfo();
    }
  }, [authUser]);

  return photos.length > 0
    ? photos.map((photo) => (
        <Post {...photo} username={username} key={photo.docId} />
      ))
    : "";
};

export default Timeline;
