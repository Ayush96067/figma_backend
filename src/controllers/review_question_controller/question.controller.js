import Question from "../../schema/questions.schema.js";

export const addQuestions = async (req, res) => {
  try {
    const question = {
      ...req.body,
      productId: decodeURIComponent(req.body.productId),
    };
    await Question.insertOne(question);

    res.status(201).json({ message: "Your question is added" });
  } catch (error) {
    console.error("Error while storing the data");
    res
      .status(400)
      .json({ message: "Your response is not added, Please try again" });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    // const questions = await Question.find({
    //   productId: "Oval Side Stone Reverse Tapered Diamond Studded Shank",
    // });

    res.json(questions);
  } catch (error) {
    console.error("Error while fetching the data");
    res.status(400).json({ message: "Not able to fetch the data" });
  }
};
