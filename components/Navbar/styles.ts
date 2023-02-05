import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import { ToggleProps } from ".";

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: var(--navbar-spacing) 4rem;

  color: var(--violet);
  background-color: var(--black);
`;

export const NavList = styled.ul`
  display: none;
  gap: 4rem;
  list-style: none;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

    > svg {
      width: 2.25rem;
      height: 2.25rem;

      color: var(--violet);

      transition: all 0.2s ease-in-out;
    }

    > span {
      position: absolute;
      bottom: -32px;

      width: max-content;

      padding: 0.4rem 0.5rem;

      font-size: 1.1rem;

      color: var(--white);
      background-color: var(--dark-purple);
      border-radius: 0.25rem;

      visibility: hidden;
    }

    &:hover {
      > svg {
        transform: scale(1.1);
      }

      > span {
        visibility: visible;
      }
    }
  }

  @media (${device.mobileL}) {
    display: flex;
  }
`;

export const ToggleMenu = styled.div<ToggleProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;

  span {
    width: 2.25rem;
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

export const MobileMenu = styled.div<ToggleProps>`
  position: fixed;
  margin-top: 0rem;

  display: flex;
  align-items: center;

  width: 100%;

  padding: 3rem 4rem;

  background-color: var(--dark-purple);
  transition: all 0.2s ease-in-out;
  transform: ${({ isOpened }) =>
    isOpened ? "translateY(0)" : "translateY(-110%)"};

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 2rem;

    strong {
      color: var(--orange);
      font-size: 1.75rem;
      font-weight: 600;
    }

    img {
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    list-style: none;

    margin-bottom: 3rem;

    li {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      > svg {
        width: 1.8rem;
        height: 1.8rem;

        color: var(--violet);
      }

      > span {
        color: var(--white);
        font-size: 1.75rem;
      }
    }
  }

  > button {
    max-width: 10rem;

    padding: 1rem 0.75rem;

    color: var(--white);
    background-color: var(--shadow-100);
    outline: none;
    border: none;
    border-radius: 0.5rem;
  }
`;

export const MenuSignUp = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--orange);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  > button {
    max-width: 10rem;

    padding: 1rem 1.5rem;

    background-color: var(--shadow-100);
    outline: none;
    border: none;
    border-radius: 0.5rem;

    > a {
      color: var(--white);
      text-decoration: none;
    }
  }
`;
