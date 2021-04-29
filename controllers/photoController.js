const { Photos } = require("../models/index");

const getPhoto = async function (req, res) {
  try {
    const data = await Photos.findOne({
      where: { id: req.params.id },
    });

    res.json({
      status: true,
      message: "Вы успешно получили фото",
      data: data.photo,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const updatePhoto = async function (req, res) {
  try {
    await Photos.update(
      { photo: req.body.new_data_photo },
      { where: { id: req.params.id } }
    );

    res.json({
      status: true,
      message: "Вы успешно обновили фото",
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getPhoto,
  updatePhoto,
};
