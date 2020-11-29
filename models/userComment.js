const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userscommentSchema = new Schema({
    name:{
        type: String,
        required: true
    }, 
    email: {
        type:String,
        required: true
    },
    find_us: {
        type:String,
        required: true
    },
    newsLetter: {
        type: String,
        required: false
    },
    comment: {
        type:String,
        required: false
    }
}, {timestamps: true});

const Userscomment = mongoose.model('userscomment', userscommentSchema);
module.exports = Userscomment;