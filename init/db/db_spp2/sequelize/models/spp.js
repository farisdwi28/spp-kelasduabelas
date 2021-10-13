'use strict';
module.exports = (sequelize, DataTypes) => {
  const spp = sequelize.define('spp', {
    id_spp:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    angkatan: DataTypes.INTEGER,
    tahun: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER
  }, {  
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'spp'
  });
  spp.associate = function(models) {
    // associations can be defined here
  };
  return spp;
};