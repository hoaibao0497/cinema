import { Sequelize, DataTypes } from "sequelize";

const cinema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  cineplexId: {
    type: DataTypes.INTEGER,
    references: {
      model: "cineplexes",
      key: "id",
    },
  },
};
export default cinema;
