import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import tweetRoutes from "./routes/tweet.route.js";
// import uploadImageToFirebase from "./controllers/uploadImageToFirebase.js";
import multer from "multer";
import { storage as firebaseStorage } from "./config/firebaseConfig.js";
import { ref, uploadBytes } from "firebase/storage";
import * as path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE,PATCH",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Multer setup to store images locally before uploading to Firebase
const upload = multer({
  storage: multer.memoryStorage(),
}).single("file"); // Assuming 'file' is the key in the frontend form

app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRoutes);

app.post("/api/upload", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res
        .status(400)
        .json({ success: false, message: "File upload error" });
    }

    try {
      // Create a reference to the Firebase Storage path
      const fileName = `${Date.now()}_${path.extname(req.file.originalname)}`;
      const storageRef = ref(firebaseStorage, `images/${fileName}`);
      // console.log("storageRef ", storageRef);

      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, req.file.buffer);

      const fileURL = `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/images%2F${fileName}?alt=media`;

      console.log("file url ", fileURL);

      res.status(200).json({ success: true, fileURL });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Error uploading to Firebase" });
    }
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
