import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import Modal from "react-modal";

import "./style.css";

interface Props {
  content?: JSX.Element;
  onClose: () => void;
}

const ModalComponent = ({ content, onClose }: Props) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  //TODO create custom Chakra Theme
  const blueBg = useColorModeValue("blue.100", "blue.800");
  const pinkBg = useColorModeValue("pink.100", "pink.800");

  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={!!content}
      onRequestClose={closeModal}
      contentLabel="modal"
      className="modal"
      overlayClassName="overlay"
    >
      <Box
        padding="2.5rem"
        rounded="1rem"
        bgGradient={`linear(to-r, ${blueBg}, ${pinkBg})`}
      >
        <Box position="absolute" right="0" top="0" zIndex="99999">
          <Button onClick={closeModal} rounded="15" bg="pink.200">
            X
          </Button>
        </Box>
        {content}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
