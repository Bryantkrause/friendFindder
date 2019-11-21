

let people = [{
    name: "testBro",
    photo:  "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjO-6-xsPrlAhWLvZ4KHacKAc8QjRx6BAgBEAQ&url=https%3A%2F%2Fspongebob.fandom.com%2Fwiki%2FSpongeBob_SquarePants_(character)&psig=AOvVaw2X52MHQRwBs_6FvzAQg41F&ust=1574393853300297",
    scores:[1,2,3,4,5,6,7,8,9,10]
}]


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

