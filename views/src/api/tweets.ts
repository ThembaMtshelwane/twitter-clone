import { create } from "zustand";
import { Tweet } from "../definitions";
import axios from "axios";

type CreateTweetResponse = {
  success: boolean;
  message?: string;
};

type TweetStore = {
  tweets: Tweet[];
  setTweet: (tweet: Tweet) => void;
  createTweet: (newTweet: Tweet) => Promise<CreateTweetResponse | null>;
  fetchTweets: () => Promise<void>;
};

export const useTweet = create<TweetStore>((set) => ({
  tweets: [],

  setTweet: (tweet: Tweet) => set((state) => ({ tweets: [...state.tweets, tweet] })),

  createTweet: async (newTweet: Tweet) => {
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
}));
