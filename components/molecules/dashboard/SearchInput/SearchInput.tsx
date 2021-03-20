import type { InputGroupProps, InputProps } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import type { FC } from "react";
import * as React from "react";
import { BsSearch } from "react-icons/bs";

export type SearchInputProps = InputProps & { rootProps?: InputGroupProps };

export const SearchInput: FC<SearchInputProps> = ({ rootProps, ...rest }) => {
  return (
    <InputGroup
      maxW="2xs"
      size="sm"
      variant="filled"
      display={{ base: "none", lg: "block" }}
      {...rootProps}
    >
      <InputLeftElement color="gray.400" pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        {...rest}
        placeholder="Search"
        rounded="md"
        _placeholder={{ color: "gray.400" }}
      />
    </InputGroup>
  );
};
