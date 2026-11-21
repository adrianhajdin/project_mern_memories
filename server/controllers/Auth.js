import jwt from "jsonwebtoken";
import User from "../models/User.js";
import 'dotenv/config';

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "Email sudah terdaftar" });

    const user = await User.create({ name, email, password });
    res.status(201).json({
      token: signToken(user._id),
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Email atau password salah" });

    res.json({
      token: signToken(user._id),
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const me = (req, res) => res.json(req.user);