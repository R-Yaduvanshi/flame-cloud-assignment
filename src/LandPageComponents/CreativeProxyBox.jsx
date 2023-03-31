import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import Rating from "./Rating";
const CreativeProxyBox = () => {
  return (
    <Flex
      flexDir={"column"}
      w={["100%", "100%", "100%", "100%", "100%"]}
      m="auto"
      mt={["100.86px", "100.86px", "95px", "95px", "95px"]}
      pt="95px"
      justifyContent="center"
      px={["5", "5", "9", "9", "9"]}
    >
      <Box w="100%" display={"flex"} justifyContent={"center"}>
        <Text
          fontWeight={"600"}
          fontSize={["13px", "13px", "16px", "16px", "16px"]}
          lineHeight={["21px", "21px", "19px", "19px", "19px"]}
          opacity="0.5"
          color={"#111822"}
          textAlign={"center"}
          w={["70%"]}
        >
          WELCOME TO CREATIVE PROXIES
        </Text>
      </Box>
      <Box w="100%" display={"flex"} justifyContent={"center"}>
        <Text
          fontWeight={"600"}
          mb="20px"
          color="#111822"
          fontSize={["33px", "33px", "56px", "56px", "56px"]}
          lineHeight={["42.2px", "42.2px", "57.2px", "67.2px", "67.2px"]}
          textAlign={"center"}
          w={["83%", "83%", "83%", "83%", "60%"]}
        >
          We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the{" "}
          <span style={{ color: "#16D113" }}>Most Reliable</span> Proxy Service
          since 2020
        </Text>
      </Box>

      <Text
        fontWeight={"600"}
        textAlign="center"
        w={["80%", "80%", "85%", "80%", "60%"]}
        m="auto"
        fontSize={["13px", "13px", "22px", "22px", "22px"]}
        opacity="0.5"
        color={"#111822"}
        lineHeight={["20.4px", "20.4px", "26.4px", "26.4px", "26.4px"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
      <Flex
        flexDir={"row"}
        w={["250px", "250px", "250px", "240px", "230px"]}
        bg="#077BFF"
        justifyContent={"center"}
        py="12.5px"
        alignItems={"center"}
        borderRadius={"10px"}
        m="auto"
        mt="20px"
        cursor="pointer"
        boxShadow={"0px 5px 0px #0566d4"}
      >
        <Text fontWeight={"600"} fontSize="18px" color={"#fff"} mr="5px">
          Get Started
        </Text>
        <RiArrowRightLine color="#fff" fontWeight={"600"} fontSize="25px" />
      </Flex>
      <Flex
        flexDir={"column"}
        w={["250px", "250px", "250px", "240px", "230px"]}
        bg="rgba(0, 182, 122, 0.1)"
        justifyContent={"center"}
        pt="20.2px"
        pb="10px"
        alignItems={"center"}
        borderRadius={"10px"}
        m="auto"
        mt="20px"
      >
        <Rating />
        <Flex
          flexDir={"row"}
          alignItems="center"
          justifyContent={"center"}
          mt="6px"
        >
          <Text fontWeight={"600"} fontSize="16px" color={"#111822"} mr="5px">
            Rated 4.5 on
          </Text>
          <IoIosStar color="#00B67A" ml="2px" fontSize={"22px"} />
          <Text
            fontWeight={"600"}
            ml="2px"
            fontSize="16px"
            color={"#111822"}
            mr="5px"
          >
            Trustpilot
          </Text>
        </Flex>
      </Flex>
      <Divider
        orientation="horizontal"
        w={["100%", "100%", "80%", "70%", "60%"]}
        m="auto"
        my="54px"
        border={"1px solid #D9D8D6"}
      />
    </Flex>
  );
};

export default CreativeProxyBox;
