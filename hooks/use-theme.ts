"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.dataset.theme = savedTheme;
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // Optional: default to dark if system is dark, but requirements say default to light
            // Keeping it light by default as per requirement "Default to light theme on first visit"
            // But if we want to respect system pref if no storage:
            // setTheme("dark");
            // document.documentElement.dataset.theme = "dark";

            // Strict requirement: "Default to light theme on first visit"
            setTheme("light");
            document.documentElement.dataset.theme = "light";
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.dataset.theme = newTheme;
    };

    return { theme, toggleTheme };
}
