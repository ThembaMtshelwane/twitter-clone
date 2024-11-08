import { useState } from "react";
import Sidebar from "../components/Sidebar";

const MainPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <section>
      <Sidebar setIsOpen={setOpenSidebar} isOpen={openSidebar} />
    </section>
  );
};

export default MainPage;
