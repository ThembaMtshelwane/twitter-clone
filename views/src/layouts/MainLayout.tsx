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
      <div className="mb-5">
        <Outlet />
      </div>
    </section>
  );
};

export default MainLayout;
