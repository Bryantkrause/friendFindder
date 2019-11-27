
// should theoretically import the array of people
require('../app/data/index')

module.exports = app => {

    // route to display all potential friends
app.get('/friends',(req, res) => {
    console.log(people[0].name)
    console.log(people[0].photo)
    console.log(people[0].scores)
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

