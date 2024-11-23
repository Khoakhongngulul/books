const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const bookRoutes = require('./routes/bookRoutes.js');

const app = express();
app.use(bodyParser.json());

// Sử dụng các routes
app.use('/api', bookRoutes);

// Khởi động server
const PORT = 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối tới cơ sở dữ liệu thành công!');

    // Đồng bộ hóa mô hình với cơ sở dữ liệu
    await sequelize.sync();
    
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
  } catch (err) {
    console.error('Không thể kết nối tới cơ sở dữ liệu:', err.message);
  }
});
