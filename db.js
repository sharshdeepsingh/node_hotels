require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = process.env.MONGODB_URL || process.env.MONGODB_URL_LOCAL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;

// Event listeners
db.on('connected', () => {
    console.log('MongoDB server connected');
});
db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
});

module.exports = db;