import React from "react";
import { motion } from "framer-motion";

const positions = [
    {
        title: "Cultural Secretary, IIIT Raichur",
        duration: "2022 - 2024",
        details: [
            "Led a team of 10+ coordinators to organize 5+ major cultural events annually.",
            "Managed an event budget of ₹1,00,000+, ensuring cost-effective execution.",
            "Increased student engagement by 40% with interactive cultural segments."
        ]
    },
    {
        title: "TNP Cell Member, IIIT Raichur",
        duration: "2021 - 2022",
        details: [
            "Assisted in the coordination of 20+ recruitment drives.",
            "Contributed to resume screening & interview prep for 50+ students.",
            "Maintained communication with 10+ corporate partners."
        ]
    },
    {
        title: "Teaching Assistant (SDE & ITP), IIIT Raichur",
        duration: "2023 - Present",
        details: [
            "Conducted weekly tutorials for 60+ students, simplifying programming concepts.",
            "Assisted in evaluating 100+ coding assignments with detailed feedback.",
            "Improved student performance by 20% through debugging sessions."
        ]
    }
];

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.3 } }
};

const floatingVariants = {
    initial: { y: 0 },
    animate: {
        y: [0, 20, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
};

const Pos = () => {
    return (
        <div className="relative bg-black min-h-screen pt-24 pb-16 px-6 md:px-12 flex flex-col items-center overflow-hidden">
            
            {/* Floating Particles in Background */}
            {Array.from({ length: 12 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full opacity-30"
                    style={{
                        width: `${Math.random() * 50 + 30}px`,
                        height: `${Math.random() * 50 + 30}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                    }}
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                />
            ))}

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-center text-white mb-12 relative"
            >
                Positions of Responsibility
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mt-2"
                />
            </motion.h2>

            {/* Animated Cards */}
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center space-y-8 w-full max-w-2xl"
            >
                {positions.map((pos, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 w-full transition-all relative"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">{pos.title}</h3>
                        <p className="text-sm text-gray-400">{pos.duration}</p>
                        <ul className="mt-4 space-y-2">
                            {pos.details.map((detail, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    className="text-gray-300 text-sm flex items-start"
                                >
                                    <span className="text-pink-500 mr-2">•</span> {detail}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Pos;
