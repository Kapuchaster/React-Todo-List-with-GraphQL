import { Button, Input, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { SettingsContext } from "../../HOC/WithSettings";

import "./style.css";

const ProfilPanel = () => {
  const settingsContext = useContext(SettingsContext);

  const { toggleColorMode } = useColorMode();

  //TODO: use react debouncing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    settingsContext.setUsername(value);
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
      <Button variant="primary" onClick={toggleColorMode}>
        Switch Theme
      </Button>
    </div>
  );
};

export default ProfilPanel;
