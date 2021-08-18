import Web3 from "web3";
import { useMoralis } from "react-moralis";
import { Box } from "@chakra-ui/react";

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

  return <div></div>;
}

export default App;
