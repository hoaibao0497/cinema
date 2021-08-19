import { Sequelize, DataTypes } from "sequelize";

const cineplex = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
  },
};
export default cineplex;
