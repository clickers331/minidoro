import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from "../context/timeContext";

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
    <div>
      <p className="timer-display">{formattedTime}</p>
      <button
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
      </button>
    </div>
  );
}

export default TimerDisplay;
