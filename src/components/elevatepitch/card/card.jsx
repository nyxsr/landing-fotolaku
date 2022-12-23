import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ProcessDelivery } from "../../../assets/manage";

function Card() {
  return (
    <div className="w-[12.375rem] h-[15.25rem] relative">
      <LazyLoadImage
        width={198}
        height={244}
        src={ProcessDelivery}
        className="w-full h-full object-cover rounded-2xl z-0"
        alt="1"
      />
    </div>
  );
}

export default Card;
