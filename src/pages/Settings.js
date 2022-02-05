import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import Page from "../components/Page";
import { ConfigContext } from "../context/configContext";

const Button = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 2rem;
  cursor: pointer;
  transition-duration: ${({ theme }) =>
    theme.animations.transitionDuration};
  padding: 0.3em 0.5em;
  border:none;
  border-radius ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
 
`;

const ButtonSelector = styled(Button)`
  &:nth-of-type(1) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:nth-last-of-type(1) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

const TimeModeSelectorButton = styled(ButtonSelector)`
  background: ${({ isCurrentTimeMode, theme }) =>
    isCurrentTimeMode ? theme.accent : theme.background};
`;

export default function Settings(props) {
  const { config, setConfig } = useContext(ConfigContext);
  const [settings, setSettings] = useState(config);
  const timeModes = config.configData.timeModes;
  console.log(useLocation());

  const handleTimeModeChange = (timeModeName) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        currentTimeMode: prevConfig.configData.timeModes[timeModeName],
      };
    });
  };

  return (
    <Page>
      {Object.keys(timeModes).map((key) => (
        <TimeModeSelectorButton
          key={key}
          onClick={() => handleTimeModeChange(key)}
          isCurrentTimeMode={config.currentTimeMode === timeModes[key]}
        >
          {key}
        </TimeModeSelectorButton>
      ))}
    </Page>
  );
}
