import { motion } from "framer-motion";
import { LampContainer } from "./lamp";

export function BuildFlowLampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center"
      >
        <motion.h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Building Digital <br /> 
          <span className="bg-gradient-to-br from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
            Experiences
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Experience the future of web development with BuildFlow's innovative dark mode interface
        </motion.p>
        
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Explore Projects
          </button>
          <button className="px-8 py-3 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 font-semibold rounded-lg transition-all duration-300">
            View Templates
          </button>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
}
