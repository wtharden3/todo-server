const { DataTypes } = require("sequelize");
const db = require("../db");

const List = db.define("list", {
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  listName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  timeDue: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isChecked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = List;
