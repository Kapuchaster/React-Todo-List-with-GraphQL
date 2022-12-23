import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  content?: JSX.Element;
  onClose: () => void;
}

const ModalComponent = ({ content, onClose }: Props) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={!!content}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {content}
      <Button onClick={closeModal}>close</Button>
    </Modal>
  );
};

export default ModalComponent;
