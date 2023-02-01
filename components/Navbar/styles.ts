import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import { Test } from ".";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 4rem;

  color: var(--violet);
  background-color: var(--black);
`;

export const NavList = styled.ul`
  display: none;
  list-style: none;

  li {
    display: flex;
    align-items: center;

    > * {
      width: 2rem;
      height: 2rem;

      color: var(--violet);
    }
  }

  @media (${device.mobileL}) {
    display: flex;
  }
`;

export const ToggleMenu = styled.div<Test>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;

  span {
    width: 2.5rem;
    height: 0.3rem;
    background-color: var(--white);

    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;

    :first-child {
      transform: ${({ isOpened }) =>
        isOpened
          ? "rotate(-45deg) translateY(8px) translateX(-5px)"
          : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isOpened }) => (isOpened ? "0" : "1")};
      transform: ${({ isOpened }) =>
        isOpened ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpened }) =>
        isOpened
          ? "rotate(45deg) translateY(-6px) translateX(-4px)"
          : "rotate(0)"};
    }
  }

  @media (${device.mobileL}) {
    display: none;
  }
`;
