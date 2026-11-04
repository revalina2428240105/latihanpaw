require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const bukuRoutes = require('./routes/bukuRoutes');
const bukuController = require('../controllers/bukuController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
    res.json({
        message: 'RESTful API Perpustakaan berjalan!'
    });
});

// Route buku
app.use('/api/buku', bukuRoutes);

// Koneksi MongoDB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('MongoDB berhasil terhubung!');

        app.listen(PORT, () => {
            console.log(`Server berjalan di http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Koneksi MongoDB gagal:', err.message);
    });