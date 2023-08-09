import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../../utils/motion";

const customTiltSettings = {
    reverse: false,
    max: 15,
    perspective: 1000,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: "1",
    speed: "1000",
    transition: true,
    axis: null,
    reset: true,
};

const AboutCard = ({ index, title, icon }) => (
    <Tilt
        options={customTiltSettings}
        className="xs:w-[250px] w-full cursor-pointer"
    >
        <Link to={title}>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt="web-development"
                        className="w-16 h-16 object-contain"
                    />
                    <span>
                        <h3 className="text-secondary text-[20px] font-bold text-center">
                            {title}
                        </h3>
                    </span>
                </div>
            </motion.div>
        </Link>
    </Tilt>
);

export default AboutCard;
