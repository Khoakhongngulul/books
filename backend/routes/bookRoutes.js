const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

// Routes cho bảng books
router.post('/books', bookController.createBook);          // Thêm sách mới
router.get('/books', bookController.getBooks);             // Lấy danh sách sách
router.put('/books/:id', bookController.updateBook);       // Cập nhật thông tin sách
router.delete('/books/:id', bookController.deleteBook);    // Xóa sách

module.exports = router;
