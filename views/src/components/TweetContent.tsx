import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthModal from "./Auth/AuthModal";
import CreateTweet from "./CreateTweet";
import { useEffect, useState } from "react";
import { Media, Tweet } from "../definitions";
import { useUser } from "../api/users";

type TweetProps = {
  tweet: Tweet;
};

const TweetContent = ({ tweet }: TweetProps) => {
  const [openCreateTweet, setOpenCreateTweet] = useState(false);
  const [likesCount, setLikesCount] = useState(352);
  const [likesToggle, setLikesToggle] = useState(false);
  const [followToggle, seFollowToggle] = useState(false);
  const { users, fetchUser } = useUser();
  const currentUser = "67346a6ed8813e388dc12182";
  const user = users.find((u) => u._id === tweet.userId);

  useEffect(() => {
    if (!user) {
      fetchUser(tweet.userId);
    }
  }, [fetchUser, user, tweet.userId]);

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
      <div className="grid grid-cols-5 grid-rows-2 items-center mb-5 h-[110px]">
        <Link
          to={`/index/profile/${user?._id}`}
          className="col-[1/2] row-[1/3]  h-full w-full flex items-center justify-center"
        >
          <img
            className="object-cover object-center h-full w-[100px] rounded-full"
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            alt=""
          />
        </Link>
        <div className=" flex flex-col col-span-4 mx-4">
          <Link to={`/index/profile/${user?._id}`}>
            <h3 className="text-xl">
              {user?.firstName} {user?.lastName}
            </h3>
            <h3 className="text-sm text-gray-500">@{user?.username}</h3>
          </Link>
        </div>

        {tweet.userId !== currentUser && (
          <button
            className={`bg-secondary col-[2/3] mx-4  w-[120px] px-2 py-1 text-sm rounded  ${
              followToggle
                ? "hover:bg-red-400 hover:border-red-400 hover:border"
                : ""
            }`}
            onClick={() => seFollowToggle((prev) => !prev)}
          >
            {followToggle ? "Following" : "Follow ?"}
          </button>
        )}
      </div>

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
