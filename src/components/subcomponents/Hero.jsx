import { styles } from "../../styles";
import { HouseCanvas } from "../canvas";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto flex flex-col`}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex justify-center gap-5`}
            >
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Ghar Jagga{" "}
                        <span className="text-gjcgreen font-black">Clinic</span>
                    </h1>
                    <p className={`${styles.heroSubText} text-primary`}>
                        Doctors of Real Estate!
                    </p>
                </div>
            </div>
            <div></div>
            <div className="flex justify-center items-center h-[80vh] w-full pt-40">
                <HouseCanvas />
            </div>
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-5 h-5 rounded-full bg-primary mb-1"
                        ></motion.div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
