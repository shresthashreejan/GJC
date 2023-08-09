import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";

const BlogCard = ({
    index,
    id,
    title,
    content,
    tagline,
    image,
    author,
    created,
}) => {
    return (
        <>
            <Link to={`/detail/blogs/${id}`}>
                <div className="mt-20 flex flex-wrap gap-7">
                    <div className=" cursor-pointer">
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
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-secondary font-bold text-[24px]">
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-secondary text-[18px]">
                                        {tagline}
                                    </p>
                                    <hr className="my-5" />
                                    <p className="mt-2 text-secondary text-[14px] font-medium">
                                        By {author}
                                    </p>
                                    <p className="mt-2 text-secondary text-[14px] font-medium">
                                        {created}
                                    </p>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BlogCard;
