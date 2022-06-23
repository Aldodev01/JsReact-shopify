import React, { useState } from "react";

const ProductInCategorier = ({
  price,
  disc,
  src,
  name,
  length = 5,
  kop = 1,
  onClick,
}) => {
  const [state, setState] = useState(src);
  return (
    <div
      className={`w-full mt-[50px] flex flex-col items-center justify-start hover:cursor-pointer  h-full ${
        length <= 5
          ? `max-w-[220px] md:max-h-[220px] lg:max-w-[480px] lg:max-h-[480px]`
          : `max-w-[220px] md:max-h-[220px] lg:max-w-[340px] lg:max-h-[340px]`
      }`}
      key={kop + 1}
      onClick={onClick}
    >
      <div
        className={`bg-orange-400 ${
          length <= 5
            ? `max-w-[170px] md:max-h-[170px] lg:w-[430px] lg:h-[430px]`
            : `max-w-[170px] md:max-h-[170px] lg:w-[290px] lg:h-[290px]`
        } `}
      >
        <img
          onMouseOver={() => {
            setState(`https://picsum.photos/seed/${kop}/400`);
          }}
          onMouseLeave={() => {
            setState(src);
          }}
          src={state}
          alt={name}
          className={"w-full h-full object-cover object-center"}
        />
      </div>

      {disc ? (
        <div className="text-[10px] lg:text-lg flex gap-3 text-orange-300">
          <del>$ {price}</del> <p>From $ {disc}</p>
        </div>
      ) : (
        <p>$ {price}</p>
      )}
      <p className="text-[10px] w-full lg:text-lg text-center">{name}</p>
    </div>
  );
};

export default ProductInCategorier;
