const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name?  ", (answer1) => {
  rl.question("What's an activity you like doing?  ", (answer2) => {
    rl.question("What do you listen to while doing that?  ", (answer3) => {
      rl.question("Which meal is your favourite?  ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?  ", (answer5) => {

          const profile = {
            Name: answer1,
            FavoriteActivity: answer2,
            FavoriteMusic: answer3,
            FavoriteMeal: answer4,
            FavoriteFood: answer5
          };

          console.log('Here is your profile' + (JSON.stringify(profile, null, 2)));
          rl.close();
        });
      });
    });
  });
});



