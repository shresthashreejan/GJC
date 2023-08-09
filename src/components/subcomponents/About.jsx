import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import AboutCard from "../cards/AboutCard";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p
                    className={`${styles.sectionHeadText} text-secondary dark:text-primary`}
                >
                    About us
                </p>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary dark:text-primary text-[17px] leading-[30px]"
            >
                Welcome to Ghar Jagga Clinic, where we specialize in helping
                clients buy, sell, rent, and flip properties. Our mission is to
                make the real estate experience better for everyone involved,
                from first-time homebuyers to seasoned investors. <br />
                <br />
                Our team of experienced agents is dedicated to providing
                top-notch service to all of our clients. We understand that
                buying or selling a property can be a complex and emotional
                process, and we're here to guide you every step of the way.
                <br />
                <br /> At Ghar Jagga Clinic, we pride ourselves on our expertise
                in the local real estate market. We have a wide variety of
                properties available, from single-family homes to multi-unit
                apartment buildings. Whether you're looking for a starter home
                or a luxury property, we have something to fit your needs and
                budget.
                <br />
                <br /> We believe that honesty, integrity, and transparency are
                key to building strong relationships with our clients. We'll
                always be upfront and honest with you about your options and
                will work tirelessly to help you achieve your real estate goals.
                <br />
                <br />
                If you're looking to buy, sell, rent, or flip a property, please
                don't hesitate to contact us. We're here to help make your real
                estate dreams a reality.
            </motion.p>

            <div className="mt-20 flex flex-wrap justify-center gap-10">
                {services.map((service, index) => (
                    <AboutCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
