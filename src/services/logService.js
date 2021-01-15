// import Raven from "raven-js";

function init() {
  // Raven.config("https://dsdfsdf@sentry.io/12345", {
  //   release: "1.0.0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  // Raven.captureException(error);
  console.error(error);
}

export default {
  init,
  log
};
