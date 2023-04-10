import { useEffect, useState } from "react";

enum Theme {
    LIGHT = "light",
    DARK = "dark",
}
export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
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
    return <div onClick={() => switchTheme()}>Switch theme</div>;
};
