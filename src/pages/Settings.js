import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react/cjs/react.development";
import {
  Page,
  PageTitle,
  Input,
  SelectorButton,
  SettingsText,
  SettingsRow,
  Container,
  Button,
  SmallButton,
} from "../libs/Page";
import { BsCheckLg } from "react-icons/bs";

import { ConfigContext } from "../context/configContext";

export default function Settings(props) {
  const firstUpdate = useRef(true);
  const { config, setConfig } = useContext(ConfigContext);
  const [inputValue, setInputValue] = useState(
    config.configData.settings.fontFamily
  );
  const [saved, setSaved] = useState(true);
  const timeModes = config.configData.timeModes;
  const themes = config.configData.themes;
  console.log(saved);

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

  const handleSettingChange = (settingToBeChanged, newSettingValue) => {
    setConfig((prevConfig) => {
      return {
        ...prevConfig,
        configData: {
          ...prevConfig.configData,
          settings: {
            ...prevConfig.configData.settings,
            [settingToBeChanged]: newSettingValue,
          },
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
                background={themes[key].background}
                text={themes[key].text}
              >
                {key}
              </SelectorButton>
            ))}
          </div>
        </SettingsRow>
        <SettingsRow>
          <SettingsText>fontFamily</SettingsText>
          <div style={{ display: "flex" }}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              size={`${inputValue.length < 10 ? 10 : inputValue.length}`}
            />
            {!saved && (
              <SmallButton
                style={{ aspectRatio: "1" }}
                onClick={() => {
                  setSaved(true);
                  handleSettingChange("fontFamily", inputValue);
                }}
              >
                <BsCheckLg />
              </SmallButton>
            )}
          </div>
          {useEffect(() => {
            if (firstUpdate.current) {
              firstUpdate.current = false;
              return;
            }
            setSaved(false);
          }, [inputValue])}
        </SettingsRow>
        <SettingsRow>
          <SettingsText>timerDisplayMode</SettingsText>
          <div>
            <SelectorButton
              onClick={() =>
                handleSettingChange("timeModeDisplayType", "minutes")
              }
              background={
                config.configData.settings.timeModeDisplayType ===
                "minutes"
                  ? config.currentTheme.accent
                  : config.currentTheme.background
              }
            >
              minutes
            </SelectorButton>
            <SelectorButton
              onClick={() =>
                handleSettingChange("timeModeDisplayType", "seconds")
              }
              background={
                config.configData.settings.timeModeDisplayType ===
                "seconds"
                  ? config.currentTheme.accent
                  : config.currentTheme.background
              }
            >
              seconds
            </SelectorButton>
          </div>
        </SettingsRow>
        <SettingsRow>
          <SettingsText>timerDisplayColor</SettingsText>
          <div>
            <SelectorButton
              onClick={() => handleSettingChange("timerColor", "text")}
              background={
                config.configData.settings.timerColor === "text"
                  ? config.currentTheme.accent
                  : config.currentTheme.background
              }
            >
              text
            </SelectorButton>
            <SelectorButton
              onClick={() => handleSettingChange("timerColor", "accent")}
              background={
                config.configData.settings.timerColor === "accent"
                  ? config.currentTheme.accent
                  : config.currentTheme.background
              }
            >
              accent
            </SelectorButton>
          </div>
        </SettingsRow>
      </Container>
    </Page>
  );
}
