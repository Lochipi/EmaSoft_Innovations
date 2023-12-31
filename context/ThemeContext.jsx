"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const toggle = () => {
        setMode(prevState => (prevState === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggle }}>
            <div className={`theme ${mode}`}>
             {children}
            </div>
        </ThemeContext.Provider>
    );
}