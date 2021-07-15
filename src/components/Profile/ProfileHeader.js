import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/user";
import { getUserByUserId } from "../../services/firebase";

export const ProfileHeader = () => {
  const { authUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unsub = async () => {
      const result = await getUserByUserId(authUser.uid);

      setUserInfo(result);
    };
    if (authUser) {
      unsub();
    }
  }, []);
  const { profileSrc } = userInfo;
  return (
    <div className="grid grid-cols-3 gap-8 container mx-auto lg:max-w-screen-lg py-12 sm:px-12 lg:px-0">
      {profileSrc && <img src={profileSrc} />}
    </div>
  );
};
