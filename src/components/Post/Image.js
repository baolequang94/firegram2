import React from "react";

const Image = ({ photoSrc, caption }) => {
  return (
    <>
      <img src={photoSrc} alt={caption} className="object-cover" />
    </>
  );
};

export default Image;
