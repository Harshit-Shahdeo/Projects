import { createContext, useEffect, useState } from "react";

export const coinContext = createContext();

export const CoinContextProvider = (props)=>{

    const[allCoin, setAllcoin] = useState([]);
    const[currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    

    const fetchAllCoin = async()=>{
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
const options = {
  method: 'GET',
  headers: {'x-cg-demo-api-key': 'CG-pEiCN2VVvDK9EDc3f7MngvCc'},
  body: undefined
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  setAllcoin(data);
} catch (error) {
  console.error(error);
}
    }

    useEffect(()=>{
        fetchAllCoin();
    }, [currency])

    const contextValue ={
        allCoin, currency, setCurrency
    }

    return (
        <coinContext.Provider value ={contextValue}>
            {props.children}
        </coinContext.Provider>
    )
}