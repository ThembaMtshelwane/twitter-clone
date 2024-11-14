import { create } from "zustand";
import { Tweet } from "../definitions";
import axios from "axios";

type CreateTweetResponse = {
  success: boolean;
  message?: string;
};

const defaultEmptyTweet = {
  _id: "",
  caption: "",
  userId: "",
  media: [],
  likes: [],
  comments: [],
  createdAt: "",
  updatedAt: "",
};
type TweetStore = {
  tweets: Tweet[];
  tweet: Tweet;
  setTweet: (tweet: Tweet) => void;
  createTweet: (newTweet: Tweet) => Promise<CreateTweetResponse | null>;
  fetchTweets: () => Promise<void>;
};

export const useTweet = create<TweetStore>((set, get) => ({
  tweets: [],
  tweet: defaultEmptyTweet,

  setTweet: (tweet: Tweet) =>
    set((state) => ({ tweets: [...state.tweets, tweet] })),

  createTweet: async (newTweet) => {
    try {
      const res = await axios.post("/api/tweets", newTweet, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("res", res);

      const { success } = res.data;
      if (success) {
        return await res.data;
      } else {
        return await res.data;
      }
    } catch (error) {
      console.error("Error creating tweet:", error);
      return {
        success: false,
        message: "",
      };
    }
  },

  fetchTweets: async () => {
    try {
      const res = await axios.get("/api/tweets");
      const data = res.data;
      set({ tweets: data.data });
    } catch (error) {
      console.error(error);
    }
  },
  fetchTweet: async (id: string) => {
    try {
      const { tweets } = get();
      const tweetExists = tweets.find((tweet) => tweet._id === id);

      if (!tweetExists) {
        const res = await axios.get(`/api/users/${id}`);
        const data = res.data;
        set({ tweets: [...tweets, data.data] });
      } else {
        const res = await axios.get(`/api/tweets/${id}`);
        const data = res.data;
        set({ tweet: data.data }); // Update single tweet state
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
}));
