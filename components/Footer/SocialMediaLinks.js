import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub } from "react-icons/fa";

export const SocialMediaLinks = props => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="https://github.com/night0721/cath.gq"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
      target="_empty"
    />
  </ButtonGroup>
);
