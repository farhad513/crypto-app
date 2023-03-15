import { Button, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import CoinsCard from './CoinsCard';
import ErrorCom from "./ErrorCom";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../App";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCourency] = useState("usd");
  // const currencySymbol = currency === "usd" : ""
  const changePage = (page) => {
    setPage(page)
    setLoader(false)
  }
  const buttons = new Array(10).fill(1);
  useEffect(() => {
    const coinsData = async () => {
    try {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      console.log(data);
      setLoader(false);
    } catch (error) {
      setError(true)
      setLoader(false)
    }
    };
    coinsData();
  }, [currency,page]);
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
            {coins.map((i) => (
              <CoinsCard
                key={i.id}
                name={i.name}
                url={i.url}
                img={i.image}
                price={i.current_price}
                symbol={i.symbol}
                // currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <div>
             {
              buttons.map((item,index)=> (
                <button className="btn_style" onClick={()=> changePage(index+1)}>{index + 1}</button>
              ))
             }
            </div>

          
           {/* <HStack m={2} alignItems={"center"}>
            {
              buttons.map((item,index)=> (
                <Button bgColor={"black"} color={"white"} textAlign={"center"} alignItems={"center"}  
                mx={2} onClick={()=> changePage(index+1)}>{index + 1}</Button>
              ))
            }
          </HStack>  */}
        </>
      )}
    </Container>
  );
};


export default Coins


