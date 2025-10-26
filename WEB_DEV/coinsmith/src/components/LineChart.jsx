import React, { useEffect } from 'react'
import Chart from 'react-google-charts';
import { useState } from 'react';


const LineChart = ({coinHistory}) => {

     const[data, setData] = useState([["Date", "Price"]])
     useEffect(()=>{
        let dataCopy = [["Date", "Price"]];
        if(coinHistory.prices){
            coinHistory.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })
            setData(dataCopy)
        }
     },[coinHistory])
  return (
    <Chart
    chartType='LineChart'
    data = {(data)}
    height="100%"
    width = "100%"
    legendToggle
    />
  )
}

export default LineChart
