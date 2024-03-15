const { argv } = require('node:process');
const { updateFiles } = require('./actions/pushAction');
const { displayBigText } = require('./display')
let command,
	params,
	remoteConfig,
	localeConfig,
	actualdate;

actualdate = Date.now();

if (undefined == argv[2])
{
	command = 'help'
}

// print process.argv
argv.forEach((val, index) => {
	// console.log(`${index}: ${val}`);

	if (val == 'add') {
		command = 'add'
		if (undefined != argv[3])
			params = argv[3]
	}

	if (val == 'push') {
		command = 'push'
	}

	if (val == '-h' || val == '--help') {
		command = 'help'
	}

	if (val == 'pull') {
		command = 'pull';
	}
});

if (undefined == command)
{
	displayBigText({message: 'no-command-found'})
}

if ('help' == command) {
	displayBigText()
}

if ('add' == command && undefined == params)
{
	displayBigText({cmd: 'add', message: 'no-file'})
}