import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { getUsers, getAllFollowers } from "./apis/githubAPI";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

function App() {
  // getUsers("cklee9").then((data) => console.log(data));
  // getAllFollowers("cklee9").then((data) => console.log(data));
  return (
    <BrowserRouter>
      <Header></Header>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
