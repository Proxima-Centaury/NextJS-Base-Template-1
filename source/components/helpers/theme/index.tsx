"use client";

import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

const Theme = ({ children, ...props }: ThemeProviderProps): React.JSX.Element => {

    return <ThemeProvider enableColorScheme { ...props }>
        { children }
    </ThemeProvider>;
    
};

export default Theme;