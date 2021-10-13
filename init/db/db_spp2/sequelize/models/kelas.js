'use strict';
module.exports = (sequelize, DataTypes) => {
  const kelas = sequelize.define('kelas', {
    id_kelas: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama_kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    angkatan:DataTypes.INTEGER
  }, {  
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'kelas'
  });
  kelas.associate = function(models) {
  };
  return kelas;
};