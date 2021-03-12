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
	app.log.info("vamos a ver...");
      // app.log.info(context.payload);
      app.log.info(Object.keys(context.octokit));
    }
  );

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

