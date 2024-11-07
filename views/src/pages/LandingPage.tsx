import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LandingPage = () => {
  return (
    <section className="grid grid-rows-8 items-center justify-center h-screen p-4">
      <div className="text-5xl">
        <FaXTwitter />
      </div>

      <h1 className="text-5xl font-semibold row-span-2">Happening now</h1>

      <div className="my-10  row-span-2">
        <h3 className="font-semibold text-3xl my-4">Join today.</h3>
        <div className="flex flex-col text-center">
          <button className="flex items-center   bg-white text-primary rounded-2xl px-4 py-2">
            <div className="flex items-center justify-center mx-auto space-x-4">
              <FcGoogle />
              <p className="">Sign in with Google</p>
            </div>
          </button>

          <span className="grid grid-cols-[45%_10%_45%] items-center justify-center my-1">
            <span className="border"></span>
            <p className="text-center">or</p>
            <span className="border"></span>
          </span>

          <button className="bg-secondary">Create account</button>
          <p className="text-[12px] my-1">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
        </div>
      </div>
      <div className="row-span-2">
        <p className="mb-2">Already have an account?</p>
        <button className="w-full text-secondary border">Sign in</button>
      </div>
    </section>
  );
};

export default LandingPage;
