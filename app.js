var questions = [
    {
    question: 'What temperature is water the most dense?',
    answer1:  '0 degrees celcius',
    answer2:  '100 degrees',
    answer3:  '4 degrees',
    correctAnswer: 3
    },
    {
    question: 'What is name of your rescue?',
    answer1:  'Rescue Me',
    answer2:  'The Lucksterxa',
    answer3:  'Bozo',
    correctAnswer: 2
    }
];

var readline = require('readline');
var r1 = readline.createInterface(process.stdin, process.stdout);
var numCorrect = 0;
var questionNumber = 0;
var totalQuestions = questions.length - 1;
function askQuestion(item){
  console.log("Question: " + item.question);
  console.log();
  console.log("1): " + item.answer1);
  console.log("2): " + item.answer2);
  console.log("3): " + item.answer3);
  console.log();
  console.log("Type the number of your answer");
  r1.once('line', function(userInput){
    var userAnswer = parseInt(userInput);
    if (userAnswer == item.correctAnswer){
      console.log("CORRECT!");
      numCorrect ++;
    } else {
         console.log("Wrong!");
    }
    console.log('---------------------------')
    questionNumber++
    if (questionNumber < questions.length){
      askQuestion(questions[questionNumber]);
    } else {
      r1.close();
    }
  });
  r1.prompt();
}
askQuestion(questions[questionNumber]);