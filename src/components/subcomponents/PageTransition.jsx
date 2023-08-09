import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    in: {
        opacity: 1,
        x: 0,
        y: 0,
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

const PageTransition = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial="initial"
                animate="in"
                exit={{ opacity: 0 }}
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
