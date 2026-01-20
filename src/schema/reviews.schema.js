import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
    min: 1,
    max: 5,
  },
  purchaseReason: [String],
  purchase: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Review = mongoose.model("Review", ReviewSchema);
export default Review;
