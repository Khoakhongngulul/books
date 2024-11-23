module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
      },
      published_year: {
        type: DataTypes.INTEGER,
      },
      genre: {
        type: DataTypes.STRING,
      },
    }, {
      tableName: 'books',
      timestamps: false,
    });
  
    return Book;
  };
  