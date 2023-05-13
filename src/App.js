import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" index element={<Home></Home>}></Route>
          <Route path="/category/:id" element={<Category></Category>}></Route>
          <Route path="/:id" element={<SingleProduct></SingleProduct>}></Route>
        </Routes>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
