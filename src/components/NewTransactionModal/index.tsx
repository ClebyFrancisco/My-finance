import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  OnRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={OnRequestClose}>
      <h2>Cadastrar Nova Transação</h2>
    </Modal>
  );
}
