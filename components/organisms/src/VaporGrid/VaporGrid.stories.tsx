import { Canvas } from "@react-three/fiber";
import type { Story, Meta } from "@storybook/react";

import { VaporGrid } from "./VaporGrid";

export default {
  component: VaporGrid,
  title: "Organisms/VaporGrid",
} as Meta;

export const _VaporGrid: Story = () => {
  return (
    <Canvas>
      <VaporGrid />
    </Canvas>
  );
};
