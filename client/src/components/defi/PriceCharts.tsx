const PriceCharts = () => {
  const template = `
    <div class="defi-component price-charts" style="
      background-color: #1c1c22;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #2a2a35;
      width: 400px;
      font-family: 'Inter', sans-serif;
      color: white;
    ">
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      ">
        <h3 style="
          font-size: 16px;
          font-weight: 500;
          color: white;
        ">ETH Price</h3>
        
        <div style="
          display: flex;
          gap: 8px;
        ">
          <button style="
            padding: 4px 8px;
            background-color: #6e56cf;
            border: none;
            border-radius: 4px;
            color: white;
            font-size: 12px;
          ">1D</button>
          <button style="
            padding: 4px 8px;
            background-color: #252530;
            border: none;
            border-radius: 4px;
            color: white;
            font-size: 12px;
          ">1W</button>
          <button style="
            padding: 4px 8px;
            background-color: #252530;
            border: none;
            border-radius: 4px;
            color: white;
            font-size: 12px;
          ">1M</button>
          <button style="
            padding: 4px 8px;
            background-color: #252530;
            border: none;
            border-radius: 4px;
            color: white;
            font-size: 12px;
          ">1Y</button>
        </div>
      </div>
      
      <div style="
        height: 180px;
        margin-bottom: 16px;
        position: relative;
        background-color: #252530;
        border-radius: 6px;
        overflow: hidden;
      ">
        <!-- Chart mockup -->
        <div style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(180deg, rgba(54, 148, 255, 0.2) 0%, rgba(54, 148, 255, 0) 100%);
        "></div>
        
        <svg viewBox="0 0 400 150" style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
        ">
          <path d="M0,100 C20,80 40,110 60,70 C80,30 100,90 120,60 C140,40 160,70 180,50 C200,30 220,40 240,20 C260,30 280,60 300,50 C320,40 340,50 360,30 C380,20 400,30 400,30" 
                fill="none" 
                stroke="#3694ff" 
                stroke-width="2" />
        </svg>
        
        <div style="
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          flex-direction: column;
        ">
          <div style="font-size: 24px; font-weight: 600;">$1,456.78</div>
          <div style="
            color: #4ade80;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 4px;
          ">
            <i class="fas fa-caret-up"></i>
            <span>2.4%</span>
          </div>
        </div>
      </div>
      
      <div style="
        display: flex;
        justify-content: space-between;
      ">
        <div style="
          padding: 12px;
          background-color: #252530;
          border-radius: 6px;
          flex: 1;
          margin-right: 8px;
        ">
          <div style="font-size: 12px; color: #9494a6; margin-bottom: 4px;">24h Volume</div>
          <div style="font-weight: 500;">$2.4B</div>
        </div>
        <div style="
          padding: 12px;
          background-color: #252530;
          border-radius: 6px;
          flex: 1;
          margin-right: 8px;
        ">
          <div style="font-size: 12px; color: #9494a6; margin-bottom: 4px;">Market Cap</div>
          <div style="font-weight: 500;">$175.8B</div>
        </div>
        <div style="
          padding: 12px;
          background-color: #252530;
          border-radius: 6px;
          flex: 1;
        ">
          <div style="font-size: 12px; color: #9494a6; margin-bottom: 4px;">All Time High</div>
          <div style="font-weight: 500;">$4,891.70</div>
        </div>
      </div>
    </div>
  `;

  return template;
};

export default PriceCharts;
