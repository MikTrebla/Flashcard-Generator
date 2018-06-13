// module.exports = ClozeCard;
var inquire = require('inquirer');
// var basicCard = require('./basiccard.js');

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, '...');

}
//try to use string.replace('string i want to replace', 'string I want to insert');

var q1 = new ClozeCard(
    'George Washington was the first president of the United States.',
    'George Washington'
);
// console.log(q1.partial);
var q2 = new ClozeCard(
    'Cats are better than dogs',
    'Cats'
);

var q3 = new ClozeCard(
    'The sky is blue',
    'blue'
);

var q4 = new ClozeCard(
    'Abraham is the biblical figure and founder of Judaism.',
    'Abraham'
);
var q5 = new ClozeCard(
    'In the professional audio industry, AES refers to Audio Engineering Society.',
    'Audio Engineering Society'
);

var q6 = new ClozeCard(
    'The Yankee Stadium\'s nickname is The House That Ruth Built.',
    'The House That Ruth Built'
);

var q7 = new ClozeCard(
    'In New York City, Fifth avenue divides the east side from the west side.',
    'Fifth'
);

var q8 = new ClozeCard(
    'The iPhone debuted on the market in 2007.',
    '2007'
);

var q9 = new ClozeCard(
    'The abbreviation SUV stands for Sport Utility Vehicle?',
    'Sport Utility Vehicle'
);

var q10 = new ClozeCard(
    'There are 9 candles on a menorah. (enter a numerical value)',
    '9'
)

console.log(q1.partial);

var i = 0;
var questionList = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// console.log(JSON.stringify(questionList[1].front, null, 2));
function clozeCards() {
    if (i < questionList.length) {
        inquire.prompt([{
                name: 'flashcard',
                message: questionList[i].partial,
                input: 'type'
            }])
            .then(function (results) {
                if (results.flashcard.toLowerCase() === questionList[i].cloze.toLowerCase()) {
                    console.log('You got it right!')
                    // console.log(questionList[i].back)
                    i++;
                } else {
                    console.log('Fail...');
                    console.log('Correct answer was : ' + questionList[i].cloze)
                    i++;
                }
                clozeCards();
            })
    } else if (i >= questionList.length) {
        inquire.prompt([{
            name: 'replay',
            message: 'Would you like to review your clozeCards again?',
            type: 'confirm'
        }]).then(function (confirm) {
            if (confirm.replay) {
                i = 0;
                clozeCards();
            } 
            else if (!confirm.replay) {
                console.log('Okay. Bye.')
            }
        })
    };
};
clozeCards();

module.exports = ClozeCard;
module.exports = clozeCards();