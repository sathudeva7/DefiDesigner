const LendingPoolPanel = () => {
  const template = `
    <div class="defi-component lending-pool-panel" style="
      background-color: #1c1c22;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #2a2a35;
      width: 300px;
      font-family: 'Inter', sans-serif;
      color: white;
    ">
      <h3 style="
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 16px;
      ">Lending Pools</h3>
      
      <div style="margin-bottom: 16px;">
        <div style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 12px;
          color: #9494a6;
        ">
          <span>Asset</span>
          <span>APY</span>
          <span>Balance</span>
        </div>
        
        <div style="
          background-color: #252530;
          padding: 12px;
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        ">
          <div style="display: flex; align-items: center;">
            <div style="
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background-color: #7c67e6;
              margin-right: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <i class="fas fa-ethereum" style="font-size: 12px; color: white;"></i>
            </div>
            <span>ETH</span>
          </div>
          <div style="color: #3694ff; font-weight: 500;">4.2%</div>
          <div>0.2</div>
        </div>
        
        <div style="
          background-color: #252530;
          padding: 12px;
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        ">
          <div style="display: flex; align-items: center;">
            <div style="
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background-color: #4dabff;
              margin-right: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <i class="fas fa-dollar-sign" style="font-size: 12px; color: white;"></i>
            </div>
            <span>USDC</span>
          </div>
          <div style="color: #3694ff; font-weight: 500;">3.8%</div>
          <div>500</div>
        </div>
        
        <div style="
          background-color: #252530;
          padding: 12px;
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <div style="display: flex; align-items: center;">
            <div style="
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background-color: #ffd166;
              margin-right: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <i class="fas fa-dollar-sign" style="font-size: 12px; color: white;"></i>
            </div>
            <span>DAI</span>
          </div>
          <div style="color: #3694ff; font-weight: 500;">3.5%</div>
          <div>750</div>
        </div>
      </div>
      
      <div style="display: flex; gap: 8px;">
        <button style="
          flex: 1;
          padding: 8px 0;
          background-color: #6e56cf;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease;
        ">Deposit</button>
        <button style="
          flex: 1;
          padding: 8px 0;
          background-color: #252530;
          color: white;
          border: 1px solid #2a2a35;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease;
        ">Withdraw</button>
      </div>
    </div>
  `;

  return template;
};

export default LendingPoolPanel;
