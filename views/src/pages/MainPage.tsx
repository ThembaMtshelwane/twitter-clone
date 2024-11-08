import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <section>
      <Navbar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
      <Sidebar setIsOpen={setOpenSidebar} isOpen={openSidebar} />
    </section>
  );
};

export default MainPage;
