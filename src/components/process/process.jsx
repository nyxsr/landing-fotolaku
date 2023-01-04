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
      photo: ProcessEdit,
      placeholder: PlaceConsult,
      context: "Konsultasi",
      desc: "Konsultasikan kebutuhan foto produkmu pada Creative Consultant untuk pemilihan paket foto, konsep, tema & model.",
    },
    {
      photo: ProcessDelivery,
      placeholder: PlaceDelivery,
      context: "Pengiriman",
      desc: "Kirim produkmu ke kantor FOTOLAKU untuk dilakukan proses selanjutnya!",
    },
    {
      photo: ProcessIron,
      placeholder: PlaceIron,
      context: "Steam / Setrika",
      desc: "Sebelum dilakukan photoshoot, produk akan dirapikan dengan steam profesional untuk mendapatkan foto produk yang lebih effortless",
    },
    {
      photo: ProcessPhoto,
      placeholder: PlacePhoto,
      context: "Photoshoot",
      desc: "Proses photoshoot dilakukan sesuai dengan tanggal yang disepakati secara nyaman bersama fotografer profesional",
    },
    {
      photo: ProcessConsult,
      placeholder: PlaceEdit,
      context: "Editing",
      desc: "Proses editing intensif dilakukan untuk mempercantik foto produk sehingga siap untuk di publish",
    },
    {
      photo: ProcessReturn,
      placeholder: PlaceReturn,
      context: "Pengembalian",
      desc: "Pengembalian barang dilakukan H+1 photoshoot ke alamat klien",
    },
  ];
  return (
    <section>
      <div className="flex flex-col justify-center items-center text-2xl font-semibold py-9">
        <h1>PROSES</h1>
        <div className="relative bg-[#fd8703] px-1 text-center text-white inline-block w-fit">
          <p>ALUR KERJA FOTOLAKU</p>
        </div>
        <p>YANG GAK RIBET</p>
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
