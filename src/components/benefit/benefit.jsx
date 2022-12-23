import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataModel } from "../../data/data";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Benefit2 } from "../../assets/manage";

function Benefit() {
  return (
    <section className="px-6">
      <h1 className="text-2xl font-semibold">KENAPA HARUS FOTOLAKU ?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et
        consequuntur magnam quibusdam. Vitae, laudantium.
      </p>
      <h2 className="pt-12 text-xl font-semibold">Complete Model Collection</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
            {DataModel.map((v,i)=>{
                return <Card key={i} id={i} foto={v.foto} text={v.text}/>
            })}
        </div>
      </div>
      <CardBenefit/>
    </section>
  );
}

export default Benefit;

function Card(props) {
  return (
    <div className="w-[12.375rem] h-[15.25rem] relative">
      <LazyLoadImage
        width={198}
        height={244}
        placeholderSrc={props.placeholder}
        effect="blur"
        src={props.foto}
        className="w-full h-full object-cover rounded-2xl z-0"
        alt={props.text}
      />
      <div className="bg-black/20 h-full w-full absolute top-0 rounded-2xl" />
      <p className="absolute bottom-5 left-3 z-10 text-white font-bold text-xl">
        {props.text}
      </p>
    </div>
  );
}

function CardBenefit(props){
    return(
        <div className="py-6 flex gap-2 flex-col">
            <h2 className="text-2xl font-semibold">Fast and Furious</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, iusto?</p>
            <img src={Benefit2} alt="" />
        </div>
    )
}
