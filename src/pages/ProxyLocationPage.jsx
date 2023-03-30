import {
  Container,
  Flex,
  Highlight,
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
      <Flex
        flexDir={"column"}
        pb="42px"
        w={["80%", "80%", "85%", "75%", "60%"]}
        m="auto"
        mt="80px"
        pt="95px"
        justifyContent="center"
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
        placeholder=" 8.8.8.8
                    1.1.1.1
                    192.168.1.1"
      />
      {/* Check Location button */}
      <Flex
        flexDir={["column", "column", "row", "row", "row"]}
        justifyContent="space-between"
        mb={["22.33px", "22.33px", "22.33px", "51px", "51px"]}
        mt={["42.6px", "42.6px", "42.6px", "21px", "21px"]}
      >
        <Flex
          borderRadius={"5px"}
          w={"200px"}
          bg="#077BFF"
          alignItems={"center"}
          justifyContent="center"
          py="10px"
          mb={["10px", "10px", "0px", "0px", "0px"]}
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
          w={["100%", "100%", "225px", "225px", "225px"]}
          opacity={"0.5"}
          fontSize={["12px", "12px", "14px", "14px", "14px"]}
          fontWeight="400"
          lineHeight={"16.8px"}
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
      <Flex
        flexDir={"row"}
        justifyContent="center"
        alignItems={"center"}
        mt="40px"
      >
        <Text
          fontSize={["13px", "13px", "18px", "18px", "18px"]}
          fontWeight="500"
          letterSpacing={"-0.02em"}
          lineHeight={"21.6px"}
          color="#111822"
        >
          Check out our IPv6 Compatibility Checker
        </Text>
        <Flex
          flexDir={"row"}
          justifyContent="center"
          alignItems={"center"}
          ml={["10px", "10px", "15px", "15px", "15px"]}
        >
          <Text
            color="#077BFF"
            fontWeight={"500"}
            mr={["2px", "2px", "5px", "5px", "5px"]}
            letterSpacing={"-0.02em"}
            fontSize={["13px", "13px", "18px", "18px", "18px"]}
            lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]}
          >
            Veiw Tools
          </Text>
          <Image src={arrow} alt="arrow" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProxyLocationPage;
