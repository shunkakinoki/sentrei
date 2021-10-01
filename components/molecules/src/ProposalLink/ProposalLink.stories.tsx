import type { Story, Meta } from "@storybook/react";

import type { ProposalLinkProps } from "./ProposalLink";
import { ProposalLink } from "./ProposalLink";

export default {
  component: ProposalLink,
  title: "Molecules/ProposalLink",
} as Meta;

export const _ProposalLink: Story<ProposalLinkProps> = args => {
  return <ProposalLink {...args} />;
};

_ProposalLink.args = {
  proposalStatus: "Active",
  proposalText: "Mosh DAO",
  className: "w-2/4",
};
