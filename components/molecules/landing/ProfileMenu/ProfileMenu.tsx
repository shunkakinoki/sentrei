import type { UseMenuButtonProps, MenuProps } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useMenuButton,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import type { VFC } from "react";

import * as React from "react";

const UserAvatar: VFC = () => (
  <Avatar
    size="sm"
    src="https://avatars.githubusercontent.com/u/39187513"
    name="Shun Kakinoki"
  />
);

const ProfileMenuButton: VFC<UseMenuButtonProps> = ({ ...props }) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      {...buttonProps}
      as="button"
      flexShrink={0}
      rounded="full"
      outline="0"
      _focus={{ shadow: "outline" }}
    >
      <Box srOnly>Open profile menu</Box>
      <UserAvatar />
    </Flex>
  );
};

type ProfileMenuProps = Omit<MenuProps, "children">;

export const ProfileMenu: VFC<ProfileMenuProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <Box ml={{ base: "3", md: "6" }}>
      <Menu {...props}>
        <ProfileMenuButton />
        <MenuList
          rounded="md"
          shadow="lg"
          py="1"
          color={mode("gray.600", "inherit")}
          fontSize="sm"
        >
          <HStack px="3" py="4">
            <UserAvatar />
            <Box lineHeight="1">
              <Text fontWeight="semibold">Shun Kakinoki</Text>
              <Text mt="1" fontSize="xs" color="gray.500">
                shunkakinoki@sentrei.com
              </Text>
            </Box>
          </HStack>
          <MenuDivider />
          <MenuItem fontWeight="medium">
            {t("common:appBar.profileMenu.dashboard")}
          </MenuItem>
          <MenuDivider />
          <MenuItem fontWeight="medium">
            {t("common:appBar.profileMenu.profile")}
          </MenuItem>
          <MenuItem fontWeight="medium">
            {t("common:appBar.profileMenu.settings")}
          </MenuItem>
          <MenuItem fontWeight="medium">
            {t("common:appBar.profileMenu.support")}
          </MenuItem>
          <MenuDivider />
          <MenuItem fontWeight="medium" color={mode("red.600", "red.300")}>
            {t("common:appBar.profileMenu.signOut")}
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
