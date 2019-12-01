
// should theoretically import the array of people
let people = require('../public/app/data/')

module.exports = app => {

    // route to display all potential friends
app.get('/friends',(req, res) => {

    console.log(people)
    res.sendStatus(200)

    })


    // route to input survey data
    app.post('/friends', (req, res) => {
        console.log(req.body)
        people.push(req.body)
    res.sendStatus(200)
    // route is working need to take user survey and add it to "giant list" of other users to see if they are compatible... or not.
    })
}

