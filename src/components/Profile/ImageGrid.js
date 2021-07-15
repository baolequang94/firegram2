import { useContext } from "react";
import useFirestore from "../../hooks/useFirestore";
import UserContext from "../../context/user";
import Image from "./Image";

const ImageGrid = () => {
  const { photos } = useFirestore();
  const { authUser } = useContext(UserContext);

  return (
    photos && (
      <div className="grid grid-cols-3 gap-8 container mx-auto lg:max-w-screen-lg py-12 sm:px-12 lg:px-0">
        {photos.map(({ photoSrc, posterId, docId, likes, comments }) => {
          if (posterId === authUser.uid)
            return (
              <Image
                photoSrc={photoSrc}
                key={docId}
                likes={likes}
                comments={comments}
              />
            );
        })}
      </div>
    )
  );
};

export default ImageGrid;
