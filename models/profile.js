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

    get ageNow(){
      // console.log(this.bornDate);
      if(this.bornDate){
        return new Date().getFullYear() - this.bornDate.getFullYear()
      }
      else {return 'Born date is not set'}
    }
  }
  Profile.init({
    DiseaseId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    bornDate: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};