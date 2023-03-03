import styled from "styled-components";

export const Container = styled.main`
  margin-top: calc(var(--navbar-content-size) + (2 * var(--navbar-spacing)));

  font-size: 1.4rem;
  background-color: var(--orange);
`;

export const AccountTop = styled.section`
  padding: 2rem var(--container-padding);

  > strong {
    color: var(--white);
    font-weight: 600;
  }
`;

export const AccountDetails = styled.article`
  display: flex;
  gap: 1.6rem;

  padding: var(--container-padding);

  background-color: var(--dark-purple);

  > img {
    margin: auto 0;
    box-shadow: 0 2px 4px var(--shadow);
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--white);
      margin-bottom: 0.4rem;
    }

    strong {
      color: var(--orange);
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    small {
      color: var(--violet);
      font-size: 1.3rem;
      letter-spacing: 120%;
    }
  }
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;

  padding: var(--container-padding);

  font-size: 1.6rem;
  list-style: none;

  color: var(--white);
  background-color: var(--dark-purple);

  > :nth-child(1n) {
    padding: 1.5rem;
    border-bottom: 1px solid var(--shadow-100);
  }

  > :last-child {
    border-bottom: none;
  }
`;
