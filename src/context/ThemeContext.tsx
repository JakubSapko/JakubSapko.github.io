import {
    useState,
    useEffect,
    useContext,
    createContext,
    ReactNode,
} from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

interface IThemeContext {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<IThemeContext>({
    theme: Theme.LIGHT,
    setTheme: () => {},
});

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    return context;
};

type ThemeContextProviderProps = {
    children: ReactNode;
};

export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const plantsContextValue: IThemeContext = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={plantsContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
