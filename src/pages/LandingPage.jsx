import { Box } from "@chakra-ui/react";
import React from "react";
import CreativeProxyBox from "../LandPageComponents/CreativeProxyBox";
import Feature from "../LandPageComponents/Feature";
import Pricing from "../LandPageComponents/Pricing";
import CustomerLove from "../LandPageComponents/CustomerLove";

const LandingPage = () => {
  return (
    <Box w="100%">
      <CreativeProxyBox />
      <Feature />
      <Pricing />
      <CustomerLove />
    </Box>
  );
};

export default LandingPage;
