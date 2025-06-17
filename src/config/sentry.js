import * as Sentry from "@sentry/react";
import { createRoot } from 'react-dom/client';

const SentryComponent = ({App}) => {
    Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true
    });

    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<App />);
};

export default SentryComponent;