import React from "react";
import "./FileList.css";

const FileList = ({ files = [] }) => {
  const extractFileName = (fullName) => {
    const nameParts = fullName.split("-");
    return nameParts[nameParts.length - 1];
  };

  return (
    <div className="file-list-container">
      <h2>Uploaded Files</h2>
      <ol className="file-list">
        {files.map((file, index) => (
          <li key={file.name} className="file-item">
            <span className="file-number">{index + 1}.</span>{" "}
            <a
              href={file.url}
              target="_blank"
              rel="noreferrer"
              className="file-link"
            >
              {extractFileName(file.name)}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FileList;
