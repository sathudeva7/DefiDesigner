const YieldFarmingSection = () => {
  const template = `
    <div class="defi-component yield-farming-section" style="
      background-color: #1c1c22;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #2a2a35;
      width: 300px;
      font-family: 'Inter', sans-serif;
    ">
      <h3 style="
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 16px;
        color: white;
      ">Yield Farming</h3>
      
      <div style="
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 16px;
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background-color: #252530;
          border-radius: 6px;
        ">
          <div style="display: flex; align-items: center;">
            <div style="
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #7c67e6;
              margin-right: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <i class="fas fa-coins" style="font-size: 14px; color: white;"></i>
            </div>
            <div>
              <div style="font-weight: 500; color: white;">ETH-USDC LP</div>
              <div style="font-size: 12px; color: #9494a6;">Uniswap V3</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 500; color: #3694ff;">12.5% APY</div>
            <div style="font-size: 12px; color: #9494a6;">$1,245 TVL</div>
          </div>
        </div>
        
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background-color: #252530;
          border-radius: 6px;
        ">
          <div style="display: flex; align-items: center;">
            <div style="
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #4dabff;
              margin-right: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <i class="fas fa-coins" style="font-size: 14px; color: white;"></i>
            </div>
            <div>
              <div style="font-weight: 500; color: white;">DAI Vault</div>
              <div style="font-size: 12px; color: #9494a6;">Aave V3</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 500; color: #3694ff;">8.2% APY</div>
            <div style="font-size: 12px; color: #9494a6;">$3,450 TVL</div>
          </div>
        </div>
        
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background-color: #252530;
          border-radius: 6px;
        ">
          <div style="display: flex; align-items: center;">
            <div style="
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #ef4444;
              margin-right: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <i class="fas fa-coins" style="font-size: 14px; color: white;"></i>
            </div>
            <div>
              <div style="font-weight: 500; color: white;">wBTC-ETH LP</div>
              <div style="font-size: 12px; color: #9494a6;">SushiSwap</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 500; color: #3694ff;">9.8% APY</div>
            <div style="font-size: 12px; color: #9494a6;">$2,890 TVL</div>
          </div>
        </div>
      </div>
      
      <button style="
        width: 100%;
        padding: 8px 0;
        background-color: #6e56cf;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.15s ease;
      ">View All Pools</button>
    </div>
  `;

  return template;
};

export default YieldFarmingSection;
