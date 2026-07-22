import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GsapTo from "./pages/GsapTo";
import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTimeLine from "./pages/GsapTimeLine";





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gsap-to" element={<GsapTo />} />
      <Route path="/gsap-from" element={<GsapFrom />} />
      <Route path="/gsap-fromto" element={<GsapFromTo />} />
      <Route path="/gsap-timeline" element={<GsapTimeLine />} />

    </Routes>
  );
}

export default App;