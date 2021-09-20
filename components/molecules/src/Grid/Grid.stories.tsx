import type { Story, Meta } from "@storybook/react";

import { Canvas } from "react-three-fiber";

import { Grid } from "./Grid";

export default {
  component: Grid,
  title: "Atoms/Grid",
} as Meta;

export const _Grid: Story = () => {
  return (
    <Canvas>
      <Grid />
    </Canvas>
  );
};
