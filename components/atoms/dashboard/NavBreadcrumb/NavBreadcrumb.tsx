import type { BreadcrumbProps } from "@chakra-ui/react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import type { FC } from "react";
import * as React from "react";
import { HiChevronRight } from "react-icons/hi";

export type NavBreadcrumbProps = BreadcrumbProps & {
  children: string;
};

export const NavBreadcrumb: FC<NavBreadcrumbProps> = ({
  children,
  ...props
}) => (
  <Breadcrumb
    fontSize="sm"
    {...props}
    separator={
      <Box
        as={HiChevronRight}
        color="gray.400"
        fontSize="md"
        top="2px"
        pos="relative"
      />
    }
  >
    <BreadcrumbItem color="inherit">
      <BreadcrumbLink>{children}</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
