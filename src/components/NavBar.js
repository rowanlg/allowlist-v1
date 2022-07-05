import React, { useState } from "react";
import "../styles/NavBar.scss";

const NavBar = ({
  setUserDisplayName,
  userName,
  setUserName,
  setUserImg,
  accounts,
  setAccounts,
}) => {
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <nav className="navbar-container">
      <h2>allowlist</h2>
      <button
        className="connect-button"
        onClick={() => {
          // setWalletConnected(!walletConnected);
          if (accounts[0]) {
            setAccounts([]);
          } else {
            connectAccount();
          }
        }}
      >
        {accounts[0] ? "Disconnect" : "Connect"}
      </button>
    </nav>
  );
};
export default NavBar;
