const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Vocab = sequelize.define("vocab", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    word: {
      type: DataTypes.STRING,
    },
    wordType: {
      type: DataTypes.STRING,
    },
    ori_sentence: {
      type: DataTypes.STRING,
    },
    my_sentence: {
      type: DataTypes.STRING,
    },
    learning_date: {
      type: DataTypes.STRING,
    },
  });

  return Vocab;
};
