import ItemDesc from '@/components/Property/ItemDesc';
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';

type PropertiesProps = {

};

const Properties: React.FC<PropertiesProps> = () => {

    return (
        <Box>
            <Grid templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }} gap={{ base: 6, md: 8, lg: 10 }} alignItems={"center"} py={6} >



                <>
                    {/* {properties.map(item =>
                        <>
                            <ItemDesc key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} description={item.description} link={item.link} />


                        </>

                    )

                    } */}

                    <ItemDesc key={1} name={"Canvas Garden"} location={"Bengaluru"} description={"This is the most expensive property This is the most expensive propertyThis is the most expensive propertyThis is the most expensive propertyThis is the most expensive propertyThis is the most expensive property"} area={2600} price={10000} fractions={25} docURL={""} imgURL={'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} />


                </>


            </Grid>
        </Box>
    )
}
export default Properties;