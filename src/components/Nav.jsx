import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { transparentize } from "polished";
import { HiCog } from "react-icons/hi";

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
  transition-duration: ${(props) =>
    props.theme.animations.transitionDuration};
  &:hover {
    opacity: 100;
  }
`;

const StyledLink = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration: none;
  transition-duration: ${(props) =>
    props.theme.animations.transitionDuration};
  font-size: 1.7rem;
  margin: 0 0.3em;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.text};
  background: inherit;
  padding: 0.2em 0.5em;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  &:active {
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.background};
  }
`;

const StyledHomeLink = styled(StyledLink)`
  &:hover {
    color: ${(props) => props.theme.accent};
    background: inherit;
  }
`;

const StyledSettingsLink = styled(StyledLink)`
  &:hover {
    background: ${(props) => transparentize(0.97, props.theme.accent)};
  }
`;

const StyledCog = styled(HiCog)`
  transtion-duration: ${({ theme }) =>
    theme.animations.transitionDuration};
  transform: rotate(0deg);
  &:hover {
    transform: rotate(134deg);
  }
  background: "black";
`;

export default function Nav() {
  console.log("Nav rendered");

  return (
    <StyledNav>
      <StyledHomeLink to="/timer">minidoro</StyledHomeLink>
      <StyledSettingsLink to="settings" style={{ aspectRatio: "1" }}>
        <StyledCog />
      </StyledSettingsLink>
    </StyledNav>
  );
}
