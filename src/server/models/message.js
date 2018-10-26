'use strict';
const message = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    edited: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'creatorId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    Message.belongsTo(models.Chat, {
      foreignKey: 'chatId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  };
  return Message;
};

export default message;