import { getLineColor } from "@/lib/utils";
import { motion } from "framer-motion";

export const CodeLine = ({
  line,
  activeLineIndex,
  i,
}: {
  line: any;
  activeLineIndex: any;
  i: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`h-6 ${line.color}`}
    >
      {activeLineIndex === i && (
        <motion.div
          className="absolute -ml-2 h-6 w-[calc(100%-2rem)] rounded bg-[#08A88A]/10"
          layoutId="highlighter"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative">{line.content}</span>
    </motion.div>
  );
};
