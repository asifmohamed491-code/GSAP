import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
const GsapText = () => {
    useGSAP(() => {
        gsap.to('#text', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
        })

        gsap.fromTo('.para', {
            opacity: 0,
            y: 20
        },
            {
                opacity:1,
                y:0,
                delay:0.5, //heading animation complete after animate para
                stagger:0.1 //one by one animation 
            })
    }, [])


    return (
        <main className="px-12 py-10 font-sans text-white bg-[#16161d] min-h-screen">
            {/* Heading */}
            <h1 id="text" className="text-5xl font-bold mb-8 opacity-0 translate-y-10">
                GsapText
            </h1>

            {/* Paragraph 1 */}
            
            <p className="text-gray-400 text-xl leading-9 max-w-4xl mb-8 para">
                We can use same method like{" "}
                <span className="text-orange-400 font-semibold ">
                    gsap.to()
                </span>
                ,{" "}
                <span className="text-orange-400 font-semibold">
                    gsap.from()
                </span>
                ,{" "}
                <span className="text-orange-400 font-semibold">
                    gsap.fromTo()
                </span>{" "}
                and{" "}
                <span className="text-orange-400 font-semibold">
                    gsap.timeline()
                </span>{" "}
                to animate text.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-400 text-xl leading-9 max-w-4xl mb-8 para">
                Using these methods we can achieve various text animations and
                effects like fade in, fade out, slide in, slide out, and many
                more.
            </p>

            {/* Paragraph 3 */}
            <p className="text-gray-400 text-xl leading-9 max-w-4xl mb-8 para">
                For more advanced text animations and effects, you can explore
                the GSAP TextPlugin or other third-party libraries that
                specialize in text animations.
            </p>

            {/* Paragraph 4 */}
            <p className="text-gray-400 text-xl leading-9 max-w-4xl para">
                Read more about the{" "}
                <span className="text-blue-500 font-medium cursor-pointer hover:underline">
                    TextPlugin
                </span>{" "}
                plugin.
            </p>
        </main>
    )
}
export default GsapText;
