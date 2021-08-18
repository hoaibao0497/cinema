import { Sequelize, DataTypes } from "sequelize";

const ticket = {
  userId: {
    type: DataTypes.INTEGER,
  },
  movieId: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};
export default ticket;
