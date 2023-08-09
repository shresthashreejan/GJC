const isMobile = window.innerWidth < 640;

export const textVariant = (delay) => {
    if (!isMobile) {
        return {
            hidden: {
                y: -50,
                opacity: 0,
            },
            show: {
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1.25,
                    delay: delay,
                },
            },
        };
    } else {
        return;
    }
};

export const fadeIn = (direction, type, delay, duration) => {
    if (!isMobile) {
        return {
            hidden: {
                x:
                    direction === "left"
                        ? 100
                        : direction === "right"
                        ? -100
                        : 0,
                y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
                opacity: 0,
            },
            show: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    type: type,
                    delay: delay,
                    duration: duration,
                    ease: "easeOut",
                },
            },
        };
    } else {
        return;
    }
};

export const zoomIn = (delay, duration) => {
    if (!isMobile) {
        return {
            hidden: {
                scale: 0,
                opacity: 0,
            },
            show: {
                scale: 1,
                opacity: 1,
                transition: {
                    type: "tween",
                    delay: delay,
                    duration: duration,
                    ease: "easeOut",
                },
            },
        };
    } else {
        return;
    }
};

export const slideIn = (direction, type, delay, duration) => {
    if (!isMobile) {
        return {
            hidden: {
                x:
                    direction === "left"
                        ? "-100%"
                        : direction === "right"
                        ? "100%"
                        : 0,
                y:
                    direction === "up"
                        ? "100%"
                        : direction === "down"
                        ? "100%"
                        : 0,
            },
            show: {
                x: 0,
                y: 0,
                transition: {
                    type: type,
                    delay: delay,
                    duration: duration,
                    ease: "easeOut",
                },
            },
        };
    } else {
        return;
    }
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    if (!isMobile) {
        return {
            hidden: {},
            show: {
                transition: {
                    staggerChildren: staggerChildren,
                    delayChildren: delayChildren || 0,
                },
            },
        };
    } else {
        return;
    }
};
