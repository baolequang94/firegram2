import React from "react";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import { ProfileHeader } from "./ProfileHeader";

const Profile = () => {
  return (
    <div className="container mx-auto lg:max-w-screen-lg  pt-4">
      <ProfileHeader />
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default Profile;
