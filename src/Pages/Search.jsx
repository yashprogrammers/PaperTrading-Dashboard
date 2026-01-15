import React from 'react'
import StockCard from './components/StockCard'
import "./css/Search.css"

export const stocks = [
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  },
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  },
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  },
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  },
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  },
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  },
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  },
  {
    symbol: "NVDA",
    company: "NVIDIA Corporation",
    sector: "TECHNOLOGY",
    exchange: "NASDAQ",
    price: "912.45",
    change: "+3.24%",
    isPositive: true
  },
  {
    symbol: "TSLA",
    company: "Tesla, Inc.",
    sector: "CONSUMER CYCLICAL",
    exchange: "NASDAQ",
    price: "175.22",
    change: "-1.12%",
    isPositive: false
  }
];



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
            key={stock.symbol}
            symbol={stock.symbol}
            company={stock.company}
            sector={stock.sector}
            exchange={stock.exchange}
            price={stock.price}
            change={stock.change}
            isPositive={stock.isPositive}
          />
        ))}
      </div>
    </>
  );
}

export default Search