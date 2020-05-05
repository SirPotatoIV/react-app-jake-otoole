import React from "react";
import { Box, Heading, Main } from "grommet";
import ProfileCard from "../components/ProfileCard";

function Home() {
  return (
    <Main pad="medium">
      <Box>
        <Heading alignSelf="center">Home</Heading>
      </Box>
      <Box>
        <ProfileCard />
      </Box>
    </Main>
  );
}

export default Home;
