import Link, { LinkProps } from "next/link";
import { FC } from "react";

import { Button, ButtonProps } from "@sentrei/atoms";

export type ButtonLinkProps = LinkProps & ButtonProps;

export const ButtonLink: FC<ButtonLinkProps> = ({ href, ...rest }) => {
  return (
    <Link href={href} passHref={true}>
      <Button Component="a" {...rest} />
    </Link>
  );
};
