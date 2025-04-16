const ConnectWalletButton = () => {
  const template = `
    <div data-gjs-type="connect-btn" class="defi-component connect-wallet-button">
      <button  id="wallet-btn" class="connect-wallet-btn" style="
        display: inline-block;
        padding: 10px 20px;
        background-color: #6e56cf;
        color: white;
        border: none;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.15s ease;
      ">
        <i class="fas fa-wallet" style="margin-right: 8px;"></i>
        Connect Wallet
      </button>
    </div>
  `;

  return template;
};

export default ConnectWalletButton;
