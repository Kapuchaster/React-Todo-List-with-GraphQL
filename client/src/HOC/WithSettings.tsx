import { createContext, ReactElement, useState } from "react";

interface SettingProps {
  username: string;
}

interface ContextProps extends SettingProps {
  setUsername: (username: string) => void;
}

export const SettingsContext = createContext<ContextProps>({
  username: "",
  setUsername: (username: string) => {},
});

export const WithSettingsContext = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [settings, setSettings] = useState<SettingProps>({
    username: "John Doe",
  });

  const handleSetUsername = (username: string) => {
    setSettings((state) => ({ ...state, username }));
  };

  const initValue = {
    username: settings.username,
    setUsername: handleSetUsername,
  };

  return (
    <SettingsContext.Provider value={initValue}>
      {children}
    </SettingsContext.Provider>
  );
};
