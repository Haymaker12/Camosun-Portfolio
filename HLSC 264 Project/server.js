const express = require('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Init middleware to parse request body
// Otherwise (res,req) ... doesn't see the request body
app.use(express.json({ extended: false, limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));

// Define routes
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/programs', require('./routes/api/programs'));
app.use('/api/comments', require('./routes/api/comments'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});