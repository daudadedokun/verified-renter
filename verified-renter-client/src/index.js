import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import logger from "./services/logService";
import "./index.css";
import App from "./App";
import Footer from "./components/footer";
import registerServiceWorker from "./registerServiceWorker";

logger.init();
ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </div>,
  document.getElementById("main")
);
registerServiceWorker();
