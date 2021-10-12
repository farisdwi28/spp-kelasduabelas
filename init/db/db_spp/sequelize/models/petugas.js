'use strict';
module.exports = (sequelize, DataTypes) => {
  const petugas = sequelize.define('petugas', {
    id_petugas: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_petugas: DataTypes.STRING,
    level: DataTypes.ENUM('admin', 'petugas')
  }, {  
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'petugas'
  });
  petugas.associate = function(models) {

  };
  return petugas;
};