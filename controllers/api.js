var Comment = require('../models/comment.js');

exports.post = function(req, res) {
    new Comment({author: req.body.author, comment: req.body.comment}).save();
    res.send("OK");
}

exports.list = function(req, res) {
    Comment.find({}).sort({'date': -1}).execFind(function(err,docs){
        res.send(docs);
    });
}
