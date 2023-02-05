import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  padding: 4rem;
  margin-top: calc(var(--navbar-content-size) + (2 * var(--navbar-spacing)));

  h1 {
    color: var(--white);
  }

  > div {
    font-size: 1.5rem;
    color: var(--white);
  }
`;
