import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataService } from '../../data/data'

function Services() {
    const videoService = DataService.filter(v => v.category === 'Video')
    const photoService = DataService.filter(v => v.category !== 'Video')
  return (
    <section id="services" className="relative bg-[#1c1c1c] py-10 px-5 z-10">
    <h1 className="font-bold text-3xl text-white">Our Services</h1>
    <p className="text-[#9d9d9d]">Services yang Fotolaku sediakan untuk kamu yang memiliki brand </p>
    <h1 className="font-bold text-2xl pt-5 text-white">Photo Services</h1>
    <div className="overflow-x-scroll">
      <div className="flex flex-nowrap py-6 gap-4 w-fit">
        {photoService.map((v,i)=>{
            return <Card key={i} id={i} foto={v.foto} placeholder={v.placeholder} price={v.price} text={v.text} rating={v.rating} desc={v.desc} />
        })}
      </div>
    </div>
    <h1 className="font-bold text-2xl pt-5 text-white">Video Services</h1>
    <div className="overflow-x-scroll">
      <div className="flex flex-nowrap py-6 gap-4 w-fit">
        {videoService.map((v,i)=>{
            return <Card key={i} id={i + 6} foto={v.foto} placeholder={v.placeholder} price={v.price} text={v.text} rating={v.rating} desc={v.desc} />
        })}
      </div>
    </div>
  </section>
  )
}

export default Services

function Card(props) {
    const navigate = useNavigate();
    const location = useLocation();
  const path = location.pathname.split('/');
    return (
        <div className="relative bg-white flex flex-col rounded-2xl py-3 px-3" onClick={()=>navigate(`/${path[1] === 'tiktok' ? 'details_tiktok' : 'details'}/${props.id}`)}>
          <div className='relative'>

        <LazyLoadImage
          width={212}
          height={199}
          src={props.foto}
          placeholderSrc={props.placeholder}
          effect="blur"
          className={`w-[13.25rem] h-[12.4375rem] ${props.id === 7 && 'object-[20%_20%]'} ${props.id === 1 && 'object-top'} object-cover rounded-2xl`}
          alt={props.text}
          />
          </div>
        <p className="text-lg font-bold pt-[14px]">{props.text}</p>
        <div className="flex justify-between">
          <p className="font-bold text-[#FD8703]">{props.price}</p>
          <div className="flex items-center">
            <AiFillStar color="#fd8703" />
            <p className="font-semibold">{props.rating}</p>
          </div>
        </div>
        <div className="flex bg-[#fd8703] py-2 rounded-lg mt-2 items-center justify-center gap-3">
       <button className=' font-bold text-white'>See Details</button>
        </div>
      </div>
    )
}