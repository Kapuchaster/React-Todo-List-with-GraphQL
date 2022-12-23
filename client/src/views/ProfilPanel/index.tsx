import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Input } from "../../components";
import { SettingsContext } from "../../HOC/WithSettings";
import { ThemeContext } from "../../HOC/WithTheme";

import "./style.css";

const ProfilPanel = () => {
  const settingsContext = useContext(SettingsContext);
  const themeContext = useContext(ThemeContext);

  //TODO: use react debouncing
  const handleInputChange = (value: string) => {
    settingsContext.setUsername(value);
  };

  const handleThemeChange = () => {
    if (themeContext.theme === "light") {
      themeContext.setTheme("dark");
    } else {
      themeContext.setTheme("light");
    }
  };

  return (
    <div className="profilPanel">
      <h1>Profile</h1>
      <p>username:</p>
      <Input
        value={settingsContext.username}
        name="username"
        onChange={handleInputChange}
      />
      <Button
        title="Switch Theme"
        variant="primary"
        onClick={handleThemeChange}
      />
    </div>
  );
};

export default ProfilPanel;
