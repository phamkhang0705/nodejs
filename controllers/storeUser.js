const User = require('../models/User.js')
const path = require('path');
module.exports = (req, res) => {
    User.create({
        ...req.body
    }, function (err) {
        console.log(err);
        if (err) {
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}