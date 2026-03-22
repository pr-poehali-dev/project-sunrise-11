import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <h3 id="poems" className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Русская поэзия
      </h3>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic max-w-4xl leading-tight mb-6">
          «Я помню чудное мгновенье:<br/>передо мной явилась ты»
        </p>
        <p className="text-neutral-300 text-sm tracking-widest uppercase">— Александр Пушкин</p>
      </div>

      <p className="absolute bottom-12 left-6 text-white text-sm z-10 opacity-60 uppercase tracking-widest">
        XIX — XX век
      </p>
    </div>
  );
}