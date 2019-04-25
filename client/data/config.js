import Raven from 'raven-js';

const sentry_key = '738b42da23544f17b5d521e8589cd167';
const sentry_app = '1446209';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
