import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
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
  question: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

const Question = mongoose.model("question", QuestionSchema);
export default Question;
