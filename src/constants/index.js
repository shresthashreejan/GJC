import { house, land, apartment, commercial } from "../assets";

const navLinks = [
    {
        id: "housing",
        title: "House",
    },
    {
        id: "land",
        title: "Land",
    },
    {
        id: "apartments",
        title: "Apartment",
    },
    {
        id: "commercial",
        title: "Commercial",
    },
    {
        id: "areaconverter",
        title: "Area Converter",
    },
    {
        id: "blogs",
        title: "Blog",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        icon: house,
        title: "Housing",
    },
    {
        icon: land,
        title: "Land",
    },
    {
        icon: apartment,
        title: "Apartments",
    },
    {
        icon: commercial,
        title: "Commercial",
    },
];

const testimonials = [
    {
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        name: "Sara Lee",
        designation: "CFO",
        company: "ABC",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        name: "Lisa Wang",
        designation: "IJK",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

export { navLinks, services, testimonials };
