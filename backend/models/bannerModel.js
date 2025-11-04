import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    altText: { type: String },
  },
  { timestamps: true }
);

const Banner = mongoose.model("Banner", bannerSchema);
export default Banner;
