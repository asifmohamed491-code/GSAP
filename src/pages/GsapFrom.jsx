import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250, //moving form x direction 
      repeat:-1, //moving form left -1 infinite time
      yoyo:true, //smooth mooving
      rotation:360, //rotate to 360 deg
      duration:2, // animate in 2 sec
      ease:"power1.inOut" 
    });
  }, []);

  return (
    <main
      style={{
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        GSAP To()
      </h1>

      <p
        style={{
          color: "#666",
          lineHeight: "1.6",
          marginBottom: "40px",
        }}
      >
        The <code>gsap.to()</code> method animates an element from a new state to their current state.
      </p>

      <div
        id="green-box"
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: "green",
          borderRadius: "10px",
        }}
      ></div>
    </main>
  );
};

export default GsapFrom;