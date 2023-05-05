import React from 'react';
import { FormControl, Input, Button, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {registerThunk } from 'redux/Auth/authOperations';
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(registerThunk({ name, email, password }));
    e.target.reset();
  };
  return (
    <Box
      bgImage="https://static.vecteezy.com/system/resources/previews/002/099/717/original/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg"
      h="700px"
      mt="10px"
      pt="60px"
    >
      <Box
        m="0px auto"
        w="400px"
        bgColor="white"
        borderRadius="10px"
        overflow="hidden"
        box-shadow="0px 0px 0px rgba(0, 0, 0, 0.2)"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/099/717/original/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg"
          alt="Decoration Img"
          width="400"
          height="150"
        />
        <Box p="10px 15px" as="form" onSubmit={handleSubmit}>
          <FormControl>
            <Input
              type="text"
              name="name"
              w="100%"
              bgColor="white"
              placeholder="Name"
              mb="10px"
            />
          </FormControl>
          <FormControl>
            <Input
              type="email"
              name="email"
              w="100%"
              bgColor="white"
              placeholder="Email"
              mb="10px"
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              name="password"
              w="100%"
              bgColor="white"
              placeholder="Password"
              mb="15px"
            />
          </FormControl>
          <Button type="submit" w="100%" mb="20px">
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
