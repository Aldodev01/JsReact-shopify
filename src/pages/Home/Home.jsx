import React, { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { HiOutlineMinusSm } from "react-icons/hi";
import { CartAdd } from "../../api/ApiCart";
import {
  BrowseCategory,
  Detail,
  Favorite,
  Footer,
  Futures,
  Header,
  Journal,
  Location,
  Navbar1,
  Navbar2,
  Rare,
  Subscribe,
  Video,
} from "../../components";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";

const Home = () => {
  const [productC, setProductC] = useContext(ProductContext);
  const [cartAddC, setCartAddC] = useContext(CartContext);
  const [openSidebar, setOpenSidebar] = useState({
    left: false,
    right: false,
    loading: false,
  });
  const handleRightbar = async () => {
    await setOpenSidebar({
      ...openSidebar,
      right: true,
    });

    await CartAdd(productC.id, 1)
      .then((res) => {
        if (res.status === 200) {
          alert("Success add to cart, u can check the network history");
          setCartAddC([
            ...cartAddC,
            {
              name: productC.name,
              price: productC.price,
              desc: productC.desc,
              image: productC.image,
              stock: 1,
              id: productC.id,
            },
          ]);
        }
      })
      .catch((err) => {
        alert("Failed add to cart :(, try the different products");
      });
  };

  const handleCart = (name, value, index) => {
    let activePackageData = {
      ...cartAddC[index],
    };
    activePackageData[name] = value;
    setCartAddC((oldData) => {
      oldData[index] = activePackageData;
      return [...oldData];
    });
  };
  const countingPrice = cartAddC.reduce(
    (idx, value) => (idx = idx + value.price),
    0
  );

  return (
    <div className="flex">
      <div
        className={`duration-300 ${
          openSidebar.left
            ? "fixed w-[400px]"
            : "w-[0px] absolute left-[-4000px]"
        } bg-orange-800 h-full z-30 p-4 gap-5 overflow-y-scroll`}
      >
        <AiOutlineClose
          className="text-white mt-[70px] cursor-pointer"
          onClick={() => {
            setOpenSidebar({
              ...openSidebar,
              left: !openSidebar.left,
            });
          }}
          style={{ fontSize: 40 }}
        />
        <br />
        <ul className="flex flex-col gap-[40px] w-full mt-5">
          <li className=" text-4xl text-white hover:border-b-2 border-white w-full max-w-[300px] font-bold cursor-pointer">
            Home
          </li>
          <li className=" text-4xl text-white hover:border-b-2 border-white w-full max-w-[300px] font-bold cursor-pointer">
            Catalog
          </li>
          <li className=" text-4xl text-white hover:border-b-2 border-white w-full max-w-[300px] font-bold cursor-pointer">
            Collections +
          </li>
          <li className=" text-4xl text-white hover:border-b-2 border-white w-full max-w-[300px] font-bold cursor-pointer">
            Blog
          </li>
          <li className=" text-4xl text-white hover:border-b-2 border-white w-full max-w-[300px] font-bold cursor-pointer">
            About Us
          </li>
          <li className=" text-4xl text-white hover:border-b-2 border-white w-full max-w-[300px] font-bold cursor-pointer">
            Contact
          </li>
          <li className=" text-4xl text-white hover:border-b-2 border-white w-full max-w-[300px] font-bold cursor-pointer">
            Sign in
          </li>
        </ul>
        <br />
        <br />
        <div className=" border-b-[1px] border-white w-full"></div>
        <br />
        <div className="flex w-full gap-5">
          <FaFacebookF style={{ fontSize: 20 }} className="text-white" />
          <BsTwitter style={{ fontSize: 20 }} className="text-white" />
          <FaPinterestP style={{ fontSize: 20 }} className="text-white" />
          <BsInstagram style={{ fontSize: 20 }} className="text-white" />
        </div>
      </div>
      <div className="w-full">
        <Navbar1 />
        <Navbar2
          onClickLeftbar={() => {
            setOpenSidebar({
              ...openSidebar,
              left: !openSidebar.left,
            });
          }}
          onClickRightbar={() => {
            setOpenSidebar({
              ...openSidebar,
              right: !openSidebar.right,
            });
          }}
        />
        <br />
        <Header />
        <br />
        <br />
        <Rare />
        <Favorite />
        {productC.opened ? (
          <Detail
            id={productC.id}
            src={productC.image}
            stock={productC.stock}
            desc={productC.desc}
            name={productC.name}
            price={productC.price}
            onClickRightbar={handleRightbar}
            loading={openSidebar.loading}
          />
        ) : null}

        <BrowseCategory />
        <Video />
        <Futures />
        <Journal />
        <Location />
        <Subscribe />
        <Footer />
      </div>
      <div
        className={`duration-300 ${
          openSidebar.right
            ? "fixed w-[400px] right-0"
            : "w-[0px] absolute top-[-4000px] left-[0]"
        } bg-slate-700 h-full z-30 p-4 `}
      >
        <div className="mt-[70px] flex w-full justify-between pb-3 mb-2 items-center border-b-[3px] border-white">
          <h1 className="text-2xl text-white font-semibold">Your Cart</h1>
          <AiOutlineClose
            className="text-white cursor-pointer"
            onClick={() => {
              setOpenSidebar({
                ...openSidebar,
                right: !openSidebar.right,
              });
            }}
            style={{ fontSize: 40 }}
          />
        </div>
        <div className="w-full flex flex-col h-[60%] overflow-y-scroll ">
          {/*  */}
          {cartAddC.map((e, i) => {
            async function CountingMinus() {
              const countStockMin = (await e.stock) <= 1 ? 1 : e.stock - 1;
              const countPriceMin = e.price / (await e.stock);
              await handleCart("stock", countStockMin, i);
              await handleCart("price", countPriceMin, i);
            }

            async function CountingPlus() {
              const countStockPlus =
                (await e.stock) > productC.stock ? productC.stock : e.stock + 1;
              const countPricePlus = (await e.price) * countStockPlus;
              await handleCart("stock", countStockPlus, i);
              await handleCart("price", countPricePlus, i);
            }

            return (
              <div
                key={i}
                className="w-[95%] flex gap-3 pb-3 mb-7 relative border-b-[1px] border-white"
              >
                <img
                  src={e.image}
                  className="w-[100px] h-[100px] object-cover object-center"
                  alt={e.name}
                />
                <div className="flex flex-1 flex-col gap-3  ">
                  <h1 className="underline text-orange-500 text-xl">
                    {e.name}
                  </h1>
                  <div className="flex text-white items-center gap-2">
                    <HiOutlineMinusSm
                      className="cursor-pointer"
                      onClick={CountingMinus}
                    />
                    <input
                      className="bg-inherit w-[50px] outline-none text-center border-[1px] border-white  py-[2px]"
                      value={e.stock}
                      disabled
                    />
                    <AiOutlinePlus
                      className="cursor-pointer"
                      onClick={CountingPlus}
                    />
                  </div>
                </div>
                <AiOutlineClose className="text-white cursor-pointer" />
                <h1 className="text-white absolute right-2 bottom-3">
                  $ {e.price}
                </h1>
              </div>
            );
          })}

          {/*  */}
        </div>
        <div className="w-full border-t-2 flex justify-between items-center  border-white">
          <h1 className=" mt-3 text-2xl text-white font-semibold">Subtotal</h1>
          <h1 className=" mt-3 text-2xl text-white font-semibold">
            $ {countingPrice}
          </h1>
        </div>
        <h2 className="text-sm text-orange-500 mt-3">
          Tax included and shipping calculated at checkout.
        </h2>
        <button className="mt-[20px] w-full p-[10px] items-center justify-center bg-orange-500 rounded-md">
          Checkout
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
