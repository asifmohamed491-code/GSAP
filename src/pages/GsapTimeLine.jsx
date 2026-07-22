import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeLine = () => {
    const timeline = gsap.timeline({

        repeat: -1,
        repeatDelay: 1,  //animation completing after one second 1 sec waiting. 
        yoyo:true //backward to forward

    });

    useGSAP(() => {
        timeline.to('#yellow-box', {
            x: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        })

        timeline.to('#yellow-box', {
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        })

        timeline.to('#yellow-box', {
            x: 500,
            scale: 1,
            rotation: 360,
            borderRadius: '8px',
            duration: 2,
            ease: 'back.inOut'
        })
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
                GSAP timeline()
            </h1>

            <p
                style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "40px",
                }}
            >
               The <code>gsap.timeline()</code> method is used to organize and control multiple animations in a sequence.
            </p>

            <div style={{ marginTop: "20px" }}>
                <button style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: '5px', paddingRight: '5px' }}
                    onClick={() => {
                        if (timeline.paused()) {  //pauses is a true
                            timeline.play(); //so click play 
                        } else {
                            timeline.pause(); //running
                        }
                    }}>
                    Play/Pause
                </button>
            </div>

            <div
                id="yellow-box"
                style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: "yellow",
                    borderRadius: "10px",
                }}
            ></div>
        </main>
    );
};

export default GsapTimeLine;