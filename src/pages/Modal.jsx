import React from "react";
import styled from "styled-components";

const StyledModalContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  transition-duration: 200ms;
  pointer-events: ${({ modalOpen }) => (modalOpen ? "all" : "none")};
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ modalOpen }) => (modalOpen ? "1" : "0")};
  display: grid;
  place-items: center;
  transition-duration: ${({ theme }) => theme.transitionDuration};
`;

const StyledModal = styled.div`
  z-index: 11;
  min-width: 40%;
  height: 30vh;
  background-color: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => `${parseInt(theme.borderRadius) * 2}px`};
  box-sizing: border-box;
  padding: 2em;
`;

export default function Modal({ modalOpen, setModalOpen }) {
  return (
    <StyledModalContainer
      modalOpen={modalOpen}
      onClick={() => setModalOpen(false)}
    >
      <StyledModal onClick={() => setModalOpen(true)}>
        New Theme
      </StyledModal>
    </StyledModalContainer>
  );
}
