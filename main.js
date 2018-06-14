var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./clozecard.js')
var inquire = require('inquirer');

var basicArray = [];

var clozeArray = [];


function card(front, back) {
    var q = new BasicCard(front, back);
    basicArray.push(q);
};

function cloze(front, back) {
    var q = new ClozeCard(front, back);
    clozeArray.push(q);
};

var basic1 = card(
    'Who was the first president of the United States?',
    'George Washington'
);
var basic2 = card(
    'Which are better? Cats or Dogs?', 'Cats'
);
var basic3 = card(
    'What color is the sky?', 'Blue',
);
var basic4 = card(
    'What biblical figure was the founder of Judaism?', 'Abraham',
);
var basic5 = card(
    'In the professional audio industry, what does AES refer to?', 'Audio Engineering Society',
);
var basic6 = card(
    'What is Yankee Stadium\'s nickname?', 'The House That Ruth Built',
);
var basic7 = card(
    'What New York City avenue divides the east side from the west side?', 'Fifth'
);
var basic8 = card(
    'In what year did the iPhone debut on the market?', '2007'
);
var basic9 = card(
    'What does the abbreviation SUV stand for?', 'Sport Utility Vehicle'
);
var basic10 = card(
    'How many candles are on a menorah?(enter a numerical value)', '9'
);



var cloze1 = cloze(
    'George Washington was the first president of the United States.', 'George Washington'
);
var cloze2 = cloze(
    'Cats are better than dogs', 'Cats'
);
var cloze3 = cloze(
    'The sky is blue', 'blue'
);
var cloze4 = cloze(
    'Abraham is the biblical figure and founder of Judaism.', 'Abraham'
);
var cloze5 = cloze(
    'In the professional audio industry, AES refers to Audio Engineering Society.', 'Audio Engineering Society'
);
var cloze6 = cloze(
    'The Yankee Stadium\'s nickname is The House That Ruth Built.', 'The House That Ruth Built'
);
var cloze7 = cloze(
    'In New York City, Fifth avenue divides the east side from the west side.', 'Fifth'
);
var cloze8 = cloze(
    'The iPhone debuted on the market in 2007.', '2007'
);
var cloze9 = cloze(
    'The abbreviation SUV stands for Sport Utility Vehicle?', 'Sport Utility Vehicle'
);
var cloze10 = cloze(
    'There are 9 candles on a menorah. (enter a numerical value)', '9'
);
// console.log(clozeArray);

var i = 0;

function basicFunction() {
    if (i < basicArray.length) {
        inquire.prompt([{
                name: 'flashcard',
                message: basicArray[i].front,
                input: 'type'
            }])
            .then(function (results) {
                if (results.flashcard.toLowerCase() === basicArray[i].back.toLowerCase()) {
                    console.log('You got it right!')
                    // console.log(questionList[i].back)
                    i++;
                } else {
                    console.log('Fail...');
                    console.log('Correct answer was : ' + basicArray[i].back)
                    i++;
                }
                basicFunction();
            });
    } else if (i >= basicArray.length) {
        inquire.prompt([{
            name: 'replay',
            message: 'Would you like to review your flashcards again?',
            type: 'confirm'
        }]).then(function (confirm) {
            if (confirm.replay) {
                i = 0;
                basicOrCloze();
            } else if (!confirm.replay) {
                console.log('Okay. Bye.')
            };
        });
    };
};

function clozeFunction() {
    if (i < clozeArray.length) {
        inquire.prompt([{
                name: 'flashcard',
                message: clozeArray[i].partial,
                type: 'input'
            }])
            .then(function (results) {
                if (results.flashcard.toLowerCase() === clozeArray[i].cloze.toLowerCase()) {
                    console.log('You got it right!')
                    i++;
                } else {
                    console.log('Fail...');
                    console.log('Correct answer was : ' + clozeArray[i].cloze)
                    i++;
                }
                clozeFunction();
            })
    } else if (i >= clozeArray.length) {
        inquire.prompt([{
            name: 'replay',
            message: 'Would you like to review your clozeCards again?',
            type: 'confirm'
        }]).then(function (confirm) {
            if (confirm.replay) {
                i = 0;
                basicOrCloze();
            } else if (!confirm.replay) {
                console.log('Okay. Bye.')
            };
        });
    };
};

var mixedArray = basicArray.concat(clozeArray)

function shuffleArray(mixedArray) {
    var currentIndex = mixedArray.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = mixedArray[currentIndex];
        mixedArray[currentIndex] = mixedArray[randomIndex];
        mixedArray[randomIndex] = temporaryValue;
    }
    return mixedArray;
};
mixedArray = shuffleArray(mixedArray);
// console.log(mixedArray[0]);

function bothCards() {
    if (i < mixedArray.length && Object.keys(mixedArray[i]).length <= 2) {
        inquire.prompt([{
                name: 'basic',
                message: mixedArray[i].front,
                type: 'input'
            }])
            .then(function (results) {
                if (results.basic.toLowerCase() === mixedArray[i].back.toLowerCase()) {
                    console.log('You got it right!')
                    i++;
                } else {
                    console.log('Fail...');
                    console.log('Correct answer was : ' + mixedArray[i].back)
                    i++;
                }
                bothCards();
            })
    } else if (i < mixedArray.length && Object.keys(mixedArray[i]).length > 2) {
        inquire.prompt([{
            name : 'cloze',
            message : mixedArray[i].partial,
            type : 'input'
        }])
        .then(function(results) {
            if (results.cloze.toLowerCase() === mixedArray[i].cloze.toLowerCase()) {
                console.log('You got it right!')
                i++;
            } else {
                console.log('Fail...');
                console.log('Correct answer was : ' + mixedArray[i].cloze)
                i++;
            }
            bothCards();
        })
    } else if (i >= mixedArray.length) {
        inquire.prompt([{
            name: 'replay',
            message: 'Would you like to review again?',
            type: 'confirm'
        }]).then(function (confirm) {
            if (confirm.replay) {
                i = 0;
                basicOrCloze();
            } else if (!confirm.replay) {
                console.log('Okay. Bye.')
            };
        });
    }
}

function basicOrCloze() {
    inquire.prompt([{
            type: 'list',
            name: 'choice',
            message: 'Would you like to view basic flashcards or cloze cards or both?',
            choices: ['Basic', 'Cloze', 'Both']
        }])
        .then(function (results) {
            console.log(results.choice);
            if (results.choice === 'Basic') {
                //start basic game
                basicFunction();
            } else if (results.choice === 'Cloze') {
                //start Cloze game
                clozeFunction();
            } else if (results.choice === 'Both') {
                bothCards();
            }
        })
};
basicOrCloze();