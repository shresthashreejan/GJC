import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";

const OverviewCard = ({
    index,
    id,
    title,
    location,
    district,
    price,
    image,
    status,
    isLand,
    bedroom,
    bathroom,
    livingRoom,
    kitchen,
    landSize,
    contact,
    category,
    room,
    isCommercial,
}) => {
    return (
        <>
            <Link to={`/detail/${category}/${id}`}>
                <motion.div
                    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    className=" cursor-pointer"
                >
                    <Tilt
                        options={{
                            max: 15,
                            scale: 1,
                            speed: 450,
                        }}
                        className="w-full green-pink-gradient p-[2px] rounded-2xl shadow-card"
                    >
                        <div className="bg-white p-5 rounded-2xl w-[80vw] md:w-[360px]">
                            <div className="relative w-full h-[230px]">
                                <img
                                    src={image}
                                    alt="project_image"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                                    <div className=" bg-secondary text-primary w-20 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                        <div className="object-contain">
                                            {status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-secondary font-bold text-[24px]">
                                    {title}
                                </h3>
                                <hr className="my-5" />
                                <p className="mt-2 text-secondary text-[18px]">
                                    {location}, {district}
                                </p>
                                <p className="mt-2 text-secondary font-medium text-[20px]">
                                    {isLand
                                        ? `Rs. ${price}/Aana`
                                        : `Rs. ${price}`}
                                </p>
                                <p className="mt-2 text-secondary text-[20px] font-medium">
                                    +977 {contact}
                                </p>
                                <hr className="my-5" />

                                {isLand ? (
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-secondary text-[24px]">
                                            {landSize}
                                        </p>
                                        <p className="mt-2 text-secondary text-[14px]">
                                            Area
                                        </p>
                                    </div>
                                ) : isCommercial ? (
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="mt-2 text-secondary text-[24px]">
                                                {room}
                                            </p>
                                            <p className="mt-2 text-secondary text-[14px]">
                                                Rooms
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="mt-2 text-secondary text-[24px]">
                                                {kitchen}
                                            </p>
                                            <p className="mt-2 text-secondary text-[14px]">
                                                Kitchen
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="mt-2 text-secondary text-[24px]">
                                                {bathroom}
                                            </p>
                                            <p className="mt-2 text-secondary text-[14px]">
                                                Bathroom
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="mt-2 text-secondary text-[24px]">
                                                {bedroom}
                                            </p>
                                            <p className="mt-2 text-secondary text-[14px]">
                                                Bedroom
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="mt-2 text-secondary text-[24px]">
                                                {livingRoom}
                                            </p>
                                            <p className="mt-2 text-secondary text-[14px]">
                                                Hall
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="mt-2 text-secondary text-[24px]">
                                                {kitchen}
                                            </p>
                                            <p className="mt-2 text-secondary text-[14px]">
                                                Kitchen
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="mt-2 text-secondary text-[24px]">
                                                {bathroom}
                                            </p>
                                            <p className="mt-2 text-secondary text-[14px]">
                                                Bathroom
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Tilt>
                </motion.div>
            </Link>
        </>
    );
};

export default OverviewCard;
