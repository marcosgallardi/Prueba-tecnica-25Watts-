const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z]{3,20}$/,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[a-zA-Z]{3,20}$/,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      password: {
        //al menos una mayuscula, una minuscula, un numero y un simbolo y un largo minimo de 8 caracteres y maximo de 50
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'"<>,./?]).{8,50}$/,
        },
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^\+?[0-9\-()\s]+$/,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
