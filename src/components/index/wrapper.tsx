import { motion } from "framer-motion";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden">
      <motion.div
        id="wrapper"
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="w-screen bg-[#FFE7DE] h-screen flex flex-row relative z-40"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Wrapper;
