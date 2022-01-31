import { createContext, useState } from "react";
const TimeContext = createContext();
const timeModeData = {
  pomodoro: {
    timeInSeconds: 1500,
  },
};

const TimeContextProvider = (props) => {
  const [timeMode, setTimeMode] = useState(timeModeData.pomodoro);
  return (
    <TimeContext.Provider
      value={{
        timeModeData: {
          timeModeP: timeMode,
          setTimeModeP: setTimeMode,
        },
      }}
    >
      {props.children}
    </TimeContext.Provider>
  );
};

export { TimeContextProvider, TimeContext };
