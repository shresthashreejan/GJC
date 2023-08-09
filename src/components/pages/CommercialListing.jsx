import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import OverviewCard from "../cards/OverviewCard";
import client from "../../lib/pocketbase";

const CommercialListing = () => {
    const [commercial, setCommercial] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState();
    const [startSearch, setStartSearch] = useState(false);
    const [filteredCommercial, setFilteredCommercial] = useState([]);

    const [premium, setPremium] = useState(false);
    const [priceRange, setPriceRange] = useState(99999999999999999);
    const [onRent, setOnRent] = useState(false);
    const [onSale, setOnSale] = useState(false);

    useEffect(() => {
        const loadResponse = async () => {
            const response = await client.collection("commercial").getFullList({
                sort: "-created",
            });
            if (response) {
            }
            setFilteredCommercial(response);
            setCommercial(response);
        };
        loadResponse();
    }, []);

    useEffect(() => {
        if (searchKeyword || priceRange) {
            if (searchKeyword) {
                let filter = commercial.filter(
                    (res) =>
                        (res.title
                            .toLowerCase()
                            .includes(searchKeyword.toLowerCase()) ||
                            res.location
                                .toLowerCase()
                                .includes(searchKeyword.toLowerCase()) ||
                            res.district
                                .toLowerCase()
                                .includes(searchKeyword.toLowerCase())) &&
                        res.price <= priceRange
                );
                setFilteredCommercial(filter);
            } else {
                let filter = commercial.filter(
                    (res) => res.price <= priceRange
                );
                setFilteredCommercial(filter);
            }
        } else {
            setFilteredCommercial(commercial);
        }
    }, [startSearch]);

    useEffect(() => {
        if (premium) {
            let filter = commercial.filter((res) => res.premium == true);
            setFilteredCommercial(filter);
        } else {
            setFilteredCommercial(commercial);
        }
    }, [premium]);

    useEffect(() => {
        if (onRent) {
            let filter = commercial.filter((res) => res.status == "Rent");
            setFilteredCommercial(filter);
        } else {
            setFilteredCommercial(commercial);
        }
    }, [onRent]);

    useEffect(() => {
        if (onSale) {
            let filter = commercial.filter((res) => res.status == "Sale");
            setFilteredCommercial(filter);
        } else {
            setFilteredCommercial(commercial);
        }
    }, [onSale]);

    return (
        <>
            <div className="absolute w-full pb-10 bg-white dark:bg-dark">
                <div className="flex flex-col justify-center items-center p-10">
                    <h2
                        className={`${styles.sectionHeadText} text-secondary dark:text-primary`}
                    >
                        Find Your Dream House
                    </h2>
                    <div className="flex mt-10 md:w-[50vw] w-full">
                        <div className="relative w-full">
                            <input
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm dark:text-secondary text-primary bg-secondary dark:bg-primary placeholder:text-white dark:placeholder:text-gray-500 border-primary border-l-2 border rounded-xl focus:outline-none"
                                placeholder="Search"
                                onChange={(event) => {
                                    event.target.value
                                        ? setSearchKeyword(event.target.value)
                                        : setSearchKeyword();
                                }}
                                required
                                onKeyDown={(event) => {
                                    if (event.key == "Enter") {
                                        setStartSearch(!startSearch);
                                    }
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="top-0 right-0 p-2.5 mx-2 text-sm font-medium text-primary bg-gjcgreen rounded-xl border border-gjcgreen hover:bg-primary transition hover:text-secondary hover:border-primary"
                            onClick={() => {
                                setStartSearch(!startSearch);
                            }}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <button
                            id="dropdown-button"
                            data-dropdown-toggle="dropdown"
                            className="flex justify-center items-center p-2.5 text-sm font-medium text-primary bg-gjcgreen rounded-xl border border-gjcgreen hover:bg-primary transition hover:text-secondary hover:border-primary"
                            type="button"
                            onClick={() => setToggle(!toggle)}
                        >
                            {" "}
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center">
                        <div
                            id="dropdown"
                            className={`${
                                !toggle ? "hidden" : "flex"
                            } z-10 bg-white rounded-xl shadow-card mx-10 w-[80vw] lg:w-[20vw] flex flex-col justify-center items-center py-5`}
                        >
                            <ul
                                className="py-2 text-sm text-secondary flex flex-col"
                                aria-labelledby="dropdown-button"
                            >
                                <li className="mb-2">
                                    <input
                                        type="number"
                                        className="bg-gjcgreen placeholder:text-primary text-primary outline-none h-10 p-5 flex w-full"
                                        placeholder="Maximum Price"
                                        onChange={(event) => {
                                            event.target.value
                                                ? setPriceRange(
                                                      event.target.value
                                                  )
                                                : setPriceRange(
                                                      99999999999999999
                                                  );
                                        }}
                                    />
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={`inline-flex w-full px-4 py-2 dark:hover:bg-gjcgreen dark:hover:text-primary  transition-all justify-start ${
                                            premium
                                                ? "bg-secondary text-primary"
                                                : "bg-white text-secondary"
                                        }`}
                                        onClick={() => {
                                            setOnSale(false);
                                            setOnRent(false);
                                            setPremium(true);
                                            setFilterToggle(!filterToggle);
                                        }}
                                    >
                                        Premium
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={`inline-flex w-full px-4 py-2 dark:hover:bg-gjcgreen dark:hover:text-primary  transition-all justify-start ${
                                            onRent
                                                ? "bg-secondary text-primary"
                                                : "bg-white text-secondary"
                                        }`}
                                        onClick={() => {
                                            setOnSale(false);
                                            setPremium(false);
                                            setOnRent(!onRent);
                                            setFilterToggle(!filterToggle);
                                        }}
                                    >
                                        Rent Only
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={`inline-flex w-full px-4 py-2 dark:hover:bg-gjcgreen dark:hover:text-primary  transition-all justify-start ${
                                            onSale
                                                ? "bg-secondary text-primary"
                                                : "bg-white text-secondary"
                                        }`}
                                        onClick={() => {
                                            setOnRent(false);
                                            setPremium(false);
                                            setOnSale(!onSale);
                                            setFilterToggle(!filterToggle);
                                        }}
                                    >
                                        Sale Only
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-7 px-2">
                    {filteredCommercial.map((filteredCommercial, index) => (
                        <OverviewCard
                            key={`commercial-${index}`}
                            index={index}
                            id={filteredCommercial.id}
                            title={filteredCommercial.title}
                            location={filteredCommercial.location}
                            district={filteredCommercial.district}
                            price={filteredCommercial.price}
                            image={client.getFileUrl(
                                filteredCommercial,
                                filteredCommercial.image[0]
                            )}
                            status={filteredCommercial.status}
                            room={filteredCommercial.room}
                            kitchen={filteredCommercial.kitchen}
                            bathroom={filteredCommercial.bathroom}
                            contact={filteredCommercial.contact_number}
                            category="commercial"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CommercialListing;
