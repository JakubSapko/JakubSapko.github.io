import { useEffect, useState } from "react";

enum Theme {
    LIGHT = "light",
    DARK = "dark",
}
export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const switchTheme = () => {
        const sections = [...document.getElementsByClassName("panel")];
        if (theme === Theme.LIGHT) {
            sections.forEach((section) => {
                section.classList.add("night");
            });
            setTheme(Theme.DARK);
        } else {
            sections.forEach((section) => {
                section.classList.remove("night");
            });
            setTheme(Theme.LIGHT);
        }
    };
    return <div onClick={() => switchTheme()}>Switch theme</div>;
};
