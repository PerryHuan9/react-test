import React, { createContext } from "react";

interface Theme {
  color?: string;
  backgroundColor?: string;
}

export const ThemeContext: React.Context<Theme> = createContext<Theme>({
  color: "red"
});
