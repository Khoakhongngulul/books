const { Book } = require('../models');

// Thêm sách mới
const createBook = async (req, res) => {
  try {
    const { title, author, published_year, genre } = req.body;
    const book = await Book.create({ title, author, published_year, genre });
    res.json({ message: 'Thêm sách thành công!', book });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Hiển thị danh sách sách
const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật thông tin sách
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, published_year, genre } = req.body;
    const book = await Book.update({ title, author, published_year, genre }, { where: { id } });
    if (book[0]) {
      res.json({ message: 'Cập nhật thông tin sách thành công!' });
    } else {
      res.status(404).json({ message: 'Không tìm thấy sách!' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xóa sách
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.destroy({ where: { id } });
    if (book) {
      res.json({ message: 'Xóa sách thành công!' });
    } else {
      res.status(404).json({ message: 'Không tìm thấy sách!' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
};
