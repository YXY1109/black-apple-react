import React from "react";
import ReactDOM from "react-dom/client";
import { NEW_ARRIVALS_LIST } from "@assets/data/index";
import ProductList from "@components/ProductList";

function App() {
  return (
    <div>
      <ProductList data={NEW_ARRIVALS_LIST} />
    </div>
  );
}

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
// rootElement.render(<App />);
//严格模式，推荐使用，开发环境会额外检查潜在问题，生产环境不会影响性能
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
