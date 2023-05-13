import Banner from "./Banner/Banner";

import "./Home.scss";

import CategoryHome from "./Category/CategoryHome";
import PopularProduct from "../Products/Product/PopularProduct";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <section className="main-content">
        <div className="layout">
          <CategoryHome></CategoryHome>
          <PopularProduct></PopularProduct>
        </div>
      </section>
    </div>
  );
};

export default Home;
