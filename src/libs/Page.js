import styled from "styled-components";
import { transparentize } from "polished";
import { xs, s, m, l, xl } from "./screenSizes";

const Button = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.5rem;
  cursor: pointer;
  transition-duration: ${({ theme }) =>
    theme.animations.transitionDuration};
  padding: 0.3em 0.5em;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const SelectorButton = styled(Button)`
  &:nth-of-type(1) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
  }
  &:nth-last-of-type(1) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
  }
  border-radius: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ text }) => text};
`;

const SettingsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media ${s} {
    width: 100%;
  }
`;

const Page = styled.div`
  transition-duration: ${(props) =>
    props.theme.animations.transitionDuration};
  width: 100vw;
  font-family: ${(props) => props.theme.fontFamily};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  overflow: ${(props) => props.overflow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
`;

const SettingsText = styled.p`
  font-size: 2rem;
`;

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  padding: 0 2rem;
  border-radius: ${({ theme }) => parseInt(theme.borderRadius) * 2 + "px"};
  & * {
    margin: 0.4em 0;
  }
  @media ${l} {
    width: 70%;
  }
`;

Page.defaultProps = {
  overflow: "hidden",
  height: "100vh",
};

export {
  Page,
  PageTitle,
  Button,
  SelectorButton,
  SettingsRow,
  SettingsText,
  Container,
};
