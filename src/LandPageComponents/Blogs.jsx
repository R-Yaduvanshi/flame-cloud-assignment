import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import arrow from "../assets/rightArrow.svg";
import { blogData, blogDataSmall } from "../utils/data";
const Blogs = () => {
  return (
    <Flex
      flexDir={"column"}
      w="100%"
      justifyContent="center"
      mb="120px"
      alignItems={"center"}
    >
      <Box
        border={"1px solid rgba(30, 30, 30, 0.1)"}
        w={["100%", "100%", "100%", "70%", "70%"]}
        bgGradient={
          "linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%)"
        }
        borderRadius={"5px"}
        paddingRight={"40px"}
        paddingLeft={"40px"}
        paddingTop={"65px"}
        paddingBottom={"35px"}
      >
        <Text
          fontWeight={"600"}
          textAlign="center"
          fontSize={["27px", "27px", "36px", "36px", "36px"]}
          lineHeight={["32.2px", "32.2px", "43.2px", "43.2px", "43.2px"]}
          mb={["14.05px", "14.05px", "14.05px", "10px", "10px"]}
        >
          Read our <span style={{ color: "#077BFF" }}>Exclusive</span> Blog
        </Text>
        <Text
          color="#111822"
          opacity="0.5"
          fontWeight={"500"}
          w={["98%", "98%", "70%", "50%", "40%"]}
          textAlign="center"
          fontSize={["15px", "15px", "18px", "18px", "18px"]}
          m="auto"
          lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]}
          mb={["14.05px", "14.05px", "14.05px", "10px", "10px"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
        <Flex
          justifyContent={"center"}
          mb={["46.73px", "46.73px", "46.73px", "40px", "40px"]}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap="7.75px"
            cursor={"pointer"}
          >
            <Text
              color="#077BFF"
              fontWeight={"500"}
              textAlign="center"
              fontSize={["15px", "15px", "18px", "18px", "18px"]}
              m="auto"
              lineHeight={["15.2px", "15.2px", "22px", "22px", "22px"]}
            >
              Read All Blogs
            </Text>
            <Image
              src={arrow}
              alt="arrow"
              w={["11.94px", "26.94px", "26.94px", "13px", "13px"]}
              h={["15.68px", "19.68px", "19.68px", "9.5px", "9.5px"]}
            />
          </Box>
        </Flex>
        {/* Large screen */}
        <SimpleGrid
          display={["none", "none", "grid", "grid", "grid"]}
          columns={[2, 2, 2, 3, 3]}
          rowGap={["38px", "38px", "38px", "38px", "38px"]}
          columnGap={["25px", "25px", "25px", "25px", "25px"]}
          w={["70%", "70%", "70%", "100%", "100%"]}
          m="auto"
          // border="1px"
        >
          {blogData.map((el) => {
            return (
              <Flex flexDir={"column"} key={el.id}>
                <Box
                  h="221px"
                  background={"rgba(7, 123, 255, 0.1)"}
                  border={"1px solid rgba(7, 123, 255, 0.5)"}
                  borderRadius={"5px"}
                  mb="11px"
                ></Box>
                <Text
                  fontWeight={"500"}
                  fontSize={["15px", "15px", "20px", "20px", "20px"]}
                  lineHeight={["16px", "16px", "25px", "25px", "25px"]}
                  color={"#111822;"}
                  textAlign={"left"}
                  mb="1px"
                >
                  {el.title}
                </Text>
                <Text
                  fontWeight={"400"}
                  fontSize={["13px", "13px", "16px", "16px", "16px"]}
                  lineHeight={["15px", "15px", "19px", "19px", "19px"]}
                  color={"#111822;"}
                  opacity={"0.5"}
                  textAlign={"left"}
                >
                  {el.category}
                </Text>
              </Flex>
            );
          })}
        </SimpleGrid>
        {/* Small Screen */}
        <SimpleGrid
          display={["grid", "grid", "none", "none", "none"]}
          columns={[2, 2, 2, 2, 2]}
          rowGap={["38px", "38px", "38px", "38px", "38px"]}
          columnGap={["25px", "25px", "25px", "25px", "25px"]}
          w="100%"
          m="auto"
        >
          {blogDataSmall.map((el) => {
            return (
              <Flex flexDir={"column"} key={el.id}>
                <Box
                  h="135px"
                  background={"rgba(7, 123, 255, 0.1)"}
                  border={"1px solid rgba(7, 123, 255, 0.5)"}
                  borderRadius={"5px"}
                  mb="11px"
                  w="100%"
                ></Box>
                <Text
                  fontWeight={"500"}
                  fontSize={["15px", "15px", "20px", "20px", "20px"]}
                  lineHeight={["16px", "16px", "25px", "25px", "25px"]}
                  color={"#111822;"}
                  textAlign={"left"}
                  mb="1px"
                  ml="1px"
                >
                  {el.title}
                </Text>
                <Text
                  fontWeight={"400"}
                  fontSize={["13px", "13px", "16px", "16px", "16px"]}
                  lineHeight={["15px", "15px", "19px", "19px", "19px"]}
                  color={"#111822;"}
                  opacity={"0.5"}
                  textAlign={"left"}
                  ml="1px"
                  mb="1px"
                >
                  {el.category}
                </Text>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Blogs;
