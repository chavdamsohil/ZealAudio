import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg";
import cat3 from "../../../assets/category/cat-3.jpg";
import cat4 from "../../../assets/category/cat-4.jpg";
import { Link } from "react-router-dom";

const CategoryHome = () => {
  const categoryImg2 = [
    { id: 1, img: cat1, category: "headphone" },
    { id: 2, img: cat2, category: "speaker" },
    { id: 3, img: cat3, category: "smartwatch" },
    { id: 4, img: cat4, category: "earpod" },
  ];

  return (
    <div className="shop-by-category" id="category">
      <div className="categories">
        {categoryImg2.map(({ img, id, category }) => {
          return (
            <div className="category" key={id}>
              <Link to={`category/` + id}>
                <img src={img} alt="category" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryHome;
