import { useParams } from "react-router-dom";
// import CommentsSection from "../components/CommentsSection";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Tweet } from "../definitions";
import TweetContent from "../components/TweetContent";
// import CommentsSection from "../components/CommentsSection";
import { useTweet } from "../api/tweets";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const defaultTweet = {
    _id: "",
    caption: "",
    userId: "",
    media: [],
    likes: [],
    comments: [],
  };
  const { id } = useParams<{ id: string }>();
  const { tweets } = useTweet();
  const [userTweet, setTweet] = useState<Tweet>(defaultTweet);
  useEffect(() => {
    const tweet = tweets.find((t) => t._id === id) as Tweet;
    setTweet(tweet);
  }, [id, tweets]);

  return (
    <div className="">
      <TweetContent tweet={userTweet} />
      {/* <CommentsSection /> */}
    </div>
  );
};

export default SinglePost;
