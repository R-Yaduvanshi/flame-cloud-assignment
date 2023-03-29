import { Box } from "@chakra-ui/react";
import React from "react";
import CreativeProxyBox from "../LandPageComponents/CreativeProxyBox";
import Feature from "../LandPageComponents/Feature";

const LandingPage = () => {
  return (
    <Box w="100%">
      <CreativeProxyBox />
      <Feature />
    </Box>
  );
};

export default LandingPage;
