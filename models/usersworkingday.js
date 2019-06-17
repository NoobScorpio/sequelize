'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersWorkingDay = sequelize.define('UsersWorkingDay', {
    userId: DataTypes.INTEGER,
    workingDayId: {
      type:DataTypes.INTEGER,
      allowNull: false,
        references: {         // WorkingDays hasMany Users n:n
          model: 'workingday',
          key: 'id'
        }
    }
  }, {});
  UsersWorkingDay.associate = function(models) {
    // associations can be defined here
  };
  return UsersWorkingDay;
};