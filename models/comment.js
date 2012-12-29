var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var commentSchema = new Schema({
    date: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'},
    comment: String
});

module.exports = mongoose.model('Comment', commentSchema);