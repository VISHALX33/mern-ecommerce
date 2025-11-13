import express from "express";
import { addOrderItems, getMyOrders, getAllOrders } from "../controllers/orderController.js";

const router = express.Router();

// ✅ Admin: Get all orders
router.get("/all", getAllOrders);

// ✅ User: Get own orders
router.get("/myorders", getMyOrders);

// ✅ Create new order
router.post("/", addOrderItems);

export default router;
