'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references: {         // User belongsTo Company 1:1
        model: 'Company',
        key: 'id'
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};