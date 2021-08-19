import { Sequelize, DataTypes } from "sequelize";

const showtime = {
  startTime: {
    type: DataTypes.DATE,
  },
  cinemaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "cinemas",
      key: "id",
    },
  },
};
export default showtime;
