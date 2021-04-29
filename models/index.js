const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Photos = sequelize.define("photos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  photo: {
    type: DataTypes.TEXT,
  },
});

module.exports = {
  Photos,
};
