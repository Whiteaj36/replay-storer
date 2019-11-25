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
        field: 'discord_user',
        type: DataTypes.STRING
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: DataTypes.DATE
      }
    },
    { tableName: 'uploads', paranoid: true }
  )

  return Upload
}
