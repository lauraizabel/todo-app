import React from "react";
import { useSpring, animated } from "react-spring";

import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./styles";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode | React.FC;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: open ? 1 : 0,
    transform: open ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {open && (
        <Background>
          <animated.div style={{ ...animation }}>
            <ModalWrapper>
              <ModalContent>{children}</ModalContent>
              <CloseModalButton onClick={onClose} />
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
};

export default Modal;
