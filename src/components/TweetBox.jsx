import React, { useState, useEffect } from "react";
import "../componentsCSS/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");


  const sendTweet = e =>{
e.preventDefault()
const post ={
  displayName:"Angel Fernando Pachecho Lopez",
          username:"angel.fpl",
          verifed: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:"",
}
addDoc(collection(db, "posts"),post)
setTweetImage("")
setTweetMessage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
        onChange={(e)=>setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="TweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
