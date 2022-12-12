import { createContext, ReactElement, useState } from "react";
import { ChatRoom } from "../__generated__/operations-types";

interface SettingProps {
  username: string;
  activeRoom?: ChatRoom;
}

interface ContextProps extends SettingProps {
  setUsername: (username: string) => void;
  setActiveRoom: (activeRoom?: ChatRoom) => void;
}

export const SettingsContext = createContext<ContextProps>({
  username: "",
  activeRoom: undefined,
  setUsername: (username: string) => {},
  setActiveRoom: (activeRoom?: ChatRoom) => {},
});

export const WithSettingsContext = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [settings, setSettings] = useState<SettingProps>({
    username: "John Doe",
    activeRoom: undefined,
  });

  const handleSetUsername = (username: string) => {
    setSettings((state) => ({ ...state, username }));
  };

  const handleSetActiveRoom = (activeRoom?: ChatRoom) => {
    setSettings((state) => ({ ...state, activeRoom }));
  };

  const initValue = {
    username: settings.username,
    activeRoom: settings.activeRoom,
    setUsername: handleSetUsername,
    setActiveRoom: handleSetActiveRoom,
  };

  return (
    <SettingsContext.Provider value={initValue}>
      {children}
    </SettingsContext.Provider>
  );
};
