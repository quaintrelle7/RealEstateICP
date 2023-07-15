import React from 'react';
import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';




type ItemDescProps = {

    name: String,
    location: String,
    description: String,
    price: Number,
    area: Number,
    fractions: Number,
    docURL: String,
    imgURL: String,

};

const ItemDesc: React.FC<ItemDescProps> = (props) => {

    const [liked, setLiked] = useState(false);
    return (
        <Center py={6}>
            <Box
                w="xs"
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                    <Img
                        src={
                            props.imgURL as string
                        }
                        roundedTop={'sm'}
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={'Blog Image'}
                    />
                </Box>
                <Box p={4}>
                    <Box
                        bg="black"
                        display={'inline-block'}
                        px={2}
                        py={1}
                        color="white"
                        mb={2}>
                        <Text fontSize={'xs'} fontWeight="medium">
                            {props.location}
                        </Text>
                    </Box>
                    <Heading mb={4} color={'black'} fontSize={'2xl'} noOfLines={2}>
                        {props.name}
                    </Heading>

                    <Text fontWeight={600} fontSize={16}>Fractions Available: {parseInt(`${props.fractions}`)}</Text>
                    <Text fontWeight={600} fontSize={16}> Price per Fraction :  {parseInt(`${props.price}`)}</Text>
                    <Text color={'gray.500'} noOfLines={3} fontSize={14}>
                        {props.description}
                    </Text>


                </Box>
                <HStack borderTop={'1px'} color="black">
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        w="full">
                        <a href={props.docURL as string} >
                            <Text fontSize={'md'} fontWeight={'semibold'}>

                                View Documents
                            </Text>

                        </a>
                        <BsArrowUpRight />
                    </Flex>
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                        cursor="pointer"
                        onClick={() => setLiked(!liked)}>
                        {liked ? (
                            <BsHeartFill fill="red" fontSize={'24px'} />
                        ) : (
                            <BsHeart fontSize={'24px'} />
                        )}
                    </Flex>
                </HStack>
            </Box>
        </Center>

    )
}

export default ItemDesc;