import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthModal from "./Auth/AuthModal";
import CreateTweet from "./CreateTweet";
import { useState } from "react";
import { Media, Tweet } from "../definitions";

import UserPreview, { FollowButtons } from "./UserPreview";
import { AlterButtons } from "./Buttons/AlterButtons";

type TweetProps = {
  tweet: Tweet;
};

const TweetContent = ({ tweet }: TweetProps) => {
  const [openCreateTweet, setOpenCreateTweet] = useState(false);
  const [likesCount, setLikesCount] = useState(352);
  const [likesToggle, setLikesToggle] = useState(false);
  const currentUser = "67346a6ed8813e388dc12182";

  if (!tweet.userId) {
    return <div>Invalid tweet data: Missing userId</div>;
  }

  const handleLikesCounting = () => {
    if (likesToggle) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }
    setLikesToggle((prev) => !prev);
  };
  return (
    <div className=" p-5 rounded-lg border border-secondary ">
      <UserPreview tweet={tweet}>
        <>
          {tweet.userId !== currentUser ? (
            <FollowButtons />
          ) : (
            <AlterButtons id={tweet._id} />
          )}
        </>
      </UserPreview>

      <Link to={`/index/tweet/${tweet._id}`}>
        <p className=" text-justify">{tweet.caption}</p>
        <ImageDisplay mediaArray={tweet.media || []} />{" "}
      </Link>
      <div className="flex  w-[200px] px-4 justify-between py-2">
        <div
          className="flex items-center gap-2 "
          onClick={() => setOpenCreateTweet(!openCreateTweet)}
        >
          <FaRegComment />
          <p>{tweet.comments?.length}</p>
        </div>
        <div
          className={`flex items-center gap-2 ${
            likesToggle ? "bg-secondary" : "bg-none"
          }`}
          onClick={handleLikesCounting}
        >
          <FaRegHeart />
          <p>{tweet.likes?.length}</p>
        </div>
      </div>
      <AuthModal isOpen={openCreateTweet} setIsOpen={setOpenCreateTweet}>
        <CreateTweet parentTweetId={tweet._id} />
      </AuthModal>
    </div>
  );
};

export default TweetContent;

const ImageDisplay = ({ mediaArray }: { mediaArray: Media[] }) => {
  return (
    <div className="my-4">
      {mediaArray.length === 0 && <></>}
      {mediaArray.length === 1 && (
        <img
          className="rounded-xl object-cover object-center w-full max-w-[450px] mx-auto"
          src={mediaArray[0].url}
          alt=""
        />
      )}
      {mediaArray?.length === 2 && (
        <div className="grid grid-cols-2 gap-4">
          {mediaArray.slice(0, 2).map((media, index) => (
            <img
              key={index}
              className="rounded-xl object-cover object-center w-full h-full"
              src={media.url}
              alt=""
            />
          ))}
        </div>
      )}
      {mediaArray.length >= 3 && (
        <div className="grid grid-cols-6 grid-rows-4 gap-4">
          <img
            key={0}
            className="rounded-xl object-cover object-center w-full h-full col-span-4 row-span-4"
            src={mediaArray[0].url}
            alt=""
          />
          {mediaArray.slice(1, 3).map((media, index) => (
            <img
              key={index}
              className="rounded-xl object-cover object-center w-full h-full col-span-2 row-span-2"
              src={media.url}
              alt=""
            />
          ))}
        </div>
      )}
    </div>
  );
};
