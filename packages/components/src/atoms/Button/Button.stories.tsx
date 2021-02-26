import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
};

export const _Button = (): JSX.Element => (
  <Button onClick={action("clicked")}>Primary</Button>
);
