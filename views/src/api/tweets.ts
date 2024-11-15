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
  updateTweet: (id: string, updatedFields: Partial<Tweet>) => Promise<void>;
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

  updateTweet: async (id: string, updatedFields: Partial<Tweet>) => {
    try {
      const res = await axios.patch(`/api/tweets/${id}`, updatedFields);
      const { success } = res.data;

      if (success) {
        set((state) => ({
          tweets: state.tweets.map((tweet) =>
            tweet._id === id ? { ...tweet, ...updatedFields } : tweet
          ),
          tweet:
            state.tweet._id === id
              ? { ...state.tweet, ...updatedFields }
              : state.tweet,
        }));
      } else {
        console.error("Failed to update tweet:", res.data.message);
      }
    } catch (error) {
      console.error("Error updating tweet:", error);
    }
  },
}));
