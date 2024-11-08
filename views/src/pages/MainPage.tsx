import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Tweet from "../components/Tweet";

const MainPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const images = [
    "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
    "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
    "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
  ];
  return (
    <section className="min-h-screen">
      <Navbar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
      <Sidebar setIsOpen={setOpenSidebar} isOpen={openSidebar} />
      <div className="border">
        <div className="">
          <Link to="for-you">For you</Link>
          <Link to="following">Following</Link>
        </div>
        {/* <div className="w-[90%] sm:w-[80%] md:w-[70%] grid lg:grid-cols-2 gap-5 relative  min-h-[80vh] mx-auto md:ml-auto">
          <Tweet images={images} />
          <Tweet
            images={[
              "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
            ]}
          />
          <Tweet
            images={[
              "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
              "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
            ]}
          />
          <Tweet
            images={[
              "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
              "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
            ]}
          />
          <Tweet
            images={[
              "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",

              "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
            ]}
          />
          <Tweet
            images={[
              "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
            ]}
          />
        </div> */}
        <div className="w-[90%] sm:w-[80%] md:w-[70%] grid lg:grid-cols-2 gap-5 relative  min-h-[80vh] mx-auto md:ml-auto">
          <div className="space-y-5">
            <Tweet images={images} />
            <Tweet
              images={[
                "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
              ]}
            />
            <Tweet
              images={[
                "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
                "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
              ]}
            />
          </div>
          <div className="space-y-5">
            <Tweet
              images={[
                "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
                "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
              ]}
            />
            <Tweet
              images={[
                "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",

                "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
              ]}
            />
            <Tweet
              images={[
                "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
