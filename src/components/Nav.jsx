import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { transparentize } from "polished";
import { HiCog } from "react-icons/hi";
import { IconContext } from "react-icons";

const StyledNav = styled.div`
  opacity: 0;
  position: fixed;
  padding: 1em;
  display: flex;
  flex-direction: row;
  background: inherit;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  transition-duration: ${(props) => props.theme.transitionDuration};
  &:hover {
    opacity: 100;
  }
`;

const StyledLink = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration: none;
  transition-duration: ${(props) => props.theme.transitionDuration};
  font-size: 1.7rem;
  margin: 0 0.3em;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.text};
  background: inherit;
  padding: 0.2em 0.5em;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
`;

const StyledHomeLink = styled(StyledLink)`
  &:hover {
    color: ${(props) => props.theme.accent};
    background: inherit;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const StyledSettingsLink = styled(StyledLink)`
  border-radius: 50%;
  &:hover {
    background: ${(props) => transparentize(0.5, props.theme.accent)};
    & > * {
      transform: rotate(60deg);
    }
  }
  &:active {
    & > * {
      transform: rotate(60deg) scale(1.2);
    }
  }
  & > * {
    transition: transform
      ${({ theme }) => parseInt(theme.transitionDuration) / 1.5 + "ms"}
      ease-out;
    transform: rotate(0deg) scale(1.3);
  }
`;

export default function Nav() {
  console.log("Nav rendered");
  const theme = useTheme();

  return (
    <StyledNav>
      <StyledHomeLink to="/timer">minidoro</StyledHomeLink>
      <StyledSettingsLink to="settings" style={{ aspectRatio: "1" }}>
        <HiCog />
      </StyledSettingsLink>
    </StyledNav>
  );
}
