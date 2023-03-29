import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import arrow from "../assets/arrowright.svg";
import line from "../assets/line.svg";
import star1 from "../assets/star2.svg";
import Rating from "./Rating";
import { proxyData } from "../utils/data";
const CreativeProxyBox = () => {
  return (
    <Container maxW="85%">
      <Box mt="95px" mb="54px">
        {/* Small Heading Text */}
        <Text
          fontStyle="normal"
          fontWeight="600"
          fontSize={["13px", "40px", "40px", "16px", "16px"]}
          lineHeight={["21px", "48px", "48px", "19px", "19px"]}
          letterSpacing="-0.02em"
          textAlign="center"
          color="#111822"
          style={{
            opacity: "0.5",
          }}
        >
          WELCOME TO CREATIVE PROXIES
        </Text>

        {/* Large Head Text */}
        <Text
          color="#111822"
          fontStyle="normal"
          fontWeight="600"
          fontSize={["28px", "86px", "86px", "56px", "56px"]}
          lineHeight={["41px", "103px", "103px", "67px", "67px"]}
          textAlign="center"
          letterSpacing="-0.02px"
          ml={["10px", "10px", "10px", "60px", "60px"]}
          mr={["10px", "10px", "10px", "60px", "60px"]}
          mt="3px"
        >
          We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the
          <span style={{ color: "#16D113" }}>Most Reliable</span> Proxy Service
          since 2020
        </Text>
        {/* Middle head text */}
        <Text
          color="#111822"
          fontStyle="normal"
          fontWeight="600"
          fontSize={["12px", "40px", "40px", "22px", "22px"]}
          lineHeight={["18px", "48px", "48px", "26px", "26px"]}
          textAlign="center"
          style={{ opacity: "0.5" }}
          ml="91px"
          mr="91px"
          mt="17px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>

        {/* Get Started button */}
        <Box
          display="flex"
          justifyContent={"center"}
          flexDirection={"row"}
          alignItems={"center"}
          mt={["65.6px", "65.6px", "65.6px", "26px", "26px"]}
        >
          <Box
            display={"flex"}
            flexDir={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            w={["250px", "250px", "250px", "222px", "222px"]}
            h={["50.39px", "97.39px", "97.39px", "47px", "47px"]}
            background={"#077BFF"}
            borderRadius={[
              "10.7207px",
              "20.7207px",
              "20.7207px",
              "10px",
              "10px",
            ]}
            p={["20.72px", "20.72px", "20.72px", "10px", "10px"]}
            gap={["10.36px", "10.36px", "10.36px", "5px", "5px"]}
            cursor={"pointer"}
          >
            <Text
              textAlign={"center"}
              fontStyle={"normal"}
              fontSize={["28.2973px", "28.2973px", "28.2973px", "28px", "18px"]}
              lineHeight={["18px", "45px", "45px", "22px", "22px"]}
              color="#FFFFFF"
            >
              Get Started
            </Text>
            <Image
              src={arrow}
              alt="arrow"
              w={["11.94px", "26.94px", "26.94px", "13px", "13px"]}
              h={["15.68px", "19.68px", "19.68px", "9.5px", "9.5px"]}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent={"center"} mt={"22px"}>
          {/* Rating component */}
          <Box
            background="rgba(0, 182, 122, 0.1)"
            w={["250px", "250px", "250px", "222px", "222px"]}
            h={["140.49px", "140.49px", "140.49px", "90px", "90px"]}
            borderRadius={[
              "10.7207px",
              "20.7207px",
              "20.7207px",
              "10px",
              "10px",
            ]}
            // p={["37.5px", "37.5px", "37.5px", "16px", "16px"]}
            display={"grid"}
            placeItems={"center"}
          >
            <Box>
              {/* Star rating component */}
              <Box display={"flex"} justifyContent={"center"} gap="2.36px">
                <Rating />
                <Rating />
                <Rating />
                <Rating />
                <Rating />
              </Box>
              <Flex justifyContent="center" mt="8.41px">
                <Text>Rated 4.5 on</Text>
                <Image src={star1} w="23.23px" h="22.08px" />
                <Text>TrustPilot</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Center mt={["72.4px", "72.4px", "72.4px", "54px", "54px"]}>
          <Image src={line} />
        </Center>

        {/* Proxt container */}
        <Container
          maxW="100%"
          mt={["54.67px", "54.67px", "54.67", "36.36px", "36.36px"]}
          mb={["54.67px", "54.67px", "54.67", "138.36px", "138.36px"]}
        >
          <SimpleGrid
            columns={["2", "2", "2", "4", "4"]}
            row={["2", "2", "2", "1", "1"]}
            spacing={["10px", "10px", "16px", "16px", "16px"]}
          >
            {proxyData.map((el) => {
              return (
                <Flex
                  borderRadius={"5px"}
                  bg="#D4EAE8"
                  border={"1px solid rgba(255, 255, 255, 0.1)"}
                  h={["145.84px", "145.84px", "145.84px", "95.28px", "95.28px"]}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap="16px"
                  key={el.id}
                >
                  <Box
                    bgGradient="linear(135deg, #3BC9FB 0%, #42A6FB 100%)"
                    w={["61.22px", "61.22px", "61.22px", "40px", "40px"]}
                    h={["61.22px", "61.22px", "61.22px", "40px", "40px"]}
                    borderRadius={["", "", "", "12.2449px", "12.2449px"]}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image src={el.image} w="24px" h="24px" />
                  </Box>

                  <Text
                    color="#111822"
                    fontWeight={"400"}
                    fontSize={["10px", "10px", "12.5px", "14px", "14px"]}
                    lineHeight={["12px", "12px", "14.5px", "22px", "22px"]}
                    w="148px"
                    h="44px"
                  >
                    {el.desc}
                  </Text>
                </Flex>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default CreativeProxyBox;
