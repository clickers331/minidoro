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
  GroupedSelectors,
  Slider,
} from "../libs/Page";
import Modal from "../pages/Modal.jsx";
import { BsCheckLg, BsPlusLg } from "react-icons/bs";

import { ConfigContext } from "../context/configContext";

export default function Settings(props) {
  const firstUpdate = useRef(true);
  const { config, setConfig } = useContext(ConfigContext);

  const [controlledInputValues, setControlledInputValues] = useState({
    fontFamily: config.configData.settings.fontFamily,
    transitionDuration: config.configData.settings.transitionDuration,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const themes = config.configData.themes;

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
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Container>
        <PageTitle>Settings</PageTitle>
        <SettingsRow>
          <SettingsText>theme</SettingsText>
          <GroupedSelectors>
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
            <SmallButton
              isGrouped={true}
              onClick={() => setModalOpen(true)}
            >
              <BsPlusLg />
            </SmallButton>
          </GroupedSelectors>
        </SettingsRow>
        <SettingsRow>
          <SettingsText>fontFamily</SettingsText>
          <GroupedSelectors style={{ display: "flex" }}>
            <Input
              value={controlledInputValues.fontFamily}
              onChange={(e) =>
                setControlledInputValues((prevVals) => {
                  return { ...prevVals, fontFamily: e.target.value };
                })
              }
              onBlur={() => {
                handleSettingChange(
                  "fontFamily",
                  controlledInputValues.fontFamily
                );
              }}
              size={`${
                controlledInputValues.fontFamily.length < 10
                  ? 10
                  : controlledInputValues.fontFamily.length
              }`}
            />
          </GroupedSelectors>
        </SettingsRow>
        <SettingsRow>
          <SettingsText>timerDisplayMode</SettingsText>
          <GroupedSelectors>
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
          </GroupedSelectors>
        </SettingsRow>
        <SettingsRow>
          <SettingsText>timerDisplayColor</SettingsText>
          <GroupedSelectors>
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
          </GroupedSelectors>
        </SettingsRow>
        <SettingsRow>
          <SettingsText>transitionDuration</SettingsText>
          <GroupedSelectors>
            <Slider
              type="range"
              min="100"
              max="500"
              onChange={(e) =>
                setControlledInputValues((prevVals) => {
                  return {
                    ...prevVals,
                    transitionDuration: `${e.target.value}ms`,
                  };
                })
              }
              onBlur={(event) => {
                return handleSettingChange(
                  "transitionDuration",
                  controlledInputValues.transitionDuration
                );
              }}
              value={parseInt(
                controlledInputValues.transitionDuration
              ).toString()}
            />
          </GroupedSelectors>
        </SettingsRow>
      </Container>
    </Page>
  );
}
