import { useContext } from "react";
import { Input } from "../../../components";
import { SettingsContext } from "../../../HOC/WithSettings";

import "./style.css";

const ProfilPanel = () => {
  const settingsContext = useContext(SettingsContext);

  //TODO: use react debouncing
  const handleInputChange = (value: string) => {
    settingsContext.setUsername(value);
  };

  return (
    <div className="profilPanel--container">
      <h1>Profile</h1>
      <div>username:</div>
      <Input
        value={settingsContext.username}
        name="username"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProfilPanel;
