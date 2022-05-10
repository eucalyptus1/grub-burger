const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/grub-burger', {});

module.exports = mongoose.connection;