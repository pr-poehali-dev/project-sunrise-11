import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3228eb66-3342-4a8b-bf49-e120a864aa4c/files/99b7dde3-f26e-4aae-8bbd-7a7d17c4edb9.jpg"
          alt="Russian birch forest landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 opacity-80">Галерея русской поэзии</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ДУША<br/>СЛОВА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light italic">
          «Нам не дано предугадать, как наше слово отзовётся»
        </p>
        <p className="text-sm mt-3 opacity-60 tracking-widest uppercase">— Фёдор Тютчев</p>
      </div>
    </div>
  );
}