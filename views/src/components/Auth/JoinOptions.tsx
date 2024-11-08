import { FcGoogle } from "react-icons/fc";

const JoinOptions = () => {
  return (
    <div className="my-10  row-span-2 max-w-[320px] mx-auto lg:mx-0">
      <h3 className="font-semibold text-3xl my-5 mx-auto sm:text-4xl">
        Join today.
      </h3>
      <div className="flex flex-col">
        <button className="flex items-center  bg-white text-primary rounded-2xl px-4 py-2">
          <div className="flex items-center justify-center mx-auto space-x-4">
            <FcGoogle />
            <p className="">Sign in with Google</p>
          </div>
        </button>

        <span className="grid grid-cols-[45%_10%_45%] items-center justify-center my-2">
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
  );
};

export default JoinOptions;
