import express from 'express';
import { addVideo, addView, deleteVideo, getVideo, random, sub, trend, updateVideo, getByTag, search } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// Create a video
router.post("/", verifyToken, addVideo)

// Update a video
router.put("/:id", verifyToken, updateVideo)

// Delete a video
router.delete("/:id", verifyToken, deleteVideo)

// Get a video
router.get("/find/:id", getVideo)

// Add view
router.put("/view/:id", addView)

router.get("/random", random)

router.get("/trend", trend)

router.get("/sub", verifyToken, sub)

router.get("/tags", getByTag)

router.get("/search", search)

export default router;