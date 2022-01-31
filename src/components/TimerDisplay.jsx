import React, { useContext, useState } from "react"
import { TimeContext } from "../context/timeContext"

function TimerDisplay() {
  const timeContext = useContext(TimeContext) //Grab the timeContext to use in component
  const [time, setTime] = useState(
    timeContext.timeModeData.timeMode.timeInSeconds
  ) //Create a copy of the timeInSeconds to reduce in component
  const [timerGoing, setTimerGoing] = useState(false) //Create a timerGoing state to switch timer on and off

  // Format minutes and seconds and stitch them together
  const minutes =
    (time - (time % 60)) / 60 < 1 ? "" : (time - (time % 60)) / 60 + ":"
  const seconds = minutes
    ? time % 60 < 10
      ? `0${time % 60}`
      : time % 60
    : time % 60

  const formattedTime = `${minutes}${seconds}`
  return (
    <div>
      <p className="timer-display">{formattedTime}</p>
      <button>Start/Stop</button>
    </div>
  )
}

export default TimerDisplay
