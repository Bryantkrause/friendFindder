// user data all about them lets export that outa here
let questions = ['How do you feel about how much time you spend together?',
    'Would you say that your partner understands what you are feeling?',
    'How important is it for you to equally divvy up chores?',
    'How much alone time do you need?',
    'How content are you with the amount of non-sexual affection in the relationship?',
    'The two of you are hitting the great outdoors. What would you prefer to spend the day doing?',
    'What would you prefer to do on a Saturday night?',
    'How would you rate your kissing?',
    'Do you think you and your partner should share the same values?',
    'Do you think a couple’s finances should be together or separate?']

console.log(questions)
console.log('this is an index')

let answers = []

    for (let i = 0; i < questions.length;i++){
let survey = document.createElement('form')
// survey.id = i
survey.innerHTML = `
<form>
<div class="form-group">
  <label for="exampleFormControlSelect1">${questions[i]}</label>
  <select class="form-control" id=${i}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>
</form>
`
document.getElementById('survey').append(survey)
    }
    

    // addEventListener('click', e => {
    //   e.preventDefault() 
    //   console.log(e)

    // })


    document.getElementById('submit').addEventListener('click', e => {
      e.preventDefault()
      console.log('you have clicked my button')
      
      for (let i = 0; i < 10 ;i++){
        console.log(document.getElementById(`${i}`).value)
      }
    })


// // function to recieve user survey and then compare it 
// document.getElementById('submit').addEventListener('click', e => {
//     e.preventDefault()

// let matchMaker = () => {

// }

// })


// should theoretically export the array of people
