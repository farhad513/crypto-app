import { Heading, Image, Text, VStack } from '@chakra-ui/react';

import React from 'react'

const ExchangeCard = ({name, img, url, rank}) => {
    // const {name, img, url, rank} = props;
    // console.log(props.name);
  return (
    <a href={url} target={"blank"}>
    <VStack w={"52"} shadow={"lg"} borderRadius={"10"} p={"8"} transition={"all 0.3s "} m={"4"} mt={"10"}
        css={{"&:hover":{
            transform:"scale(1.1)"
        }}}
    >
     <Image src={img} w={"10"} h={"10"} objectFit={"contain"}  />
     <Heading size={"md"} noOfLines={"1"}>{rank}</Heading>
     <Text noOfLines={"1"}>{name}</Text>
    </VStack>
     </a>
  )
}

export default ExchangeCard;