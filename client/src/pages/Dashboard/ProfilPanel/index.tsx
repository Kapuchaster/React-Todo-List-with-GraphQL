import { useContext } from "react";
import { Input } from "../../../components";
import { SettingsContext } from "../../../HOC/WithSettings";

import "./style.css";

const ProfilPanel = () => {
  const modalContext = useContext(SettingsContext);

  //TODO: use react debouncing
  const handleInputChange = (value: string) => {
    modalContext.setUsername(value);
  };

  return (
    <div className="profilPanel--container">
      <h1>Profile</h1>
      <div>username:</div>
      <Input
        value={modalContext.username}
        name="username"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProfilPanel;
