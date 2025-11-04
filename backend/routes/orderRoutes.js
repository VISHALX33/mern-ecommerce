import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// 🧾 Get orders by userId
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
