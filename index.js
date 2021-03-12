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
			//app.log.info(context.payload);
			// app.log.info(context.payload.pull_request);
			let pr = context.payload.pull_request;
			const data = { owner: pr.base.repo.owner.login, repo: pr.base.repo.name, pull_number: pr.number, per_page: 100};
			const files = await context.octokit.pulls.listFiles(data);
			// app.log.info(files);
			const changedFiles = files.data.filter(a => a.filename.startsWith('nested/'));
			app.log.info(changedFiles);
			const addedFileCount = changedFiles.filter(a => a.status === "added").length;
			const removedFileCount = changedFiles.filter(a => a.status === "removed").length;
			const editedFileCount = changedFiles.filter(a => a.status === "edited").length;
			app.log.info(`added: ${addedFileCount}, removedFileCount: ${removedFileCount}, editedFileCount: ${editedFileCount}`);
			}
		 );

	// To get your app running against GitHub, see:
	// https://probot.github.io/docs/development/
};

