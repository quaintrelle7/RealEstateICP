import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, useColorModeValue, ModalFooter, ModalOverlay, Stack, Text, Textarea, useDisclosure, Input } from '@chakra-ui/react';
import React, { useState } from 'react';


type ListPropertyProps = {
    //Wallet adddress of mentee

    // open: boolean;

    // //callback function that doesn't return anything
    // handleClose: () => void;
    price: number;
};

const ListProperty: React.FC<ListPropertyProps> = (props) => {

    const [fraction, setFraction] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    //TO-DO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // const { error } = "hi";

        let error = true;

        if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);

            return;
        }

        setShowSuccessMessage(true);
        setShowFailureMessage(false);


    }
    return (
        <>
            <Button

                bg={"black"}
                color={'white'}
                fontSize={"15"}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

                onClick={onOpen}>Buy</Button>
            {/* <Button ml={4} ref={finalRef}>
                I wil receive focus on close
            </Button> */}

            <Modal

                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex bg="brand.300" color={"white"} justifyContent={"center"} p={5}>
                        <Heading fontSize={25}>List Property</Heading>
                    </Flex>

                    <ModalCloseButton color={"white"} />
                    <ModalBody pb={6}>

                        <Box p={1} mt={5} >

                            <form onSubmit={handleSubmit}>


                                <Flex justifyContent={"space-between"}>

                                    <Box>
                                        <FormLabel fontWeight={800}>No. of Fractions</FormLabel>
                                        <Input
                                            mb={7}
                                            type='number'
                                            name='fraction'
                                            value={fraction}
                                            onChange={(e) => {
                                                setFraction(parseInt(`${e.target.value}`));
                                                setTotalPrice(parseInt(`${e.target.value}`) * props.price as number);
                                            }}
                                            ref={initialRef} placeholder='No. of fractions to be purchased' />

                                    </Box>
                                    <Box>
                                        <FormLabel fontWeight={800}>Total price</FormLabel>
                                        <Text>{totalPrice}</Text>
                                    </Box>
                                </Flex>



                            </form>

                        </Box>


                    </ModalBody>

                    <ModalFooter>
                        <Stack>

                            <Flex justifyContent={"flex-end"}>
                                <Button onClick={() => { }} type="submit" colorScheme='blue' mr={3}>
                                    Pay
                                </Button>
                                <Button onClick={onClose} bg={"red.500"}>Cancel</Button>
                            </Flex>


                            <Box>
                                {showSuccessMessage && <Text align={"center"} color={"brand.200"} fontWeight={600}>Request Sent Successfully!</Text>}
                                {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not submit the request, please check all the fields and try again!</Text>}
                            </Box>
                        </Stack>



                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ListProperty;