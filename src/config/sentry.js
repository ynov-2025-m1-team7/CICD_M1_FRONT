import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [],
  tracePropagationTargets: ["localhost", process.env.REACT_APP_API_URL],
  sendDefaultPii: true,
});