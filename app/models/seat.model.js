import { Sequelize, DataTypes } from "sequelize";

const seat = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  showtimeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "showtimes",
      key: "id",
    },
  },
};
export default seat;
