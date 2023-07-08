import { Box,  Flex, Image, Text } from "@chakra-ui/react";


const AirportServiceCard = ({item, oddCard}) => {
    const {image, details} = item

    let isOddCard = true;

    if(oddCard > 0 && oddCard % 2 === 1){
    isOddCard = false;
    }

    return (
        <div>
             <Box  my={10}>
             <Flex gap={10} flexDirection={isOddCard ? "row" : "row-reverse"} justifyItems={"center"} alignItems={'center'}>
          <Box flex={1}>
            <Image src={image} w={"50vw"} h={"100vh"} shadow={"lg"} />
          </Box>
          <Box flex={1}>
            <Text w={"50vw"} textAlign={'center'}>{details}</Text>
          </Box>
        </Flex>



        </Box>


        </div>
    );
};

export default AirportServiceCard;