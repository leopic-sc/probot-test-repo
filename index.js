// Deployments API example
// See: https://developer.github.com/v3/repos/deployments/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
	// Your code here
	app.log.info("Yay, the app was loaded!");
	app.onAny(async (context) => {
			app.log.info(context.payload);
			const data = { owner: context.payload.repo.owner, repo: context.payload.repo, pull_number: 3, per_page: 100};
			const files = await context.octokit.pulls.listFiles(data);
			app.log.info(files);
			const changedFiles = files.data.map((f) => f.filename)
			app.log.info(changedFiles);
			}
		 );

	// To get your app running against GitHub, see:
	// https://probot.github.io/docs/development/
};

