import React from "react"; // 類似 JQuery, 寫好的 API ,Hook，元件寫法
import ReactDOM from "react-dom/client"; // 網頁如同白紙， ReactDOM會把你寫好的元件，畫在白紙上面
import "./index.css";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
