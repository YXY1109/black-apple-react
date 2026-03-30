import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello, React1234!</h1>
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
