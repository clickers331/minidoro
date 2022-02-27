import React, { useContext } from "react";
import { SelectorButton } from "../libs/Page";
import { ConfigContext } from "../context/configContext";
import styled from "styled-components";

const TimeModeSelectorButton = styled(SelectorButton)`
  background: ${({ isCurrentTimeMode, theme }) =>
    isCurrentTimeMode ? theme.accent : theme.background};
`;

const StyledTimeModeSelector = styled.div`
  transition: ${({ theme }) => theme.animations.transitionDuration};
  opacity: ${({ timerGoing }) => (timerGoing ? "0" : "100")};
  position: absolute;
  margin-bottom: 15em;
`;

export default function TimeModeSelector({ timerGoing }) {
  const configContext = useContext(ConfigContext);
  const { config, setConfig } = configContext;
  const handleTimeModeChange = (timeModeName) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        currentTimeMode: prevConfig.configData.timeModes[timeModeName],
      };
    });
  };
  return (
    <StyledTimeModeSelector timerGoing={timerGoing}>
      {Object.keys(config.configData.timeModes).map((key) => (
        <TimeModeSelectorButton
          key={key}
          onClick={() => handleTimeModeChange(key)}
          isCurrentTimeMode={
            config.currentTimeMode.id ===
            config.configData.timeModes[key].id
          }
        >
          {key}
        </TimeModeSelectorButton>
      ))}
    </StyledTimeModeSelector>
  );
}
