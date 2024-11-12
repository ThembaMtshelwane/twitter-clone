import Tweet from "./Tweet";

const CommentsSection = () => {
  const data = [1, 2, 3, 4];

  return (
    <>
      <h2 className="text-3xl font-bold mt-8">{data?.length} Comments </h2>
      <div className=" h-[50vh] overflow-x-hidden overflow-y-auto relative  flex items-center justify-center my-4">
        <div className="absolute top-0 left-0 flex flex-col gap-5 justify-center w-full">
          {data !== null ? (
            data.map((index) => <Tweet images={[]} id={index} key={index} />)
          ) : (
            <p>No comments yet</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentsSection;
