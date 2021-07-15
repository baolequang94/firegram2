import React, { useState, useEffect } from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { toggleState } from "../../services/firebase";
import useAuthUser from "../../hooks/useAuthUser";

const Actions = ({ docId, likes, handleFocus }) => {
  const { authUser } = useAuthUser();
  const [isLiked, setIsLiked] = useState(false);

  const [totalLikes, setTotalLikes] = useState(likes?.length);

  useEffect(() => {
    if (likes?.findIndex((id) => authUser?.uid === id) === -1) {
      setIsLiked(false);
      return;
    }
    setIsLiked(true);
  }, [authUser, likes]);

  return (
    <>
      <div className="flex items-center text-black-light py-2 px-3 text-2xl">
        {!isLiked ? (
          <FaRegHeart
            className="mr-4 cursor-pointer select-none focus:outline-none"
            onDoubleClick={async () => {
              isLiked
                ? setTotalLikes(totalLikes - 1)
                : setTotalLikes(totalLikes + 1);
              await toggleState(isLiked, setIsLiked, docId, authUser.uid);
            }}
          />
        ) : (
          <FaHeart
            className="mr-4 cursor-pointer fill-red select-none focus:outline-none"
            onDoubleClick={async () => {
              isLiked
                ? setTotalLikes(totalLikes - 1)
                : setTotalLikes(totalLikes + 1);
              await toggleState(isLiked, setIsLiked, docId, authUser.uid);
            }}
          />
        )}
        <FaRegComment
          className="cursor-pointer select-none focus:outline-none"
          onClick={handleFocus}
        />
      </div>
      <div className="px-3 py-1 text-sm">
        <span className="text-black-light font-bold">{`${totalLikes} ${
          totalLikes === 1 ? "like" : "likes"
        }`}</span>
      </div>
    </>
  );
};

export default Actions;
