import React from 'react';
import {Box,Heading,FormControl,Input,} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/Contacts/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
    };
  return (
    <Box w="1000px" m='20px auto' textAlign="center">
      <Heading as="h2" mt="20px" color="white">
        Contacts
      </Heading>
      <FormControl>
        <Input as="input" type="text" w='50%' variant='flushed' focusBorderColor='white' placeholder='Find contacts by name' onChange={handleFilter}/>
      </FormControl>
    </Box>
  );
};