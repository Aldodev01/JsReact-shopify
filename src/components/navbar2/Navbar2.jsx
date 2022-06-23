import React, { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { BiSearch, BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar2.css";
import { CartContext } from "../../context/CartContext";
const Navbar2 = ({ onClickLeftbar, onClickRightbar }) => {
  const [cartAddC, setCartAddC] = useContext(CartContext);
  const [show, handleShow] = useState({
    otherNavbar: false,
    option: false,
    background: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (window.scrollY > 300) {
      //   handleShow({
      //     ...show,
      //     background: true,
      //   });
      // }
      if (window.scrollY > 100) {
        handleShow({
          ...show,
          option: true,
          otherNavbar: false,
          background: true,
        });
      } else
        handleShow({
          ...show,
          background: false,
          option: false,
        });
    });
  }, []);

  const countingStock = cartAddC.reduce(
    (idx, value) => (idx = idx + value.stock),
    0
  );

  return (
    <div
      className={`${
        show.option ? "mt-[60px]" : "mt-[70px]"
      }  flex flex-col w-screen fixed top-0 left-0 z-10`}
    >
      <div
        className={`w-full  flex justify-between items-center ${
          show.option ? "paddingTo" : "paddingFrom mb-[40px]"
        } py-[10px]  ${show.background && "bg-primary"}`}
      >
        <IoMdMenu
          className="text-[40px] nav2-icons"
          style={{ fontSize: 40 }}
          onClick={onClickLeftbar}
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0895/1746/files/logo_clr_170x@2x.png?v=1652089220"
          className={`ml-0  w-[45%] h-[22%] max-h-[40px] max-w-[130px] ${
            show.option ? "lg:ml-[8.3%] xl:ml-[7%]" : "lg:ml-[20%] xl:ml-[21%]"
          }`}
          alt="Color"
        />
        <div className="flex gap-2">
          {!show.option && (
            <div className="hidden lg:flex gap-4">
              <span className="rounded-full px-6 border-2 active:bg-slate-500 border-slate-800 flex items-center">
                English <IoIosArrowDown className="ml-2" />
              </span>
              <span className="rounded-full px-6 border-2 active:bg-slate-500 border-slate-800 flex items-center">
                $ <IoIosArrowDown className="ml-2" />
              </span>
            </div>
          )}
          {/* <select name="" id="">
            <option value="">English</option>
            <option value="">Indonesia</option>
          </select>
          <select name="" id="">
            <option value="">USD($)</option>
            <option value="">Rupiah(Rp)</option>
          </select> */}
          <BiUser
            className="text-[40px] nav2-icons hidden lg:flex cursor-pointer"
            style={{ fontSize: 40 }}
          />
          <BiSearch
            className="text-[40px] nav2-icons cursor-pointer"
            style={{ fontSize: 40 }}
          />
          <FaShoppingCart
            className="text-[40px] nav2-icons hidden sm:hidden md:flex cursor-pointer"
            style={{ fontSize: 40 }}
            onClick={onClickRightbar}
          />
          {countingStock < 1 ? null : (
            <div className="w-[25px] h-[25px] bg-orange-400 text-white rounded-full flex items-center justify-center">
              {countingStock}
            </div>
          )}
        </div>
      </div>

      <div
        className={`hidden xl:flex w-full items-center justify-center gap-10 z-10 ${
          show.option ? "opacityIn hidden absolute top-[-1000px]" : "relative"
        }`}
      >
        <ul className="flex items-center justify-center gap-10 cursor-pointer">
          <li
            className="hover:border-b-[3px] border-orange-300 cursor-pointer"
            onMouseOver={() => {
              handleShow({
                ...show,
                otherNavbar: !show.otherNavbar,
              });
            }}
          >
            Shop+
          </li>
          <li className="hover:border-b-[3px] border-orange-300 cursor-pointer">
            Collections
          </li>
          <li className="hover:border-b-[3px] border-orange-300 cursor-pointer">
            About us
          </li>
          <li className="hover:border-b-[3px] border-orange-300 cursor-pointer">
            News
          </li>
          <li className="hover:border-b-[3px] border-orange-300 cursor-pointer">
            Sales
          </li>
        </ul>
      </div>
      <div
        className={`w-full ${
          show.otherNavbar
            ? "fadeTo relative"
            : "fadeFrom absolute top-[-2000px]"
        } flex justify-center gap-10 bg-primary p-20`}
      >
        <ul>
          <li className="font-bold mb-2 text-orange-500 text-lg hover:border-b-[3px] border-orange-300 cursor-pointer">
            Outdoor sleeping
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Sleeping bags
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Tents
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Blankets
          </li>
        </ul>
        {/*  */}
        <ul>
          <li className="font-bold mb-2 text-orange-500 text-lg hover:border-b-[3px] border-orange-300 cursor-pointer">
            Outdoor cooking
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Cookware
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Cups
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Container
          </li>
        </ul>
        {/*  */}
        <ul>
          <li className="font-bold mb-2 text-orange-500 text-lg hover:border-b-[3px] border-orange-300 cursor-pointer">
            Apparel
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Jackets & Coats
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Hats
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Backpacks
          </li>
        </ul>
        {/*  */}
        <ul>
          <li className="font-bold mb-2 text-orange-500 text-lg hover:border-b-[3px] border-orange-300 cursor-pointer">
            Accessories
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Lights
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Chairs
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Containers
          </li>
          <li className="hover:border-b-[1px] border-orange-300 cursor-pointer">
            Other tools
          </li>
        </ul>
        {/*  */}
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1655696644743-972ed99b89f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80"
            className="w-[230px] h-[140px]"
            alt="unsplash"
          />
          <p>Around the Firebound</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
