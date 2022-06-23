import React, { useContext, useEffect, useState } from "react";
import Mercy from "../../assets/m_bwm.png";
import Renault from "../../assets/m_renault.png";
import { ProductContext } from "../../context/ProductContext";

const Header = () => {
  const [scrollerText, setScrollerText] = useState("S500 Class");
  const [scroller, setScroller] = useState(true);

  const [deviceMobile, setDeviceMobile] = useState(false);
  const [productC, setProductC] = useContext(ProductContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!deviceMobile && window.scrollY > 580) {
        setScroller(false);
      } else setScroller(true);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!deviceMobile && window.scrollY > 340) {
        setScrollerText("E670 Sedan");
      } else setScrollerText("S500 Class");
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setDeviceMobile(true);
    } else {
      setDeviceMobile(false);
    }
  }, []);

  return (
    <div className="w-screen mt-[100px] p-[20px] flex flex-col gap-7">
      <div
        className="w-full bg-orange-200 flex flex-col-reverse md:flex-row justify-between"
        onClick={async () => {
          await setProductC({
            ...productC,
            opened: true,
            name: "S500 Class",
            price: 8,
            desc: "",
            stock: 4,
            id: "rare1",
            image:
              "https://res.cloudinary.com/aldodevv/image/upload/v1655951806/m_bwm_acu3nz.png",
          });
          setScroller(false);

          window.location.href = `#rare1`;
        }}
      >
        <div
          className={`w-full md:w-1/2 flex flex-col items-center justify-center `}
        >
          <h1
            className={`text-lg md:text-6xl font-semibold md:w-[170px] z-[5] ${
              !deviceMobile && scroller ? "fixed top-[320px]" : "relative"
            }`}
          >
            {scrollerText}
          </h1>
          <div
            className={`flex gap-5  ${
              !deviceMobile && scroller ? "mr-8 fixed top-[460px]" : "relative"
            }`}
          >
            <del className="text-md md:text-3xl">$ 20</del>
            <h1 className="text-md md:text-4xl text-orange-600">$ 8</h1>
          </div>
          <br />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src={Mercy}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div
        className="w-full bg-orange-200 flex flex-col-reverse md:flex-row justify-between"
        onClick={async () => {
          await setProductC({
            ...productC,
            opened: true,
            name: "E670 Sedan",
            price: 12,
            desc: "",
            stock: 2,
            id: "rare2",
            image:
              "https://res.cloudinary.com/aldodevv/image/upload/v1655951807/m_renault_odpmjt.png",
          });
          setScroller(false);
          window.location.href = `#rare2`;
        }}
      >
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          {deviceMobile ? (
            <>
              <h1 className="text-lg md:text-6xl font-semibold md:w-[170px]">
                E670 Sedan
              </h1>
              <div className="flex gap-5">
                <del className="text-md md:text-3xl">$ 37</del>{" "}
                <h1 className="text-md md:text-4xl text-orange-600">$ 12</h1>
              </div>
            </>
          ) : (
            !scroller && (
              <>
                <h1 className="text-lg md:text-6xl font-semibold md:w-[170px]">
                  {scrollerText}
                </h1>
                <div className="flex gap-5">
                  <del className="text-md md:text-3xl">$ 37</del>{" "}
                  <h1 className="text-md md:text-4xl text-orange-600">$ 12</h1>
                </div>
              </>
            )
          )}

          <br />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src={Renault}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
