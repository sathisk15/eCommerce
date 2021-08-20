import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerNewUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.post("/", registerNewUser);

export default router;
