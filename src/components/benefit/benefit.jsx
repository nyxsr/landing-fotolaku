import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataBenefit, DataModel } from "../../data/data";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Model, MUA } from "../../assets/manage";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { BsFillCameraFill } from "react-icons/bs";
import { BenefitAnimate, CardModelAnimate, DetailBenefitAnimate } from "../../assets/animation/animate";

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
      <p className="text-center font-bold text-[#fd8703]">Silahkan klik untuk melihat model kami!</p>
      <motion.div>
      {DataBenefit.map((v, i) => {
        return <CardBenefit key={i} detail={v.detail} text={v.text} id={v.id} desc={v.desc} />;
      })}
      </motion.div>
    </section>
  );
}

export default Benefit;

function Card(props) {
  const navigate = useNavigate()
  const cardmodelcontrols = useAnimation();
  const location = useLocation()
  const path = location.pathname.split('/');

  useEffect(()=>{
    cardmodelcontrols.start('visible')
  },[])

  return (
    <div
      className="w-[12.375rem] h-[15.25rem] relative"
      onClick={()=>props.id !== 8 ? navigate(`/${path[1] === 'tiktok' ? 'model_tiktok' : 'model'}/${props.id}`) : alert('Coming soon for Amanda!')}
    >
      {props.id === 0 && (
        <motion.div variants={CardModelAnimate} initial='hidden' animate={cardmodelcontrols} whileInView='startHidden' className="bg-[#fd8703]/80 absolute z-10 right-0 flex rounded-r-2xl justify-center items-center h-full w-1/2">
          <motion.p variants={CardModelAnimate} className="text-white text-center px-2 font-bold">Click to see more!</motion.p>
        </motion.div>
      )}
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
    </div>
  );
}

function CardBenefit(props) {
  return (
    <motion.div className="py-6 flex gap-2 flex-col">
      <h2 className="text-xl font-semibold">
        {props.id}. {props.text}
      </h2>
      <p>{props.desc}</p>
      {props.id === 2 && (
        <motion.div variants={BenefitAnimate} initial='hidden' whileInView='visible' viewport={{ once:true }} className="flex flex-col gap-4 items-center justify-center">
          {props.detail.map((v,i)=>{
            return <DetailBenefit key={i} id={i} text={v.text}/>
          })}
        </motion.div>
      )}
    </motion.div>
  );
}

function DetailBenefit(props) {
  return(
    <>
     <motion.div variants={DetailBenefitAnimate} whileTap={{ scale:.9, transition:{
      type:'spring',stiffness: 500, damping: 2
     } }} className="bg-[#fd8703] w-[6rem] h-[6rem] flex justify-center items-center rounded-full py-4 px-4 text-4xl text-white">
            {props.id === 0 ? <img src={Model}/> : props.id === 1 ? <BsFillCameraFill /> : <img src={MUA}/>}
          </motion.div>
          <p>{props.text}</p>
    </>
  )
}
