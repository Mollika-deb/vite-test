import {  Box, Button, Icon, Image, Text, ArrowForwardIcon } from '@chakra-ui/react';
import React from 'react';

const BlogCards = ({item}) => {
    const {image, title, date, details } = item
    return (
        <div>
           <Box mt={10} bg={'#FAFAFA'} pb={10}>
           <Image src={image}></Image>
           <Box px={5}>
             <Box> 
             <Text mt={12} fontSize={'3xl'} fontWeight={'normal'}>{title}</Text>
            <Text fontSize={'lg'} fontWeight={'medium'} py={3} color={'yellow.700'}>{date}</Text>
           <Text pb={5}>{details}</Text>
           </Box>
           <Text fontSize={"xl"} fontWeight={'medium'} opacity={"60"}>Read More</Text>
          <ArrowForwardIcon></ArrowForwardIcon>
           </Box>

         
           </Box>
        </div>
    );
};

export default BlogCards;