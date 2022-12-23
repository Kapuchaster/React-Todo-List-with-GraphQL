import { Button, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { SettingsContext } from "../../HOC/WithSettings";
import { ThemeContext } from "../../HOC/WithTheme";

import "./style.css";

const ProfilPanel = () => {
  const settingsContext = useContext(SettingsContext);
  const themeContext = useContext(ThemeContext);

  //TODO: use react debouncing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
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
