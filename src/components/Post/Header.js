import { useState, useEffect } from "react";
import { getUserByUserId } from "../../services/firebase";

const Header = ({ posterId }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      const result = await getUserByUserId(posterId);
      setUserInfo(result);
    };
    if (posterId) {
      getUserInfo();
    }
  }, [posterId]);

  const { profileSrc, username } = userInfo;

  return (
    <div className="w-full flex items-center py-2 px-3">
      <div className="w-10 h-10 rounded-full mr-3">
        <img
          src={profileSrc}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <span className="text-black-light font-bold text-sm">{username}</span>
    </div>
  );
};

export default Header;
