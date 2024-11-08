import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <section>
      <Navbar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
      <Sidebar setIsOpen={setOpenSidebar} isOpen={openSidebar} />
      <div className="border">
        <div className="">
          <Link to="for-you">For you</Link>
          <Link to="following">Following</Link>
        </div>
        <div className="min-h-[80vh]"></div>
      </div>
    </section>
  );
};

export default MainPage;
