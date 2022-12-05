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

Modal.setAppElement("#root");

interface Props {
  content?: JSX.Element;
  onClose: () => void;
}

const ModalComponent = ({ content, onClose }: Props) => {
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
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default ModalComponent;
