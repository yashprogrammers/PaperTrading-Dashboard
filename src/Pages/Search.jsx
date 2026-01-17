import React, { useEffect, useState } from 'react'
import StockCard from './components/StockCard'
import "./css/Search.css"
import { stocks } from "./components/data"

// export const stock = [
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   },
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   },
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   },
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   },
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   },
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   },
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   },
//   {
//     symbol: "NVDA",
//     company: "NVIDIA Corporation",
//     sector: "TECHNOLOGY",
//     exchange: "NASDAQ",
//     price: "912.45",
//     change: "+3.24%",
//     isPositive: true
//   },
//   {
//     symbol: "TSLA",
//     company: "Tesla, Inc.",
//     sector: "CONSUMER CYCLICAL",
//     exchange: "NASDAQ",
//     price: "175.22",
//     change: "-1.12%",
//     isPositive: false
//   }
// ];

const Search = () => {
  
  return (
    <>
      <div className="search-market">
        <h1>Search Markets</h1>
        <p>Explore global equities, ETFs, and indices</p>

        <div className="search-box">
          <span className="material-symbols-outlined">
            search
          </span>

          <input
            type="text"
            placeholder="Search by company name or ticker symbol (e.g. AAPL, Tesla)"
          />

          <div className="tags">
            <span>CMD</span>
            <span>K</span>
          </div>
        </div>
      </div>


      <div className="card-container">
        {stocks.map((stock) => (
          <StockCard
            key={stock._id}
            symbol={stock.symbol}
            company={stock.name}
            sector={stock.sector}
            exchange={stock.exchange}
            price={stock.dayHigh}
            change={stock.change}
            isPositive={stock.isActive}
          />
        ))}
      </div>
    </>
  );
}

export default Search