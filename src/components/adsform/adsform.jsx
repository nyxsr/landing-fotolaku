import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Adsform() {
  const [isShow, setShow] = useState(true);

  const [day, setDay] = useState(null);
  const [hours, setHours] = useState(null);
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const targetDate = new Date("January 1, 2023 00:00:00").getTime();
      const currentDate = new Date().getTime();
      const gap = targetDate - currentDate;

      //rumus waktu di SD
      const second = 1000;
      const minute = second * 60;
      const hours = minute * 60;
      const day = hours * 24;

      const gapDay = Math.floor(gap / day);
      const gapHours = Math.floor((gap % day) / hours);
      const gapMinute = Math.floor((gap % hours) / minute);
      const gapSecond = Math.floor((gap % minute) / second);

      setDay(gapDay);
      setHours(gapHours);
      setMinute(gapMinute);
      setSecond(gapSecond);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);
  if (isShow === true) {
    return (
      <section className="fixed bottom-0 bg-[#FD8703] py-3 px-3 z-50">
        <div className="relative">
          <div
            className="absolute right-0 top-0 text-white text-2xl"
            onClick={() => setShow(false)}
          >
            <AiOutlineClose />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex-col items-center justify-center">
              <div className="bg-white py-2 px-2 rounded-lg">
                <p className="text-center">{day?.toString().length === 1 && '0'}{day}</p>
              </div>
              <p>Hari</p>
            </div>
            <p>:</p>
            <div className="flex-col items-center justify-center">
              <div className="bg-white py-2 px-2 rounded-lg">
                <p className="text-center">{hours?.toString().length === 1 && '0'}{hours}</p>
              </div>
              <p>Jam</p>
            </div>
            <p>:</p>
            <div className="flex-col items-center justify-center">
              <div className="bg-white py-2 px-2 rounded-lg">
                <p className="text-center">{minute?.toString().length === 1 && '0'}{minute}</p>
              </div>
              <p>Menit</p>
            </div>
            <p>:</p>
            <div className="flex-col items-center justify-center">
              <div className="bg-white py-2 px-2 rounded-lg">
                <p className="text-center">{second?.toString().length === 1 && '0'}{second}</p>
              </div>
              <p>Detik</p>
            </div>
          </div>
          <p className="text-center text-xl py-5 text-white">
            Daftar segera jika kamu ingin mendapatkan undian
          </p>
          <div className="flex justify-center">
            <button
              className="bg-white py-[0.625rem] px-14 mb-5 rounded-xl text-[#fd8703]"
              onClick={() =>
                (window.location.href =
                  "https://fotolaku.com/landingpage/ads-form/")
              }
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Adsform;
