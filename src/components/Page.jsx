import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  width: 100vw;
  height: ${(props) => props.height};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  overflow: ${(props) => props.overflow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Page(props) {
  return (
    <StyledPage overflow={props.overflow} height={props.height}>
      {props.children}
    </StyledPage>
  );
}

Page.defaultProps = {
  overflow: "hidden",
  height: "100vh",
};
