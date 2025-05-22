const db = require('../db/queries')

exports.loadMessages =  (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: db.getAllMessages})
}