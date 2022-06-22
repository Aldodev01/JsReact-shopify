import React, { useContext, useState } from "react";
import "./Detail.css";
import {
  AiFillTwitterCircle,
  AiOutlineCloseCircle,
  AiOutlineLoading,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { ImLeaf } from "react-icons/im";
import { GiCrackedGlass } from "react-icons/gi";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { ProductContext } from "../../context/ProductContext";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi obcaecati neque explicabo commodi totam veritatis excepturi quo illo ut natus omnis, similique maiores nulla. Perspiciatis dolorum sunt voluptate ipsa";

const Detail = ({
  id,
  name,
  price,
  disc,
  size,
  stock,
  src,
  desc = description,
  onClickRightbar,
  loading,
}) => {
  const [productC, setProductC] = useContext(ProductContext);
  const [state, setState] = useState({
    sizeActive: 0,
    name: "Small",
    option: false,
  });

  const buttones = [
    {
      id: 0,
      name: "Small",
      link: "",
    },
    {
      id: 1,
      name: "Medium",
      link: "",
    },
    {
      id: 2,
      name: "Large",
      link: "",
    },
  ];
  return (
    <div className="w-screen p-[2%]" key={id} id={id}>
      <div
        className={`w-full bg-orange-100 flex flex-col md:flex-row justify-center gap-[20px]`}
      >
        <div className="w-full md:w-6/12">
          <img src={src} className="w-full h-full" />
        </div>
        <div className="flex w-full md:w-6/12 flex-col p-[20px] relative">
          <h1 className=" text-5xl font-medium">{name}</h1>
          <div className="flex gap-[20px]">
            {disc && <del className="text-4xl">$ {disc}</del>}
            <h1 className=" text-4xl text-orange-400">$ {price}</h1>
          </div>
          <br />
          {size && (
            <>
              <h2 className="text-lg">
                <strong>Size:</strong> {state.name}
              </h2>
              <div className="flex gap-3">
                {buttones.map((e) => {
                  return (
                    <button
                      key={e.id}
                      className={`bg-inherit border-2 ${
                        state.sizeActive === e.id
                          ? "border-orange-400"
                          : "border-black"
                      } rounded-full py-[5px] px-[20px]`}
                      onClick={() => {
                        setState({
                          ...state,
                          sizeActive: e.id,
                          name: e.name,
                        });
                      }}
                    >
                      <h2
                        className={`${
                          state.sizeActive === e.id
                            ? "text-orange-400"
                            : "text-black"
                        }`}
                      >
                        {e.name}
                      </h2>
                    </button>
                  );
                })}
              </div>
            </>
          )}
          {stock && (
            <h2 className="text-lg">
              <strong>Quantity:</strong> {stock}
            </h2>
          )}
          <br />
          <div className="w-full flex items-center justify-center">
            <button
              className="w-[48%] bg-inherit border-2 border-black py-[10px] px-[20px] mr-1"
              onClick={onClickRightbar}
              disabled={loading}
            >
              {loading && (
                <AiOutlineLoading
                  className="spinner-border animate-spin inline-block w-5 h-5  rounded-full"
                  role="status"
                />
              )}{" "}
              Add to Cart
            </button>
            <button className="w-[48%] bg-black border-black text-white py-[12px] px-[20px] ml-1">
              Buy it now
            </button>
          </div>
          <br />
          <p className=" text-left">{desc}</p>
          <br />
          <b>
            This is a demonstration store. You can purchase this product at{" "}
            <a
              href="https://themes.shopify.com/themes/colors/styles/generic/preview?surface_inter_position=2&surface_intra_position=10&surface_type=all"
              className=" text-orange-400"
              target="_blank"
            >
              Stutterheim
            </a>
          </b>
          <br />
          {/*  */}
          <div className="w-full border-y-[1px] border-black flex items-center justify-between p-3 ">
            <div className="flex gap-2 items-center justify-center">
              <BsTruck />
              Shipping
            </div>
            <AiOutlinePlus />
          </div>
          <div className="w-full border-b-[1px] border-black flex items-center justify-between p-3 ">
            <div className="flex gap-2 items-center justify-center">
              <ImLeaf />
              Natural Materials
            </div>
            <AiOutlinePlus />
          </div>
          <div className="w-full border-b-[1px] border-black flex items-center justify-between p-3 ">
            <div className="flex gap-2 items-center justify-center">
              <GiCrackedGlass />
              Care Instructions
            </div>
            <AiOutlinePlus />
          </div>
          {/*  */}
          <br />
          <div className="flex gap-3 items-center">
            <FaFacebook style={{ fontSize: 30 }} />
            <AiFillTwitterCircle style={{ fontSize: 35 }} />
            <FaPinterest style={{ fontSize: 30 }} />
          </div>

          <div
            className="absolute right-10 cursor-pointer active:opacity-5"
            onClick={async () => {
              await setProductC({
                ...productC,
                opened: false,
                name: "",
                price: "",
                desc: "",
                stock: "",
                id: "",
                image: "",
              });
            }}
          >
            <AiOutlineCloseCircle style={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
