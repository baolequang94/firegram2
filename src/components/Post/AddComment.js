import { useState, useEffect } from "react";
import { getUserByUserId, updateComments } from "../../services/firebase";
import { formatDistance } from "date-fns";

const AddComment = ({
  displayName,
  posterId,
  caption,
  comments,
  docId,
  dateCreated,
  commentInputRef,
}) => {
  const [commentsState, setCommentsState] = useState(comments);
  const [comment, setComment] = useState("");
  const isDisable = comment === "";

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

  const { username } = userInfo;

  const addComment = async (e) => {
    e.preventDefault();
    setCommentsState([...commentsState, { comment, displayName }]);
    setComment("");

    await updateComments(docId, { comment, displayName });
  };

  return (
    <>
      <div className="px-3 py-1 text-sm">
        <span className="text-black-light font-bold">{username}</span>{" "}
        <span className="">{caption}</span>
      </div>

      {commentsState?.map(({ displayName, comment }, index) => (
        <div className="px-3 py-1 text-sm" key={index}>
          <span className="text-black-light font-bold">{displayName}</span>{" "}
          <span className="">{comment}</span>
        </div>
      ))}

      <div className="px-3 py-1 text-xs text-lightMode-gray-base uppercase">{`${formatDistance(
        dateCreated,
        Date.now()
      )} ago`}</div>

      <div className="flex border-t bg-black border-lightMode-gray-primary">
        <textarea
          className="w-full bg-transparent text-black-light text-sm focus:outline-none resize-none p-4 pr-0"
          rows={1}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          ref={commentInputRef}
        />
        <div className="flex items-center">
          <button
            className={`text-blue-500 text-md font-semibold h-full pl-1 pr-3 ${
              isDisable ? "opacity-50" : ""
            } focus:outline-none`}
            disabled={isDisable}
            onClick={(e) => addComment(e)}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default AddComment;
