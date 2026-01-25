"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border-2 border-black rounded-full bg-white dark:bg-gray-800 shadow-[2px_2px_0px_#000] hover:translate-y-[2px] hover:shadow-none active:translate-y-[2px] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                // Moon Icon (Pixel Style simplified)
                <span className="text-xl">🌙</span>
            ) : (
                // Sun Icon
                <span className="text-xl">☀️</span>
            )}
        </motion.button>
    );
}
