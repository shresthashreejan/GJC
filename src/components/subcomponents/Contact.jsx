import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import client from "../../lib/pocketbase";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        number: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numberRegex = /(\+977)?[9][6-9]\d{8}/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        const handleRegexErrorToast = () => {
            toast.error("Invalid phone number or email address!"),
                {
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                };
        };

        const handleSuccessToast = () => {
            toast.success(
                "Thank you. We will get back to you as soon as possible."
            ),
                {
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                };
        };

        const handleErrorToast = () => {
            toast.error("Something went wrong. Please try again later."),
                {
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                };
        };

        if (numberRegex.test(form.number) && emailRegex.test(form.email)) {
            setLoading(true);
            emailjs
                .send(
                    `${import.meta.env.VITE_SERVICE_ID}`,
                    `${import.meta.env.VITE_CONTACT_TEMPLATE}`,
                    {
                        from_fname: form.fname,
                        from_lname: form.lname,
                        number: form.number,
                        to_name: "Ghar Jagga Clinic",
                        from_email: form.email,
                        to_email: "nepalirealtors@gmail.com",
                        message: form.message,
                    },
                    `${import.meta.env.VITE_PUBLIC_KEY}`
                )
                .then(
                    async () => {
                        setLoading(false);
                        setForm({
                            fname: "",
                            lname: "",
                            number: "",
                            email: "",
                            message: "",
                        });

                        const data = {
                            first_name: form.fname,
                            last_name: form.lname,
                            phone_no: form.number,
                            email: form.email,
                        };

                        await client.collection("users").create(data);
                        handleSuccessToast();
                    },
                    (error) => {
                        setLoading(false);
                        handleErrorToast();
                    }
                );
        } else {
            handleRegexErrorToast();
        }
    };

    return (
        <>
            <div className="pb-10">
                <div
                    className={`xl:mt-12 flex xl:flex-row flex-col-reverse justify-center overflow-hidden `}
                >
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5, 0.75)}
                        className="flex-[0.75] bg-slate-800 p-8 rounded-2xl"
                    >
                        <h3 className={styles.sectionAltHeadText}>
                            Contact us.
                        </h3>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="mt-12 flex flex-col gap-8"
                        >
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    First Name
                                </span>
                                <input
                                    type="text"
                                    name="fname"
                                    value={form.fname}
                                    onChange={handleChange}
                                    className="bg-primary py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    Last Name
                                </span>
                                <input
                                    type="text"
                                    name="lname"
                                    value={form.lname}
                                    onChange={handleChange}
                                    className="bg-primary py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    Your number
                                </span>
                                <input
                                    type="text"
                                    name="number"
                                    value={form.number}
                                    onChange={handleChange}
                                    className="bg-primary py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    Your email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="bg-primary py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    Your Message
                                </span>
                                <textarea
                                    rows={7}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="bg-primary py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"
                                />
                            </label>

                            <button
                                type="submit"
                                className="bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-slate-800"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </motion.div>
                </div>
                <ToastContainer
                    position="bottom-right"
                    style={{
                        position: "absolute",
                    }}
                />
            </div>
        </>
    );
};

export default SectionWrapper(Contact, "contact");
