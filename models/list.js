const {DataTypes} = require('sequelize');
const db = require('../db');

const List = db.define('list', {
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  listname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
   timedue: {
     type: DataTypes.SMALLDATETIME,
     allowNull: true
   },
   description: {
     type: DataTypes.STRING,
     allowNull: true
   },
   isChecked: {
     type: DataTypes.BOOLEAN,
     allowNull: false
   }
})

module.exports  = List;