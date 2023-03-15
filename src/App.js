import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchange from "./components/Exchange";
import Header from "./components/Header";
import Home from "./components/Home";
import Notfound from "./components/Notfound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/exchange" element={<Exchange/>} />
        <Route path="/coins/:id" element={<CoinDetails/>} />
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;




// server 
export const server = `https://api.coingecko.com/api/v3`;