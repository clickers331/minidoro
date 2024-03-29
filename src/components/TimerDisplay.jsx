import React, { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../context/configContext";
import styled from "styled-components";
import useSound from "use-sound";
import clickSfx from "../sound/click-5.mp3";
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
  cursor: pointer;
  transition-duration: 150ms;
  color: ${(props) => props.theme.text};
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
  &:active {
    transform: ${(props) => props.theme.animations.button.onClick};
  }
`;

// ---------------------
// Component Itself
// ---------------------
function TimerDisplay({ timerGoing, setTimerGoing }) {
  const { config, setConfig } = useContext(ConfigContext); //Grab the configContext to use in component
  const defaultTimeInSeconds = config.currentTimeMode.timeInSeconds; //Create a defaultTimeInSeconds to be able to reference it at timer reset
  const [time, setTime] = useState(defaultTimeInSeconds); //Create a copy of the timeInSeconds to reduce in component
  const [play] = useSound(clickSfx);

  useEffect(() => {
    setTime(defaultTimeInSeconds);
    setTimerGoing(false);
  }, [defaultTimeInSeconds]);
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
    //Start timer by settingTimerGoing to true
    setTimerGoing(true);
  };

  const resetTimer = () => {
    // Reset the timer by resetting the time and stopping the timer
    setTime(defaultTimeInSeconds);
    setTimerGoing(false);
  };

  const pauseTimer = () => {
    // Pause the timer by stopping the timer
    setTimerGoing(false);
  };
  useEffect(() => {
    let timerTimeout;
    const clearTimer = () => {
      clearTimeout(timerTimeout);
    };
    if (timerGoing && time > 0) {
      timerTimeout = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      resetTimer();
    } else {
      setTimerGoing(false);
    }
    return clearTimer;
  }, [timerGoing, time]);
  document.title = formattedTime;
  let numClicks = 0;
  let singleClickTimer;
  return (
    <StyledTimerDisplay>
      <StyledTimer
        onClick={(event) => {
          numClicks++;
          play();
          if (numClicks === 1) {
            singleClickTimer = setTimeout(() => {
              numClicks = 0;
              timerGoing ? pauseTimer() : startTimer();
            }, 400);
          } else if (numClicks >= 2) {
            clearTimeout(singleClickTimer);
            numClicks = 0;
            resetTimer();
          }
        }}
        timerGoing={timerGoing}
      >
        {config.configData.timeModeDisplayType == "minutes"
          ? formattedTime
          : time}
      </StyledTimer>
    </StyledTimerDisplay>
  );
}

export default TimerDisplay;
