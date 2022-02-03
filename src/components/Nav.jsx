import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import settingsIcon from "../svg/bxs-cog.svg";
import { transparentize } from "polished";

console.log(settingsIcon);
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
    background: ${(props) => transparentize(0.97, props.theme.text)};
  }
`;

const StyledIcon = styled.svg`
  fill: ${(props) => props.theme.text};
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledHomeLink to="/">minimaldoro</StyledHomeLink>
      <StyledSettingsLink to="/settings" style={{ aspectRatio: "1" }}>
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
          width="24"
          height="24"
        >
          <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
        </StyledIcon>
      </StyledSettingsLink>
    </StyledNav>
  );
}
