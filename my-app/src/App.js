import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
