import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerNewUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/register").post(registerNewUser);

export default router;
