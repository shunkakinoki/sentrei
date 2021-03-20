import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  useBoolean,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { NavBreadcrumb } from "@sentrei/atoms/dashboard/NavBreadcrumb";
import { NavGroup } from "@sentrei/atoms/dashboard/NavGroup";
import { NavItem } from "@sentrei/atoms/dashboard/NavItem";
import { AccountSwitcher } from "@sentrei/molecules/dashboard/AccountSwitcher";
import { MobileMenuButton } from "@sentrei/molecules/dashboard/MobileMenuButton";
import { SearchInput } from "@sentrei/molecules/dashboard/SearchInput";

import * as React from "react";
import { useEffect } from "react";
import type { FC } from "react";
import {
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCircle,
  BiWallet,
} from "react-icons/bi";

const ScrollArea = (props: BoxProps) => (
  <Box
    overflowY="auto"
    height="80vh"
    minH="px"
    maxH="full"
    {...props}
    sx={{
      "&::-webkit-scrollbar-track": {
        bg: "transparent",
      },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-thumb": {
        bg: mode("blue.600", "gray.700"),
        borderRadius: "20px",
      },
    }}
  />
);

const useMobileMenuState = () => {
  const [isOpen, actions] = useBoolean();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  useEffect(() => {
    if (isMobile == false) {
      actions.off();
    }
  }, [isMobile, actions]);
  return { isOpen, ...actions };
};

export const DashboardContainer: FC = ({ children }) => {
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <Flex
      height="100vh"
      bg={mode("blue.800", "gray.800")}
      overflow="hidden"
      sx={{ "--sidebar-width": "256px" }}
    >
      <Box
        as="nav"
        display="block"
        flex="1"
        width="var(--sidebar-width)"
        left="0"
        py="5"
        px="3"
        color="gray.200"
        position="fixed"
      >
        <Box fontSize="sm" lineHeight="tall">
          <AccountSwitcher />
          <ScrollArea pt="5" pb="6">
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem active icon={<BiHome />} label="Get Started" />
                <NavItem icon={<BiCommentAdd />} label="Inbox" />
              </Stack>
              <NavGroup label="Backend">
                <NavItem icon={<BiCreditCard />} label="Analytics" />
                <NavItem icon={<BiUserCircle />} label="Customers" />
                <NavItem icon={<BiWallet />} label="Authentication" />
                <NavItem icon={<BiRedo />} label="Endpoints" />
              </NavGroup>
              <NavGroup label="Account">
                <NavItem icon={<BiNews />} label="Payment Pages" />
                <NavItem icon={<BiEnvelope />} label="Invoices" />
                <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
                <NavItem icon={<BiRecycle />} label="Subsription" />
              </NavGroup>
            </Stack>
          </ScrollArea>
        </Box>
      </Box>
      <Box
        flex="1"
        p={{ base: "0", md: "6" }}
        marginStart={{ md: "var(--sidebar-width)" }}
        position="relative"
        left={isOpen ? "var(--sidebar-width)" : "0"}
        transition="left 0.2s"
      >
        <Box
          maxW="2560px"
          bg={mode("white", "gray.700")}
          height="100%"
          pb="6"
          rounded={{ md: "lg" }}
        >
          <Flex direction="column" height="full">
            <Flex
              w="full"
              py="4"
              justify="space-between"
              align="center"
              px="10"
            >
              <Flex align="center" minH="8">
                <MobileMenuButton isOpen={isOpen} onClick={toggle} />
                <NavBreadcrumb>Sentrei</NavBreadcrumb>
              </Flex>
              <SearchInput />
            </Flex>
            <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
              <Heading size="md" fontWeight="extrabold" mb="6">
                Sentrei
              </Heading>
              <Box flex="1" borderWidth="3px" borderStyle="dashed" rounded="xl">
                {children}
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
