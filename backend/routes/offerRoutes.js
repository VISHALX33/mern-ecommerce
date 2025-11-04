import express from "express";
import { getOffers, createOffer } from "../controllers/offerController.js";

const router = express.Router();

router.route("/").get(getOffers).post(createOffer);

export default router;
