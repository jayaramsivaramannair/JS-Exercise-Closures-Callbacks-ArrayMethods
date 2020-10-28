// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * ANSWER: counter1 is set equal to the result from calling counterMaker() which includes another closure function inside of it. 
 * This means that counter1 will now keep track of the increment in count variable between successive calls. Also count variable can be accessed only inside of counterMaker() function.
 * 
 * counter2 increments the global variable 'count'. However, in this case, global count variable is globally accessible and can be easily mutated by any other function. 
 * 2. Which of the two uses a closure? How can you tell?
 * ANSWER: counter1 uses a closure because it is set equal to the result from calling counterMaker() function which returns another function counter() inside of it. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 code will be preferable in scenarios where we want to keep track of a counter variable between successive calls and also reset it to 0 if needed at a later stage. 
 * However counter2 is declared in the global scope which makes it susceptible to direct alteration or mutation. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
    return count; //This was omitted. This return statement should be included for this function to work. 
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random() * 3);

}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, inningsNumber){
  let home = 0;
  let away = 0;
  for(let i = 0; i < inningsNumber; i++) {
    let teamAtBat = Math.floor(Math.random() * 2);
    if (teamAtBat === 0) {
      home += cb();
    } else {
      away += cb();
    }
  }
  return {
    "Home" : home,
    "Away" : away
  }
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


