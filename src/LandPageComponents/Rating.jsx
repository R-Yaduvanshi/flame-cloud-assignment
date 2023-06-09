import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import star from "../assets/star.svg";
import "../App.css";
const Rating = () => {
  return (
    <Flex flexDir={"row"}>
      <Flex p="1" bg="#00B67A" mr="2px">
        <Image src={star} />
      </Flex>
      <Flex p="1" bg="#00B67A" mr="2px">
        <Image src={star} />
      </Flex>
      <Flex p="1" bg="#00B67A" mr="2px">
        <Image src={star} />
      </Flex>
      <Flex p="1" bg="#00B67A" mr="2px">
        <Image src={star} />
      </Flex>
      <Flex p="1" mr="2px" className="half_star_background">
        <Image src={star} />
      </Flex>
    </Flex>
  );
};

export default Rating;
