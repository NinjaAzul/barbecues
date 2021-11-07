import React from "react";
import Modal, { Styles } from "react-modal";
import { GrClose } from "react-icons/gr";
import { ButtonBase } from "@material-ui/core";
import { ModalContent } from "./styles";

const customStyles: Styles = {
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1100,
    margin: "0 auto",
  },
  overlay: {
    zIndex: 1000,
    background: "#F1F1F1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

Modal.setAppElement("#__next");

interface ModalProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
  title: string;
}

export const CreateSchedule = ({
  title,
  modalIsOpen,
  onRequestClose,
}: ModalProps) => {
  function toggleOk() {
    onRequestClose();
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      style={customStyles}
      bodyOpenClassName="modalOpen"
      className="modalContent"
    >
      <ModalContent>
        <header>
          <div className="hidden"/>
          <div>{title}</div>
          <div>
            <ButtonBase className="btn-x" onClick={() => onRequestClose()}>
              <GrClose />
            </ButtonBase>
          </div>
        </header>
        <h1>Teste</h1>
      </ModalContent>
    </Modal>
  );
};
