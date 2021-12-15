import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ArticleIcon from "@mui/icons-material/Article";
import "./PostField.css";

function PostField() {
  return (
    <div className="postField">
      <div className="input__field">
        <form>
          <CreateIcon />
          <input type="text" placeholder="Create Forum" />
          <button type="submit">send</button>
        </form>
      </div>
      <div className="field__buttons">
        <InputOptions Icon={ImageIcon} title="Photo" color="green" />
        <InputOptions Icon={AudiotrackIcon} title="Audio" color="blue" />
        <InputOptions Icon={ArticleIcon} title="Story" color="Orange" />
      </div>
    </div>
  );
}

export default PostField;
