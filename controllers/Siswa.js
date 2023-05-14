import Siswa from "../models/SiswaModel.js";

export const getSiswa = async (req, res) => {
  try {
    const response = await Siswa.findAll();
    res.status(200).json(response);
  } catch (error) {}
};

export const getSiswaById = async (req, res) => {
  try {
    const response = await Siswa.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};

export const createSiswa = async (req, res) => {
  const { name } = req.body;
  try {
    await Siswa.create({
      name: name,
    });
    res.status(201).json({ msg: "Berhasil" });
  } catch (error) {}
};

export const updateSiswa = async (req, res) => {
  const { name } = req.body;
  const Siswa = await Siswa.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!siswa) return res.status(404).json({ msg: "Siswa tidak ditemukan" });
  try {
    await Siswa.update(
      {
        name: name,
      },
      {
        where: {
          id: Siswa.id,
        },
      }
    );
    res.status(200).json({ msg: "Berhasil dipebarui" });
  } catch (error) {}
};

export const deleteSiswa = async (req, res) => {
  const siswa = await Siswa.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  const response = await Siswa.findAll();
  if (!siswa) return res.status(404).json({ msg: "Siswa tidak ditemukan" });
  try {
    await siswa.destroy({
      where: {
        id: siswa.id,
      },
    });
    res.status(201).json({ msg: "Berhasil dihapus", student: siswa });
  } catch (error) {}
};
