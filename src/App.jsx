import Copywriting from "./components/copywriting/copywriting"
import ElevatePitch from "./components/elevatepitch/ElevatePitch"
import FABwa from "./components/fab/FAB"
import Hero from "./components/hero/hero"
import Logoclient from "./components/logoclient/logoclient"
import Navbar from "./components/navbar/navbar"
import Process from "./components/process/process"

function App() {
  return (
    <div>
      <FABwa/>
      <Navbar/>
      <Hero/>
      <Logoclient/>
      <ElevatePitch/>
      <Copywriting/>
      <Process/>
    </div>
  )
}

export default App
