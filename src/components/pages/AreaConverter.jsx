import React, { useState } from "react";
import { styles } from "../../styles";
import Tilt from "react-tilt";

const AreaConverter = () => {
    const [ropani, setRopani] = useState("");
    const [aana, setAana] = useState("");
    const [paisa, setPaisa] = useState("");
    const [daam, setDaam] = useState("");
    const [bigha, setBigha] = useState("");
    const [kattha, setKattha] = useState("");
    const [dhur, setDhur] = useState("");

    const [sqFt, setSqFt] = useState("");
    const [sqMeter, setSqMeter] = useState("");

    const convertAllFromRopani = () => {
        const ropaniValue = parseFloat(ropani);
        const aanaValue = ropaniValue * 16;
        const paisaValue = aanaValue * 4;
        const daamValue = paisaValue * 4;
        setAana(aanaValue.toFixed(2));
        setPaisa(paisaValue.toFixed(2));
        setDaam(daamValue.toFixed(2));
    };

    const convertToRopani = () => {
        const aanaValue = parseFloat(aana);
        const ropaniValue = aanaValue / 16;
        setRopani(ropaniValue.toFixed(2));
    };

    const convertToAana = () => {
        const paisaValue = parseFloat(paisa);
        const aanaValue = paisaValue / 4;
        setAana(aanaValue.toFixed(2));
    };

    const convertToPaisa = () => {
        const aanaValue = parseFloat(aana);
        const paisaValue = aanaValue * 4;
        setPaisa(paisaValue.toFixed(2));
    };

    const convertToDaam = () => {
        const paisaValue = parseFloat(paisa);
        const daamValue = paisaValue * 4;
        setDaam(daamValue.toFixed(2));
    };

    const convertFromDaam = () => {
        const daamValue = parseFloat(daam);
        const paisaValue = daamValue / 4;
        setPaisa(paisaValue.toFixed(2));
    };

    const convertAllFromBigha = () => {
        const bighaValue = parseFloat(bigha);
        const katthaValue = bighaValue * 20;
        const dhurValue = katthaValue * 20;
        setKattha(katthaValue.toFixed(2));
        setDhur(dhurValue.toFixed(2));
    };

    const convertToBigha = () => {
        const katthaValue = parseFloat(kattha);
        const bighaValue = katthaValue / 20;
        setBigha(bighaValue.toFixed(2));
    };

    const convertToDhur = () => {
        const katthaValue = parseFloat(kattha);
        const dhurValue = katthaValue * 20;
        setDhur(dhurValue.toFixed(2));
    };

    const convertFromDhur = () => {
        const dhurValue = parseFloat(dhur);
        const katthaValue = dhurValue / 20;
        setKattha(katthaValue.toFixed(2));
    };

    const convertToSqMeter = () => {
        if (sqFt !== "") {
            const convertedValue = (sqFt / 10.764).toFixed(4);
            setSqMeter(convertedValue);
        }
    };

    const convertToSqFt = () => {
        if (sqMeter !== "") {
            const convertedValue = (sqMeter * 10.764).toFixed(4);
            setSqFt(convertedValue);
        }
    };

    return (
        <>
            <div className="absolute w-full bg-white dark:bg-dark">
                <div className="flex justify-center px-5 mt-10">
                    <h2
                        className={`${styles.sectionHeadText} text-secondary dark:text-primary`}
                    >
                        Area Converter
                    </h2>
                </div>
                <div className="cursor-pointer p-10 flex flex-col justify-center items-center">
                    <Tilt
                        options={{
                            max: 5,
                            scale: 1,
                            speed: 450,
                        }}
                        className="w-full green-pink-gradient p-[2px] rounded-2xl shadow-card my-10"
                    >
                        <div className="bg-white p-5 rounded-2xl">
                            <div className="mt-5 grid md:grid-cols-2 grid-cols-1">
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Ropani:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        value={ropani}
                                        onChange={(e) =>
                                            setRopani(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertAllFromRopani}
                                        >
                                            All
                                        </button>
                                    </div>
                                </div>
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Aana:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        value={aana}
                                        onChange={(e) =>
                                            setAana(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToRopani}
                                        >
                                            Ropani
                                        </button>
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToPaisa}
                                        >
                                            Paisa
                                        </button>
                                    </div>
                                </div>
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Paisa:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        value={paisa}
                                        onChange={(e) =>
                                            setPaisa(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToAana}
                                        >
                                            Aana
                                        </button>
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToDaam}
                                        >
                                            Daam
                                        </button>
                                    </div>
                                </div>
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Daam:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        value={daam}
                                        onChange={(e) =>
                                            setDaam(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertFromDaam}
                                        >
                                            Paisa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        options={{
                            max: 5,
                            scale: 1,
                            speed: 450,
                        }}
                        className="w-full green-pink-gradient p-[2px] rounded-2xl shadow-card my-10"
                    >
                        <div className="bg-white p-5 rounded-2xl">
                            <div className="mt-5 grid md:grid-cols-2 grid-cols-1">
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Sq. Feet:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        value={sqFt}
                                        onChange={(e) =>
                                            setSqFt(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToSqMeter}
                                        >
                                            Sq. Meter
                                        </button>
                                    </div>
                                </div>
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Sq. Meter:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        value={sqMeter}
                                        onChange={(e) =>
                                            setSqMeter(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToSqFt}
                                        >
                                            Sq. Feet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        options={{
                            max: 5,
                            scale: 1,
                            speed: 450,
                        }}
                        className="w-full green-pink-gradient p-[2px] rounded-2xl shadow-card my-10"
                    >
                        <div className="bg-white p-5 rounded-2xl">
                            <div className="mt-5 grid md:grid-cols-2 grid-cols-1">
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Bigha:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        value={bigha}
                                        onChange={(e) =>
                                            setBigha(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertAllFromBigha}
                                        >
                                            All
                                        </button>
                                    </div>
                                </div>
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Kattha:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        value={kattha}
                                        onChange={(e) =>
                                            setKattha(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToBigha}
                                        >
                                            Bigha
                                        </button>
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertToDhur}
                                        >
                                            Dhur
                                        </button>
                                    </div>
                                </div>
                                <div className="grid-cols-1 p-4">
                                    <label className="block font-bold mb-2 text-xl text-secondary">
                                        Dhur:
                                    </label>
                                    <input
                                        className="appearance-none rounded-xl bg-primary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        value={dhur}
                                        onChange={(e) =>
                                            setDhur(e.target.value)
                                        }
                                    />
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <button
                                            className="bg-secondary hover:bg-primary text-primary hover:text-secondary font-bold py-2 px-4 rounded-full mt-4 transition"
                                            onClick={convertFromDhur}
                                        >
                                            Kattha
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </>
    );
};

export default AreaConverter;
