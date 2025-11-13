import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        qty: Number,
        price: Number,
      },
    ],
    shippingAddress: {
      address: String,
      city: String,
      state: String,
      pincode: String,
      phone: String,
      email: String,
    },
    paymentMethod: { type: String },
    paymentInfo: {
      razorpay_order_id: String,
      razorpay_payment_id: String,
      razorpay_signature: String,
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      default: "Processing",
      enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
