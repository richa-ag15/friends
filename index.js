var readline = require("readline-sync");
const chalk = require('chalk');
// console.log(chalk.blue("hello"));
var userName = readline.question("Your Name ?");
var welcome = "WELCOME to the quiz ";
console.log(welcome + (chalk.yellow(userName)) +"!"+"\n(INSTRUCTION: DON'T USE FIRST LETTER CAPITAL GO FOR SMALL-CASE LETTERS)");
var permission = readline.question("Do you ever seen series name FRIENDS?\n type yes or no: ");
if(permission==="yes"){
  console.log("Great! lets check your memory..in this quiz you have 10 questions. Right answer will give you +1 wrong will deduct -1 \n lets beign the hustle!!!")
} else {
  console.log("oops! you must watch that show available on NETFLIX or you can find that on TELEGRAM (in case you dont't have subscription) ENJOY!!!")
}
console.log("-----------------------------------");
var score=0;

function play(question,answer){
  var userans = readline.question(question);
  if(userans===answer){
    console.log("yeahh Right answer!");
    score++
    console.log("you got : "+ score);
  }else{
    console.log("oops Wrong!");
     score--
    console.log("you got : "+ score)
  }
  console.log("----------------")
}

var query = [
  {
    question:"1. What pet did Ross own?\nrabbit\nmonkey\ndog\nAnswer: ",
    answer:"monkey"
  },
   {
    question:"2.Rachel & Ross were on ?\nbreak\nholiday\nbeech\nAnswer: ",
    answer:"break"
  },
   {
    question:"3.What job does Ross have? \nphotographer\npaleontologist\nartist\nAnswer: ",
    answer:"paleontologist"
  },
  {
    question:"4.What is Janice most likely to say? \n talk to my hand\n oh my god\nget me a coffee\nAnswer: ",
    answer:"oh my god"
  },
  {
    question:"5.What name does Ross say at his wedding?\nemily\nrachel\njuly\nAnswer: ",
    answer:"rachel"
  },
  {
    question:"6.What is Chandler’s middle name?\nmuriel\nbong\nkim\nAnswer: ",
    answer:"muriel"
  },
  {
    question:"7.What does Joey never share?\nfood\ndvd\nclothes\nAnswer: ",
    answer:"food"
  },
  {
    question:"8.What song is Phoebe best known for? \nSmelly Cat\nSmelly Dog\nSmelly Rabbit\nAnswer: ",
    answer:"smelly cat"
  },
  {
    question:"9.What’s the name of Joey’s penguin?\nsnowflake\nwaddle\nhuggsy\nAnswer: ",
    answer:"huggsy"
  },
  {
    question:"10.What is Monica skilled at?\nbricklaying \ncooking\ndancing\nAnswer: ",
    answer:"cooking"
  },
];


for(let i=0;i<query.length;i++){
var current = query[i]
  play(current.question,current.answer)
  // play(query.question,query.answer[i])
};

console.log("your Final score : " + score + "/10");

console.log(chalk.blue.bgwhite("THANKYOU FOR PLAYING!!!!"));
console.log(chalk.yellow.bgred("HAVE A GOOD DAY"));