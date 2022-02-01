import { createContext, useState } from "react";
import timeModes from "../data/timeModes";
const TimeContext = createContext();

const TimeContextProvider = (props) => {
  const [timeMode, setTimeMode] = useState(timeModes.pomodoro);
  return (
    <TimeContext.Provider
      value={{
        timeModeData: {
          timeMode: timeMode,
          setTimeMode: setTimeMode,
        },
      }}
    >
      {props.children}
    </TimeContext.Provider>
  );
};

export { TimeContextProvider, TimeContext };
