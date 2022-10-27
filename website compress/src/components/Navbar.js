import React from "react";
import { Heading } from '@chakra-ui/react';
import { VStack, Flex, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <VStack position = "absolute" zIndex = "999" w = "100%">
      <Flex p = {4} w = "100%">
        <Link to="/">
        <Heading
          fontWeight='extrabold'
          size='2xl'
          pr = "8"
          color='rgba(232, 158, 16, 0.88)'
        >
          STATPAD.BASKETBALL
        </Heading>
        </Link>
        <Spacer />
        <Flex>
            <Flex>
              <Link to="/projects">
                <Text as='b' fontSize='xl' color = "white">Projects</Text>
              </Link>
              <Link to="/create">
                <Text as='b' fontSize='xl' color = "white" ml = "10" mr = "10">Articles</Text>
              </Link>
              <Link to="/create">
                <Text as='b' fontSize='xl' color = "white" mr = "10">About Us</Text>
              </Link>
            </Flex>
          </Flex>
    </Flex>
  </VStack>
  );
}