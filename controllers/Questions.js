import Questions from "../models/QuestionsModel.js";

export const getQuestions = async (req, res) => {
  try {
    const response = await Questions.findAll();
    res.status(200).json(response);
  } catch (error) {}
};

export const getQuestionById = async (req, res) => {
  try {
    const response = await Questions.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};

export const createQuestions = async (req, res) => {
  const { name, optionOne, optionTwo, optionThree, answer, level } = req.body;
  try {
    await Questions.create({
      name: name,
      optionOne: optionOne,
      optionTwo: optionTwo,
      optionThree: optionThree,
      answer: answer,
      level: level,
    });
    res.status(201).json({ msg: "Berhasil" });
  } catch (error) {}
};

export const updateQuestions = async (req, res) => {
  const { name, optionOne, optionTwo, optionThree, answer, level } = req.body;
  const question = await Questions.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!question) return res.status(404).json({ msg: "Soal tidak ditemukan" });
  try {
    await Questions.update(
      {
        name: name,
        optionOne: optionOne,
        optionTwo: optionTwo,
        optionThree: optionThree,
        answer: answer,
        level: level,
      },
      {
        where: {
          id: question.id,
        },
      }
    );
    res.status(200).json({ msg: "Berhasil dipebarui" });
  } catch (error) {}
};

export const deleteQuestion = async (req, res) => {
  const question = await Questions.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!question) return res.status(404).json({ msg: "Soal tidak ditemukan" });
  try {
    await Questions.destroy({
      where: {
        id: question.id,
      },
    });
    res.status(201).json({ msg: "Berhasil dihapus" });
  } catch (error) {}
};
