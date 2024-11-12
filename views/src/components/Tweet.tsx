import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthModal from "./Auth/AuthModal";
import CreateTweet from "./CreateTweet";
import { useState } from "react";

type TweetProps = {
  images: string[];
  id: number;
};
const Tweet = ({ images, id }: TweetProps) => {
  const [openCreateTweet, setOpenCreateTweet] = useState(false);
  const [likesCount, setLikesCount] = useState(352);
  const [likesToggle, setLikesToggle] = useState(false);
  const [followToggle, seFollowToggle] = useState(false);
  const user = 1;

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
          to={`/index/profile`}
          className="col-[1/2] row-[1/3]  h-full w-full flex items-center justify-center"
        >
          <img
            className="object-cover object-center h-full w-[100px] rounded-full"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            alt=""
          />
        </Link>
        <div className=" flex flex-col col-span-4 mx-4">
          <Link to={`/index/profile`}>
            <h3 className="text-xl">Full name</h3>
            <h3 className="text-sm text-gray-500">Username</h3>
          </Link>
        </div>

        {id !== user && (
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

      <Link to={`/index/tweet/${id}`}>
        <p className=" text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit a in
          sit corporis voluptatibus voluptas saepe dolorem, cum maxime, hic
          aspernatur natus, vero eius sapiente.
        </p>

        <div className="my-4">
          {images.length === 1 && (
            <img
              className="rounded-xl object-cover object-center w-full max-w-[450px] mx-auto"
              src={images[0]}
              alt=""
            />
          )}

          {images.length === 2 && (
            <div className="grid grid-cols-2 gap-4 h-full">
              {images.slice(0, 2).map((img, index) => (
                <img
                  key={index}
                  className="rounded-xl object-cover object-center w-full h-full"
                  src={img}
                  alt=""
                />
              ))}
            </div>
          )}

          {images.length >= 3 && (
            <div className="grid grid-cols-6 grid-rows-4 gap-4 h-full">
              <img
                key={0}
                className="rounded-xl object-cover object-center w-full h-full col-span-4 row-span-4"
                src={images[0]}
                alt=""
              />
              {images.slice(1, 3).map((img, index) => (
                <img
                  key={index}
                  className="rounded-xl object-cover object-center w-full h-full col-span-2 row-span-2"
                  src={img}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex  w-[200px] px-4 justify-between py-2">
          <div
            className="flex items-center gap-2 "
            onClick={() => setOpenCreateTweet(!openCreateTweet)}
          >
            <FaRegComment />
            <p>25</p>
          </div>
          <div
            className={`flex items-center gap-2 ${
              likesToggle ? "bg-secondary" : "bg-none"
            }`}
            onClick={handleLikesCounting}
          >
            <FaRegHeart />
            <p>{likesCount}</p>
          </div>
        </div>
        <AuthModal isOpen={openCreateTweet} setIsOpen={setOpenCreateTweet}>
          <CreateTweet />
        </AuthModal>
      </Link>
    </div>
  );
};

export default Tweet;
