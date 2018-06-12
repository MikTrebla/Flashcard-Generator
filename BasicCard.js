// module.exports= BasicCard;
// var clozeCards = require('./clozecard.js');
var inquire = require('inquirer');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}


var firstPresident = new BasicCard(
    'Who was the first president of the United States?',
    'George Washington'
);

var catDog = new BasicCard(
    'Which are better? Cats or Dogs?',
    'Cats are better.'
);

var skyColor = new BasicCard(
    'What color is the sky?',
    'Blue'
);



// console.log(firstPresident.front);
// console.log(firstPresident.back);


inquire.prompt([{
        name: 'firstPresident',
        message: firstPresident.front,
        type: 'list',
        choices: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson']
    }])
    .then(function (results) {
        if (results.firstPresident === 'George Washington') {
            console.log('\n\rQ: ' + firstPresident.front + '\n\rA: ' + firstPresident.back + '\n\rYou answered: ' + results.firstPresident + '. You got it right!\n\r')
        } else {
            console.log('\n\rQ: ' + firstPresident.front + '\n\rA: ' + firstPresident.back + '\n\rYou answered: ' + results.firstPresident + '. You got it wrong! Boo hoo.\n\r')
        };

        inquire.prompt([{
                name: 'catDog',
                message: catDog.front,
                type: 'list',
                choices: ['Cats', 'Dogs']
            }])
            .then(function (results) {
                if (results.catDog === 'Cats') {
                    console.log('\n\rQ: ' + catDog.front + '\n\rA: ' + catDog.back + '\n\rYou answered: ' + results.catDog + '. You got it right!\n\r')
                } else {
                    console.log('\n\rQ: ' + catDog.front + '\n\rA: ' + catDog.back + '\n\rYou answered: ' + results.catDog + '. You got it wrong..Cats is obviously the correct answer.\n\r');
                };
                inquire.prompt([{
                        name: 'skyColor',
                        message: skyColor.front,
                        type: 'list',
                        choices: ['Green', 'White', 'Blue', 'Black']
                    }])
                    .then(function (results) {
                        if (results.skyColor === 'Blue') {
                            console.log('\n\rQ: ' + skyColor.front + '\n\rA: ' + skyColor.back + '\n\rYou answered: ' + results.skyColor + '. You got it right!\n\r')
                        } else {
                            console.log('\n\rQ: ' + skyColor.front + '\n\rA: ' + skyColor.back + '\n\rYou answered: ' + results.skyColor + '. You got it wrong! What world do you live on?\n\r')
                        };

                    });
            });
    });