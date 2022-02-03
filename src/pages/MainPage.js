import TimerDisplay from "../components/TimerDisplay";
import Page from "../components/Page";
import React from "react";

export default function MainPage() {
  console.log("MainPage rendered");
  return (
    <Page height="100vh" overflow="hidden">
      <TimerDisplay />
    </Page>
  );
}
