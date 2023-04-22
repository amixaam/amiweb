import "./Landing.css";
import { ChevronCompactDown } from "react-bootstrap-icons";

import React, { useState, useRef, useEffect, useMemo } from "react";

const Letter = ({ delay, letter }) => {
    const style = {
        animationDelay: `${delay}s`,
    };

    return (
        <span className="wavy-letter" style={style}>
            {letter}
        </span>
    );
};

const Landing = () => {
    const [secondDelay, setSecondDelay] = useState(0);
    const prevSecondDelayRef = useRef(0);

    useEffect(() => {
        prevSecondDelayRef.current = secondDelay;
    }, [secondDelay]);

    const handleAnimation = () => {
        setSecondDelay((prevSecondDelay) => prevSecondDelay + 0.4);
    };

    useEffect(() => {
        const intervalId = setInterval(handleAnimation, 100);
        return () => clearInterval(intervalId);
    }, []);

    const letters = "Outer";
    const letters1 = "Space";
    const delays = useMemo(() => {
        return letters
            .split("")
            .map((_, index) => prevSecondDelayRef.current + index * 0.4);
    }, [letters]);

    return (
        <div>
            <div className="landing-page">
                <h1 className="landing-title">
                    <div className="wave">
                        {letters.split("").map((letter, index) => (
                            <Letter
                                key={index}
                                delay={delays[index]}
                                letter={letter}
                            />
                        ))}
                    </div>
                    <div className="wave">
                        {letters1.split("").map((letter, index) => (
                            <Letter
                                key={index}
                                delay={delays[index]}
                                letter={letter}
                            />
                        ))}
                    </div>
                </h1>
                <div className="landing-guide">
                    <ChevronCompactDown className="icon" size={50} />
                </div>
            </div>
            <div className="landing-page"></div>
        </div>
    );
};

export default Landing;
