import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <section className="min-h-screen">
      <Navbar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
      <Sidebar setIsOpen={setOpenSidebar} isOpen={openSidebar} />
      <div className="border">
        <div className="">
          <Link to="for-you">For you</Link>
          <Link to="following">Following</Link>
        </div>
        <div className="w-[90%] sm:w-[80%] md:w-[70%] relative  min-h-[80vh] mx-auto md:ml-auto ">
          <div className="bg-secondary h-[500px] my-3"></div>
          <div className="bg-secondary h-[500px] my-3"></div>
          <div className="bg-secondary h-[500px] my-3"></div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
