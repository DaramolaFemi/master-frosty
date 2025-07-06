import express from "express";
import { addFood, ListFood, removeFood } from "../Controllers/FoodController.js";
import multer from "multer";

const foodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: 'Uploads', // Ensure this folder exists
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${file.originalname}`); // Create a unique filename
    }
});

const upload = multer({ storage: storage });

// POST route for file upload and adding food (with file upload)
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', ListFood)
foodRouter.post('/remove', removeFood)

export default foodRouter;
