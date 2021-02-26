import { Announce } from "./Announce";

export default {
  component: Announce,
  title: "Atoms/Announce",
};

export const _Announce = (): JSX.Element => (
  <Announce href="/" prefix="New" title="Announcement" />
);
