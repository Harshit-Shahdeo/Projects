import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coinContext } from '../../../context/coinContext';
import LineChart from '../../../components/LineChart';


const Coin = () => {

const {coinId} = useParams(); 
const [coinData, setCoinData] = useState();
const {currency} = useContext(coinContext); 
const[coinHistory, setCoinHistory] = useState();


const fetchcoinData = async ()=>{
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`;
const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-pEiCN2VVvDK9EDc3f7MngvCc'}, body: undefined};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  setCoinData(data);
} catch (error) {
  console.error(error);
}
}

const fetchCoinHistory = async ()=>{const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`;
const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-pEiCN2VVvDK9EDc3f7MngvCc'}, body: undefined};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  setCoinHistory(data)
} catch (error) {
  console.error(error);
}}


useEffect(()=>{
  fetchCoinHistory();
  fetchcoinData();
},[coinId,currency])
// src/pages/Home/Coin/Coin.jsx

// ... (imports and functions remain the same) ...

useEffect(()=>{
  fetchCoinHistory();
  fetchcoinData();
},[coinId,currency])

if(coinData && coinHistory){return (
    //  Main container: Centered with padding
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      
      {/* Coin header */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <img src ={coinData.image.large} alt={coinData.name} className="w-20 h-20"/>
        <p className="text-white text-4xl font-bold"><b>{coinData.name}</b> ({coinData.symbol.toUpperCase()})</p>
      </div>

      {/*  Flex container for Chart + Info Box */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Chart (Left Side) */}
        <div className="flex-grow lg:w-2/3 h-96">
          <LineChart coinHistory={coinHistory}/>
        </div>

        {/* Info Box (Right Side) */}
        <div className="lg:w-1/3">
          {/*  Styled info card */}
          <div className="bg-[#203a43] p-6 rounded-lg shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Market Stats</h3>
            
            <ul className="space-y-3">
              <li className="flex justify-between py-3 border-b border-gray-600">
                <span className="text-gray-300">Market Cap Rank</span>
                <span className="text-white font-semibold">#{coinData.market_cap_rank}</span>
              </li>
              <li className="flex justify-between py-3 border-b border-gray-600">
                <span className="text-gray-300">Current Price</span>
                <span className="text-white font-semibold">{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</span>
              </li>
              <li className="flex justify-between py-3 border-b border-gray-600">
                <span className="text-gray-300">24 Hour High</span>
                <span className="text-green-500 font-semibold">{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-gray-300">24 Hour Low</span>
                <span className="text-red-500 font-semibold">{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )}
  else{
    return (
    <div className="flex justify-center items-center h-screen">
     <p className="text-white text-2xl font-bold"><b>Loading...</b></p>
    </div>
  )
  }
  
}

export default Coin