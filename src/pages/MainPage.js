import TimerDisplay from "../components/TimerDisplay";
import React from "react";
import styled from "styled-components";

const StyledMainPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainPage() {
  console.log("MainPage rendered");
  return (
    <StyledMainPage>
      <TimerDisplay />
    </StyledMainPage>
  );
}
