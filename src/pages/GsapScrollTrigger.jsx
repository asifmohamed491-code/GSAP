import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: "100%",
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start:'bottom, bottom',
                    end:'top 10%',
                    scrub:true,
                },
                ease:'power1.inOut'
            });
        });
    }, {scope:scrollRef});

    return (
        <main className="px-12 py-10 font-sans">
            <h1 className="text-5xl font-bold mb-5">
                GSAP ScrollTrigger
            </h1>

            <p className="text-gray-500 leading-7 max-w-3xl mb-16">
                The <code className="bg-gray-200 px-2 py-1 rounded">ScrollTrigger</code>{" "}
                plugin is used to trigger animations based on the user's scroll
                position. It allows you to start, stop, scrub, pin, and synchronize
                animations while scrolling, making web pages more interactive.
            </p>

            <section className="h-screen flex items-center justify-center">
                <h2 className="text-4xl font-bold text-gray-400">
                    Scroll Down
                </h2>
            </section>

            <div className="mt-20 w-full h-screen" ref={scrollRef}>
                <div
                    id="scroll-pink"
                    className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
                ></div>

                <div
                    id="scroll-orange"
                    className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
                ></div>
            </div>
        </main>
    );
};

export default GsapScrollTrigger;