import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FileUpload.css";

const FileUpload = ({ fetchFiles }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      await axios.post("http://3.140.210.119:5001/api/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully!");
      setFile(null);
      fetchFiles();
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="file-upload-container">
      <h2>Upload a File</h2>
      <div className="file-upload-input-container">
        <input
          type="file"
          onChange={handleFileChange}
          id="file"
          className="file-input"
          disabled={loading}
        />
        <label htmlFor="file" className="file-label">
          {file ? file.name : "Choose a file..."}
        </label>
      </div>
      <button
        className="upload-button"
        onClick={handleFileUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default FileUpload;
