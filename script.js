console.log('Keep going')

/**
 * Is there a ui? No 
 * What are the inputs? user enters choice of (r,p,s) and cpu random input of (r,p,s)
 * What is the desired output? play 5 rounds of rps keep score of each round 
 * and display the winner of majority rounds at the end
 */

// 1. Prompt the user to input rock, paper, scissors 
// 2. Create funct called getComputerChoice that randomly returns rock, paper, scissors 
// 3. Create funct that plays a single round of rps with 2 params & declares winner after each round
// 4. Create funct called game that uses the above funct to play 5 rounds keeps score and declares a winner at end

// ******* User Input *********
function validInput() {
    // Only change this var if user inputs the correct info
    let validInput;
    do {
        // prompt user to input rps and make userInput case insensitive
        let userInput = prompt('Please select your weapon (rock, paper, or, scissors): ').toLowerCase();

        // convert user's input to Title case
        userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);

        // make sure user only inputs rps values
        if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
            validInput = userInput
        } else {
            alert("Invalid input, please try again!")
        }
        // run a while loop that only breaks if user inputs a valid answer; !validInput same as validInput === undefined
    } while (!validInput);

    // Test if valid user recieves desired output
    // console.log(`User Chose: ${validInput}`);
    return validInput;
}

// Test validInput to ensure it shows desired output
// let Input = validInput();
// console.log(`Your input: ${Input}`)

// ******* Computer Random Choice Funct *********
// create getComputerChoice function that randomly selects between rps
function getComputerChoice() {
    // create an array of options
    let choices = ["Rock", "Paper", "Scissors"];
    // create var that randomly chooses from arr index
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    // return the choice from the function
    return randomChoice;
}

// Test to see if getComputerChoice gives desired output
// let computerSelection = getComputerChoice();
// console.log(`CPU Chose: ${computerSelection}`);



// ******* Play a single round of rps *********
/**
 * paper > rock; rock > scissors; scissors > paper
 * if the user.value === cpu.value then it's a draw no-one wins and game -->
 * doesn't countdown/decrement (for later funct)
 * 
 */
// create playRound funct that plays a single round and takes in 2 params: user & cpu
function playRound(user, cpu) {
    // if user chooses rock 
    if (user === "Rock") {
        if (cpu === "Paper") {
            return `You lose! ${cpu} beats ${user}!`;
        } else if (cpu === "Scissors") {
            return `You win! ${user} beats ${cpu}!`;
        } else {
            return `It's a tie ${user} can't beat ${cpu}`;
        }
    }
    // if user chooses paper
    else if (user === "Paper") {
        if (cpu === "Scissors") {
            return `You lose! ${cpu} beats ${user}!`;
        } else if (cpu === "Rock") {
            return `You win! ${user} beats ${cpu}!`;
        } else {
            return `It's a tie ${user} can't beat ${cpu}`;
        }
    }
    // if user chooses scissors
    else {
        if (cpu === "Rock") {
            return `You lose! ${cpu} beats ${user}!`;
        } else if (cpu === "Paper") {
            return `You win! ${user} beats ${cpu}!`;
        } else {
            return `It's a tie ${user} can't beat ${cpu}`;
        }
    }
}

// Test the play function to make sure outputs desired outcome
// let play = playRound(validInput, computerSelection);
// console.log(play);

// ******* Play game function *********
/**
 * create a fuction that takes in 1 param that specifies number of desired games played
 * the funct takes in the validInput and play game fn and iterates over them
 * the function counts number of games, userTotal, and cpuTotal
 * Once number of games met compares winner totals and outputs winner and scores
 * if there is a tie no count for either total
 */

function game() {
    // create counter vars for userTotal, cpuTotal, and tie
    let userTotal = 0;
    let cpuTotal = 0;
    let tie = 0;

    let rounds = parseInt(prompt("How many rounds would you like to play?: "))
    // loop through the playRound fn 5 times 
    for (let i = 0; i < rounds; i++) {
        // get values for user and cpu from fn return vals
        let user = validInput();
        let cpu = getComputerChoice();
        // set play to be the called val of each playRound iteration
        let play = playRound(user, cpu)

        // test for desired output from play fn
        console.log(play)
        // increment userTotal or cpuTotal if they win a round else add to tie
        if (play.includes('win')) {
            userTotal++;
        } else if (play.includes('lose')) {
            cpuTotal++;
        } else {
            tie++;
        }
        // Test for desired total outputs
        console.log(`user:${userTotal} | cpuTotal:${cpuTotal} | tieTotal: ${tie}`)
    }
    // Test that the totals work outside the loop
    // console.log(`user:${userTotal} | cpuTotal:${cpuTotal} | tieTotal: ${tie}`)

    // determine the winner after the specified rounds are completed
    if (userTotal > cpuTotal) {
        console.log(`You Won best ${userTotal} out of ${rounds} with ${tie} tie(s).`)
    } else if (userTotal < cpuTotal) {
        console.log(`The CPU beat you by ${cpuTotal - userTotal} round(s) in a ${rounds} round match with ${tie} tie(s).`)
    } else {
        console.log(`It was a draw you won ${userTotal} round(s) and the cpu won ${cpuTotal} round(s) in a ${rounds} round match with ${tie} ties.`)
    }

    // prompt for user to input if they'd like to play again
    playAgain = prompt("Would you like to play again type 'yes' or 'no'? ").toLowerCase()

    if (playAgain === "yes") {
        game();
    } else {
        alert("Thanks for playing!")
    }
}

game()