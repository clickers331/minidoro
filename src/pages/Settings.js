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
  console.log(config.currentTimeMode);

  const handleTimeModeChange = (timeModeName) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        currentTimeMode: prevConfig.configData.timeModes[timeModeName],
      };
    });
  };

  const handleThemeChange = (themeName) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        currentTheme: config.configData.themes[themeName],
      };
    });
  };

  return (
    <Page column={true}>
      <Container>
        <PageTitle>Settings</PageTitle>
        <SettingsRow>
          <SettingsText>Theme:</SettingsText>
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
      </Container>
    </Page>
  );
}
