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
    text-transform: uppercase;
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

  padding: 0.8rem;

  background-color: var(--white);
  border-radius: 50%;

  &:hover {
    cursor: pointer;

    > img {
      transform: scale(1.2);
    }
  }

  > img {
    transition: transform 0.2s ease-in-out;
  }

  &:nth-child(odd) {
    background-color: var(--orange);
  }

  &:nth-child(even) {
    background-color: var(--violet);
  }
`;
