import { createContext, ReactElement, useState } from "react";
import ModalComponent from "../components/Modal";

interface ModalContextProps {
  open: (content: JSX.Element) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  open: () => {},
});

export const WithModalContext = ({ children }: { children: ReactElement }) => {
  const [hasContent, setContent] = useState<JSX.Element | undefined>();

  const initValue = { open: setContent };

  const handleClose = () => {
    setContent(undefined);
  };

  return (
    <ModalContext.Provider value={initValue}>
      <>
        {children}
        <ModalComponent content={hasContent} onClose={handleClose} />
      </>
    </ModalContext.Provider>
  );
};
