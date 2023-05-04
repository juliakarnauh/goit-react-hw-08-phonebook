import React from 'react';
import { List, ListItem, Text, Avatar, IconButton } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsOperations';
import {CloseIcon} from '@chakra-ui/icons'
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/contactsOperations';
import { selectContacts, selectFilter } from 'redux/Contacts/contactSelectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsList = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List w="1000px" m='20px auto' pb="100px">
      {contactsList.map((contact) => (
      <ListItem key={contact.id} display="flex" w="40%" h="40px" mt="30px">
        <Avatar size='sm' mr="10px" src='https://bit.ly/broken-link' />
        <Text fontWeight="bold" mr={4} color="white">
        {contact.name}
        </Text>
        <Text flex={1} mr={4} color="white">
        {contact.number}
        </Text>
        <IconButton type="button" aria-label='Delete' size='xs' variant='outline' colorScheme='red'   icon={<CloseIcon/>} onClick={() => {
              dispatch(deleteContact(contact.id));
            }}/>
      </ListItem>
        ))}
    </List>
  );
};