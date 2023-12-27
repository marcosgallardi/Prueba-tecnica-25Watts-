const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Sucursales",
    {
      id_sucursal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
        },
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
        },
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
