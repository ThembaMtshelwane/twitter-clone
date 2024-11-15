import { create } from "zustand";
import { Tweet } from "../definitions";
import axios from "axios";
import { defaultEmptyTweet } from "../utils";

type CreateTweetResponse = {
  success: boolean;
  message?: string;
};

type TweetStore = {
  tweets: Tweet[];
  tweet: Tweet;
  setTweet: (tweet: Tweet) => void;
  createTweet: (newTweet: Tweet) => Promise<CreateTweetResponse | null>;
  fetchTweets: () => Promise<void>;
  fetchTweet: (id: string) => Promise<void>;
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
      if (tweetExists) {
        set({ tweet: tweetExists });
        return;
      }

      const res = await axios.get(`/api/tweets/${id}`);
      const data = res.data;

      if (data.success) {
        set((state) => ({
          tweets: [...state.tweets, data.data],
          tweet: data.data,
        }));
      } else {
        console.error("Failed to fetch tweet from backend:", data.message);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
}));
