import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Adsform() {
  const countdownDuration = 60;
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(countdownDuration);

  const [isShow, setShow] = useState(true);

  //   let countdownEndTime = Date.now("December 31, 2022 12:00:00");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSecond(second - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [second]);
  if (isShow === true) {
    return (
      <section className="fixed bottom-0 bg-[#FD8703] py-3 px-3 z-50">
        <div className="relative">
          <div className="absolute right-0 top-0 text-white text-2xl" onClick={()=>setShow(false)}>
            <AiOutlineClose />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="bg-white py-2 px-2 rounded-lg">
              <p>{hours}</p>
            </div>
            <p>:</p>
            <div className="bg-white py-2 px-2 rounded-lg">
              <p>{minute}</p>
            </div>
            <p>:</p>
            <div className="bg-white py-2 px-2 rounded-lg">
              <p>{second}</p>
            </div>
          </div>
          <p className="text-center text-xl py-5 text-white">
            Daftar segera jika kamu ingin mendapatkan undian
          </p>
          <div className="flex justify-center">
            <button className="bg-white py-[0.625rem] px-14 rounded-xl text-[#fd8703]" onClick={()=>window.location.href = 'https://fotolaku.com/landingpage/ads-form/'}>
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Adsform;
