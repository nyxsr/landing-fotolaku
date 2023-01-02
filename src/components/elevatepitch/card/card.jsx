import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card(props) {
  return (
    <div className="w-[15.25rem] h-[17.25rem] relative">
      <LazyLoadImage
        width={198}
        height={244}
        src={props.image}
        className="w-full h-full object-cover rounded-2xl z-0"
        alt="1"
      />
    </div>
  );
}

export default Card;
