import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homescreen.css"
const HomeScreen = () => {
    const [url, setUrl] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    
  return (
    <div className="container parent-all-content">
      <form onSubmit={handleSubmit}>
       <div className="d-flex main-logo">
       <img className="youtube-logo" src="./images/logo.png" alt="logo" />
        <div className="mr-2 title">
        <p className="h4 text-white title-youtube">Youtube Downloader</p>
        <p className="text-white" >
          Download Audio e.g. mp3 and Video e.g. mp4 formats
        </p>
        </div>
       </div>
     
        <input
          type="text"
          id="defaultFormLoginEmailEx"
          className="form-control mb-5 "
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
          placeholder="Paste youtube link here to download"
        />
      </form>
      {url?
        <iframe className="iframe" scrolling="no" src={`https://loader.to/api/card/?url=${url}`}></iframe>
      :null}
    </div>
  );
};

export default HomeScreen;
