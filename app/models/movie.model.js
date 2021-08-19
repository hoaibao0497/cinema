import { Sequelize, DataTypes } from "sequelize";

const movie = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  evaluate: {
    type: DataTypes.STRING,
  },
  poster: {
    type: DataTypes.STRING,
    defaultValue: "client",
  },
  trailer: {
    type: DataTypes.STRING,
    defaultValue: "client",
  },
};
export default movie;
