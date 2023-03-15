import { Heading, Image, Text, VStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import React from 'react'

const CoinsCard = ({id, name, img, symbol, currencySymbol= " $ ", price }) => {
    
  return (
    <Link to={`/coins/${id}`} target={"blank"}>
    <VStack w={"52"} shadow={"lg"} borderRadius={"10"} p={"8"} transition={"all 0.3s "} m={"4"} mt={"10"}
        css={{"&:hover":{
            transform:"scale(1.1)"
        }}}
    >
     <Image src={img} w={"10"} h={"10"} objectFit={"contain"}  />
     <Heading size={"md"} noOfLines={"1"}>{symbol}</Heading>
     <Text noOfLines={"1"}>{name}</Text>
     <Text noOfLines={"1"}>{price ? `${currencySymbol}${price}`: "NA"}</Text>
    </VStack>
     </Link>
  )
}

export default CoinsCard;