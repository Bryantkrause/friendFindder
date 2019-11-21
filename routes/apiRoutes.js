

module.exports = app => {

    // route to display all potential friends
app.get('/friends',(req, res) => {
    console.log('ping')
    res.sendStatus(200)

    })


    // route to input survey data
    app.post('/friends', (req, res) => {
        console.log('ping')
    res.sendStatus(200)
    })
}

