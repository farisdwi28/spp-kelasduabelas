'use strict';
module.exports = (sequelize, DataTypes) => {
  const siswa = sequelize.define('siswa', {
    nisn:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    nis: DataTypes.STRING,
    nama: DataTypes.STRING,
    id_kelas: {
      type: DataTypes.INTEGER,
      references: {
        model: 'kelas',
        key: 'id_kelas'
      }
    },
    alamat: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    id_spp: {
      type: DataTypes.INTEGER,
      references: {
        model: 'spp',
        key: 'id_spp'
      }
    },
  }, {  
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'siswa'
  });
  siswa.associate = function(models) {
  };
  return siswa;
};