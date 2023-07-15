import { Flex, Box } from '@chakra-ui/layout';
// import { Box } from '@chakra-ui/react/dist';
import React from 'react';
import { Button, Input } from '@chakra-ui/react'
import ListProperty from '../PopUp/ListProperty';
import IPFSUpload from '../Thirdweb/IPFSUpload';


type NavbarProps = {


};

const Navbar: React.FC<NavbarProps> = () => {

    return (

        <Flex backgroundColor={"brand.100"} justifyContent={"flex-end"} p={3}>

            <ListProperty />

        </Flex>
    )
}
export default Navbar;