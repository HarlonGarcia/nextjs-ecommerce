import { device } from "@/styles/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: var(--container-padding);
  margin-top: calc(var(--navbar-content-size) + (2 * var(--navbar-spacing)));

  > h1 {
    margin-bottom: 2rem;

    color: var(--white);

    font-size: 1.75rem;
  }
`;

export const OffersContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Offer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7rem;
  height: 7rem;

  margin-bottom: 6rem;
  padding: 0.8rem;

  background-color: var(--white);
  border-radius: 1rem;

  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }

  background-color: var(--bright);
`;

export const FOWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36rem;
  border-radius: 1rem;

  background-color: var(--purple);

  ::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;

    display: block;

    width: 100%;
    height: 100%;

    background-image: url("/images/paper.jpg");
    background-size: cover;
    mix-blend-mode: overlay;

    opacity: 0.3;
  }

  @media (${device.mobileM}) {
    width: 31.5rem;
  }
`;

export const FeaturedOffer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 100%;

  > img {
    z-index: 1;
  }
`;

export const FeaturedOfferDescription = styled.p`
  position: absolute;

  top: 20px;
  left: 20px;
  width: 12rem;

  padding: 1rem;

  font-weight: 500;
  font-size: 1.4rem;
  line-height: 130%;

  color: var(--white);
  background-color: var(--orange);
  border-radius: 0.5rem;

  > strong {
    text-transform: uppercase;
  }
`;
