import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <Box bgImage={"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.6)), url(https://xdemos.site/xpedia/images/title_bg.jpg)"} py={16}  bgRepeat="no-repeat"
      bgSize="cover" px={32}
      
      backgroundAttachment={"fixed"}>

        <Heading color={'white'} fontWeight={'medium'} >NEWBREED BLOG</Heading>
        <Text color={'white'} fontSize={'3xl'} fontWeight={'normal'} mt={10}>You're not alone. Learn from other leaders that are serving in the trenches.</Text>

            </Box>
        </div>
    );
};

export default Blog;