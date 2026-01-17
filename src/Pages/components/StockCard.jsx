import "./css/StockCard.css";

export default function StockCard({
    symbol,
    company,
    sector,
    exchange,
    price,
    change,
    isPositive
}) {
    return (
        <div className="stock-card">
            <div className="card-header">
                <div className="stock-info">
                    <div className="stock-logo">
                        {symbol.slice(0, 2)}
                    </div>

                    <div>
                        <h3>{symbol}</h3>
                        <p>{company}</p>
                    </div>
                </div>

                <span className="material-symbols-outlined">
                    info
                </span>
            </div>
            
            <div className="card-meta">
                <span>{sector}</span>
                <span className="exchange">{exchange}</span>
            </div>

            <div className="card-footer">
                <div>
                    <h2>${price}</h2>
                    <p className={isPositive ? "positive" : "negative"}>
                        {isPositive ? "▲" : "▼"} {change}
                    </p>
                </div>

                <button className="add-btn">
                    <span class="material-symbols-outlined">
                        add
                    </span>
                </button>
            </div>
        </div>
    );
}
