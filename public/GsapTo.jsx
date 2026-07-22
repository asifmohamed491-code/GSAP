import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250, //moving form x direction 
      repeat:-1, //moving form left -1 infinite time
      yoyo:true, //smooth mooving
      rotation:360, //rotate to 360 deg
      duration:2, // animate in 2 sec
      ease:"elastic" 
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
        The <code>gsap.to()</code> method animates an element from its current
        state to a new state.
      </p>

      <div
        id="blue-box"
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: "royalblue",
          borderRadius: "10px",
        }}
      ></div>
    </main>
  );
};

export default GsapTo;