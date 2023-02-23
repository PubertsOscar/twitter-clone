import React from "react";
import "../componentsCSS/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ref = collection(db, "posts");
    onSnapshot(ref,snapshot=>{
    setPosts(snapshot.docs.map(doc => doc.data(), doc.id))
   })
     
  }, []);
  return ( 
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
      {posts.map((post) => (
        <Post
        key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verifed}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
