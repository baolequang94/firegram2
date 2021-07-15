import React from "react";
import { FaHeart } from "react-icons/fa";
import { RiChat1Fill } from "react-icons/ri";
import "../../index.css";

const Image = ({ photoSrc, likes, comments }) => (
  <div className="col-span-1  flex justify-center relative h-0 py-50p px-0 overflow-hidden">
    <img
      src={photoSrc}
      className="w-full h-full object-cover absolute top-0 left-0"
    />
    <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 opacity-0 hover:bg-black-faded hover:opacity-100 transition-all ease-in-out">
      <div className="flex items-center justify-center mr-6">
        <FaHeart className="text-2xl text-white mr-3" />
        <span className="text-2xl text-white font-semibold">
          {likes.length}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <RiChat1Fill className="text-3xl text-white mr-3" />
        <span className="text-2xl text-white font-semibold">
          {comments.length}
        </span>
      </div>
    </div>
  </div>
);

export default Image;
