import React, { useContext, useState } from "react"
import { TimeContext } from "../context/timeContext"

function TimerDisplay() {
  const timeContext = useContext(TimeContext)
  const [time, setTime] = useState(
    timeContext.timeModeData.timeMode.timeInSeconds
  )
  const [timerGoing, setTimerGoing] = useState(false)
  console.log("TimerDisplay rendered")

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
