const TwoColumns = () => {
  const template = `
    <div class="two-columns-layout" style="
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      padding: 24px;
      font-family: 'Inter', sans-serif;
    ">
      <div style="
        background-color: #1c1c22;
        padding: 24px;
        border-radius: 8px;
        border: 1px solid #2a2a35;
      ">
        <h3 style="
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 16px;
          color: white;
        ">Left Column</h3>
        
        <p style="
          color: #e1e1e3;
          margin-bottom: 16px;
          line-height: 1.5;
        ">
          This is the left column of the two-column layout. You can add any content here,
          such as text, images, or DeFi components.
        </p>
        
        <button style="
          padding: 8px 16px;
          background-color: #6e56cf;
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
        padding: 24px;
        border-radius: 8px;
        border: 1px solid #2a2a35;
      ">
        <h3 style="
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 16px;
          color: white;
        ">Right Column</h3>
        
        <p style="
          color: #e1e1e3;
          margin-bottom: 16px;
          line-height: 1.5;
        ">
          This is the right column of the two-column layout. You can add any content here,
          such as text, images, or DeFi components.
        </p>
        
        <button style="
          padding: 8px 16px;
          background-color: #3694ff;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.15s ease;
        ">View Details</button>
      </div>
    </div>
  `;

  return template;
};

export default TwoColumns;
