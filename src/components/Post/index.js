import Actions from "./Actions";
import AddComment from "./AddComment";
import Header from "./Header";
import Image from "./Image";

import { useRef } from "react";

const Post = ({
  docId,
  username,
  posterId,
  caption,
  comments,
  dateCreated,
  photoSrc,
  likes,
}) => {
  const commentInputRef = useRef(null);
  const handleFocus = () => commentInputRef.current.focus();

  return (
    <div className="border border-lightMode-gray-primary rounded mb-8">
      <Header posterId={posterId} />
      <Image photoSrc={photoSrc} caption={caption} />
      <Actions likes={likes} docId={docId} handleFocus={handleFocus} />

      <AddComment
        docId={docId}
        displayName={username}
        posterId={posterId}
        caption={caption}
        comments={comments}
        dateCreated={dateCreated}
        commentInputRef={commentInputRef}
      />
    </div>
  );
};

export default Post;
