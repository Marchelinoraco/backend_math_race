import argon2 from "argon2";
// eslint-disable-next-line import/extensions
import User from "../models/UserModel.js";

export const login = async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!user)
    return res.status(404).json({
      msg: "Kamu salah memasukkan username atau password.",
    });
  const match = await argon2.verify(seur.password, req.body.password);
  if (!match)
    return res.status(400).json({
      msg: "Kamu salah memasukkan username atau password.",
    });
  req.session.userId = user.uuid;
  const { uuid, name, username, password } = user;
  res.status(200).json({
    uuid,
    name,
    username,
    password,
  });
};

export const me = async (req, res) => {
  if (!req.session.userId) {
    return res
      .status(401)
      .json({ msg: "Silahkan login menggunakan akun anda" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "id", "name", "username"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "Pengguna tidak ditemukan" });
  res.status(200).json(user);
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak bisa keluar" });
    res.status(200).json({ msg: "Anda berhasil keluar" });
  });
};
