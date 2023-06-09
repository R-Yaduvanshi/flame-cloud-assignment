import React from "react";
import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import downIcon from "../assets/Icon_down.svg";
import discord from "../assets/discord_logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const handleRoute = (route) => {
    navigate(route);
  };
  return (
    <Flex w="100%" bg="#FFFFFF" zIndex={"1000"}>
      <Flex
        w={["90%", "80%", "90%", "85%", "90%"]}
        m="auto"
        flexDir={"row"}
        alignItems="center"
        pt={["20px", "20px", "20px", "20px", "20px"]}
      >
        <Flex
          m="auto"
          pb={["20px", "20px", "20px", "20px", "20px"]}
          borderBottom="1px solid #D9D8D6"
        >
          {/* Company name and logo container */}
          <Flex
            flexDir={"row"}
            cursor="pointer"
            alignItems={"center"}
            mr="1.9rem"
          >
            <Image
              src={logo}
              alt="Logo"
              mr={["1.76px", "5.76px", "8.76px", "8.76px", "5.76px"]}
              w={["30px", "30px", "20px", "20px", "40px"]}
              h={["30px", "30px", "20px", "20px", "40px"]}
              onClick={() => handleRoute("/")}
            />
            <Text
              color={"#111822"}
              fontSize={["16px", "16px", "20px", "20px", "24px"]}
              fontWeight={"600"}
              lineHeight={["31px", "31px", "31px", "31px", "31px"]}
              onClick={() => handleRoute("/")}
            >
              CreativeProxies
            </Text>
          </Flex>

          {/* links container */}
          <Flex
            flexDir={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            display={["none", "none", "none", "flex", "flex"]}
            mr="2rem"
          >
            <Flex mr={["130px", "130px", "130px", "100px", "120px"]}>
              <Text
                letterSpacing={"-0.02em"}
                color={"#111822"}
                fontSize="15px"
                mr={["30px", "30px", "30px", "20px", "25px"]}
                fontWeight={"400"}
                lineHeight="19.2px"
              >
                Pricing
              </Text>
              <Flex
                flexDir={"row"}
                alignItems="center"
                mr={["30px", "30px", "30px", "20px", "25px"]}
              >
                <Text
                  letterSpacing={"-0.02em"}
                  color={"#111822"}
                  fontSize="15px"
                  mr="5px"
                  fontWeight={"400"}
                  lineHeight="19.2px"
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
              <Flex
                flexDir={"row"}
                alignItems="center"
                mr={["30px", "30px", "30px", "20px", "25px"]}
              >
                <Text
                  color={"#111822"}
                  fontSize="15px"
                  mr="5px"
                  fontWeight={"400"}
                  lineHeight="19.2px"
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
                mr={["30px", "30px", "30px", "20px", "25px"]}
                color={"#111822"}
                fontSize="13px"
                fontWeight={"400"}
                lineHeight="19.2px"
              >
                FAQs
              </Text>
              <Text
                color={"#111822"}
                fontSize="15px"
                fontWeight={"400"}
                lineHeight="19.2px"
              >
                Blogs
              </Text>
            </Flex>
            <Flex
              flexDir={"row"}
              alignItems="center"
              display={["none", "none", "none", "none", "flex"]}
            >
              <Image src={discord} alt="Logo" mr="5.7px" />
              <Text
                color={"#5865F2"}
                fontSize="15px"
                fontWeight={"500"}
                lineHeight="19px"
              >
                Join Discord
              </Text>
            </Flex>
            <Divider
              display={["none", "none", "none", "none", "initial"]}
              mx={["22px", "22px", "22px", "2px", "18px"]}
              orientation="vertical"
              border="1px"
              borderColor={"#D9D8D6"}
              h="30px"
            />
            <Text
              color={"#111822"}
              fontSize="15px"
              fontWeight={"400"}
              lineHeight="19.2px"
            >
              Login
            </Text>
          </Flex>
          {/* Get Started link div */}
          <Flex>
            <Flex
              py={["10px", "10px", "6px", "6px", "12px"]}
              px={["12px", "12px", "15px", "22px", "22px"]}
              cursor={"pointer"}
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              onClick={() => handleRoute("/proxy")}
              bg="#077BFF"
              borderRadius={"5px"}
            >
              <Text
                color={"#fff"}
                fontSize={["13px", "13px", "16px", "16px", "16px"]}
                fontWeight={["400", "400", "600", "600", "600"]}
                lineHeight={["15.2px", "15.2px", "19.2px", "19.2px", "19.2px"]}
              >
                Get Started
              </Text>
            </Flex>

            {/* Hamburger */}
            <Flex
              ml="6px"
              display={["flex", "flex", "flex", "none", "none"]}
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              bg="rgba(7, 123, 255, 0.25)"
              px="8px"
              py="7px"
              borderRadius={"5px"}
            >
              <GiHamburgerMenu color="#077BFF" fontSize={"17px"} m="0" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
