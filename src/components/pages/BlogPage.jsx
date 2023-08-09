import AdSense from "react-adsense";
import { useParams } from "react-router-dom";
import client from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogPage = () => {
    const [blog, setBlog] = useState([]);
    const [ads, setAds] = useState([]);
    const [created, setCreated] = useState();
    const { detailId } = useParams();

    const toolbarOptions = [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"],
    ];

    const clientId = "ca-pub-7292810486004926";

    useEffect(() => {
        const fetchData = async () => {
            const response = await client
                .collection("blogs")
                .getOne(`${detailId}`);
            if (response) {
                setBlog(response);
                let slicedCreated = response.created.slice(0, 10);
                setCreated(slicedCreated);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await client
                .collection("ads")
                .getOne("camtx8w81qnnsoy");
            if (response) {
                setAds(response);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="absolute w-full bg-white dark:bg-dark">
                <div className="px-10 flex flex-col items-center mb-10">
                    <h2
                        className={`text-secondary dark:text-primary font-black md:text-[60px] sm:text-[50px] text-[24px]`}
                    >
                        {blog.title}
                    </h2>
                    <div className="text-secondary dark:text-primary flex flex-col justify-center items-center">
                        <div>By {blog.author}</div>
                        <div>{created}</div>
                    </div>
                </div>
                <div>
                    <Swiper navigation={false} className="h-full w-full my-5">
                        <SwiperSlide
                            key={1}
                            className="text-center flex justify-center items-center my-[-50px]"
                        >
                            <img
                                src={client.getFileUrl(blog, blog.image)}
                                alt="Blog images"
                                className="block h-[80vh] md:h-[70vh] object-cover md:object-contain"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-8 bg-secondary dark:bg-gjcgreen border-0 rounded " />
                </div>
                <div className="my-10">
                    <div className="px-10 flex flex-col items-center text-secondary dark:text-primary">
                        <p className="w-full md:w-[70%]">{blog.content}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                        <div className="bg-blue-500 h-64">
                            <AdSense.Google
                                client={clientId}
                                slot="3699977131"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                        <div className="bg-red-500 h-64">
                            <AdSense.Google
                                client={clientId}
                                slot="7639222149"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                        <div className="bg-green-500 h-64">
                            <AdSense.Google
                                client={clientId}
                                slot="5587773878"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
