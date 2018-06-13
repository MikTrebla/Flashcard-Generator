// module.exports= BasicCard;
// var clozeCards = require('./clozecard.js');
var inquire = require('inquirer');
var array = [];

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    // this.array = array.push(this);
}

var q1 = new BasicCard(
    'Who was the first president of the United States?',
    'George Washington'
);

var q2 = new BasicCard(
    'Which are better? Cats or Dogs?',
    'Cats'
);

var q3 = new BasicCard(
    'What color is the sky?',
    'Blue'
);

var q4 = new BasicCard(
    'What biblical figure was the founder of Judaism?',
    'Abraham'
);
var q5 = new BasicCard(
    'In the professional audio industry, what does AES refer to?',
    'Audio Engineering Society'
);

var q6 = new BasicCard(
    'What is Yankee Stadium\'s nickname?',
    'The House That Ruth Built'
);

var q7 = new BasicCard(
    'What New York City avenue divides the east side from the west side?',
    'Fifth'
);

var q8 = new BasicCard(
    'In what year did the iPhone debut on the market?',
    '2007'
);

var q9 = new BasicCard(
    'What does the abbreviation SUV stand for?',
    'Sport Utility Vehicle'
);

var q10 = new BasicCard(
    'How many candles are on a menorah?(enter a numerical value)',
    '9'
)


var i = 0;
var questionList = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// console.log(JSON.stringify(questionList[1].front, null, 2));
function flashCards() {
    if (i < questionList.length) {
        inquire.prompt([{
                name: 'flashcard',
                message: questionList[i].front,
                input: 'type'
            }])
            .then(function (results) {
                if (results.flashcard.toLowerCase() === questionList[i].back.toLowerCase()) {
                    console.log('You got it right!')
                    // console.log(questionList[i].back)
                    i++;
                } else {
                    console.log('Fail...');
                    console.log('Correct answer was : ' + questionList[i].back)
                    i++;
                }
                flashCards();
            })
    } else if (i >= questionList.length) {
        inquire.prompt([{
            name: 'replay',
            message: 'Would you like to review your flashcards again?',
            type: 'confirm'
        }]).then(function (confirm) {
            if (confirm.replay) {
                i = 0;
                flashCards();
            } else if (!confirm.replay) {
                console.log('Okay. Bye.')
            }
        })
    };
}
flashCards();
module.exports = BasicCard;
module.exports = flashCards();



// console.log(q1.front);
// console.log(q1.back);
// var correct = 0;
// // var incorrect = 0;
// inquire.prompt([{
//         name: 'q1',
//         message: q1.front,
//         type: 'input',
//     }])
//     .then(function (results) {
//         if (results.q1.toLowerCase() === 'george washington') {
//             console.log('\n\rQ: ' + q1.front + '\n\rA: ' + q1.back + '\n\rYou answered: ' + results.q1 + '. You got it right!\n\r')
//             correct++;
//         } else {
//             console.log('\n\rQ: ' + q1.front + '\n\rA: ' + q1.back + '\n\rYou answered: ' + results.q1 + '. You got it wrong! Boo hoo.\n\r')
//             incorrect++;
//         };
//         inquire.prompt([{
//                 name: 'q2',
//                 message: q2.front,
//                 type: 'input'
//             }])
//             .then(function (results) {
//                 if (results.q2.toLowerCase() === 'cats') {
//                     console.log('\n\rQ: ' + q2.front + '\n\rA: ' + q2.back + '\n\rYou answered: ' + results.q2 + '. You got it right!\n\r')
//                     correct++;

//                 } else {
//                     console.log('\n\rQ: ' + q2.front + '\n\rA: ' + q2.back + '\n\rYou answered: ' + results.q2 + '. You got it wrong..Cats is obviously the correct answer.\n\r');
//                     incorrect++;

//                 };
//                 inquire.prompt([{
//                         name: 'q3',
//                         message: q3.front,
//                         type: 'input'
//                     }])
//                     .then(function (results) {
//                         if (results.q3.toLowerCase() === 'blue') {
//                             console.log('\n\rQ: ' + q3.front + '\n\rA: ' + q3.back + '\n\rYou answered: ' + results.q3 + '. You got it right!\n\r')
//                             correct++;

//                         } else {
//                             console.log('\n\rQ: ' + q3.front + '\n\rA: ' + q3.back + '\n\rYou answered: ' + results.q3 + '. You got it wrong! What world do you live on?\n\r')
//                             incorrect++;

//                         };
//                         inquire.prompt([{
//                                 name: 'q4',
//                                 message: q4.front,
//                                 type: 'input'
//                             }])
//                             .then(function (results) {
//                                 if (results.q4.toLowerCase() === 'abraham') {
//                                     console.log('\n\rQ: ' + q4.front + '\n\rA: ' + q3.back + '\n\rYou answered: ' + results.q4 + '. You got it right!\n\r')
//                                     correct++;

