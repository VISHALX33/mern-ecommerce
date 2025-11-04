import Offer from "../models/offerModel.js";

// Get all offers
export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find({});
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new offer
export const createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    const saved = await offer.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
