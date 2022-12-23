import React from "react";
import {
  PlaceConsult,
  PlaceDelivery,
  PlaceEdit,
  PlaceIron,
  PlacePhoto,
  PlaceReturn,
  ProcessConsult,
  ProcessDelivery,
  ProcessEdit,
  ProcessIron,
  ProcessPhoto,
  ProcessReturn,
} from "../../assets/manage";
import Card from "./card/card";

function Process() {
  const DataProcess = [
    {
      photo: ProcessConsult,
      placeholder: PlaceConsult,
      context: "Konsultasi",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      photo: ProcessDelivery,
      placeholder: PlaceDelivery,
      context: "Pengiriman",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      photo: ProcessIron,
      placeholder: PlaceIron,
      context: "Steam / Setrika",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      photo: ProcessPhoto,
      placeholder: PlacePhoto,
      context: "Photoshoot",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      photo: ProcessEdit,
      placeholder: PlaceEdit,
      context: "Editing",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      photo: ProcessReturn,
      placeholder: PlaceReturn,
      context: "Pengembalian",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  return (
    <section>
      <div className="flex flex-col justify-center items-center text-2xl font-semibold py-9">
        <h1>PROSES</h1>
        <div className="relative inline-block w-fit">
          ALUR KERJA FOTOLAKU
          <div className="absolute bottom-0 bg-[#FD8703] w-full h-1/2 px-1 -z-10"></div>
        </div>
      </div>
      <div className="flex py-5 justify-center flex-wrap gap-5">
        {DataProcess.map((v, i) => {
          return (
            <Card
              key={i}
              photo={v.photo}
              placeholder={v.placeholder}
              number={i + 1}
              context={v.context}
              desc={v.desc}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Process;
