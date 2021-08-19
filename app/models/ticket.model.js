import { Sequelize, DataTypes } from "sequelize";

const ticket = {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "movies",
      key: "id",
    },
  },
};
export default ticket;
