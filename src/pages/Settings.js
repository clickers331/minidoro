import React from "react";
import { useContext } from "react/cjs/react.development";
import Page from "../components/Page";
import { ConfigContext } from "../context/configContext";

export default function Settings() {
  const { config, setConfig } = useContext(ConfigContext);
  console.log(config);

  const handleClick = (timeModeName) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        currentTimeMode: prevConfig.configData.timeModes[timeModeName],
      };
    });
  };
  return (
    <Page>
      <button onClick={() => handleClick("pomodoro")}>Pomodoro</button>
      <button onClick={() => handleClick("break")}>Break</button>
    </Page>
  );
}
