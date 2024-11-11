import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <section className="min-h-screen">
      <Navbar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
      <Sidebar setIsOpen={setOpenSidebar} isOpen={openSidebar} />
      <div className="mb-5  w-[90%] sm:w-[80%] md:w-[70%] max-w-[850px] min-h-[80vh] mx-auto md:ml-auto  ">
        <Outlet />
      </div>
    </section>
  );
};

export default MainLayout;
