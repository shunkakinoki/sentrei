import clsx from "clsx";
import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import type { FC, ReactNode } from "react";

//See: https://www.w3schools.com/tags/att_a_target.asp
export const TargetAttribute = {
  BLANK: "_blank",
  SELF: "_self",
  PARENT: "_parent",
  TOP: "_top",
};

export interface LinkProps extends Partial<NextLinkProps> {
  to: string;
  children?: ReactNode;
  className?: string;
  target?: string;
}

//NextLink has `a` tag not custom tag, so no need for `passHref`.
export const Link: FC<LinkProps> = props => {
  const { to, children, className, target = TargetAttribute.BLANK } = props;
  return (
    <NextLink href={to}>
      <a
        className={clsx(
          "text-blue-600 visited:text-purple-600 hover:text-blue-800 underline",
          className,
        )}
        target={target}
      >
        {children}
      </a>
    </NextLink>
  );
};
