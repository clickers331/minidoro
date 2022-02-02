import React, { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../context/configContext";
import styled from "styled-components";

// --------------------
// Styled Components
// --------------------
const StyledTimerDisplay = styled.div`
  font-family: ${(props) => props.theme.fontFamily}, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const StyledTimer = styled.h1`
  font-size: 10rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition-duration: ${(props) =>
    props.theme.animations.transitionDuration};
  &:hover {
    color: ${(props) => props.theme.accent};
  }
  &:active {
    transform: ${(props) => props.theme.animations.button.onClick};
  }
`;

const StyledTimerButton = styled.button`
  display: ${(props) => {
    return props.show
      ? props.timerGoing
        ? "none"
        : "inline-block"
      : "none";
  }};
  opacity: 100;
  font-family: inherit;
  font-size: 2rem;
  padding: 0.2em 1em;
  cursor: pointer;
  border: none;
  transition-duration: ${(props) =>
    props.theme.animations.transitionDuration};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.accent};
  border-radius: 10px;
  &:hover {
    transform: ${(props) => props.theme.animations.button.hover};
  }
  &:active {
    transform: ${(props) => props.theme.animations.button.onClick};
    opacity: 0;
  }
`;

// ---------------------
// Component Itself
// ---------------------
function TimerDisplay() {
  const configContext = useContext(ConfigContext);
  console.log(configContext); //Grab the timeContext to use in component
  const defaultTimeInSeconds =
    configContext.config.timeModes.pomodoro.timeInSeconds;
  const [time, setTime] = useState(defaultTimeInSeconds); //Create a copy of the timeInSeconds to reduce in component
  const [timerGoing, setTimerGoing] = useState(false); //Create a timerGoing state to switch timer on and off

  // Format time into minutes and seconds and stitch them together
  const minutes =
    (time - (time % 60)) / 60 < 1 ? "" : (time - (time % 60)) / 60 + ":";
  const seconds = minutes
    ? time % 60 < 10
      ? `0${time % 60}`
      : time % 60
    : time % 60;
  const formattedTime = `${minutes}${seconds}`;
  const startTimer = () => {
    if (time === 0) {
      setTime(defaultTimeInSeconds);
      setTimerGoing((prevTimerGoing) => !prevTimerGoing);
    } else {
      setTimerGoing((prevTimerGoing) => !prevTimerGoing);
    }
  };
  useEffect(() => {
    console.log(time);
    let timerTimeout;
    const clearTimer = () => {
      clearTimeout(timerTimeout);
    };
    if (timerGoing && time > 0) {
      timerTimeout = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setTimerGoing(false);
    }
    return clearTimer;
  }, [timerGoing, time]);

  return (
    <StyledTimerDisplay>
      <StyledTimer
        onClick={() => (timerGoing ? setTimerGoing(false) : startTimer())}
        timerGoing={timerGoing}
      >
        {formattedTime}
      </StyledTimer>
      <StyledTimerButton
        onClick={() => (timerGoing ? setTimerGoing(false) : startTimer())}
        timerGoing={timerGoing}
        show={JSON.parse(configContext.config.elements.button)}
      >
        Start
      </StyledTimerButton>
    </StyledTimerDisplay>
  );
}

export default TimerDisplay;
