require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const bukuRoutes = require('./routes/bukuRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'RESTful API Perpustakaan berjalan!'
    });
});

app.use('/api/buku', bukuRoutes);

// Route tidak ditemukan
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Endpoint tidak ditemukan'
    });
});

// Koneksi MongoDB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Terhubung ke MongoDB');

        app.listen(PORT, () => {
            console.log(`Server berjalan di http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Gagal terhubung ke MongoDB:', err.message);
        process.exit(1);
    });