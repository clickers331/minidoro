import React, { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../context/configContext";
import styled from "styled-components";
import { lighten, darken } from "polished";
import useSound from "use-sound";
import clickSfx from "../sound/stone-sliding.mp3";
// --------------------
// Styled Components
// --------------------
const StyledTimerDisplay = styled.div`
  font-family: ${(props) => props.theme.fontFamily}, sans-serif;
  transition-duration: ${({ theme }) => theme.transitionDuration};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border-radius: 15px;
  border-radius: 40px;
  box-shadow: ${({ isTimerGoing, theme }) =>
    isTimerGoing
      ? "none"
      : `20px 20px 60px
      ${darken(0.1, theme.background)},
    -20px -20px 60px ${lighten(0.1, theme.background)}`};
  transform: ${({ isTimerGoing }) =>
    isTimerGoing ? "scale(0.97)" : "scale(1)"}}
  padding: 1.5em;
  
`;

const StyledTimer = styled.h1`
  font-size: 10rem;
  cursor: pointer;
  transition-duration: 150ms;
  color: ${({ theme }) => theme[theme.timerColor]};
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;

// ---------------------
// Component Itself
// ---------------------
function TimerDisplay({ timerGoing, setTimerGoing }) {
  const { config, setConfig } = useContext(ConfigContext); //Grab the configContext to use in component
  const defaultTimeInSeconds = config.currentTimeMode.timeInSeconds; //Create a defaultTimeInSeconds to be able to reference it at timer reset
  const [time, setTime] = useState(defaultTimeInSeconds); //Create a copy of the timeInSeconds to reduce in component
  const [play, { stop }] = useSound(clickSfx, { volume: 0.3 });

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
    play();
    const timeout = setTimeout(() => {
      stop();
    }, parseInt(config.configData.settings.transitionDuration));
  };

  const resetTimer = () => {
    // Reset the timer by resetting the time and stopping the timer
    setTime(defaultTimeInSeconds);
    setTimerGoing(false);
    play();
    const timeout = setTimeout(() => {
      stop();
    }, parseInt(config.configData.settings.transitionDuration));
  };

  const pauseTimer = () => {
    // Pause the timer by stopping the timer
    setTimerGoing(false);
    play();
    const timeout = setTimeout(() => {
      stop();
    }, parseInt(config.configData.settings.transitionDuration));
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
    <StyledTimerDisplay isTimerGoing={timerGoing}>
      <StyledTimer
        onClick={(event) => {
          numClicks++;

          if (numClicks === 1) {
            singleClickTimer = setTimeout(() => {
              numClicks = 0;
              timerGoing ? pauseTimer() : startTimer();
            }, 150);
          } else if (numClicks >= 2) {
            clearTimeout(singleClickTimer);
            numClicks = 0;
            resetTimer();
          }
        }}
        timerGoing={timerGoing}
      >
        {config.configData.settings.timeModeDisplayType === "minutes"
          ? formattedTime
          : time}
      </StyledTimer>
    </StyledTimerDisplay>
  );
}

export default TimerDisplay;
