import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Main,
  TextInput,
} from "grommet";

function About() {
  const [value, setValue] = useState({});

  return (
    <Main>
      <Heading>About</Heading>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}
      >
        <FormField name="name" htmlfor="text-input-id" label="Name">
          <TextInput id="text-input-id" name="name" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </Main>
  );
}

export default About;
