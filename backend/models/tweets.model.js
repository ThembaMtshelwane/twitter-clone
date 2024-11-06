import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    media: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "File",
      default: [],
    },
    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        commentedAt: {
          type: Date,
          required: true,
        },
      },
    ],
    likes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        likedAt: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const TweetModel = mongoose.model("Tweet", tweetSchema);
