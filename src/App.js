import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import TwitterUser from "./components/TwitterUser";
import ConnectScreen from "./components/ConnectScreen";

function App() {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userName, setUserName] = useState("");
  const [walletConnected, setWalletConnected] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setUserDisplayName("");
    setUserName("");
    setWalletConnected("");
  }, []);

  return (
    <div className="App">
      <NavBar
        setUserDisplayName={setUserDisplayName}
        userName={userName}
        setUserName={setUserName}
        walletConnected={walletConnected}
        setWalletConnected={setWalletConnected}
        accounts={accounts}
        setAccounts={setAccounts}
      />
      <div className="content-container">
        <ConnectScreen
          userDisplayName={userDisplayName}
          userName={userName}
          setUserDisplayName={setUserDisplayName}
          setUserName={setUserName}
          accounts={accounts}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </div>
    </div>
  );
}

export default App;
