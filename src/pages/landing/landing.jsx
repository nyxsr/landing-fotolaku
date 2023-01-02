import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Adsform from '../../components/adsform/adsform'
import Behind from "../../components/behind/behind"
import Benefit from "../../components/benefit/benefit"
import Client from "../../components/client/client"
import Copywriting from "../../components/copywriting/copywriting"
import ElevatePitch from "../../components/elevatepitch/ElevatePitch"
import FABwa from "../../components/fab/FAB"
import Footer from '../../components/footer/footer'
import Hero from "../../components/hero/hero"
import Logoclient from "../../components/logoclient/logoclient"
import Navbar from "../../components/navbar/navbar"
import Process from "../../components/process/process"
import Services from '../../components/services/services'

function Landing() {
  const location = useLocation()

  const gotoElement = () =>{
    if (location !== null || location !== '') {
      let sectionID = location.hash.replace("#",'')
      const element = document.getElementById(sectionID)
      element?.scrollIntoView()
    }
  }
  

  useEffect(()=>{
    if (location !== '' || location !== null) {
      gotoElement();
    }
  },[location])


  return (
    <>
      <FABwa/>
      <Adsform/>
      <Navbar/>
      <Hero/>
      <ElevatePitch/>
      <Logoclient/>
      <Copywriting/>
      <Process/>
      <Services/>
      <Benefit/>
      <Client/>
      <Behind/>
      <Footer/>
    </>
  )
}

export default Landing
