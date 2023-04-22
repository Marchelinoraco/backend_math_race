import Result from "../models/ResultModel.js";

export const getResult = async (req, res) => {
  try {
    const response = await Result.findAll();
    res.status(200).json(response);
  } catch (error) {}
};

export const getResultById = async (req, res) => {
  try {
    const response = await Result.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};

export const createResult = async (req, res) => {
  const { correct, wrong, total } = req.body;
  try {
    await Result.create({
      correct: correct,
      wrong: wrong,
      total: total,
    });
    res.status(201).json({ msg: "Berhasil" });
  } catch (error) {}
};

export const updateResult = async (req, res) => {
  const { correct, wrong, total } = req.body;
  const question = await Result.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!question) return res.status(404).json({ msg: "Soal tidak ditemukan" });
  try {
    await Result.update(
      {
        correct: correct,
        wrong: wrong,
        total: total,
      },
      {
        where: {
          id: result.id,
        },
      }
    );
    res.status(200).json({ msg: "Berhasil dipebarui" });
  } catch (error) {}
};

export const deleteResult = async (req, res) => {
  const question = await Result.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!result) return res.status(404).json({ msg: "Soal tidak ditemukan" });
  try {
    await Result.destroy({
      where: {
        id: result.id,
      },
    });
    res.status(201).json({ msg: "Berhasil dihapus" });
  } catch (error) {}
};
