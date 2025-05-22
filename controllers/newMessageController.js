exports.formGet = (req, res) => {
    res.render('form');
}

exports.addMessagePost = (req, res) => {
    let {message, user} = req.body;
    console.log(message, user)
    // let ip = req.socket.remoteAddress;
    // messages.unshift({text: message, user: user, added: new Date()})
    res.redirect('/')
}