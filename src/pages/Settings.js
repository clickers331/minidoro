import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import {
  Page,
  PageTitle,
  Button,
  SelectorButton,
  SettingsText,
  TimeModeSelectorButton,
  SettingsRow,
  Container,
} from "../libs/Page";

import { ConfigContext } from "../context/configContext";

export default function Settings(props) {
  const { config, setConfig } = useContext(ConfigContext);
  const [settings, setSettings] = useState(config);
  const timeModes = config.configData.timeModes;
  const themes = config.configData.themes;
  console.log(config.currentTheme);
  console.log(config.configData.timeModeDisplayType);

  const handleThemeChange = (themeName) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        currentTheme: config.configData.themes[themeName],
      };
    });
  };

  const handleOtherChange = (propToBeChanged, newPropValue) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        configData: {
          ...prevConfig.configData,
          [propToBeChanged]: newPropValue,
        },
      };
    });
  };

  return (
    <Page column={true}>
      <Container>
        <PageTitle>Settings</PageTitle>
        <SettingsRow>
          <SettingsText>theme</SettingsText>
          <div>
            {Object.keys(themes).map((key) => (
              <SelectorButton
                key={key}
                onClick={() => handleThemeChange(key)}
                backgroundColor={themes[key].background}
                text={themes[key].text}
              >
                {key}
              </SelectorButton>
            ))}
          </div>
        </SettingsRow>
        <SettingsRow>
          <SettingsText>timerDisplayMode</SettingsText>
          <div>
            <SelectorButton
              onClick={() =>
                handleOtherChange("timeModeDisplayType", "minutes")
              }
              backgroundColor={
                config.configData.timeModeDisplayType === "minutes"
                  ? config.currentTheme.accent
                  : config.currentTheme.background
              }
            >
              minutes
            </SelectorButton>
            <SelectorButton
              onClick={() =>
                handleOtherChange("timeModeDisplayType", "seconds")
              }
              backgroundColor={
                config.configData.timeModeDisplayType === "seconds"
                  ? config.currentTheme.accent
                  : config.currentTheme.background
              }
            >
              seconds
            </SelectorButton>
          </div>
        </SettingsRow>
      </Container>
    </Page>
  );
}
