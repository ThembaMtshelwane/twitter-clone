import { FaXTwitter } from "react-icons/fa6";
import JoinOptions from "../components/Auth/JoinOptions";

const LandingPage = () => {
  return (
    <section className="flex flex-col my-10 mx-auto h-screen p-4 max-w-[320px]">
      <div className="text-5xl mb-10">
        <FaXTwitter />
      </div>

      <h1 className="text-5xl font-semibold row-span-2 sm:text-6xl">
        Happening now
      </h1>
      <JoinOptions />

      <div className="row-span-2 max-w-[320px] mx-auto w-full">
        <p className="mb-2">Already have an account?</p>
        <button className="w-full text-secondary border">Sign in</button>
      </div>
    </section>
  );
};

export default LandingPage;
