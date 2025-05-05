import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";
Sentry.init({
    dsn: process.env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.replayIntegration({
        // Additional SDK configuration goes in here, for example:
        maskAllText: true,
        blockAllMedia: true,
      }),
      Sentry.browserTracingIntegration(),
    ],
    tracePropagationTargets: [
        "localhost",
        "vengage.ai",
        "staging.vengage.ai",
        "olap.vengage.ai"
    ],
    tracesSampleRate: 1.0,
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0,
    // // If the entire session is not sampled, use the below sample rate to sample
    // // sessions when an error occurs.
    replaysOnErrorSampleRate: 0,
  
  });

// const SENTRY_DSN = process.env.VITE_SENTRY_DSN;
// if (SENTRY_DSN) {
//     console.log("SENTRY_DSN is set");
    
    
    
// } else {
//     console.log("SENTRY_DSN is not set");
// }

const webbot_uid = document.getElementById("vengage-uid").innerText;
ReactDOM.createRoot(document.getElementById("vengage-root")).render(
    <App webbot_uid={webbot_uid} />
);
