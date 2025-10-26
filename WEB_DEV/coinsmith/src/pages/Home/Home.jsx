import React, { useContext, useEffect, useState } from 'react'
import { coinContext } from '../../context/coinContext'
import { Link } from 'react-router-dom';



const Home = () => {
    const {allCoin, currency} = useContext(coinContext);
const[displayCoin, setDisplayCoin] = useState([]);
const[input, setInput] = useState('')



const inputHanlder = (event)=>{
setInput(event.target.value)
if(event.target.value === ""){
  setDisplayCoin(allCoin)
}
}

const searchHandler = async (event)=>{
event.preventDefault();
const coinSearch = await allCoin.filter((item)=>{
return item.name.toLowerCase().includes(input.toLowerCase())
})
setDisplayCoin(coinSearch)

}

useEffect(()=>{
    setDisplayCoin(allCoin);
},[allCoin])
  return (
   <div className="py-0 px-[10px]"> {/* Home */}
      <div className="max-w-xl mx-auto mt-20 flex flex-col items-center text-center" > {/* Hero section*/}
        <div className="mb-8"> {/* Heading and para */}
            <h1 className="text-white font-bold text-5xl">Largest <br/>Crypto Marketplace</h1>
            <p className="text-white text-xl mt-4">Welcome to the world's largest cryptocurrency market place, signup/signin to explore more.</p>
        </div>
        <form onSubmit={searchHandler} className="flex flex-row gap-4 items-center w-full max-w-sm">
            <input onChange={inputHanlder} value={input} list='coinlist' className="w-full bg-transparent text-white border-white border-2 rounded-md p-2" placeholder='Search Crypto' type='text' />
            <datalist id='coinlist'>
              {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
            </datalist>
            <button type='submit' className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-4 py-2 rounded-md transition ">Search</button>
        </form>
      </div>
      <div className="m-auto mt-10 max-w-[800px] bg-teal-200"> {/* Crypto table */}
        <div className=" text-gray font-bold grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] items-center px-[20px] py-[15px] border-b-[#3c3c3c]"> {/* Table layout */}
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h Change</p>
            <p>Market Cap</p>
        </div>
        {displayCoin.slice(0,10).map((item,index)=>(
            <Link to ={`/Coin/${item.id}`} className="  text-gray font-bold grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] items-center px-[20px] py-[15px] border-b-[#3c3c3c]" key={index}>
                <p>{item.market_cap_rank}</p>
                <div>
                    <img className="w-8" src={item.image}/>
                    <p>{item.name + "-" + item.symbol}</p>
                    </div>
                    <p>{currency.symbol}{item.current_price}</p>
                    <p className={item.market_cap_change_24h> 0 ?"text-green-500": "text-red-500"} >{(item.market_cap_change_24h/1000000000).toFixed(2)}</p>
                    <p>{currency.symbol}{item.market_cap}</p>
                </Link>
                
        ))}
      </div>
    </div>
  )
}

export default Home
