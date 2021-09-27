import type { Story, Meta } from "@storybook/react";

import { NavBar } from "./NavBar";
import type { NavBarProps } from "./NavBar";

export default {
  component: NavBar,
  title: "Organisms/NavBar",
} as Meta;

export const _NavBar: Story<NavBarProps> = args => {
  return <NavBar {...args} />;
};

_NavBar.args = {
  logoSrc:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  items: [
    { url: "https://sentrei.com", title: "DAO" },
    { url: "https://sentrei.com", title: "Docs" },
    { url: "https://sentrei.com", title: "Playground" },
    {
      showModal: true,
      title: "Modal",
      modalContent: (
        <>
          <p className="text-white">Hello world.</p>
        </>
      ),
    },
  ],
};
