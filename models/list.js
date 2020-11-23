const { DataTypes } = require("sequelize");
const db = require("../db");

const List = db.define("list", {
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  date: {
    type: DataTypes.INTEGER,
  },
});
