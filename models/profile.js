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
    DiseaseId:DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Full Name is required'
        },
        notNull: {
          msg: 'Full Name is required'
        }
      }
    },
    bornDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Date is required'
        },
        notNull: {
          msg: 'Date is required'
        }
      }
    },
    phoneNumber:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Phone Number is required'
        },
        notNull: {
          msg: 'Phone Number is required'
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Image URL is required'
        },
        notNull: {
          msg: 'Image URL is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  Profile.addHook('beforeCreate', (profile, options) => {
  profile.DiseaseId = 1
  });
  return Profile;
};