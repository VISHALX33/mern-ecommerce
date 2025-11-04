import express from "express";
import { createOrder, verifyPayment, getMyOrders } from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js"; // if you have login auth

const router = express.Router();

router.post("/order", protect, createOrder);
router.post("/verify", protect, verifyPayment);
router.get("/myorders", protect, getMyOrders);

export default router;
