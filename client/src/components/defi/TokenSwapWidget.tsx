const TokenSwapWidget = () => {
  const template = `
    <div class="defi-component token-swap-widget" style="
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
      ">Swap Tokens</h3>
      
      <div style="
        margin-bottom: 12px;
        background-color: #252530;
        padding: 12px;
        border-radius: 6px;
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
          font-size: 12px;
          color: #9494a6;
        ">
          <span>From</span>
          <span>Balance: 0.52 ETH</span>
        </div>
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <input type="text" value="0.1" style="
            background-color: transparent;
            border: none;
            color: white;
            font-size: 18px;
            width: 65%;
            outline: none;
          ">
          <div style="
            display: flex;
            align-items: center;
            background-color: #121214;
            padding: 4px 8px;
            border-radius: 4px;
          ">
            <div style="
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #7c67e6;
              margin-right: 8px;
            "></div>
            <span style="color: white; margin-right: 8px;">ETH</span>
            <i class="fas fa-chevron-down" style="font-size: 10px; color: #9494a6;"></i>
          </div>
        </div>
      </div>
      
      <div style="
        text-align: center;
        margin: 8px 0;
      ">
        <button style="
          background-color: #1c1c22;
          border: none;
          padding: 4px;
          border-radius: 4px;
          cursor: pointer;
        ">
          <i class="fas fa-arrow-down" style="color: #3694ff;"></i>
        </button>
      </div>
      
      <div style="
        margin-bottom: 16px;
        background-color: #252530;
        padding: 12px;
        border-radius: 6px;
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
          font-size: 12px;
          color: #9494a6;
        ">
          <span>To</span>
          <span>Balance: 0 USDC</span>
        </div>
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <input type="text" value="135.42" style="
            background-color: transparent;
            border: none;
            color: white;
            font-size: 18px;
            width: 65%;
            outline: none;
          ">
          <div style="
            display: flex;
            align-items: center;
            background-color: #121214;
            padding: 4px 8px;
            border-radius: 4px;
          ">
            <div style="
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #4dabff;
              margin-right: 8px;
            "></div>
            <span style="color: white; margin-right: 8px;">USDC</span>
            <i class="fas fa-chevron-down" style="font-size: 10px; color: #9494a6;"></i>
          </div>
        </div>
      </div>
      
      <button style="
        width: 100%;
        padding: 8px 0;
        background-color: #3694ff;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.15s ease;
      ">Swap Now</button>
    </div>
  `;

  return template;
};

export default TokenSwapWidget;
