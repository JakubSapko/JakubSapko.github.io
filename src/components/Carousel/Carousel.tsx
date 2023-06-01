import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, memo, useRef, SetStateAction } from "react";
import { config } from "react-spring";
import { useSyncExternalStore } from "react";

export default function Carroussel(props: {
    cards: any[];
    offset: number;
    width: any;
    height: any;
    margin: any;
}) {
    const table = props.cards.map(
        (element: any, index: SetStateAction<number>) => {
            return { ...element, onClick: () => setIndex(index) };
        }
    );

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [cards] = useState(table);

    const [index, setIndex] = useState(0);
    const [isAutoplayed, setIsAutoplayed] = useState(true);
    const autoPlayRef = useRef<any>(null);

    useEffect(() => {
        clearInterval(autoPlayRef.current);
        if (isAutoplayed && window.innerWidth < 800) {
            autoPlayRef.current = setInterval(() => {
                setIndex((index) => index + 1);
            }, 10000);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoplayed]);
    useEffect(() => setOffsetRadius(props.offset), [props.offset]);

    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                margin: props.margin,
            }}
        >
            <Carousel
                slides={cards}
                goToSlide={index}
                offsetRadius={offsetRadius}
                animationConfig={config.gentle}
                showNavigation={false}
            />
        </div>
    );
}
