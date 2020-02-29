const { exec } = require('child_process');

// console.log(process.argv[2]);
const args = process.argv[2];

exec(`git add .`, (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log('Git added successfully');
	executeCommit();
});

function executeCommit() {
	exec(`git commit -m ${args}`, (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		console.log('Git Committed successfully');
		executePush();
	});
}

function executePush() {
	console.log('execute push');
}
