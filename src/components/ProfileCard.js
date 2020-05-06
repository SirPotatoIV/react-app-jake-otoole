import React from "react";
import { Box, Image, Text } from "grommet";

export default function ProfileCard({ user }) {
  return (
    <Box
      pad="medium"
      margin="medium"
      alignSelf="center"
      alignContent="center"
      border="all"
    >
      <Text>
        First Name: {user.name.first} Last Name: {user.name.last}
      </Text>
      <Box>
        <Image src={user.picture.medium} fill={false} fit="contain" />
      </Box>
      <Text>Address: {user.location.country}</Text>
      <Text>Email: {user.email}</Text>
    </Box>
  );
}
