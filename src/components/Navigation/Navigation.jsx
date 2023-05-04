import { NavLink } from "react-router-dom";
import { Tabs, TabList, Tab, Text } from '@chakra-ui/react'
import { Div } from "./Navigation.styled";
export const Navigation = () => {
  return (
    <Div>
    <Tabs as='nav' variant='soft-rounded' mt="10px" ml="15px" box-shadow="0px 0px 0px rgba(0, 0, 0, 0.2)" >
      <TabList as='ul'>
      <Tab>
          <Text as={NavLink} to='/'>Home</Text>
        </Tab>
        <Tab>
          <Text as={NavLink} to='register'>Register</Text>
        </Tab>
        <Tab>
          <Text as={NavLink} to='login'>Login</Text>
        </Tab>
        <Tab>
          <Text as={NavLink} to='contacts'>My Contacts</Text>
        </Tab>
      </TabList>
    </Tabs>
    </Div>
  );
};