import React, { useContext } from 'react'
import { coinContext } from '../context/coinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {setCurrency} = useContext(coinContext);

    const currencyHandler = (event)=>{
         switch (event.target.value){
            case"USD":{
                setCurrency({
                    name:"usd",
                    symbol:"$"
                });
                break;
            }
            case"INR":{
                setCurrency({
                    name: "inr",
                    symbol: "₹"           
                })
                break;
            }
            default:
                setCurrency({
                    name:"usd",
                    symbol:"$"
                });

         }
    }
     
  return (
    <div className=" bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-4 flex justify-between items-center border-b border-gray-500">
        <div className="flex gap-4 text-white font-bold">
         <select onChange={currencyHandler}>
            <option className="text-black">USD</option>
            <option className="text-black">INR</option>
         </select>

        </div>
      <ul className="flex gap-12 list-none px-30 cursor-pointer font-bold ">
       <Link to={'/'}> <li>Home</li></Link>
        <li>Coins</li>
        <li>About Us</li>
        <li>Pricing</li>
      </ul>
    </div>
  )
}

export default Navbar
