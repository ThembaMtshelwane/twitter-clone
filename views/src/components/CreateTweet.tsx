import { useState, useCallback, useMemo } from "react";
import { IoIosAddCircleOutline, IoMdCloseCircle } from "react-icons/io";
import { useTweet } from "../api/tweets";
import ObjectID from "bson-objectid";
import { Tweet } from "../definitions";
import { compressImage } from "../utils";

const MAX_IMAGES = 3;
const MAX_CAPTION_LENGTH = 105;

const CreateTweet = () => {
  const [images, setImages] = useState<string[]>([]);
  const [caption, setCaption] = useState("");
  const { createTweet } = useTweet();

  const handleImageChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      const validImages = files.filter((file) =>
        file.type.startsWith("image/")
      );

      const compressedImagePromises = validImages.map((file) =>
        compressImage(file)
      );
      const compressedBase64Images = await Promise.all(compressedImagePromises);

      setImages((prevImages) => {
        const newImages = [...prevImages, ...compressedBase64Images];
        return newImages.slice(0, MAX_IMAGES);
      });
    },
    []
  );

  const removeImage = useCallback((index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }, []);

  const handleCaptionChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCaption(event.target.value);
    },
    []
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const tweetId = new ObjectID().toString();
    const media = images.map((img) => ({
      mediaId: new ObjectID().toString(),
      url: img,
      tweetId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    const tweetData: Tweet = {
      _id: tweetId,
      caption,
      media,
      userId: "67346ab0d8813e388dc12188",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log("Form submitted with data:", tweetData);
    await createTweet(tweetData);
    setCaption("");
    setImages([]);
  };

  const imagePreviews = useMemo(
    () =>
      images.map((imgBase64) => ({
        preview: imgBase64,
      })),
    [images]
  );

  return (
    <section className="">
      <h1 className="text-2xl font-semibold mb-4">Create Tweet</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FileInput
          onChange={handleImageChange}
          disabled={images.length >= MAX_IMAGES}
        />
        <ImagePreviews images={imagePreviews} onRemove={removeImage} />
        <CaptionTextarea
          value={caption}
          onChange={handleCaptionChange}
          maxLength={MAX_CAPTION_LENGTH}
        />
        <button
          type="submit"
          className="w-full py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary-dark"
        >
          Post
        </button>
      </form>
    </section>
  );
};

const FileInput = ({
  onChange,
  disabled,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}) => (
  <div className="relative">
    <input
      type="file"
      accept="image/*"
      id="image-upload"
      multiple
      className="hidden"
      onChange={onChange}
      disabled={disabled}
    />
    <label
      htmlFor="image-upload"
      className={`flex items-center justify-center w-full h-20  border-2 border-dashed border-accent rounded-lg cursor-pointer hover:bg-gray-200 ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      {disabled ? (
        <span className="text-sm text-gray-500">
          Max {MAX_IMAGES} images allowed
        </span>
      ) : (
        <div className="flex flex-col items-center text-gray-500">
          <IoIosAddCircleOutline size={36} />
          <span className="mt-2 text-sm">Add images (up to {MAX_IMAGES})</span>
        </div>
      )}
    </label>
  </div>
);

const ImagePreviews = ({
  images,
  onRemove,
}: {
  images: { preview: string }[];
  onRemove: (index: number) => void;
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((img, index) => (
        <div key={index} className="relative h-24 w-full">
          <img
            src={img.preview}
            alt={`Preview ${index + 1}`}
            className="h-full w-full object-cover rounded-lg"
          />
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500 hover:text-red-700"
          >
            <IoMdCloseCircle size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

const CaptionTextarea = ({
  value,
  onChange,
  maxLength,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
}) => (
  <div className="relative">
    <textarea
      name="caption"
      placeholder="What's on your mind?"
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      className="w-full h-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
    ></textarea>
    <span className="absolute bottom-2 right-2 text-sm text-gray-500">
      {value.length}/{maxLength}
    </span>
  </div>
);

export default CreateTweet;
