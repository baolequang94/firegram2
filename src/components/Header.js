import * as ROUTES from "../constants/ROUTES";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";

import { getUserByUserId } from "../services/firebase";

// Icon & Logo
import Logo from "./Logo";
import { MdHome } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
  const defaultAvatarSrc =
    "https://firebasestorage.googleapis.com/v0/b/firegram2-3f074.appspot.com/o/defaultAvatar.png?alt=media&token=6a9f25c3-e765-4220-b902-26063da3ff98";
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const { authUser } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({});

  const handleLogout = async (event) => {
    event.preventDefault();
    await firebase.auth().signOut();
    history.push(ROUTES.LOGIN);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const result = await getUserByUserId(authUser.uid);
      setUserInfo(result);
    };

    if (authUser) {
      return getUserInfo();
    }
  }, [authUser]);

  const { profileSrc, username } = userInfo;

  return (
    <header className="bg-lightMode-background border-b border-lightMode-gray-primary flex items-center justify-between sticky top-0 z-10">
      <div className="container mx-auto lg:max-w-screen-lg sm:max-w-screen-md flex items-center justify-between px-4 py-6">
        <Logo isDark />
        <div className="flex items-center">
          <Link to={ROUTES.DASHBOARD} className="mx-4">
            <MdHome className="text-3xl text-black-light active:text-black-faded" />
          </Link>
          <button
            className="mx-4 focus:outline-none text-black-light active:text-black-faded"
            onClick={handleLogout}
          >
            <IoLogOutOutline className="text-3xl" />
          </button>
          <Link
            to={`/p/${username}`}
            className="rounded-full h-8 w-8 flex mx-4"
          >
            <img
              src={profileSrc ? profileSrc : defaultAvatarSrc}
              alt={username}
              className="object-cover w-full h-full rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
