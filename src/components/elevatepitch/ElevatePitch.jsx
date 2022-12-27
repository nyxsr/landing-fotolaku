import React from "react";
import { Detail1, Detail2, Star1, Star2 } from "../../assets/manage";
import Card from "./card/card";

function ElevatePitch() {
  return (
    <section className="pt-1 pb-11">
      <h2 className="text-center text-xl w-[80%] mx-auto">
        Brand hebat dimulai dari visual berkualitas
      </h2>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap px-6 py-6 w-fit gap-3">
          {Array.from(Array(5), (e, i) => {
            return <Card key={i}/>;
          })}
        </div>
      </div>
      <section className="px-6 font-semibold relative">
        <div className="absolute w-[80%] h-full">
          <img className="absolute right-20" loading="lazy" src={Detail1} alt="" />
          <img className="absolute bottom-0" loading="lazy" src={Detail2} alt="" />
          <img className="absolute right-0 bottom-20" loading="lazy" src={Star1}/>
          <img className="absolute right-10" loading="lazy" src={Star2}/>
        </div>
        <div className="relative z-10">
        <p>Tahukah Kamu ?</p>
        <p className="text-2xl pt-2">
          9 dari 10 customer memutuskan membeli produk hanya karena tampilan
          foto dari produknya saja
        </p>
        </div>
      </section>
    </section>
  );
}

export default ElevatePitch;
