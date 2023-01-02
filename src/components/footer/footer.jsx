import React from 'react'

function Footer() {
    const handleLink = link =>{
        window.location.href = link
      }
      return (
        <footer id="footer" className="relative bg-[#1c1c1c] flex flex-col gap-3 py-5 px-5 z-10">
          <div className="flex flex-col gap-2">
            <p className="text-white font-bold">Kantor Pusat</p>
            <p onClick={()=>handleLink('https://goo.gl/maps/E74NaeetCNge9p9x6')} className="underline underline-offset-2 text-[#9d9d9d]">
              Ruko Tematik Paramount R35, Tangerang Selatan
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white font-bold">Say Hello</p>
            <p onClick={()=>handleLink('https://wa.me/+6281394683395')} className="underline underline-offset-2 text-[#9d9d9d]">+6281 3946 8339</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white font-bold">Social Media</p>
            <p onClick={()=>handleLink('https://www.instagram.com/unmute.visual/')} className="underline underline-offset-2 text-[#9d9d9d]">Instagram</p>
            <p onClick={()=>handleLink('https://www.tiktok.com/@foto.laku?_t=8YO2h0zNG7u&_r=1')} className="underline underline-offset-2 text-[#9d9d9d]">Tiktok</p>
            <p onClick={()=>handleLink('https://www.youtube.com/@fotolaku1812')} className="underline underline-offset-2 text-[#9d9d9d]">YouTube</p>
          </div>
          <p className="text-[#9d9d9d] text-xs mt-2 text-center">
            &copy; {new Date().getFullYear()} Fotolaku All Right Reserved
          </p>
        </footer>
      );
}

export default Footer