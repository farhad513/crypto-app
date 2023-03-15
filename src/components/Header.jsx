import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      
        <Button variant={"unStyled"} color={"white"}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={"unStyled"} color={"white"}>
          <Link to={"/coins"}>Coins</Link>
        </Button>
        <Button variant={"unStyled"} color={"white"}>
          <Link to={"/exchange"}>Exchanges</Link>
        </Button>
    
    </div>
  );
};

export default Header;



/// <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>/

// </HStack>