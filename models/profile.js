'use strict';
const { promiseImpl } = require('ejs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.Disease)
      Profile.belongsTo(models.User)
    }
  }
  Profile.init({
    DiseasesId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    bornDate: DataTypes.DATE,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};