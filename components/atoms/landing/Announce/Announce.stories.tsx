import * as React from "react";

import { Announce } from "./Announce";

export default {
  component: Announce,
  title: "Atoms/Landing/Announce",
};

export const _InternalLinkAnnounce = (): JSX.Element => (
  <Announce href="/" prefix="New" title="Announcement" />
);

export const _ExternalLinkAnnounce = (): JSX.Element => (
  <Announce
    isExternal
    href="https://demo.sentrei.com"
    prefix="New"
    title="Announcement"
  />
);
