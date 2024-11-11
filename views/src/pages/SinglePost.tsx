
import CommentsSection from "../components/CommentsSection";
import Tweet from "../components/Tweet";

const SinglePost = () => {
  const images = [
    "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
    "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
    "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
  ];
  return (
    <div className=" w-[90%] sm:w-[80%] md:w-[70%] max-w-[850px] min-h-[80vh] mx-auto md:ml-auto p-5">
      <Tweet images={images} id={4} />
      <CommentsSection />
    </div>
  );
};

export default SinglePost;
