import React, { useEffect, useState } from "react";
import { Box, Heading, Main } from "grommet";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      const users = response.data.results;
      setUsers(users || []);
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    // getUsers();
  }, []);

  return (
    <Main pad="medium">
      <Box>
        <Heading alignSelf="center">Home</Heading>
      </Box>
      <Box>
        {users.length === 0 ? (
          <h1>Loading Employees</h1>
        ) : (
          users.map(function (user) {
            return <ProfileCard key={user.email} user={user} />;
          })
        )}
      </Box>
    </Main>
  );
}

export default Home;
