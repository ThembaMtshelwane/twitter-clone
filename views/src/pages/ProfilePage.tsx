import { MdOutlineModeEditOutline } from "react-icons/md";
import Tweet from "../components/Tweet";
import AuthModal from "../components/Auth/AuthModal";
import EditUserForm from "../components/EditUserForm";
import { useState } from "react";

const images = [
  "https://wallpapers.com/images/featured/best-cool-pictures-40lkhq7b7tl3p1qw.jpg",
  "https://marketplace.canva.com/EAFJDaBwwC0/1/0/900w/canva-violet-and-yellow-retro-cool-minimalist-trippy-psychedelic-phone-wallpaper-iO7OSY0gJcs.jpg",
  "https://cdn.pixabay.com/photo/2023/10/03/10/06/ai-generated-8291089_640.png",
];

const ProfilePage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <section className="flex flex-col">
      <div
        className="relative hover:opacity-70 cursor-pointer"
        onClick={() => setOpenEdit(true)}
      >
        <img
          className="h-[200px] w-full object-cover object-center "
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="absolute flex gap-2 top-1/2 left-1/2 items-center transform -translate-x-1/2 -translate-y-1/2 font-semibold text-xl sm:text-4xl">
          Edit Profile
          <MdOutlineModeEditOutline />
        </p>
      </div>

      <div className="flex items-center my-3 p-4">
        <img
          className="w-[70px] h-[60px] md:w-[90px] md:h-[80px] object-cover object-center rounded-full"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
          alt=""
        />
        <div className="ml-4 w-full">
          <h3 className="text-xl">Full name</h3>
          <h3 className="text">Username</h3>

          <div className="flex gap-2  sm:flex-row">
            <p> 455 Followers </p>
            <p> 362 Following </p>
          </div>
        </div>
      </div>
      <div className="border-t ">
        <h3 className="text-3xl text-center my-5">Your Posts</h3>
        <section className="grid gap-3 my-2">
          <Tweet images={images} id={1} />
          <Tweet images={[]} id={1} />
          <Tweet images={[]} id={1} />
          <Tweet images={[]} id={1} />
        </section>
      </div>
      <AuthModal isOpen={openEdit} setIsOpen={setOpenEdit}>
        <EditUserForm setOpen={setOpenEdit} />
      </AuthModal>
    </section>
  );
};

export default ProfilePage;
