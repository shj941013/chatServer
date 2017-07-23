var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        username: String,
        passWord: String,

    }
);

module.exports = mongoose.model('Users', userSchema);
