import {
  Box,
  Container,
  Flex,
  Highlight,
  Icon,
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
import viewtool from "../assets/viewtool.svg";
import arrow from "../assets/arrowright.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
const ProxyLocationPage = () => {
  return (
    <Container
      maxW="100%"
      marginTop={"77.5px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Flex
        flexDir={"column"}
        w={["90%", "90%", "85%", "60%", "60%"]}
        justifyContent="center"
        alignItems={"center"}
        mb="51.03px"
      >
        <Text
          fontWeight={"600"}
          fontSize={["13px", "13px", "16px", "16px", "16px"]}
          opacity="0.5"
          color={"#111822"}
          textAlign={"center"}
        >
          PROXY LOCATION CHECKER
        </Text>
        <Text
          color="#111822"
          fontWeight={"600"}
          mb={["14px", "14px", "20px", "20px", "20px"]}
          fontSize={["26px", "26px", "46px", "56px", "56px"]}
          lineHeight={["35.2px", "35.2px", "57.2px", "67.2px", "67.2px"]}
          textAlign={"center"}
        >
          Check Locations of all your{" "}
          <span style={{ color: "#077BFF" }}>Proxies</span> Free of Cost
        </Text>
        <Text
          fontWeight={"600"}
          textAlign="center"
          w={["80%", "80%", "85%", "80%", "65%"]}
          m="auto"
          opacity="0.5"
          fontSize={["12px", "12px", "22px", "22px", "22px"]}
          color={"#111822"}
          lineHeight={["15.4px", "15.4px", "26.4px", "26.4px", "26.4px"]}
        >
          To Check location, enter the address or proxies you want to check (1
          IP Per line)
        </Text>
      </Flex>
      {/* Check Location section text area */}
      <Textarea
        mb="42.6px"
        w={["90%", "90%", "90%", "60%", "60%"]}
        placeholder=" 8.8.8.8
                    1.1.1.1
                    192.168.1.1"
      />
      {/* Check Location button */}
      <Flex
        flexDirection={["column", "column", "column", "row", "row"]}
        w={["90%", "90%", "90%", "60%", "60%"]}
        justifyContent={[
          "null",
          "null",
          "null",
          "space-between",
          "space-between",
        ]}
      >
        <Flex
          borderRadius={"5px"}
          w={"200px"}
          bg="#077BFF"
          alignItems={"center"}
          justifyContent="center"
          py="10px"
          mb="25.96px"
        >
          <Text
            color="#FFFFFF"
            fontSize={["15px", "15px", "16px", "16px", "16px"]}
            fontWeight="600"
            lineHeight={"19.2px"}
          >
            Check Location
          </Text>
        </Flex>
        <Text
          color="#111822"
          opacity={"0.5"}
          fontSize={["12px", "12px", "14px", "13px", "13px"]}
          fontWeight="400"
          lineHeight={"16.8px"}
          w={["null", "null", "null", "30%", "30%"]}
        >
          <Highlight
            query={["Terms of Service", "Privacy Policy"]}
            styles={{
              textDecoration: "underline",
              textDecorationColor: "#111822",
              textDecorationThickness: 0.5,
            }}
          >
            By using our tool, you agree our Terms of Service and Privacy Policy
          </Highlight>
        </Text>
      </Flex>
      <Text
        textAlign={"left"}
        color={"#077BFF"}
        fontWeight={"500"}
        fontSize={"20px"}
        lineHeight={"24px"}
        mb="34.61px"
        mt="22.33px"
        w={["90%", "90%", "90%", "60%", "60%"]}
      >
        Your Results
      </Text>
      {/* Table container */}
      <TableContainer
        border={"1px solid rgba(0, 0, 0, 0.25)"}
        background={"rgba(217, 216, 214, 0.05)"}
        borderRadius={"5px"}
        mb={["40px", "", "80.65px", "", ""]}
        w={["90%", "90%", "90%", "60%", "60%"]}
      >
        <Table size={["sm", "sm", "sm", "lg", "lg"]}>
          <Thead
            borderBottom="1px solid rgba(0, 0, 0, 0.25);"
            background={"rgba(0, 0, 0, 0.1)"}
          >
            <Tr>
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
                  fontWeight={"500"}
                  fontStyle={"normal"}
                  fontSize={[
                    "28.0999px",
                    "28.0999px",
                    "28.0999px",
                    "14px",
                    "14px",
                  ]}
                  lineHeight={["34px", "34px", "34px", "17px", "17px"]}
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
      {/* Large screens */}
      <Flex
        display={["none", "none", "none", "flex", "flex"]}
        w={["90%", "90%", "90%", "60%", "60%"]}
        justifyContent={"center"}
        alignItems={"center"}
        mb="99px"
      >
        <Flex>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            letterSpacing={"-0.02em"}
            lineHeight={"21px"}
            color="#111822"
            mr="15px"
          >
            Check out our IPv6 Compatibility Checker
          </Text>
          <Image src={viewtool} />
        </Flex>
      </Flex>

      {/* Small and medium screen */}
      <Flex
        w={["90%", "90%", "90%", "60%", "60%"]}
        display={["flex", "flex", "flex", "none", "none"]}
        justifyContent={"space-between"}
        mb="117.82px"
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text
            fontSize={["13.5px", "15px", "18px", "26px", "36.1285px"]}
            fontWeight="500"
            letterSpacing={"-0.02em"}
            lineHeight={"43px"}
            color="#111822"
          >
            Check out our IPv6 Compatibility Checker
          </Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text
            fontSize={["13.5px", "15px", "18px", "26px", "36.1285px"]}
            color={"#077BFF"}
            fontWeight={"600"}
            mr="7.75px"
          >
            View Tools
          </Text>
          <Icon
            as={HiArrowNarrowRight}
            color={"#077BFF"}
            fontWeight={"600"}
            fontSize={["13.5px", "15px", "18px", "26px", "36.1285px"]}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProxyLocationPage;
