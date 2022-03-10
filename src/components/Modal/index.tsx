import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';


interface PropsInterface {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}

function Modal(props: PropsInterface) {
  const { isOpen, children, setIsOpen } = props;
  const [modalStatus, setModalStatus] = useState(isOpen);


  useEffect(() => {
    setModalStatus(isOpen)
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;

