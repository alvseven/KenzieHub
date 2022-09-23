import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";

import Global from "./styles/global";

function App() {
  return (
    <>
      <Routes />
      <Global />
      <ToastContainer />
    </>
  );
}

export default App;
