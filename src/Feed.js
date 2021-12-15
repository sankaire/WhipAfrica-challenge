import React from "react";
import "./Feed.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import InputOptions from "./InputOptions";
const Feed = ({ author, download_url }) => {
  return (
    <div className="div-feed">
      <div style={{ padding: "10px 5px", fontWeight: "bold" }}>{author}</div>
      <div className="img">
        <img src={download_url} alt="" />
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareIcon} title="Share" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Feed;
