import React from 'react'
import "./css/WatchList.css"
import { stocks } from "./components/data"
import OverviewCard from './components/OverviewCard'

// {
//         _id: "6964d854f43c73cffbee35d0",
//         symbol: "RELIANCE",
//         name: "Reliance Industries",
//         exchange: "BSE",
//         sector: "Energy",
//         isActive: true,
//         __v: 0,
//         createdAt: "2026-01-12T11:17:40.047Z",
//         updatedAt: "2026-01-13T14:55:27.021Z",
//         change: 1.08,
//         changePercent: 1.173451905114316,
//         dayHigh: 103.1,
//         dayLow: 65.46,
//         lastPrice: 93.39
//     }
// const stocks = [
//   {
//     name: "Apple Inc.",
//     symbol: "AAPL",
//     exchange: "NASDAQ",
//     price: "$189.20",
//     change: "+1.25%",
//     changeValue: "+$2.34",
//     positive: true,
//     marketCap: "$2.94T",
//   },
//   {
//     name: "Tesla, Inc.",
//     symbol: "TSLA",
//     exchange: "NASDAQ",
//     price: "$240.50",
//     change: "-0.85%",
//     changeValue: "-$2.05",
//     positive: false,
//     marketCap: "$764.2B",
//   },
//   {
//     name: "NVIDIA Corp",
//     symbol: "NVDA",
//     exchange: "NASDAQ",
//     price: "$450.10",
//     change: "+3.10%",
//     changeValue: "+$13.50",
//     positive: true,
//     marketCap: "$1.11T",
//   },
//   {
//     name: "Microsoft Corp",
//     symbol: "MSFT",
//     exchange: "NASDAQ",
//     price: "$374.07",
//     change: "+0.42%",
//     changeValue: "+$1.56",
//     positive: true,
//     marketCap: "$2.78T",
//   },
// ];

const WatchList = () => {
  return (
    <>

    <div className="overview-cards">
            <OverviewCard
              title="Total Portfolio Value"
              value="$124,500.00"
              sub="+2.4%"
              subText="Today"
              positive
              icon="trending_up"
            />
    
            <OverviewCard
              title="Total Invested"
              value="$98,200.00"
              subText="Across 14 assets"
              icon="account_balance_wallet"
            />
    
            <OverviewCard
              title="Overall Profit/Loss"
              value="+$26,300.00"
              sub="+26.8%"
              subText="All time"
              positive
              icon="stars"
            />
          </div>



      <div className="market-table">
        <div className="table-header">
          <span>Asset</span>
          <span>Current Price</span>
          <span>24H Performance</span>
          <span>Market Cap</span>
          <span></span>
        </div>

        {stocks.map((stock) => (
          <div className="table-row" key={stock._id}>
            <div className="asset">
              <div className="logos">{stock.symbol[0]}</div>
              <div>
                <strong>{stock.name}</strong>
                <p>
                  {stock.symbol} • {stock.exchange}
                </p>
              </div>
            </div>

            <div className="price">{stock.lastPrice}</div>

            <div
              className={`performance ${stock.isActive ? "positive" : "negative"
                }`}
            >
              <span className="material-symbols-outlined">
                {stock.isActive ? "trending_up" : "trending_down"}
              </span>
              {stock.dayHigh} / {stock.dayLow}
            </div>

            <div className="market-cap">{stock.sector}</div>

            <div className="actions">
              <button className="buy"><span>
                BUY
              </span></button>
              <button className="sell"><span>SELL</span></button>

              <span class="material-symbols-outlined bar">
                bar_chart
              </span>

              <span className="material-symbols-outlined more">
                more_vert
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WatchList