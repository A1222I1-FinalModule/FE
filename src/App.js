import logo from "./logo.svg";
// import "./App.css";
import ProductList from "./Components/product/ProductList";
import InfoProductCreate from "./Components/product/InfoProductCreate";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MainRouter from "./Routes";

function App() {
  return (
    <>
       <MainRouter/>
    </>

  );
}

export default App;
