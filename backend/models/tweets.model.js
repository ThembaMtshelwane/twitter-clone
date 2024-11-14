import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  caption: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  media: [
    {
      mediaId: { type: mongoose.Schema.Types.ObjectId, required: true },
      url: { type: String, required: true },
      tweetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        required: true,
      },
      createdAt: { type: String, required: true },
      updatedAt: { type: String, required: true },
    },
  ],
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
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

export const TweetModel = mongoose.model("Tweet", tweetSchema);
