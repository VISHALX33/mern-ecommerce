import express from "express";
import { getBanners, createBanner } from "../controllers/bannerController.js";

const router = express.Router();

router.route("/").get(getBanners).post(createBanner);

export default router;
