import styled from "styled-components";
import { complement, darken } from "polished";
import { xs, s, m, l, xl } from "./screenSizes";

const Button = styled.button`
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.5rem;
  cursor: pointer;
  transition-duration: ${({ theme }) =>
    theme.animations.transitionDuration};
  padding: 0.3em 0.5em;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme, background }) => {
    return background ? background : theme.accent;
  }};
  color: ${({ theme, invertedText, background }) =>
    invertedText ? complement(background) : theme.text};
  &:hover {
    background: ${({ theme, background }) =>
      darken(0.05, background ? background : theme.accent)};
  }
`;

const SmallButton = styled(Button)`
  padding: 0.3em 0.6em;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  margin-left: 1.5rem;
`;

const Input = styled.input`
  text-align: center;
  -webkit-box-sizing: border-box !important;
  -moz-box-sizing: border-box !important;
  -ms-box-sizing: border-box !important;
  box-sizing: border-box !important;
  font-family: ${({ theme }) => theme.fontFamily};
  transition-duration: ${({ theme }) =>
    theme.animations.transitionDuration};
  font-size: 1.5rem;
  padding: 0.5em 0.7em;
  border: none;
  border-bottom: 3px ${({ theme }) => theme.text} solid;
  &:focus {
    border: 3px dashed ${({ theme }) => theme.text};
    border-bottom: 5px ${({ theme }) => theme.text} solid;
  }
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
  SmallButton,
  SettingsRow,
  SettingsText,
  Container,
  Input,
};
