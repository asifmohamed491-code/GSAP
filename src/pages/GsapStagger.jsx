import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {

useGSAP(()=>{
    gsap.to('.stagger-box',{
        y:250,
        rotation:360,
        borderRadius:'100%',
        repeat:-1,
        yoyo:true,
        stagger:0.5,
    })
},[])

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
                GSAP Stagger()
            </h1>

            <p
                style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "40px",
                }}
            >
                The stagger property is used to animate multiple elements one by one with a small delay.
            </p>


            <div className="mt-20">
                <div className="flex gap-5 mt-20 justify-center">
                    <div className="w-20 h-30 bg-indigo-200 rounded-lg stagger-box"></div>
                    <div className="w-20 h-30 bg-indigo-300 rounded-lg stagger-box"></div>
                    <div className="w-20 h-30 bg-indigo-400 rounded-lg stagger-box"></div>
                    <div className="w-20 h-30 bg-indigo-500 rounded-lg stagger-box"></div>
                    <div className="w-20 h-30 bg-indigo-600 rounded-lg stagger-box"></div>
                    <div className="w-20 h-30 bg-indigo-700 rounded-lg stagger-box"></div>
                    <div className="w-20 h-30 bg-indigo-800 rounded-lg stagger-box"></div>

                </div>

            </div>
        </main>
    );
};

export default GsapStagger;