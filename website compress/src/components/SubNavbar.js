import React from "react";
import { Heading } from '@chakra-ui/react';
import { VStack, Flex, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

export default function SubNavbar(props) {

  return (
    <VStack w = "100%" bgColor = 'rgba(232, 158, 16, 0.88)'>
      <Flex p = {4} w = "100%">
        <Link to="/">
        <Heading
          fontWeight='extrabold'
          size='2xl'
          pr = "8"
          color='white'
        >
          STATPAD.BASKETBALL
        </Heading>
        </Link>
        <Spacer />
        <Flex>
            <Flex mt = "1.6">
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