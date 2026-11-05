const mongoose = require('mongoose');

const bukuSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: [true, 'Judul buku wajib diisi'],
        trim: true
    },
    penulis: {
        type: String,
        required: [true, 'Nama penulis wajib diisi'],
        trim: true
    },
    penerbit: {
        type: String,
        required: [true, 'Nama penerbit wajib diisi'],
        trim: true
    },
    tahunTerbit: {
        type: Number,
        required: [true, 'Tahun terbit wajib diisi']
    },
    kategori: {
        type: String,
        required: [true, 'Kategori wajib diisi'],
        trim: true
    },
    stok: {
        type: Number,
        required: [true, 'Stok wajib diisi'],
        min: [0, 'Stok tidak boleh kurang dari 0']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Buku', bukuSchema);