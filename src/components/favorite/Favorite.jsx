import React, { useContext, useEffect, useState } from "react";
import { ProductGetByPage } from "../../api/ApiProduct";
import { ProductContext } from "../../context/ProductContext";
import { CategoryJSON } from "../../json";
import ProductInCategorier from "./ProductInCategorier";
// import { useNavigate} from "react-router-dom";

const Favorite = () => {
  // const navigate = useNavigate();
  const [productC, setProductC] = useContext(ProductContext);
  console.log(productC, "asop");
  const [productQuery, setProductQuery] = useState({
    page: 1,
    size: 50,
  });
  const [state, setState] = useState({
    categoryActive: 0,
    hovering: null,
  });
  const [product, setProduct] = useState(null);
  useEffect(() => {
    ProductGetByPage(productQuery.page, productQuery.size)
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="p-5 mb-[100px]">
      <h1 className="font-semibold w-[120px]  text-orange-500 text-lg hover:border-b-[3px] border-orange-300 cursor-pointer">
        Our Favorite
      </h1>
      <br />
      <div className="w-screen">
        <ul className="flex w-screen flex-wrap items-center gap-10">
          {CategoryJSON.category.map((e, i) => {
            return (
              <li
                key={e.id}
                className={`hover:border-b-[2px] border-orange-300 cursor-pointer ${
                  state.categoryActive === i
                    ? true
                    : false
                    ? `border-b-[2px]`
                    : `border-0`
                }`}
                onClick={() => {
                  setState({
                    ...state,
                    categoryActive: i,
                  });
                }}
              >
                {e.name}
                {e.sup === 0 ? null : <sup>{e.sup}</sup>}
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <br />

      <div className="flex-wrap w-screen flex items-center justify-center">
        {product !== null ? (
          product.map((e, i) => {
            return (
              <ProductInCategorier
                kop={e.id}
                src={e.image}
                name={e.name}
                price={e.price}
                length={product.length}
                onClick={async () => {
                  await setProductC({
                    ...productC,
                    opened: true,
                    name: e.name,
                    price: e.price,
                    desc: e.short_description,
                    stock: e.stock,
                    id: e.id,
                    image: e.image,
                  });
                  window.location.href = `#${e.id}`;
                }}
              />
            );
          })
        ) : (
          <p className="flex items-center w-screen justify-center font-bold">
            Sorry!, Nothing Products
          </p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
