import { Avatar, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { customersFeedback } from "../utils/data";
import { IoIosStar } from "react-icons/io";
import Elipse from "../assets/Ellipse.svg";
const CustomerLove = () => {
  return (
    <Flex
      flexDir={"column"}
      w="100%"
      mb={["110px", "110px", "250px", "250px", "250px"]}
      justifyContent="center"
    >
      <Text
        color="#111822"
        mb="10px"
        fontWeight={"600"}
        textAlign="center"
        fontSize={["26px", "26px", "36px", "36px", "36px"]}
        lineHeight={["32.2px", "32.2px", "43.2px", "43.2px", "43.2px"]}
      >
        Customers <span style={{ color: "#16D113" }}>Love</span> our Proxies
      </Text>
      <Text
        color="#111822"
        opacity="0.5"
        fontWeight={"500"}
        w={["80%", "80%", "70%", "50%", "40%"]}
        textAlign="center"
        fontSize={["14px", "14px", "18px", "18px", "18px"]}
        m="auto"
        lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
      <SimpleGrid
        columns={[1, 1, 2, 2, 3]}
        spacing={["28px", "28px", "10px", "18px", "18px"]}
        w={["80%", "67%", "90%", "90%", "80%", "80%"]}
        m="auto"
        mt="34px"
      >
        {customersFeedback.map((el) => {
          return (
            <Flex
              flexDir={"column"}
              py={["20px", "20px", "28px", "28px", "28px"]}
              px={["15.8px", "15.8px", "25.8px", "25.8px", "25.8px"]}
              background={"rgba(30, 30, 30, 0.01)"}
              borderRadius="5px"
              border="1px solid rgba(22, 209, 19, 0.5)"
              key={el.id}
              w="auto"
              boxSizing="borderbox"
            >
              <Flex
                mb={["13px", "13px", "19.1px", "19.1px", "19.1px"]}
                flexDir={"row"}
                w="50%"
                justifyContent={"space-between"}
              >
                <Icon
                  as={IoIosStar}
                  boxSize={[5, 5, 6, 6, 6]}
                  color="#16D113"
                />
                <Icon
                  as={IoIosStar}
                  boxSize={[5, 5, 6, 6, 6]}
                  color="#16D113"
                />
                <Icon
                  as={IoIosStar}
                  boxSize={[5, 5, 6, 6, 6]}
                  color="#16D113"
                />
                <Icon
                  as={IoIosStar}
                  boxSize={[5, 5, 6, 6, 6]}
                  color="#16D113"
                />
                <Icon
                  as={IoIosStar}
                  boxSize={[5, 5, 6, 6, 6]}
                  color="#16D113"
                />
              </Flex>
              <Text
                color="#111822"
                fontWeight={"400"}
                opacity="0.8"
                letterSpacing={"-0.02em"}
                fontSize={["12px", "14px", "14px", "15px", "15px"]}
                w={["260px", "260px", "305px", "95%", "95%"]}
                lineHeight={["15.5px", "15.5px", "22px", "20px", "20px"]}
                mb={["9px", "9px", "12px", "12px", "12px"]}
              >
                {el.desc}
              </Text>
              <Flex flexDir={"row"} alignItems="center">
                <Avatar
                  w={["35px", "35px", "48px", "48px", "48px"]}
                  h={["35px", "35px", "48px", "48px", "48px"]}
                  mr="10px"
                  name={el.name}
                  src={Elipse}
                />
                <Flex flexDir={"column"}>
                  <Text
                    mb={["-4px", "-4px", 0, 0, 0]}
                    color="#111822"
                    fontWeight={"500"}
                    fontSize={["14px", "14px", "18px", "16px", "16px"]}
                    lineHeight={["22px", "22px", "22px", "22px", "22px"]}
                  >
                    {el.name}
                  </Text>
                  <Text
                    color="#111822"
                    opacity={"0.5"}
                    fontWeight={"400"}
                    fontSize={["14px", "14px", "16px", "16px", "16px"]}
                    lineHeight={["19px", "19px", "19px", "19px", "19px"]}
                  >
                    {el.title}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default CustomerLove;
