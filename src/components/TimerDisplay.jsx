import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from "../context/timeContext";
import styled from "styled-components";

const StyledTimerDisplay = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const StyledTimer = styled.h1`
  font-size: 10rem;
`;

const StyledTimerButton = styled.button`
  font-size: 2rem;
  padding: 0.2em 1em;
  cursor: pointer;
  border: none;
  transition-duration: 100ms;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.accent};
  border-radius: 10px;
  &:hover {
    transform: translateY(-5px);
  }
`;

function TimerDisplay() {
  const timeContext = useContext(TimeContext); //Grab the timeContext to use in component
  const [time, setTime] = useState(10); //Create a copy of the timeInSeconds to reduce in component
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
      clearTimer();
      setTimerGoing(false);
    }
    return clearTimer;
  }, [timerGoing, time]);

  return (
    <StyledTimerDisplay>
      <StyledTimer>{formattedTime}</StyledTimer>
      <StyledTimerButton
        onClick={() => {
          if (time === 0) {
            setTime(10);
            setTimerGoing((prevTimerGoing) => !prevTimerGoing);
          } else {
            setTimerGoing((prevTimerGoing) => !prevTimerGoing);
          }
        }}
      >
        {timerGoing ? "Stop" : "Start"}
      </StyledTimerButton>
    </StyledTimerDisplay>
  );
}

export default TimerDisplay;
