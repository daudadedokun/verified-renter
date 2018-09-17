import Raven from "raven-js";

function init() {
  Raven.config("https://60c60710d0f2404199e0b04fdbfa5357@sentry.io/1275924", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}
export default {
  init,
  log
};
