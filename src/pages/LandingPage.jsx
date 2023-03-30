import { Box } from "@chakra-ui/react";
import React from "react";
import CreativeProxyBox from "../LandPageComponents/CreativeProxyBox";
import Feature from "../LandPageComponents/Feature";
import Pricing from "../LandPageComponents/Pricing";
import CustomerLove from "../LandPageComponents/CustomerLove";
import Blogs from "../LandPageComponents/Blogs";
import Landing4boxes from "../LandPageComponents/Landing4boxes";

const LandingPage = () => {
  return (
    <Box w="100%">
      <CreativeProxyBox />
      <Landing4boxes />
      <Feature />
      <Pricing />
      <CustomerLove />
      <Blogs />
    </Box>
  );
};

export default LandingPage;
