#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import getAQuiz from "./getQuiz.js";
import "dotenv/config";
import { formatResultsToQuiz } from "./formatResultsToQuiz.js";
import { babality, fatality, flawlessVictory, victory } from "./prices.js";
//variable declarations
let playerName;
let qAndAs;
let options;
let score = 0;
//delay function
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// compare two answers
const compareAnswer = (a, b) => a == b;

// defining arrays
const difficulties = ["Easy", "Medium", "Hard"];
const tags = ["Javascript", "Laravel", "PHP", "Bash"];

// welcome
async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Terminalll Kombaaaatttt... ?\n");
  await sleep();
  rainbowTitle.stop();
  const songMimic = chalkAnimation.karaoke(
    "Tan tan tan tan, tantan tan tan tan tan\n"
  );
  await sleep(4000);
  songMimic.stop();
  console.log(`${chalk.bgBlue("HOW TO PLAY")}
    I am a process on your computer. 
    If you get any question wrong I will  ${chalk.bgRed("FINISH YOUUUU")}
    I pray you dont get a ${chalk.bgGreen("FLAWLESS VICTORY")}
    `);
}
// requirments for the game
const requirements = [
  {
    name: "playerName",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  },
  {
    name: "tag",
    type: "list",
    message: "Select Your Opponent",
    choices: tags,
  },
  {
    name: "difficulty",
    type: "list",
    message: "Select Difficulty",
    choices: difficulties,
  },
  {
    name: "limit",
    type: "number",
    message: "Enter challenge limit? eg:5,10 ..",
    default() {
      return 5;
    },
  },
];

// requesting for all requirements
async function handleRequestRequirements() {
  const answers = await inquirer.prompt(requirements);
  let { playerName:player, ...rest } = answers;
  console.log(answers)
  // process.exit(1)
  playerName = player;
  options = rest;
}

// loading quiz questions
async function handleQuizLoad() {
  const spinner = createSpinner("Loading Environment...").start();
  const data = await getAQuiz(options);
  if (data) {
    spinner.success({ text: "Succesfully Loaded Environment.." });
    qAndAs = formatResultsToQuiz(data);
  }else{
    
  }
}

async function questionTime() {
  const answers = await inquirer.prompt(qAndAs.questions);

  //calculating score
  const ansValues = Object.values(answers);
  ansValues.map((a, index) => {
    let result = compareAnswer(a, qAndAs.answers[index]);
    if (result) {
      score = score + 1;
    }
  });
}

async function scoreSwitch() {
  let percentScore = (score / qAndAs.answers.length) * 100;
  console.log(
    `Your score is : ${score}/${qAndAs.answers.length} percent is ${percentScore}`
  );
  
  switch (true) {
    case percentScore < 20:
      babality(playerName);
      break;

    case percentScore < 40:
      fatality(playerName);
      break;

    case percentScore < 100:
      victory(playerName);
      break;
    case percentScore === 100:
      flawlessVictory(playerName);
      break;

    default:
      break;
  }
  console.log(chalk.bgGray(`Your score is : ${score} / ${qAndAs.answers.length}`))
}

await welcome();
await handleRequestRequirements();
await handleQuizLoad();
await questionTime();
await scoreSwitch();

// await question1();

// await winner()

// await getAQuiz('Linux','easy',10,'')

// we will work on this mode later yh

// async function question1() {
//   const answers = await inquirer.prompt({
//     name: "question_1",
//     type: "list",
//     message: "JS was created in 10 days then released on \n",
//     choices: [
//       "May 23rd , 1995",
//       "Nov 24th, 1995",
//       "Dec 4th, 1995",
//       "Dec 17, 1996",
//     ],

//   });

//   return handleAnswer(answers.question_1 == "Dec 4th, 1995");
// }

// async function handleAnswer(isCorrect) {
//   const spinner = createSpinner("Checking answer...").start();
//   await sleep();
//   if (isCorrect) {
//     spinner.success({ text: `Nice work ${playerName}` });
//   } else {
//     spinner.error({ text: `sorry ${playerName}.. Game Lost Successfully ` });
//     process.exit(1);
//   }
// }
