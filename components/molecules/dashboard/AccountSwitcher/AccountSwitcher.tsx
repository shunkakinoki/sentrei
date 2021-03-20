import type { FlexProps } from "@chakra-ui/react";
import {
  Box,
  Flex,
  HStack,
  Img,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
  useMenuButton,
} from "@chakra-ui/react";
import { SOCIAL_LINKS } from "@sentrei/const";
import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import * as React from "react";
import { HiSelector } from "react-icons/hi";

export type AccountSwitcherButtonProps = FlexProps;

const AccountSwitcherButton: FC<AccountSwitcherButtonProps> = props => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="gray.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: "gray.600" }}
      _focus={{ shadow: "outline" }}
    >
      <HStack flex="1" spacing="3">
        <Img
          w="8"
          h="8"
          rounded="md"
          objectFit="cover"
          src={SOCIAL_LINKS.AVATAR}
          alt="Avatar"
        />
        <Box textAlign="start">
          <Box isTruncated fontWeight="semibold">
            Sentrei
          </Box>
          <Box fontSize="xs" color="gray.400">
            ID 123343
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  );
};

export const AccountSwitcher = () => {
  const { t } = useTranslation();

  return (
    <Menu>
      <AccountSwitcherButton />
      <MenuList
        shadow="lg"
        py="4"
        color={useColorModeValue("gray.600", "gray.200")}
        px="3"
      >
        <Text fontWeight="medium" mb="2">
          {SOCIAL_LINKS.EMAIL}
        </Text>
        <MenuOptionGroup defaultValue="chakra-ui">
          <MenuItemOption value="chakra-ui" fontWeight="semibold" rounded="md">
            Sentrei
          </MenuItemOption>
          <MenuItemOption value="careerlyft" fontWeight="semibold" rounded="md">
            gan.dev
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem rounded="md">
          {t("dashboard:sidebar.accountSwitcher.settings")}
        </MenuItem>
        <MenuItem rounded="md">
          {t("dashboard:sidebar.accountSwitcher.account")}
        </MenuItem>
        <MenuDivider />
        <MenuItem rounded="md">
          {t("dashboard:sidebar.accountSwitcher.signOut")}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
