import React from "react";
import { DataClient } from "../../data/data";

function Client() {
  return (
    <section className="">
      <div className="flex pl-6 flex-col justify-center items-center text-2xl font-semibold py-9">
        <h1>LIHAT KATA</h1>
        <div className="relative bg-[#fd8703] text-white px-1 inline-block w-fit">
          CLIENT TENTANG KAMI
        </div>
      </div>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit ml-6">
            {DataClient.map((v,i)=>{
                return <Card key={i} id={i+1} brand={v.brand} text={v.text} />
            })}
        </div>
      </div>
    </section>
  );
}

function Card(props) {

  return (
    <div className="bg-white py-5 px-5 rounded-xl flex gap-2 items-center shadow-xl">
      <div className="relative w-[19.875rem] items-center justify-center flex flex-col rounded-xl">
       <blockquote className="text-center"><q>{props.text}</q></blockquote>
       <p className="text-xl font-semibold my-5 text-center">{props.brand}</p>
      </div>
    </div>
  );
}

export default Client;
