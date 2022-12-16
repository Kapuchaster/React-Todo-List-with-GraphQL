import { createContext, ReactElement, useState } from "react";

interface Props {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext<Props>({
  theme: "light",
  setTheme: (theme: "light" | "dark") => {},
});

export const WithThemeContext = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const initValue = { theme, setTheme };

  return (
    <ThemeContext.Provider value={initValue}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
