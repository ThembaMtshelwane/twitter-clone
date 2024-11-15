import { useTweet } from "../../api/tweets";

export const AlterButtons = ({ id }: { id: string }) => {
  return (
    <div className="flex  w-full col-span-4 px-3 space-x-4">
      <button className="bg-secondary w-[80px] hover:bg-[#2c67a6]">Edit</button>
      <DeleteTweetButton id={id} />
    </div>
  );
};

export const DeleteTweetButton = ({ id }: { id: string }) => {
  const { deleteTweet } = useTweet();

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this tweet?"
    );
    if (confirm) {
      await deleteTweet(id);
      alert("Tweet deleted successfully");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-400 hover:bg-red-500 w-[80px]"
    >
      Delete
    </button>
  );
};
