import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;

  height: 5.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #7500FF;

  p {
    font-size: .8rem;
    color: #fff;

    @media (min-width: 1440px) {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1440px) {
    margin-top: 19rem;
    height: 15.5rem;
  }

`;