import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Button",
};

export const PrimaryButton = (): JSX.Element => (
  <Button onClick={action("clicked")}>Primary</Button>
);
