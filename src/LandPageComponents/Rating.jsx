import { Box, Image } from "@chakra-ui/react";
import React from "react";
import star from "../assets/star.svg";

const Rating = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      w="28.31px"
      h="28.31px"
      background="#00B67A"
    >
      <Image src={star} />
    </Box>
  );
};

export default Rating;
