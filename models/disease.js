'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Disease.hasMany(models.Profile)
    }
  }
  Disease.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name of Disease is required'
        },
        notNull: {
          msg: 'Name of Disease is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description of Disease is required'
        },
        notNull: {
          msg: 'Description of Disease is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Disease',
  });
  return Disease;
};