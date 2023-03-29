import {
  Box,
  Container,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { searchDataResult } from "../utils/data";
import arrow from "../assets/rightArrow.svg";
const ProxyLocationPage = () => {
  return (
    <Container maxW="60%" mt="95px" mb="99px">
      <Text
        fontStyle={"normal"}
        fontWeight={"600"}
        fontSize={["20.339px", "20.339px", "20.339px", "16px", "16px"]}
        lineHeight={["24px", "24px", "24px", "19px", "19px"]}
        color={"#111822"}
        opacity={"0.5"}
        w="100%"
        textAlign={"center"}
      >
        PROXY LOCATION CHECKER
      </Text>
      <Text
        fontStyle={"normal"}
        fontWeight={"600"}
        fontSize={["20.339px", "20.339px", "20.339px", "56px", "56px"]}
        lineHeight={["24px", "24px", "24px", "67px", "67px"]}
        color={"#111822"}
        w="100%"
        textAlign={"center"}
      >
        Check Locations of all your Proxies{" "}
        <span style={{ color: "#077BFF" }}>Free</span> of Cost
      </Text>
      <Container
        maxW="70%"
        mb={["51.03px", "51.03px", "51.03px", "42px", "42px"]}
      >
        <Text
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={["20.339px", "20.339px", "20.339px", "22px", "22px"]}
          lineHeight={["24px", "24px", "24px", "26px", "26px"]}
          color={"#111822"}
          opacity={"0.5"}
          w="100%"
          textAlign={"center"}
        >
          To Check location, enter the address or proxies you want to check (1
          IP Per line)
        </Text>
      </Container>
      {/* Check Location section text area */}
      <Textarea
        placeholder=" 8.8.8.8
                    1.1.1.1
                    192.168.1.1"
      />
      {/* Check Location button */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mt="21px"
        mb="41px"
      >
        <Flex
          flexDir={"row"}
          w={"30%"}
          bg="#077BFF"
          justifyContent={"center"}
          py="12.5px"
          alignItems={"center"}
          borderRadius={"5px"}
          cursor={"pointer"}
        >
          <Text
            fontWeight={"600"}
            fontSize="16px"
            color={"#fff"}
            mr="5px"
            lineHeight={"19px"}
          >
            Check Location
          </Text>
        </Flex>
        <Text w="30%" fontSize={"14px"} lineHeight={"17px"} opacity={"0.5"}>
          By using our tool, you agree our{" "}
          <span style={{ textDecoration: "underline" }}>Terms of Service</span>{" "}
          and{" "}
          <span style={{ textDecoration: "underline" }}>Privacy Policy</span>
        </Text>
      </Flex>
      <Text
        textAlign={"left"}
        color={"#077BFF"}
        fontWeight={"500"}
        fontSize={"20px"}
        lineHeight={"24px"}
        mb="17px"
      >
        Your Results
      </Text>
      {/* Table container */}
      <TableContainer
        border={"1px solid rgba(0, 0, 0, 0.25)"}
        background={"rgba(217, 216, 214, 0.05)"}
        borderRadius={"5px"}
        mb="40px"
      >
        <Table>
          <Thead background={"rgba(0, 0, 0, 0.1)"}>
            <Tr borderBottom={"1px"}>
              <Th>IP</Th>
              <Th>PROXY</Th>
              <Th>CITY</Th>
              <Th>COUNTRY</Th>
            </Tr>
          </Thead>
          <Tbody>
            {searchDataResult.map((el) => {
              return (
                <Tr
                  key={el.id}
                  color={"#111822"}
                  fontStyle={"normal"}
                  fontSize={"14px"}
                  lineHeight={"17px"}
                >
                  <Td>{el.ip}</Td>
                  <Td>{el.proxy}</Td>
                  <Td>{el.city}</Td>
                  <Td>{el.country}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Container display={"flex"} justifyContent={"space-between"}>
        <Text
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"24.1285px"}
          lineHeight={"43px"}
          color={"#111822"}
        >
          Check out our IPv6 Compatibility Checker
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
              View Tool
            </Text>
            <Image
              src={arrow}
              alt="arrow"
              w={["11.94px", "26.94px", "26.94px", "13px", "13px"]}
              h={["15.68px", "19.68px", "19.68px", "9.5px", "9.5px"]}
            />
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default ProxyLocationPage;
