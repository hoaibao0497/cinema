import { Sequelize, DataTypes } from "sequelize";

const cinema_movie = {
  cinemaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "cinemas",
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
export default cinema_movie;
