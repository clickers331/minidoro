import TimerDisplay from "../components/TimerDisplay";
import { Page } from "../libs/Page";
import React, { useState } from "react";
import TimeModeSelector from "../components/TimeModeSelector";

export default function MainPage() {
  const [timerGoing, setTimerGoing] = useState(false);
  return (
    <Page height="100vh" overflow="hidden">
      {console.log("MainPage Rendered")}
      <TimeModeSelector timerGoing={timerGoing} />
      <TimerDisplay
        timerGoing={timerGoing}
        setTimerGoing={setTimerGoing}
      />
    </Page>
  );
}
