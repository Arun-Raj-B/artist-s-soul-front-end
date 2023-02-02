import "./share.css";
import { PermMedia } from "@mui/icons-material";
import { Button } from "@mui/material";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/1.jpeg"
            alt="prfilepic"
          />
          <input
            className="shareInput"
            placeholder="What is in your mind Arun?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
            </div>
          </div>
          <Button className="shareButton">Share</Button>
        </div>
      </div>
    </div>
  );
};

export default Share;
