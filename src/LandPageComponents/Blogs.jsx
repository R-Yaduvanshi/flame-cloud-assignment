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
import { blogData } from "../utils/data";
const Blogs = () => {
  return (
    <Container
      maxW="85%"
      px={["9", "9", "9", "9", "9"]}
      mb="120px"
      //   border={"1px"}
    >
      <Flex>
        <Box
          border={"1px solid rgba(30, 30, 30, 0.1)"}
          w="100%"
          p="40px"
          bgGradient={
            "linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%)"
          }
          borderRadius={"5px"}
        >
          <Text
            fontWeight={"600"}
            textAlign="center"
            fontSize={["27px", "27px", "36px", "36px", "36px"]}
            lineHeight={["32.2px", "32.2px", "43.2px", "43.2px", "43.2px"]}
            mb="10px"
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
            mb="10px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </Text>
          <Flex justifyContent={"center"} mb="10px">
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
                //   w={["98%", "98%", "70%", "50%", "40%"]}
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
          <SimpleGrid
            columns={[2, 2, 2, 3, 3]}
            spacingX={"25px"}
            spacingY={"38px"}
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
                    fontSize={["", "", "", "20px", "20px"]}
                    lineHeight={["", "", "", "24px", "24px"]}
                    color={"#111822;"}
                    textAlign={"left"}
                    mb="1px"
                  >
                    {el.title}
                  </Text>
                  <Text
                    fontWeight={"400"}
                    fontSize={["", "", "", "16px", "16px"]}
                    lineHeight={["", "", "", "19px", "19px"]}
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
        </Box>
      </Flex>
    </Container>
  );
};

export default Blogs;
