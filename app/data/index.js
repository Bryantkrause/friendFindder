// user data all about them lets export that outa here
let people = [{
    name: "testBro",
    photo:  "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjO-6-xsPrlAhWLvZ4KHacKAc8QjRx6BAgBEAQ&url=https%3A%2F%2Fspongebob.fandom.com%2Fwiki%2FSpongeBob_SquarePants_(character)&psig=AOvVaw2X52MHQRwBs_6FvzAQg41F&ust=1574393853300297",
    scores:[1,2,3,4,5,6,7,8,9,10]
},{
	name: "brotest",
	photo: "photo.com",
	scores: [1,2,3,4,5,6,7,8,9,10]
}]

// function to recieve user survey and then compare it 
document.getElementById('submit').addEventListener('click', e => {
    e.preventDefault()

let matchMaker = () => {

}

})


// should theoretically export the array of people
module.exports = () => {
people
}