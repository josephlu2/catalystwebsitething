import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
    HStack
  } from '@chakra-ui/react';
  

const ProjectPart = (props) => {
    return (
        <Center>
            <Stack
            borderWidth="1px"
            borderRadius="30"
            w="100%"
            height="15rem"
            direction="row"
            bg="gray.200"
            pr={4}
            mb = "4"
            >
            
            <Flex flex={0.3} bg="blue.200">
            <Image
                borderLeftRadius = "30"
                objectFit="cover"
                boxSize="100%"
                src={
                props.img
                }
            />
            </Flex>
            <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            p={1}
            pt={2}>
                <HStack>
            <Heading fontSize={'4xl'} fontFamily={'body'}>
                {props.title}
            </Heading>
            <Text fontSize = "2xl" fontWeight={600} color={'gray.800'} size="sm" mb={4}>
                {props.date}
            </Text>
            </HStack>
            <Text
                color={useColorModeValue('gray.700', 'gray.400')}
                >
                {props.desc}
            </Text>

            {props.button1 && (<Stack
                width="30%"
                mt={'2rem'}
                direction={'row'}
                justifyContent={'space-between'}
                >
                <Button
                flex={1}
                fontSize={'sm'}
                colorScheme = {props.buttonColor}
                borderRadius = "15"
                _focus={{
                    bg: 'gray.200',
                }}>
                {props.button1}
                </Button>
            </Stack>)}
            </Stack>
        </Stack>
      </Center>
    )
}

export default ProjectPart
