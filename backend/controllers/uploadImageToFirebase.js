import multer from "multer";
import { storage as firebaseStorage } from "../config/firebase.js"; 
import { ref, uploadBytes } from "firebase/storage";
import * as path from "path";

// Multer setup to store images locally before uploading to Firebase
const upload = multer({
  storage: multer.memoryStorage(),
}).single("file"); // Assuming 'file' is the key in the frontend form

const uploadImageToFirebase = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, message: "File upload error" });
    }

    try {
      // Create a reference to the Firebase Storage path
      const fileName = `${Date.now()}_${path.extname(req.file.originalname)}`;
      const storageRef = ref(firebaseStorage, `images/${fileName}`);

      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, req.file.buffer);

      const fileURL = `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/images%2F${fileName}?alt=media`;

      res.status(200).json({ success: true, fileURL });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Error uploading to Firebase" });
    }
  });
};

export default uploadImageToFirebase;
