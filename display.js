const cfonts = require('cfonts');

const displayBigText = function(params) {

    cfonts.say('AKONDRO', {
        font: 'block',              // define the font face
        align: 'left',              // define text alignment
        colors: ['system'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
        gradient: false,            // define your two gradient colors
        independentGradient: false, // define if you want to recalculate the gradient for each new line
        transitionGradient: false,  // define if this is a transition between colors directly
        env: 'node'                 // define the environment cfonts is being executed in
    });
    if (params?.message) {
        console.log('❌️❌️ Invalid params verify and try again.')
        console.log('')
    }
    console.log('akondro ')
    console.log('\t add <file or dir > This command add current file or directory.');
    console.log('\t push [-u] This command push all modified file to cloud.');
    console.log('\t pull [--all] Get all file and restore it to the current directory.');
    console.log('\t -h [--help] To print this message');

    console.log('')
    console.log('')
}
module.exports = {
    displayBigText
}