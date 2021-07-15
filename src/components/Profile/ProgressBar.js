import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div
      className="bg-black-light h-1 rounded"
      style={{ width: progress + "%" }}
    ></div>
  );
};
