import React from "react";
import "../componentsCSS/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1586441477952921600"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AlexHormozi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.linkedin.com/in/oscar-esquivel-495bb5241/"}
          options={{ text: "#reactjs is awesome", via: "" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
