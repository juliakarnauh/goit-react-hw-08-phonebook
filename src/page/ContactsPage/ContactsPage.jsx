import { ContactForm } from "components/ContactForm/ContactForm"
import {Filter} from 'components/Filter/Filter'
import { ContactList } from "components/ContactList/ContactList"
import { Box} from '@chakra-ui/react';
import {UserMenu} from 'components/UserMenu/UserMenu'
export const ContactsPage = ()=>{
    return(
        <Box bgColor="rgb(112,112,112)" bgGradient="linear-gradient(90deg, rgba(222,173,219,1) 2%, rgba(113,192,196,1) 45%, rgba(86,154,150,1) 71%, rgba(101,113,109,1) 100%)" min-h="800px" mt="10px">
            <Box  w="1100px" m="0 auto" justifyContent="center">
        <ContactForm />
          <Filter />
          <ContactList/>
          </Box>
        <UserMenu/>
    </Box>
    )
}