import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isDarkAreaChart, setDarkIsAreaChart] = useState(false);
  const [isLightAreaChart, setLightIsAreaChart] = useState(false);
  const [isDarkBarChart, setIsDarkBarChart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div>
      {/* Hamburger for mobile */}
      <div className="lg:hidden p-4 pt-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-neutral-200 focus:outline-none absolute top-15 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-neutral-950 w-[250px] z-20 min-h-screen fixed border-r border-neutral-800 ${
          isOpen ? "block" : "hidden"
        } lg:block fixed top-0`}
      >
        <div className="mt-24 ml-4 text-lg font-medium">Components</div>

        <div className="mt-4 py-1.5 px-4 cursor-pointer hover:bg-neutral-800 transition-colors duration-200 bg-neutral-900">
          Dark Theme
        </div>

        <div
          className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 hover:translate-x-1.5 text-[15px] font-medium"
          onClick={() => {
            navigate("/components/dropdown");
            setIsOpen(false);
          }}
        >
          DropDown
        </div>

        {/* Dark AreaChart */}
        <div
          className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 flex gap-2 justify-between text-[15px] font-medium"
          onClick={() => setDarkIsAreaChart(!isDarkAreaChart)}
        >
          AreaChart
          <motion.div
            animate={{ rotate: isDarkAreaChart ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronIcon />
          </motion.div>
        </div>

        <AnimatePresence>
          {isDarkAreaChart && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="border-l-2 ml-8 text-[15px] font-medium"
            >
              <SubLink
                label="MidnightPurple"
                onClick={() => {
                  navigate("/components/charts/MidnightPurple");
                  setIsOpen(false);
                }}
              />
              <SubLink
                label="LightPeach"
                onClick={() => {
                  navigate("/components/charts/LightPeach");
                  setIsOpen(false);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dark BarChart */}
        <div
          className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 flex gap-2 justify-between text-[15px] font-medium"
          onClick={() => setIsDarkBarChart(!isDarkBarChart)}
        >
          BarChart
          <motion.div
            animate={{ rotate: isDarkBarChart ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronIcon />
          </motion.div>
        </div>

        <AnimatePresence>
          {isDarkBarChart && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="border-l-2 ml-8 text-[15px] font-medium "
            >
              <SubLink
                label="Neutral"
                onClick={() => {
                  navigate("/components/charts/NeutralBarChart");
                  setIsOpen(false);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Light Theme */}
        <div className="mt-4 py-1.5 px-4 cursor-pointer hover:bg-neutral-800 transition-colors duration-200 bg-neutral-900">
          Light Theme
        </div>

        {/* Light AreaChart */}
        <div
          className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 flex gap-2 justify-between text-[15px] font-medium"
          onClick={() => setLightIsAreaChart(!isLightAreaChart)}
        >
          AreaChart
          <motion.div
            animate={{ rotate: isLightAreaChart ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronIcon />
          </motion.div>
        </div>

        <AnimatePresence>
          {isLightAreaChart && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="border-l-2 ml-8 text-[15px] font-medium "
            >
              <SubLink
                label="LightOrange"
                onClick={() => {
                  navigate("/components/charts/LightOrange");
                  setIsOpen(false);
                }}
              />
              <SubLink
                label="LightBrown"
                onClick={() => {
                  navigate("/components/charts/LightBrown");
                  setIsOpen(false);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Chevron Icon Component
function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// SubLink Component
function SubLink({ label, onClick } : any) {
  return (
    <div
      className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 hover:translate-x-1.5"
      onClick={onClick}
    >
      {label}
    </div>
  );
}
