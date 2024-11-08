import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { GiFeather } from "react-icons/gi";
import { IoClose, IoSearch } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <section className="bg-black inset-0 h-screen bg-opacity-30 md:hidden">
          <section className="w-[180px] bg-secondary fixed top-0 h-screen flex flex-col">
            <section className="h-[50vh] my-auto space-y-4">
              <div
                className="text-2xl cursor-pointer border-2 p-4 flex justify-around items-center"
                onClick={() => setIsOpen(false)}
              >
                <IoClose />
                <h2>Close</h2>
              </div>
              <div className="text-2xl cursor-pointer border-2 p-4  flex justify-around items-center">
                <FaXTwitter />
                <h2>Home</h2>
              </div>
              <div className="text-2xl cursor-pointer border-2 p-4  flex justify-around items-center">
                <IoSearch />
                <h2>Search</h2>
              </div>
              <div className="text-2xl cursor-pointer border-2 p-4  flex justify-around items-center">
                <GiFeather />
                <h2>Tweet</h2>
              </div>
            </section>
          </section>
        </section>
      )}

      <div className="hidden border md:flex flex-col w-fit h-[240px] fixed left-5 z-40 top-1/4 mx-2 justify-between py-6 p-4 rounded-3xl">
        <div className="text-xl">
          <FaXTwitter />
        </div>
        <div className="text-xl">
          <IoSearch />
        </div>
        <div className="text-2xl">
          <CgProfile />
        </div>
        <div className="text-xl">
          <GiFeather />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
