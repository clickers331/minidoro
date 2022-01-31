import React, { useContext } from "react";
import { TimeContext } from "../context/timeContext";

function TimerDisplay() {
  console.log("TimerDisplay rendered");
  const timeContext = useContext(TimeContext);
  const timeInSeconds =
    timeContext.timeModeData.timeModeP.timeInSeconds;
  return (
    <div>
      <p>{timeInSeconds}</p>
    </div>
  );
}

export default TimerDisplay;
