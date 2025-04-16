const ConnectWalletFn = (editor) => {
  editor.DomComponents.addType("connect-btn", {
    model: {
      defaults: {
        draggable: false,
        badgable: false,
        toolbar: [],
        droppable: false,
        script: function () {
          const walletBtn = document.getElementById("wallet-btn");

          walletBtn.addEventListener("click", async () => {
            if (window.ethereum) {
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              this.innerText =
                "Connected: " +
                accounts[0].slice(0, 6) +
                "..." +
                accounts[0].slice(-4);
            } else {
              alert("MetaMask not detected!");
            }
          });
        },
      },
    },
  });
};

export default ConnectWalletFn;
