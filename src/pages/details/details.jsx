import React, { useEffect, useRef, useState } from "react";
import { AiFillCheckCircle, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { DataService } from "../../data/data";
import { FaArrowLeft } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import lozad from "lozad";

function Details() {
  const { id } = useParams();
  const termsandCond = DataService[id].terms;
  const navigate = useNavigate();
  const [isPlay, setPlay] = useState(false);

  const handlePlay = (e) => {
    if (isPlay === false) {
      const videos = document.getElementsByClassName("video");
      Array.prototype.forEach.call(videos, (video) => {
        video.pause();
      });
      setPlay(true);
      e.target.play();
    } else {
      setPlay(false);
      e.target.pause();
    }
  };

  useEffect(() => {
    const element = document.getElementById("first");
    element.scrollIntoView();
    const observer = lozad();
    observer.observe();
  }, []);

  return (
    <section id="first" className="relative">
      <div className="fixed top-0">
        <Splide className={DataService[id].category === 'Video' ? 'h-[80vh]' : 'h-[55vh]'}>
          {DataService[id].portoFoto.map((v, i) => {
            const text = v.split(".");
            return (
              <SplideSlide key={i}>
                {text[1] === "webp" && (
                  <img
                    src={v}
                    className="w-full h-[55vh] object-cover"
                    alt={`image ${i}`}
                  />
                )}
                {text[1] === "webm" && (
                  <div className="relative">
                    {isPlay === false && (
                      <div className={`absolute w-full ${DataService[id].category === 'Video' ? 'h-[80vh]' : 'h-[55vh]'} flex justify-center items-center text-9xl drop-shadow-lg text-white`}>
                        <BsPlayFill />
                      </div>
                    )}
                    <video
                      width="400"
                      height="254"
                      className={`video lozad w-full ${DataService[id].category === 'Video' ? 'h-[80vh]' : 'h-[55vh]'} object-cover`}
                      onClick={(e) => handlePlay(e)}
                      onEnded={()=>setPlay(false)}
                    >
                      <source data-src={v} type="video/webm" />
                    </video>
                  </div>
                )}
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className={`${DataService[id].category === 'Video' ? 'h-[80vh]' : ' h-[55vh]'} w-screen`} />
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
          {DataService[id].category === 'Video' && (
            DataService[id].portoVideo.map((v, i) => {
              return <GridSection image={v} />;
            })
          )}
          {DataService[id].category === 'Photo' && (
             DataService[id].portoFoto.map((v, i) => {
              return <GridSection image={v} />;
            })
          )}
        </section>
      </div>
    </section>
  );
}

function Terms(props) {
  return (
    <div className="flex items-start gap-2 py-1">
      <div>
        <AiFillCheckCircle color="#fd8703" size={25} />
      </div>
      <p className="text-white">{props.text}</p>
    </div>
  );
}

function GridSection(props) {
  const splitted = props.image.split(".");
  if (splitted[1] === "webp") {
    return (
      <img
        src={props.image}
        className="w-full py-3 object-cover rounded-lg"
        alt=""
      />
    );
  } else {
    return (
      <img
        src={props.image}
        className="w-full py-3 object-cover rounded-lg"
        alt=""
      />
    );
  }
}

export default Details;
