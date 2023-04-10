import { useEffect, useState } from "react";
import { Theme, useThemeContext } from "../../context/ThemeContext";
import "./switcher.scss";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useThemeContext();
    useEffect(() => {
        setTheme(Theme.LIGHT);
        document.documentElement.setAttribute("data-theme", "light");
    }, []);

    const switchTheme = () => {
        if (theme === Theme.LIGHT) {
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme(Theme.DARK);
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            setTheme(Theme.LIGHT);
        }
    };
    return (
        <div className="switcher-container">
            <input
                type="checkbox"
                id="themeSwitch"
                name="theme-switch"
                className="theme-switch__input"
                onClick={() => switchTheme()}
            />
            <label htmlFor="themeSwitch" className="theme-switch__label">
                <span>Switch theme</span>
            </label>
        </div>
    );
};
