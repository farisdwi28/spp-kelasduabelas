'use strict';
module.exports = (sequelize, DataTypes) => {
  const pembayaran = sequelize.define('pembayaran', {
    id_pembayaran: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_petugas: {
      type: DataTypes.INTEGER,
      references: {
        model: 'petugas',
        key: 'id_petugas'
      }
    },
    nisn: {
      type: DataTypes.STRING,
      references: {
        model: 'siswa',
        key: 'nisn'
      }
    },
    tgl_bayar: DataTypes.DATE,
    bulan_dibayar: DataTypes.STRING,
    tahun_dibayar: DataTypes.STRING,
    id_spp: {
      type: DataTypes.INTEGER,
      references: {
        model: 'siswa',
        key: 'id_spp'
      }
    },
    jumlah_bayar: DataTypes.INTEGER
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