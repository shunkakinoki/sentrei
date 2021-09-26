import type { LinkProps } from "next/link";
import Link from "next/link";
import type { FC } from "react";

import type { ButtonProps } from "@sentrei/atoms";
import { Button } from "@sentrei/atoms";

export type ButtonLinkProps = LinkProps & ButtonProps;

export const ButtonLink: FC<ButtonLinkProps> = ({ href, ...rest }) => {
  return (
    <Link href={href} passHref={true}>
      <Button Component="a" {...rest} />
    </Link>
  );
};
