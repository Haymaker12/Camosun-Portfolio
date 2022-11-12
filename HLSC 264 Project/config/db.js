const mongoose = require('mongoose');
const config = require('config');
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.DB || config.get('mongoURL');

const connectDB = async () => {
    try {
        await mongoose.connect(db, { 
            useUnifiedTopology: true, 
            useCreateIndex: true,
            useNewUrlParser: true });
        console.log('Connected to the database.');
    } catch(err) {
        console.log(`Database connection failed: ${err.message}`);
    }
};

module.exports = connectDB;