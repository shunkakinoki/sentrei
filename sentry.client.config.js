import {
  ReportingObserver as ReportingObserverIntegration,
  ExtraErrorData as ExtraErrorDataIntegration,
  Debug as DebugIntegration,
  CaptureConsole as CaptureConsoleIntegration,
  Offline as OfflineIntegration,
} from "@sentry/integrations";
import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://54c981abc2b74efbb714c307c0a8329f@o388563.ingest.sentry.io/5225570",
  autoSessionTracking: true,
  tracesSampleRate: 1.0,
  release: "sentrei@" + process.env.npm_package_version,
  integrations: [
    new CaptureConsoleIntegration(),
    new DebugIntegration(),
    new ExtraErrorDataIntegration(),
    new ReportingObserverIntegration(),
    new OfflineIntegration(),
  ],
});
