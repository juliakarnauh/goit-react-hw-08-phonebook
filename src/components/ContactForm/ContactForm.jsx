import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/Contacts/contactsOperations'
import { selectContacts} from 'redux/Contacts/contactSelectors';
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  FormControl,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    if (contacts.find(contact => contact.name === name||contact.number === number )){
      Notify.failure(`Contact with such data have already existed!`);
      e.target.reset();
      return;
    }
    e.target.reset();
    dispatch(addContact({name, number }));
    Notify.success(`Contact ${name} added`)
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box  m='20px auto' w="1000px" textAlign="center">
      <FormControl id="name" isRequired> 
        <Input placeholder='Name' w="40%" bgColor="white" mt="50px"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"     
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>
      <FormControl id="phone" isRequired mt={4}>
        <Input  placeholder='Number'  w="40%" bgColor="white"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>
      <Button type="submit" mt={4} colorScheme='whiteAlpha' w="40%">
        Add contact
      </Button>
      </Box>
    </form>
  );
};