'use strict';
module.exports = (sequelize, DataTypes) => {
  const pembayaran = sequelize.define('pembayaran', {
    id_pembayaran: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_petugas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'petugas',
        key: 'id_petugas'
      }
    },
    nisn: {
      type: DataTypes.STRING,
      primaryKey: true,
      references: {
        model: 'siswa',
        key: 'nisn'
      }
    },
    tgl_bayar: DataTypes.DATE,
    bulan_dibayar: DataTypes.INTEGER,
    tahun_dibayar: DataTypes.INTEGER,
  }, {  
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'pembayaran'
  });
  pembayaran.associate = function(models) {
  };
  return pembayaran;
};