import { Avatar } from "@mui/material";
import React, {forwardRef} from "react";
import "../componentsCSS/Post.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';


const Post = forwardRef (({ displayName, username, verified, text, image, avatar }, ref) =>{
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{""}
                <span className="post__headerSpecial"> 
                 {verified  && <VerifiedOutlinedIcon className="post__badge" />} @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p className="">{text}</p>
            </div>
          </div>
          <img
            src={image}
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="Small"/>
            <RepeatOutlinedIcon fontSize="Small"/>
            <FavoriteBorderOutlinedIcon fontSize="Small"/>
            <BarChartOutlinedIcon fontSize="Small"/>
            <PublishOutlinedIcon fontSize="Small"/>
          </div>
        </div>
    </div>
  );
})

export default Post;
