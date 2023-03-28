import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.svg";
import downIcon from "../assets/Icon_down.svg";
import discord from "../assets/discord_logo.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <Box w="100%">
      <Container
        display="flex"
        maxW="85%"
        justifyContent="space-evenly"
        borderBottom="1px"
      >
        {/* Company name and logo container */}
        <Flex gap="9.26px" justifyContent="center" alignItems="center">
          <Image
            src={logo}
            alt="company logo"
            h={["53.25px", "53.25px", "53.25px", "25.06px", "25.06px"]}
            w={["53.24px", "53.24px", "53.24px", "25.06px", "25.06px"]}
          />
          <Text
            color="#111822"
            fontStyle="normal"
            fontWeight="600"
            fontSize={["55.2379px", "55.2379px", "55.2379px", "26px", "26px"]}
            lineHeight={["55.2379px", "55.2379px", "55.2379px", "31px", "31px"]}
            letterSpacing="-0.02em"
          >
            CreativeProxies
          </Text>
        </Flex>
        {/* links container */}
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="30px"
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Text
            color="#111822"
            textAlign="center"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            letterSpacing="-0.02em"
          >
            Pricing
          </Text>
          <Flex justifyContent="center" alignItems="center" gap="8px">
            <Text
              color="#111822"
              textAlign="center"
              fontStyle="normal"
              fontWeight="400"
              fontSize="16px"
              lineHeight="19px"
              letterSpacing="-0.02em"
            >
              Explore Tools
            </Text>
            <Image
              src={downIcon}
              color="#111822"
              w="9.5px"
              h="5.5px"
              alt="down icon"
            />
          </Flex>
          <Flex justifyContent="center" alignItems="center" gap="8px">
            <Text
              color="#111822"
              textAlign="center"
              fontStyle="normal"
              fontWeight="400"
              fontSize="16px"
              lineHeight="19px"
              letterSpacing="-0.02em"
            >
              Resources
            </Text>
            <Image
              src={downIcon}
              color="#111822"
              w="9.5px"
              h="5.5px"
              alt="down icon"
            />
          </Flex>
          <Text
            color="#111822"
            textAlign="center"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            letterSpacing="-0.02em"
          >
            FAQs
          </Text>
          <Text
            color="#111822"
            textAlign="center"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            letterSpacing="-0.02em"
          >
            Blogs
          </Text>
        </Flex>
        {/* Discord container */}
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="5.67px"
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Image src={discord} alt="discord logo" cursor="pointer" />
          <Text
            color="#5865F2"
            fontStyle="normal"
            fontWeight="500"
            fontSize="16px"
            lineHeight="19px"
            letterSpacing="-0.02em"
            cursor="pointer"
          >
            Join Discord
          </Text>
          <Divider
            mx={["22px", "22px", "22px", "2px", "22px"]}
            orientation="vertical"
            border="1px"
            borderColor={"#D9D8D6"}
            h="30px"
          />
          <Text
            color="#111822"
            textAlign="center"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            letterSpacing="-0.02em"
            cursor="pointer"
          >
            Login
          </Text>
        </Flex>
        {/* Get Started link div */}
        <Box display="flex" flexDir="row" gap="11px" p="10px">
          <Flex
            py="10px"
            px={["18.89px", "18.89px", "18.89px", "22px", "22px"]}
            cursor={"pointer"}
            flexDir={"row"}
            justifyContent="center"
            alignItems="center"
            bg="#077BFF"
            borderRadius={"5px"}
          >
            <Text
              color={"#FFFFFF"}
              fontSize={["29.1024px", "29.1024px", "29.1024px", "16px", "16px"]}
              fontWeight="600"
              lineHeight={["35px", "35px", "35px", "19px", "19px"]}
              letterSpacing="-0.02em"
              //   p="10px"
            >
              Get Started
            </Text>
          </Flex>

          {/* Hamburger */}
          <Flex
            display={["flex", "flex", "flex", "none", "none"]}
            justifyContent="center"
            alignItems="center"
            background="rgba(7, 123, 255, 0.25)"
            w="71px"
            h="71px"
            borderRadius="8.52px"
          >
            <Image src={menu} alt="menu" w="33.64px" h="24.96px" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
