import React from "react";
import { Detail1, Detail2, Star1, Star2 } from "../../assets/manage";
import { DataImageElevate } from "../../data/data";
import Card from "./card/card";

function ElevatePitch() {
  return (
    <section className="py-5">
      <section className="px-6 font-semibold relative">
        <div className="absolute w-[80%] h-full">
          <img
            className="absolute right-20 -top-2"
            loading="lazy"
            src={Detail1}
            alt=""
          />
          {/* <img className="absolute bottom-0" loading="lazy" src={Detail2} alt="" /> */}
          <img
            className="absolute right-0 bottom-20"
            loading="lazy"
            src={Star1}
          />
          <img className="absolute right-10" loading="lazy" src={Star2} />
        </div>
        <div className="relative z-10 text-black/80 text-lg">
          <p className="text-lg">Tahukah Kamu ?</p>
          <p className="text-2xl pt-2 text-[20px]">
            <div className="bg-[#B2BEB5] w-fit px-2">9 dari 10 customer</div>
            memutuskan membeli produk 
            <div className="font-bold text-[#fd8703] text-[20px]">
            karena tampilan fotonya
            </div>
            <div className="font-bold text-black/80 text-[20px]">
              menarik dan berkualitas!
            </div>
          </p>
        </div>
      </section>
      <div className="overflow-x-scroll py-2">
        <div className="flex flex-nowrap px-6 py-6 -mt-5 w-fit">
          {DataImageElevate.map((v,i)=>{
            return <Card key={i} id={i} image={v}/>
          })}
        </div>
      </div>
      <p className="text-center px-5 text-xl">
        Dan kabar gembiranya untuk memiliki visual berkualitas <span className="bg-[#b2beb5]">tidak perlu
        budget yang tinggi.</span></p> 
        
        <p className="text-center px-5 mt-3 text-xl">Karena bersama fotolaku, kamu dapat memiliki
        photoshoot yang</p>
        <p className="text-center font-semibold text-xl text-[#fd8703] px-5 mt-3">mudah, terjangkau dan hasil foto profesional.</p>
    </section>
  );
}

export default ElevatePitch;
