import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, useColorModeValue, ModalFooter, ModalOverlay, Stack, Text, Textarea, useDisclosure, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import IPFSUpload from '../Thirdweb/IPFSUpload';


type ListPropertyProps = {
    //Wallet adddress of mentee

    // open: boolean;

    // //callback function that doesn't return anything
    // handleClose: () => void;
};

const ListProperty: React.FC<ListPropertyProps> = () => {

    const [name, setName] = useState("");
    const [area, setArea] = useState("");
    const [price, setPrice] = useState("");
    const [fraction, setFraction] = useState("");
    const [description, setDescription] = useState("");

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
              
               
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

                onClick={onOpen}>List Property</Button>
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

                        <Box p={1} mt={5}>

                            <form onSubmit={handleSubmit}>
                                <FormLabel fontWeight={800}>Name</FormLabel>
                                <Input
                                    mb={7}
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    ref={initialRef} placeholder='Name of the Property' />

                                <FormLabel fontWeight={800}>Area</FormLabel>
                                <Input
                                    name='area'
                                    mb={7}
                                    type='number'
                                    value={area}
                                    onChange={(e) => {
                                        setArea(e.target.value);
                                    }}
                                    placeholder='Area in Sqft' />

                                <FormLabel fontWeight={800}>Fractions</FormLabel>
                                <Input
                                    name='fraction'
                                    type='number'
                                    mb={7}
                                    value={fraction}
                                    onChange={(e) => {
                                        setFraction(e.target.value);
                                    }}
                                     placeholder='No. of Fractions' />


                                <FormLabel fontWeight={800}>Description</FormLabel>
                                <Textarea
                                    mb={7}
                                    name=' '
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                    placeholder='Tell more about the Property' />

                                <FormLabel fontWeight={800}>Price of the Property</FormLabel>
                                <Input
                                    name='price'
                                    mb={7}
                                    type='number'
                                    value={price}
                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                    }}
                                    placeholder='Price in ICP' />
                                <FormLabel fontWeight={800}>Upload Property Documents</FormLabel>

                                    <IPFSUpload/>

                            </form>

                        </Box>


                    </ModalBody>

                    <ModalFooter>
                        <Stack>
                            <Flex justifyContent={"flex-end"}>
                                <Button type="submit" colorScheme='blue' mr={3}>
                                    List
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
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