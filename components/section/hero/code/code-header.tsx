import { motion } from "framer-motion";

export const CodeHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] bg-[#1a1830] px-4 py-2">
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-[#FF548E]"></div>
        <div className="h-3 w-3 rounded-full bg-[#7C4DFF]"></div>
        <div className="h-3 w-3 rounded-full bg-[#00C6FF]"></div>
      </div>
      <div className="text-xs font-medium text-gray-300">project.ts</div>
      <div className="flex items-center space-x-2">
        <motion.div
          className="h-2 w-2 rounded-full bg-[#FFE259]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <span className="text-xs text-gray-400">active</span>
      </div>
    </div>
  );
};
