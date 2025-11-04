import Razorpay from "razorpay";
import crypto from "crypto";
import Order from "../models/Order.js";

import dotenv from "dotenv";
dotenv.config();


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 1️⃣ Create Razorpay order
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount) return res.status(400).json({ success: false, message: "Amount required" });

    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json({ success: true, key: process.env.RAZORPAY_KEY_ID, order });
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// 2️⃣ Verify payment & save order
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign !== razorpay_signature)
      return res.status(400).json({ success: false, message: "Payment verification failed" });

    const newOrder = await Order.create({
      user: orderData.user,
      orderItems: orderData.cartItems,
      shippingInfo: orderData.shippingInfo,
      totalAmount: orderData.totalAmount,
      paymentInfo: {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      },
      status: "Paid",
    });

    res.json({ success: true, order: newOrder });
  } catch (err) {
    console.error("Verify error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// 3️⃣ Fetch all orders for user
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("orderItems.product");
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
