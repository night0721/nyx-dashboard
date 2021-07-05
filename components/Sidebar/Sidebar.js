import {
    Avatar,
    Box,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode } from "react-icons/hi";
import { MdKeyboardArrowRight, MdHome } from "react-icons/md";
import AuthButton from '../AuthButton'
import Link from 'next/link'
import React from "react";
import {session} from 'next-auth/client'

export default function Sidebar({children}) {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();

    const NavItem = (props) => {
        const { icon, children, ...rest } = props;
        return (
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color={useColorModeValue("inherit", "gray.400")}
                _hover={{
                    bg: useColorModeValue("gray.100", "gray.900"),
                    color: useColorModeValue("gray.900", "gray.200"),
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="2"
                        boxSize="4"
                        _groupHover={{
                            color: 'gray.600',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue("white", "gray.800")}
            borderColor={useColorModeValue("inherit", "gray.700")}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Link href='/'>
                <Flex px="4" py="5" align="center">
                    <Text
                        fontSize="2xl"
                        ml="2"
                        color={useColorModeValue("brand.500", "white")}
                        fontWeight="semibold"
                    >
                        Cath.exe
                    </Text>
                </Flex>
            </Link>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem icon={MdHome}>Home</NavItem>
                <NavItem icon={HiCode} onClick={integrations.onToggle}>
                    Control Panel
                    <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"
                        transform={integrations.isOpen && "rotate(90deg)"}
                    />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                    <Link href='/controlpanel'>
                        <NavItem pl="12" py="2">
                            Main
                        </NavItem>
                    </Link>
                    <Link href='controlpanel/commands'>
                        <NavItem pl="12" py="2">
                            Commands
                        </NavItem>
                    </Link>
                </Collapse>
                <NavItem icon={AiFillGift}>Coming Soon</NavItem>
                <AuthButton/>
            </Flex>
        </Box>
    );
    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            <SidebarContent display={{ base: "none", md: "unset" }} />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="full"
                    px="4"
                    bg={useColorModeValue("white", "gray.800")}
                    borderBottomWidth="1px"
                    borderColor={useColorModeValue("inherit", "gray.700")}
                    h="14"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: "inline-flex", md: "none" }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size="sm"
                    />
                    <Flex w="96">
                    </Flex>

                    <Flex align="center">
                        <Icon color="gray.500" as={FaBell} cursor="pointer" />
                        <Avatar
                            ml="4"
                            size="sm"
                            name="anubra266"
                            src=''
                            cursor="pointer"
                        />
                    </Flex>
                </Flex>

                <Box as="main" p="4" background={'#1a202c'}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
