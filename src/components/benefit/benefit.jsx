import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataBenefit, DataModel } from "../../data/data";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Benefit2, Model, MUA } from "../../assets/manage";
import {SiAwesomelists} from 'react-icons/si'
import {GiDelicatePerfume} from 'react-icons/gi'
import { Link } from "react-router-dom";
import { BsArrowDownRight, BsFillCameraFill } from "react-icons/bs";

function Benefit() {
  return (
    <section id="benefit" className="px-6 py-8 bg-[#eceeed]">
      <h1 className="text-[22px] font-semibold text-[#fd8703]">
        KENAPA HARUS FOTOLAKU ?
      </h1>
      <h2 className="pt-5 text-xl font-semibold">
        1. Pilihan model berkualitas
      </h2>
      <p>Klik untuk melihat model-model keren kami</p>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
          {DataModel.map((v, i) => {
            return <Card key={i} id={i} foto={v.foto} text={v.text} />;
          })}
        </div>
      </div>
      {DataBenefit.map((v, i) => {
        return <CardBenefit key={i} detail={v.detail} text={v.text} id={v.id} desc={v.desc} />;
      })}
    </section>
  );
}

export default Benefit;

function Card(props) {
  return (
    <Link
      className="w-[12.375rem] h-[15.25rem] relative"
      to={`/model/${props.id}`}
    >
      <LazyLoadImage
        width={198}
        height={244}
        placeholderSrc={props.placeholder}
        effect="blur"
        src={props.foto}
        className="w-full h-full object-cover rounded-2xl z-0 shadow-lg"
        alt={props.text}
      />
      <div className="bg-black/20 h-full w-full absolute top-0 rounded-2xl shadow-lg" />
      <p className="absolute bottom-5 left-3 z-10 text-white font-bold text-xl">
        {props.text}
      </p>
      <div className="absolute bottom-5 bg-[#fd8703] text-2xl text-white py-2 px-2 rounded-full right-5">
        <BsArrowDownRight />
      </div>
    </Link>
  );
}

function CardBenefit(props) {
  return (
    <div className="py-6 flex gap-2 flex-col">
      <h2 className="text-xl font-semibold">
        {props.id}. {props.text}
      </h2>
      <p>{props.desc}</p>
      {props.id === 2 && (
        <div className="flex flex-col gap-4 items-center justify-center">
          {props.detail.map((v,i)=>{
            return <DetailBenefit key={i} id={i} text={v.text}/>
          })}
        </div>
      )}
    </div>
  );
}

function DetailBenefit(props) {
  return(
    <>
     <div className="bg-[#fd8703] w-[6rem] h-[6rem] flex justify-center items-center rounded-full py-4 px-4 text-4xl text-white">
            {props.id === 0 ? <img src={MUA}/> : props.id === 1 ? <BsFillCameraFill /> : <img src={Model}/>}
          </div>
          <p>{props.text}</p>
    </>
  )
}
