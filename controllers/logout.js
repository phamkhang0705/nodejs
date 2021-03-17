module.exports = (req, res) => {
    console.log(123123);
    req.session.destroy(() => {
        res.redirect('/')
    })
}
