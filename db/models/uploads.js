'use strict'

module.exports = (sequelize, DataTypes) => {
  const Upload = sequelize.define(
    'Upload',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      key: {
        type: DataTypes.STRING,
        unique: true
      },
      discordUser: {
        type: DataTypes.STRING
      }
    },
    { tableName: 'uploads', paranoid: true }
  )

  return Upload
}
