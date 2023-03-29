import { Box } from "@chakra-ui/react";
import React from "react";
import CreativeProxyBox from "../LandPageComponents/CreativeProxyBox";
import Feature from "../LandPageComponents/Feature";
import Pricing from "../LandPageComponents/Pricing";

const LandingPage = () => {
  return (
    <Box w="100%">
      <CreativeProxyBox />
      <Feature />
      <Pricing />
    </Box>
  );
};

export default LandingPage;
