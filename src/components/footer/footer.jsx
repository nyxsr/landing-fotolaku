import React from "react";
import { useLocation } from "react-router-dom";
import { DataLink } from "../../data/data";

function Footer() {
  const location = useLocation()
  const path = location.pathname.split('/');

  const handleLink = (link) => {
    window.location.href = link;
  };

  const newTabLeads = (link) =>{
    window.open(link,'_blank');
    // fbq('track','Lead');
  }

  const newTabContact = (link) =>{
    window.open(link,'_blank')
    // fbq('track','Contact')
  }
  return (
    <footer
      id="footer"
      className="relative bg-[#1c1c1c] flex flex-col gap-3 py-5 px-5 z-10"
    >
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold">Kantor Pusat</p>
        <p
          onClick={() => handleLink("https://goo.gl/maps/E74NaeetCNge9p9x6")}
          className="underline underline-offset-2 text-[#9d9d9d]"
        >
          Ruko Tematik Paramount R35, Tangerang Selatan
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold">Say Hello</p>
        <p
          onClick={() => newTabLeads(path[1] === 'tiktok' ? DataLink.WhatsappAlter : DataLink.Whatsapp)}
          className="underline underline-offset-2 text-[#9d9d9d]"
        >
          0811-8037-895 (Whatsapp)
        </p>
        <p
          onClick={() => {window.open("tel:02122225678");fbq('track','Contact')}}
          className="underline underline-offset-2 text-[#9d9d9d]"
        >
          021-2222-5678
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold">Social Media</p>
        <p
          onClick={() => newTabContact(DataLink.Instagram)}
          className="underline underline-offset-2 text-[#9d9d9d]"
        >
          Instagram
        </p>
        <p
          onClick={() => newTabContact(DataLink.Tiktok)}
          className="underline underline-offset-2 text-[#9d9d9d]"
        >
          Tiktok
        </p>
        <p
          onClick={() => newTabContact(DataLink.Youtube)}
          className="underline underline-offset-2 text-[#9d9d9d]"
        >
          YouTube
        </p>
      </div>
      <p className="text-[#9d9d9d] text-xs mt-2 text-center">
        &copy; {new Date().getFullYear()} Fotolaku All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;
