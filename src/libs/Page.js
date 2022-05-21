import styled from "styled-components";
import { complement, darken } from "polished";
import { xs, s, m, l, xl } from "./screenSizes";

const Button = styled.button`
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.5rem;
  cursor: pointer;
  transition-duration: ${({ theme }) => theme.transitionDuration};
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
      background ? background : theme.accent};
  }
`;

const Slider = styled.input`
  background: inherit;
  overflow: hidden;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    border-radius: 999px;
    width: 100%;
    height: 25px;
    background: ${({ theme }) => darken(0.1, theme.accent)};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 25px;
    width: 25px;
    background: ${({ theme }) => theme.accent};
    border-radius: 999px;
    border: 0;
    transition: all 150ms;
    &:active {
      transform: scale(0.95);
    }
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: 25px;
    background: ${({ theme }) => theme.accent};
  }

  &::-moz-range-progress {
    background: ${({ theme }) => theme.accent};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: 15px;
    width: 15px;
    background: ${({ theme }) => theme.accent};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: 10px;
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${({ theme }) => darken(0.1, theme.accent)};
  }

  &::-ms-fill-upper {
    background: ${({ theme }) => theme.accent};
  }

  &::-ms-thumb {
    appearance: none;
    height: 15px;
    width: 15px;
    background: ${({ theme }) => theme.accent};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

const SmallButton = styled(Button)`
  font-size: 1.5rem;
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
  padding: 0.06em 0.5em;
  display: inline-grid;
  place-items: center;
`;

const GroupedSelectors = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  -webkit-box-sizing: border-box !important;
  -moz-box-sizing: border-box !important;
  -ms-box-sizing: border-box !important;
  box-sizing: border-box !important;
  font-family: ${({ theme }) => theme.fontFamily};
  transition-duration: ${({ theme }) => theme.transitionDuration};
  font-size: 1.5rem;
  padding: 0.5em 0.7em;
  border: none;
  border-bottom: 3px ${({ theme }) => theme.text} solid;
  &:focus {
    border: 3px solid ${({ theme }) => theme.text};
    border-bottom: 5px ${({ theme }) => theme.text} solid;
    outline: none;
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
  transition-duration: ${(props) => props.theme.transitionDuration};
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
  GroupedSelectors,
  Slider,
};
