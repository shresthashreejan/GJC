import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";

import FeedbackCard from "../cards/FeedbackCard";

const Feedbacks = () => {
    return (
        <div className={`mt-12 bg-gjcgreen rounded-[20px]`}>
            <div className={`${styles.padding} min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionAltHeadText}>Testimonials.</h2>
                </motion.div>
            </div>
            <div
                className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
            >
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
