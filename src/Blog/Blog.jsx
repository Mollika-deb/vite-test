import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import img1 from '../assets/blog.png'
import img2 from '../assets/blog2.png'
import img3 from '../assets/blog3.png'
import img4 from '../assets/blog4.png'
import BlogCards from './BlogCards';

const Blog = () => {

    const items = [
        {
            image: img1,
            title: "Developing Extraordinary Faith",
            date:"June 20, 2023",
            details:"In 2013, our friends Scott and Jen Obremski felt led to start a new church in Kansas City, Missouri. Upon hearing about this new venture, Ashley and I sensed that God wanted us to go too. We knew God was up to something special, because He spoke to many people-individuals, couples, and families-about participating in…"
        },
        {
            image: img2,
            title: "Developing Extraordinary Faith",
            date:"June 20, 2023",
            details:"In 2013, our friends Scott and Jen Obremski felt led to start a new church in Kansas City, Missouri. Upon hearing about this new venture, Ashley and I sensed that God wanted us to go too. We knew God was up to something special, because He spoke to many people-individuals, couples, and families-about participating in…"
        },
        {
            image: img3,
            title: "Developing Extraordinary Faith",
            date:"June 20, 2023",
            details:"In 2013, our friends Scott and Jen Obremski felt led to start a new church in Kansas City, Missouri. Upon hearing about this new venture, Ashley and I sensed that God wanted us to go too. We knew God was up to something special, because He spoke to many people-individuals, couples, and families-about participating in…"
        },
        {
            image: img4,
            title: "Developing Extraordinary Faith",
            date:"June 20, 2023",
            details:"In 2013, our friends Scott and Jen Obremski felt led to start a new church in Kansas City, Missouri. Upon hearing about this new venture, Ashley and I sensed that God wanted us to go too. We knew God was up to something special, because He spoke to many people-individuals, couples, and families-about participating in…"
        },
    ]

    return (
        <div>
            <Box bgImage={"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.6)), url(https://xdemos.site/xpedia/images/title_bg.jpg)"} py={16}  bgRepeat="no-repeat"
      bgSize="cover" px={32}
      
      backgroundAttachment={"fixed"}>

        <Heading color={'white'} fontWeight={'medium'} >NEWBREED BLOG</Heading>
        <Text color={'white'} fontSize={'3xl'} fontWeight={'normal'} mt={10}>You're not alone. Learn from other leaders that are serving in the trenches.</Text>

            </Box>


            <Container maxW={'80vw'} mx={'auto'} >

                {
                    items.map((item, index) =>{
                        return <BlogCards item={item} key={index}></BlogCards>
                    })
                }

            </Container>
        </div>
    );
};

export default Blog;