import TimerDisplay from "../components/TimerDisplay";
import { Page } from "../libs/Page";
import React from "react";

export default function MainPage() {
  return (
    <Page height="100vh" overflow="hidden">
      {console.log("MainPage Rendered")}
      <TimerDisplay />
    </Page>
  );
}
