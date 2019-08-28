const mongoose = require('mongoose');

module.exports = DB_NAME => {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`, {useNewUrlParser: true});
    require('../models/player');
}