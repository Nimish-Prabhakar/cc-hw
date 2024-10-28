import React, { useState, useEffect } from "react";
import axios from "axios";
import FileUpload from "./FileUpload";
import FileList from "./FileList";

const Dashboard = () => {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://3.140.210.119/api/files");
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <FileUpload fetchFiles={fetchFiles} />
      <FileList files={files} />
    </div>
  );
};

export default Dashboard;
