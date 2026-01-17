import React from 'react'

const Hero = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome back, Alex</h2>
        <p>Here's a snapshot of your portfolio's performance today.</p>
      </div>

      <div className="stats">
        <StatCard
          icon="account_balance_wallet"
          label="Virtual Balance"
          value="$24,500.00"
          iconBg="teal"
        />

        <StatCard
          icon="trending_up"
          label="Total Invested"
          value="$18,200.50"
          iconBg="blue"
        />

        <StatCard
          icon="monitoring"
          label="Profit/Loss"
          value="+$1,240.20"
          sub="+6.8%"
          positive
          iconBg="green"
        />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, sub, positive, iconBg }) {
  return (
    <div className="stat-card">
      <div className={`icon-box ${iconBg}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <div className="stat-content">
        <span className="label">{label}</span>
        <div className="value-row">
          <h3 className={positive ? "positive" : ""}>{value}</h3>
          {sub && <span className="sub">{sub}</span>}
        </div>
      </div>
    </div>
  );
}


export default Hero