import Tweet from "../components/Tweet";

const MainPage = () => {
  const images = [
    "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
    "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
    "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
  ];
  return (
    <div className="  grid lg:grid-cols-2 gap-5 relative">
      <div className="space-y-5">
        <Tweet images={images} id={1} />
        <Tweet
          images={[
            "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
          ]}
          id={2}
        />
        <Tweet
          images={[
            "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
            "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
          ]}
          id={3}
        />
      </div>
      <div className="space-y-5">
        <Tweet
          images={[
            "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
            "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
          ]}
          id={4}
        />
        <Tweet
          images={[
            "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",

            "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
          ]}
          id={5}
        />
        <Tweet
          images={[
            "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
          ]}
          id={6}
        />
      </div>
    </div>
  );
};

export default MainPage;
