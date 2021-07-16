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

  console.log(userInfo);

  const profileSrc = userInfo?.profileSrc;
  return userInfo !== null ? (
    <div className="grid grid-cols-3 gap-8 container mx-auto lg:max-w-screen-lg py-12 sm:px-12 lg:px-0">
      {profileSrc && (
        <div className="h-40 w-40 rounded-full flex items-center overflow-hidden mx-auto">
          <img
            src={profileSrc}
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      )}

      <div className="col-span-2">
        <h1 className="text-3xl mb-8 font-light">{userInfo.username}</h1>
        <div className="flex items-center">
          <div className="mr-8">
            <span className="font-bold text-md">
              {userInfo.followings.length}{" "}
            </span>
            <span>followings</span>
          </div>

          <div className="mr-8">
            <span className="font-bold text-md">
              {userInfo.followers.length}{" "}
            </span>
            <span>followers</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
