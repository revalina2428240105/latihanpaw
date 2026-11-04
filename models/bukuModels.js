const mongoose = require('mongoose');

const bukuSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: [true, 'Judul buku wajib diisi']
    },
    penulis: {
        type: String,
        required: [true, 'Nama penulis wajib diisi']
    },
    penerbit: {
        type: String,
        required: [true, 'Nama penerbit wajib diisi']
    },
    tahunTerbit: {
        type: Number,
        required: [true, 'Tahun terbit wajib diisi']
    },
    kategori: {
        type: String,
        required: [true, 'Kategori wajib diisi']
    },
    stok: {
        type: Number,
        required: [true, 'Stok wajib diisi'],
        min: [0, 'Stok tidak boleh kurang dari 0']
    }
}, {
    timestamps: true
});

const Buku = mongoose.model('Buku', bukuSchema);

module.exports = Buku;