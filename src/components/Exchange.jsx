import { Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import ErrorCom from "./ErrorCom";
import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../App";

const Exchange = () => {
  const [exchanges, setEchanges] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const exchangeData = async () => {
    try {
      const { data } = await axios.get(`${server}/exchanges`);
      setEchanges(data);
      setLoader(false);
    } catch (error) {
      setError(true)
      setLoader(false)
    }
    };
    exchangeData();
  }, []);
   if(error){
    return <ErrorCom message="" />
   }
  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} >
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                url={i.url}
                img={i.image}
                rank={i.trust_score_rank}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};


export default Exchange;


// Ranada Company

// DBL
