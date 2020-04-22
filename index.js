import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const cup2014 = fifaData.filter((match) => {
    return match.Year == 2014 && match.Stage=="Final";
  });
console.log(cup2014['Home Team name']);
console.log(cup2014['Away Team name']);
console.log(cup2014['Home Team goals']);
console.log(cup2014['Away Team goals']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
const onlyFinals = data.filter((item) => {
return item.Stage=="Final";
   })
   return onlyFinals;
    /* code here */

};

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

  function getYears(callback) {
   const years = callback(data).map((obj)=>{
        return obj.Year;
   });
 return years;


getYears();

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
 winners =[];
 arrObj = callback(data);
 for (let i = 0; i <arrObj.length; i++){
     if (arrObj[i] ['Home Team Goals'] > arrObj[i]['Away Team Goals'])
     {
         winners.push(arrObj[i]['Home Team Name']);
        }else {
            winners.push(arrObj[i]['Away Team Name']);
        }
       return winners;  
 }
getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(data,callback1,callback2) {
    let set = new Set();
    winners = callback1(data);
    years = callback2(data);
    for (let i = 0; i < winners.length; i++){
        str1 = 'In ${years[i]}, ${winners[i]} won the world cup!';
        set.add(str1);
}
return set;
}

getAllWinners();

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const wins = getFinals(data).reduce((total, final) => {
        if (final['Home Team Initials']==teamInitials || final['Away Team Initials']==teamInitials) {
            total++;
        }
        return total;
    }, 0);
    return wins;
};
getCountryWins();

/* Task 9: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeGoals = data.reduce((total, match) => {
        return total += match['Home Team Goals'];
    },0);
    const avgHomeGoals = homeGoals/(data.length);
    const awayGoals = data.reduce((total, match) => {
        return total += match['Away Team Goals'];
    },0);
    const avgAwayGoals = awayGoals/(data.length);
    result = 'The average number of home team goals is ${avgHomeGoals}, while the average number of away team goals is ${avgAwayGoals}';
    return result;
};
getAverageGoals();



/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
