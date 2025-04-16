const HeroSection = () => {
  const template = `
    <div class="hero-section" style="
      padding: 32px;
      background: linear-gradient(to right, rgba(110, 86, 207, 0.2), rgba(54, 148, 255, 0.2));
      font-family: 'Inter', sans-serif;
    ">
      <div style="
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
      ">
        <h1 style="
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 16px;
          color: white;
        ">Create Your DeFi App in Minutes</h1>
        
        <p style="
          color: #e1e1e3;
          margin-bottom: 32px;
          font-size: 16px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        ">Build powerful decentralized finance applications without writing a single line of code.</p>
        
        <div style="
          display: flex;
          justify-content: center;
          gap: 16px;
        ">
          <button style="
            padding: 8px 24px;
            background-color: #6e56cf;
            color: white;
            border: none;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.15s ease;
          ">Get Started</button>
          
          <button style="
            padding: 8px 24px;
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
    </div>
  `;

  return template;
};

export default HeroSection;