//                                 } else {
//                                     console.log('\n\rQ: ' + q4.front + '\n\rA: ' + q4.back + '\n\rYou answered: ' + results.q3 + '. You got it wrong! What world do you live on?\n\r')
//                                     incorrect++;

//                                 };
//                                 inquire.prompt([{
//                                         name: 'q5',
//                                         message: q5.front,
//                                         type: 'input'
//                                     }])
//                                     .then(function (results) {
//                                         if (results.q5.toLowerCase() === 'audio engineering society') {
//                                             console.log('\n\rQ: ' + q5.front + '\n\rA: ' + q5.back + '\n\rYou answered: ' + results.q5 + '. You got it right!\n\r')
//                                             correct++;

//                                         } else {
//                                             console.log('\n\rQ: ' + q5.front + '\n\rA: ' + q5.back + '\n\rYou answered: ' + results.q5 + '. You got it wrong! What world do you live on?\n\r')
//                                             incorrect++;

//                                         };
//                                         inquire.prompt([{
//                                                 name: 'q6',
//                                                 message: q6.front,
//                                                 type: 'input'
//                                             }])
//                                             .then(function (results) {
//                                                 if (results.q6.toLowerCase() === 'the house that q6 built') {
//                                                     console.log('\n\rQ: ' + q6.front + '\n\rA: ' + q6.back + '\n\rYou answered: ' + results.q6 + '. You got it right!\n\r')
//                                                     correct++;

//                                                 } else {
//                                                     console.log('\n\rQ: ' + q6.front + '\n\rA: ' + q6.back + '\n\rYou answered: ' + results.q6 + '. You got it wrong! What world do you live on?\n\r')
//                                                     incorrect++;

//                                                 };
//                                                 inquire.prompt([{
//                                                         name: 'q7',
//                                                         message: q7.front,
//                                                         type: 'input'
//                                                     }])
//                                                     .then(function (results) {
//                                                         if (results.q7.toLowerCase() === 'fifth') {
//                                                             console.log('\n\rQ: ' + q7.front + '\n\rA: ' + q7.back + '\n\rYou answered: ' + results.q7 + '. You got it right!\n\r')
//                                                             correct++;

//                                                         } else {
//                                                             console.log('\n\rQ: ' + q7.front + '\n\rA: ' + q7.back + '\n\rYou answered: ' + results.q7 + '. You got it wrong! What world do you live on?\n\r')
//                                                             incorrect++;

//                                                         };
//                                                         inquire.prompt([{
//                                                                 name: 'q8',
//                                                                 message: q9.front,
//                                                                 type: 'input'
//                                                             }])
//                                                             .then(function (results) {
//                                                                 if (results.q8.toLowerCase() === '2007') {
//                                                                     console.log('\n\rQ: ' + q8.front + '\n\rA: ' + q8.back + '\n\rYou answered: ' + results.q8 + '. You got it right!\n\r')
//                                                                     correct++;

//                                                                 } else {
//                                                                     console.log('\n\rQ: ' + q8.front + '\n\rA: ' + q8.back + '\n\rYou answered: ' + results.q8 + '. You got it wrong! What world do you live on?\n\r')
//                                                                     incorrect++;

//                                                                 };
//                                                                 inquire.prompt([{
//                                                                         name: 'q9',
//                                                                         message: q9.front,
//                                                                         type: 'input'
//                                                                     }])
//                                                                     .then(function (results) {
//                                                                         if (results.q9.toLowerCase() === 'sport utility vehicle') {
//                                                                             console.log('\n\rQ: ' + q9.front + '\n\rA: ' + q9.back + '\n\rYou answered: ' + results.q9 + '. You got it right!\n\r')
//                                                                             correct++;

//                                                                         } else {
//                                                                             console.log('\n\rQ: ' + q9.front + '\n\rA: ' + q9.back + '\n\rYou answered: ' + results.q9 + '. You got it wrong! What world do you live on?\n\r')
//                                                                             incorrect++;

//                                                                         };
//                                                                         inquire.prompt([{
//                                                                                 name: 'q10',
//                                                                                 message: q10.front,
//                                                                                 type: 'input'
//                                                                             }])
//                                                                             .then(function (results) {
//                                                                                 if (results.q10.toLowerCase() === '9') {
//                                                                                     console.log('\n\rQ: ' + q10.front + '\n\rA: ' + q10.back + '\n\rYou answered: ' + results.q10 + '. You got it right!\n\r')
//                                                                                     correct++;

//                                                                                 } else {
//                                                                                     console.log('\n\rQ: ' + q10.front + '\n\rA: ' + q10.back + '\n\rYou answered: ' + results.q10 + '. You got it wrong! What world do you live on?\n\r')
//                                                                                     incorrect++;

//                                                                                 };
//                                                                                 console.log('You mastered ' + correct + ' flashcards out of 10.');

//                                                                             });
//                                                                     });
//                                                             });
//                                                     });
//                                             });
//                                     });
//                             });
//                     });
//             });
//     });