import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  color: black;
  padding: 2em .2em;
`;

export const HeroColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  gap: 1em;
  flex-direction: ${({ direction }) => (direction ? "row-reverse" : "row")};

  @media (max-width: 760px) {
    /* flex-direction: column-reverse; */
    flex-direction: ${({ rev }) => (rev ? "column" : "column-reverse")};
  }
`;

export const HeroRow = styled.div`
  width: 100%;
  flex-basis: 50%;
`;

export const HeroTextBox = styled.div`
  width: 100%;
  line-height: 1.5;

  h2 {
    font-weight: 700;
    font-size: 2rem;
  }

  span {
    color: #000934;
  }

  h4 {
    font-weight: 700;
    font-size: 1.5rem;
    color: #000934;
  }

  p {
    color: black;
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 760px) {
    h2 {
      font-weight: 700;
      font-size: 1.5rem;
    }

    h4 {
      font-weight: 700;
      font-size: 1rem;
      color: #000934;
    }

    p {
      color: black;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

export const HeroButton = styled.div`
  width: 100%;

  button {
    padding: 1em 2em;
    outline: none;
    border: none;
    color: white;
    font-weight: 500;
    background-color: #000934;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:nth-child(2) {
    margin: 1em 0 0 1em;
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }
`;

export default HeroContainer;
