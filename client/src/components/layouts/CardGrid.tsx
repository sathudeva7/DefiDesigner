const CardGrid = () => {
  const template = `
    <div class="card-grid" style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 24px;
      font-family: 'Inter', sans-serif;
    ">
      <div style="
        background-color: #1c1c22;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #2a2a35;
      ">
        <div style="
          width: 40px;
          height: 40px;
          background-color: #6e56cf;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        ">
          <i class="fas fa-wallet" style="color: white; font-size: 16px;"></i>
        </div>
        
        <h3 style="
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 12px;
          color: white;
        ">Connect Wallet</h3>
        
        <p style="
          color: #9494a6;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 16px;
        ">
          Connect your crypto wallet to interact with the DeFi ecosystem securely.
        </p>
        
        <button style="
          width: 100%;
          padding: 8px 0;
          background-color: #252530;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease;
        ">Learn More</button>
      </div>
      
      <div style="
        background-color: #1c1c22;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #2a2a35;
      ">
        <div style="
          width: 40px;
          height: 40px;
          background-color: #3694ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        ">
          <i class="fas fa-exchange-alt" style="color: white; font-size: 16px;"></i>
        </div>
        
        <h3 style="
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 12px;
          color: white;
        ">Swap Tokens</h3>
        
        <p style="
          color: #9494a6;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 16px;
        ">
          Exchange one cryptocurrency for another quickly with lowest fees.
        </p>
        
        <button style="
          width: 100%;
          padding: 8px 0;
          background-color: #252530;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease;
        ">Learn More</button>
      </div>
      
      <div style="
        background-color: #1c1c22;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #2a2a35;
      ">
        <div style="
          width: 40px;
          height: 40px;
          background-color: #10b981;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        ">
          <i class="fas fa-coins" style="color: white; font-size: 16px;"></i>
        </div>
        
        <h3 style="
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 12px;
          color: white;
        ">Lending</h3>
        
        <p style="
          color: #9494a6;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 16px;
        ">
          Lend your crypto assets and earn interest on your holdings passively.
        </p>
        
        <button style="
          width: 100%;
          padding: 8px 0;
          background-color: #252530;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease;
        ">Learn More</button>
      </div>
      
      <div style="
        background-color: #1c1c22;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #2a2a35;
      ">
        <div style="
          width: 40px;
          height: 40px;
          background-color: #f59e0b;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        ">
          <i class="fas fa-seedling" style="color: white; font-size: 16px;"></i>
        </div>
        
        <h3 style="
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 12px;
          color: white;
        ">Yield Farming</h3>
        
        <p style="
          color: #9494a6;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 16px;
        ">
          Maximize your returns through advanced yield farming strategies.
        </p>
        
        <button style="
          width: 100%;
          padding: 8px 0;
          background-color: #252530;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease;
        ">Learn More</button>
      </div>
    </div>
  `;

  return template;
};

export default CardGrid;
