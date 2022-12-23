import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import {
  BioVariants,
  ModelAnimate1,
  ModelAnimate2,
  ModelAnimate3,
  ModelAnimate4,
} from "../../assets/animation/animate";
import { useNavigate, useParams } from "react-router-dom";
import { DataModel } from "../../data/data"; 

function ModelDetails() {
  const { id } = useParams();
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const navigate = useNavigate();
  const [slidePos, setSlidePos] = useState(1);
  const controlsImage1 = useAnimation();
  const controlsImage2 = useAnimation();
  const controlsImage3 = useAnimation();
  const controlsImage4 = useAnimation();
  const bio = useAnimation();

  const showSlide = () => {
    if (slidePos === 1) {
      controlsImage1.start("hidden");
      controlsImage2.start("hidden");
      controlsImage3.start("first");
      setSlidePos(2);
    } else if (slidePos === 2) {
      controlsImage1.start("fullyHidden");
      controlsImage2.start("fullyHidden");
      controlsImage3.start("hidden");
      controlsImage4.start("first");
      setSlidePos(3);
    } else if (slidePos === 3) {
      controlsImage3.start("fullyHidden");
      controlsImage4.start("hidden");
      bio.start("first");
      setSlidePos(4);
    }
  };

  const returnSlide = () => {
    if (slidePos === 2) {
      controlsImage1.start("first");
      controlsImage2.start("first");
      controlsImage3.start("initial");
      setSlidePos(1);
    } else if (slidePos === 3) {
      controlsImage1.start("hidden");
      controlsImage2.start("hidden");
      controlsImage3.start("first");
      controlsImage4.start("initial");
      setSlidePos(2);
    } else if (slidePos === 4) {
      controlsImage3.start("hidden");
      controlsImage4.start("first");
      bio.start("initial");
      setSlidePos(3);
    }
  };

  useEffect(() => {
    const handleTouchStart = (event) => {
      setStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
      setEndX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      const dx = endX - startX;
      const absDx = Math.abs(dx);

      if (absDx > 10) {
        if (dx > 0) {
          console.log('Kanan');
          returnSlide()
        } else {
          console.log('Kiri');
          showSlide()
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [endX]);


  useEffect(() => {
    controlsImage1.start("first");
    controlsImage2.start("first");
  }, []);

  return (
    <section className="h-screen relative bg-white overflow-y-hidden overflow-x-hidden">
      <div className="ml-5">
        <div
          className="text-4xl py-2 px-2 "
          onClick={() => navigate("/landing#benefit")}
        >
          <AiOutlineArrowLeft />
        </div>
      </div>
      <div className="text-3xl font-bold px-6">
        <p>Model</p>
        <div className="relative">
          <p className="relative z-10">Collection of {DataModel[id].text}</p>
          <div className="absolute bottom-0 bg-[#FD8703] h-[1rem] w-[4rem]" />
        </div>
      </div>
      <motion.div>
        <motion.img
          src={DataModel[id].bigPhoto[0]}
          variants={ModelAnimate1}
          initial="initial"
          animate={controlsImage1}
          className="absolute top-32 right-10 h-[60%] object-cover z-10"
          alt=""
        />
        <motion.img
          src={DataModel[id].bigPhoto[1]}
          variants={ModelAnimate2}
          initial="initial"
          animate={controlsImage2}
          className="absolute -bottom-20 -left-5 h-full object-cover z-20"
          alt=""
        />
        <motion.img
          src={DataModel[id].bigPhoto[2]}
          variants={ModelAnimate3}
          initial="initial"
          animate={controlsImage3}
          className="absolute bottom-0 h-[82%] z-10 object-cover"
        />
        <motion.img
          src={DataModel[id].bigPhoto[3]}
          className="absolute bottom-0 h-[92%] z-20 object-cover"
          variants={ModelAnimate4}
          initial="initial"
          animate={controlsImage4}
        />
        <motion.div
          variants={BioVariants}
          initial="initial"
          animate={bio}
          className="absolute -right-5 flex h-[80%] items-center justify-end"
        >
          <div className="py-3">
            <motion.h2 className="text-2xl font-bold">Tentang Model</motion.h2>
            <table>
              <tr>
                <td className="py-[2px]">Nama</td>
                <td className="py-[2px] px-3">:</td>
                <td className="py-[2px]">{DataModel[id].text}</td>
              </tr>
              <tr>
                <td className="py-[2px]">Tinggi Badan</td>
                <td className="py-[2px] px-3">:</td>
                <td className="py-[2px]">{DataModel[id].bio.tinggi} CM</td>
              </tr>
              <tr>
                <td className="py-[2px]">Umur</td>
                <td className="py-[2px] px-3">:</td>
                <td className="py-[2px]">{DataModel[id].bio.umur} Tahun</td>
              </tr>
              <tr>
                <td className="py-[2px]">Ukuran Sepatu</td>
                <td className="py-[2px] px-3">:</td>
                <td className="py-[2px]">{DataModel[id].bio.ukuran.sepatu}</td>
              </tr>
              <tr>
                <td className="py-[2px]">Ukuran Baju</td>
                <td className="py-[2px] px-3">:</td>
                <td className="py-[2px]">
                  {DataModel[id].bio.ukuran.baju} Size
                </td>
              </tr>
              <tr>
                <td className="py-1">Lebar Pinggang</td>
                <td className="py-1 px-3">:</td>
                <td className="py-1">{DataModel[id].bio.lebar.pinggang} cm</td>
              </tr>
              <tr>
                <td className="py-1">Lebar Dada</td>
                <td className="py-1 px-3">:</td>
                <td className="py-1">{DataModel[id].bio.lebar.dada} cm</td>
              </tr>
            </table>
          </div>
        </motion.div>
      </motion.div>
      {slidePos !== 4 && (
        <div className="absolute top-0 right-5 z-20 flex h-screen justify-end w-fit items-center">
          <div
            className="w-fit bg-slate-200 text-3xl py-2 px-2 rounded-full"
            onClick={showSlide}
          >
            <BsCaretRightFill />
          </div>
        </div>
      )}
      {slidePos !== 1 && (
        <div className="absolute top-0 left-5 z-20 flex h-screen justify-start w-fit items-center">
          <div
            className="w-fit bg-slate-200 text-3xl py-2 px-2 rounded-full"
            onClick={returnSlide}
          >
            <BsCaretLeftFill />
          </div>
        </div>
      )}
    </section>
  );
}

export default ModelDetails;
