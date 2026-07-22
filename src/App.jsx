import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GsapTo from "./pages/GsapTo";
import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTimeLine from "./pages/GsapTimeLine";
import GsapStagger from "./pages/GsapStagger";





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gsap-to" element={<GsapTo />} />
      <Route path="/gsap-from" element={<GsapFrom />} />
      <Route path="/gsap-fromto" element={<GsapFromTo />} />
      <Route path="/gsap-timeline" element={<GsapTimeLine />} />
      <Route path="/gsap-stagger" element={<GsapStagger />} />


    </Routes>
  );
}

export default App;