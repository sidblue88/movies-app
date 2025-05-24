const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/movies-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        return mongoose.connection.db.admin().ping();
    })
    .then((pingResult) => {
        console.log('Ping result:', pingResult);
    })
    .catch((error) => {
        console.error('Connection error', error.message);
    });


const db = mongoose.connection

module.exports = db
