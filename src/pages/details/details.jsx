import React, { useEffect } from "react";
import { AiFillCheckCircle, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { DataService } from "../../data/data";
import { FaArrowLeft } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Details() {
  const { id } = useParams();
  const termsandCond = DataService[id].terms;
  const navigate = useNavigate();

  useEffect(() => {
    const element = document.getElementById("first");
    element.scrollIntoView();
  }, []);

  return (
    <section id="first" className="relative">
      <div className="fixed top-0">
      <Splide className="h-[55vh]">
        {DataService[id].portoFoto.map((v,i)=>{
          return(
        <SplideSlide key={i}>
          <img src={v} alt={`image ${i}`} />
        </SplideSlide>
          )
        })}
      </Splide>
      </div>
      <div className="h-[55vh] w-screen"/>
      <div
        className="absolute top-4 left-4 bg-[#D7D7D7] text-2xl py-1 px-1 rounded-full"
        onClick={() => navigate("/landing#services")}
      >
        <FaArrowLeft />
      </div>
      <div className="bg-[#1c1c1c] h-fit py-2 relative z-10">
        <hr className="w-1/4 border-t-[5px] rounded-2xl mx-auto" />
        <p className="pt-6 pb-2 font-bold text-2xl px-6 text-white">
          {DataService[id].text}
        </p>
        <div className="flex justify-between px-6">
          <p className="text-[#fd8703] font-semibold">
            {DataService[id].price}
          </p>
          <div className="px-6 flex items-center gap-2">
            <div className="flex relative text-[#FD8703] text-xl">
              {Array.from(Array(5), (e, i) => {
                return <AiOutlineStar />;
              })}
              <div className="flex text-xl text-[#FD8703] absolute">
                {Array.from(Array(DataService[id].rating), (e, i) => {
                  return <AiFillStar />;
                })}
              </div>
            </div>
            <p className="font-semibold text-xl text-white">
              {DataService[id].rating}
            </p>
          </div>
        </div>

        <p className="text-[#FD8703] font-semibold text-xl pt-11 px-6">About</p>
        <p className="pl-6 text-white">{DataService[id].desc}</p>
        <div className="pt-10 pl-6">
          <p className="text-[#9d9d9d] pb-2">Terms & Condition</p>
          {termsandCond.map((v, i) => {
            return <Terms key={i} text={v} />;
          })}
        </div>
        <h2 className="px-6 py-6 text-[#FD8703] font-semibold text-xl">
          Portofolio
        </h2>
        <section className="columns-2 gap-6 px-6">
        {DataService[id].portoFoto.map((v,i)=>{
          return <GridSection image={v}/>
        })}
        </section>
      </div>
    </section>
  );
}

function Terms(props) {
  return (
    <div className="flex items-center gap-2 py-1">
      <AiFillCheckCircle color="#fd8703" size={30} />
      <p className="text-white">{props.text}</p>
    </div>
  );
}

function GridSection(props) {
  return (
      <img
        src={props.image}
        className="w-full py-3 object-cover rounded-lg"
        alt=""
      />
  );
}

export default Details;
