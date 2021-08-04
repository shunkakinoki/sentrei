import * as snippet from "@segment/snippet";

export const renderSnippet = (): string => {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_SEGMENT_ID,
    load: true,
    page: true,
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return snippet.min(opts);
};

export const pageView = (
  category?: string,
  name?: string,
  properties?: Record<string, unknown>,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.page(category, name, properties, options, callback);
  }
};

export const identifyUser = (
  userId: string,
  traits?: Record<string, unknown>,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.identify(userId, traits, options, callback);
  }
};

export const recordGroup = (
  groupId: string,
  traits?: Record<string, unknown>,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.group(groupId, traits, options, callback);
  }
};

export const trackEvent = (
  event: string,
  properties?: Record<string, unknown>,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.track(event, properties, options, callback);
  }
};

export const trackForm = (
  elements: JQuery | Element[] | Element,
  event: string | { (elm: Element): string },
  properties?:
    | Record<string, unknown>
    | { (elm: Element): Record<string, unknown> },
): void => {
  if (typeof window !== "undefined") {
    window.analytics.trackForm(elements, event, properties);
  }
};

export const trackLink = (
  elements: JQuery | Element[] | Element,
  event: string | { (elm: Element): string },
  properties?:
    | Record<string, unknown>
    | { (elm: Element): Record<string, unknown> },
): void => {
  if (typeof window !== "undefined") {
    window.analytics.trackLink(elements, event, properties);
  }
};
