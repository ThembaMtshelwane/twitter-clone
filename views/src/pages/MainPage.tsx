import { useEffect } from "react";
import Tweet from "../components/TweetContent";
import { useTweet } from "../api/tweets";

const MainPage = () => {
  const { fetchTweets, tweets } = useTweet();
  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  return (
    <div className="  grid lg:grid-cols-2 gap-5 relative">
      {tweets.map((tweet, index) =>
        index % 2 === 0 ? (
          <div className="space-y-5" key={index}>
            <Tweet tweet={tweet} />
          </div>
        ) : (
          <div className="space-y-5" key={index}>
            <Tweet tweet={tweet} />
          </div>
        )
      )}
    </div>
  );
};

export default MainPage;
