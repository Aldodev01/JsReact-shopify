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
      className={`w-full mt-[50px] flex flex-col items-center hover:cursor-pointer  h-full ${
        length <= 5
          ? ` max-w-[480px] max-h-[480px]`
          : `max-w-[340px] max-h-[340px]`
      }`}
      key={kop + 1}
      onClick={onClick}
    >
      <div
        className={`bg-orange-400 ${
          length <= 5 ? ` w-[430px] h-[430px]` : `w-[290px] h-[290px]`
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
        <div className="flex gap-3 text-orange-300">
          <del>$ {price}</del> <p>From $ {disc}</p>
        </div>
      ) : (
        <p>$ {price}</p>
      )}
      <p className=" text-center">{name}</p>
    </div>
  );
};

export default ProductInCategorier;
