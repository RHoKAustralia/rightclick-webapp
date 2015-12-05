var mongoose = require('mongoose');
var _ = require('lodash');

var userSchema = mongoose.Schema({
    username: String,
    channels: Array,
    lastSocketId: String
});

var User = mongoose.model('User', userSchema);

export default User;
