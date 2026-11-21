import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer "))
    return res.status(401).json({ message: "Token tidak ada" });

  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user)
      return res.status(401).json({ message: "User tidak ditemukan" });
    next();
  } catch {
    res.status(401).json({ message: "Token tidak valid atau kedaluwarsa" });
  }
};

export default protect;