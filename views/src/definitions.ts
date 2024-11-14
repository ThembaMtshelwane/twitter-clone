export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  DOB: string;
  avatar?: string;
  banner?: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  followers?: string[];
};

export type Media = {
  mediaId: string;
  url: string;
  tweetId: string;
  createdAt: string;
};

export type Like = {
  userId: string;
  tweetId: string;
  likedAt: string;
};

export type Comment = {
  userId: string;
  tweetId: string;
  comment: string;
  commentedAt: string;
};
export type Tweet = {
  _id: string;
  caption: string;
  userId: string;
  media: Media[];
  likes: Like[];
  comments: Comment[];
};
