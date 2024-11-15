import { useEffect } from "react";
import Tweet from "../components/TweetContent";
import { useTweet } from "../api/tweets";

const MainPage = () => {
  const { fetchTweets, tweets } = useTweet();
  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  if (!tweets.length) return <h1>No Available Tweets</h1>;

  return (
    <div className=" grid lg:grid-cols-2 gap-5 relative">
      <div className="space-y-5">
        {tweets.map(
          (tweet, index) =>
            index % 2 === 0 && <Tweet tweet={tweet} key={tweet._id} />
        )}
      </div>
      <div className="space-y-5">
        {tweets.map(
          (tweet, index) =>
            index % 2 !== 0 && <Tweet tweet={tweet} key={tweet._id} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
