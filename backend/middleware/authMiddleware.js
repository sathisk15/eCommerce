import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith("Bearer")) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res
        .status(401)
        .json({ message: "No Authorized, Token failed", error: error });
    }
  }
  if (!token) {
    res.status(401).json({ message: "Not Authorized, No token found." });
  }
};

export { protect };
