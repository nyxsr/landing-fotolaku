import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineStar,AiFillStar } from 'react-icons/ai'
import { DataClient } from "../../data/data";

function Client() {
  return (
    <section className="pl-6">
      <div className="flex flex-col justify-center items-center text-2xl font-semibold py-9">
        <h1>LIHAT KATA</h1>
        <div className="relative bg-[#fd8703] text-white px-1 inline-block w-fit">
          CLIENT TENTANG KAMI
        </div>
      </div>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
            {DataClient.map((v,i)=>{
                return <Card key={i} id={i+1} rating={v.rating} video={v.src}/>
            })}
        </div>
      </div>
    </section>
  );
}

function Card(props) {
  const [isPlay, setPlay] = useState(false);
  const vidRef = useRef(null)

  const playPauseVideo = (e) => {
    if (isPlay === false) {
      const videos = document.getElementsByClassName('video')
      Array.prototype.forEach.call(videos, video =>{
        video.pause();
      })
      setPlay(true);
      vidRef.current.play();
    } else {
      setPlay(false);
      vidRef.current.pause();
    }
  };



  return (
    <div className="bg-white py-2 pl-[0.5285rem] rounded-xl flex gap-2 items-center shadow-xl">
      <div className="relative w-[19.875rem] h-[8.875rem] rounded-xl">
        <video onClick={playPauseVideo} id={props.id} ref={vidRef} className="video w-[19.875rem] h-[8.875rem] object-cover rounded-xl">
          <source src={props.video} />
        </video>
        {isPlay === false && (
        <div onClick={playPauseVideo} className="bg-black/30 absolute flex justify-center items-center top-0 w-full h-full rounded-xl">
          <FaPlay color="#fff" size={30} />
        </div>
        )}
      </div>
      <div>
        <small className="text-sm">20 Januari 2023</small>
        <p className="font-semibold">Client Name</p>
        <small className="text-sm text-[#1E1F2BD9]">Brand Name</small>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          atque animi odio exercitationem, maxime doloribus.
        </p>
        <div className="flex relative text-[#FD8703] text-3xl">
          {Array.from(Array(5), (e, i) => {
            return <AiOutlineStar key={i} />;
          })}
          <div className="flex text-3xl text-[#FD8703] absolute">
            {Array.from(Array(props.rating), (e, i) => {
              return <AiFillStar key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
