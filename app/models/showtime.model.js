import { Sequelize, DataTypes } from "sequelize";

const showtime = {
  startTime: {
    type: DataTypes.DATE,
  },
  cinemaId: {
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
export default showtime;
