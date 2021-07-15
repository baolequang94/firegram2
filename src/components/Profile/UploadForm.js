import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { FiPlusCircle } from "react-icons/fi";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="file"
          className="h-0 w-0 opacity-0"
          onChange={handleChange}
          id="inputFile"
        />
        <label
          htmlFor="inputFile"
          className="rounded-full flex items-center justify-center w-12 h-12 cursor-pointer"
        >
          <FiPlusCircle className="text-5xl text-black-light " />
        </label>
      </div>
      <div className="text-center h-10">
        {file && <span className="text-sm">{file.name}</span>}
        {error && (
          <span className="text-sm font-semibold text-red-primary">
            {error}
          </span>
        )}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </>
  );
};

export default UploadForm;
