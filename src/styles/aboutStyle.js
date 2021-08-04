import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  color: black;
`;

export const AboutColumn = styled.div`
  width: 100%;
  color: black;
`;

export const AboutRow = styled.div`
  width: 100%;
  color: black;
  margin: 2em 0;
  display: flex;
  background-color: ${({ white }) => (white ? "white" : "transparent")};
  justify-content: space-between;
  align-items: center;
  gap: 3em;
  border-radius: 8px;
  padding: ${({ padding }) => (padding ? "2em" : "0")};

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  h4 {
    font-weight: 700;
    font-size: 1rem;
    color: #4267b1;
    text-align: center;
  }

  @media (max-width: 760px) {
    flex-direction: ${({ clickv }) => (clickv ? "column-reverse" : "column")};
  }
`;

export const AboutBox = styled.div`
  width: 100%;
  color: black;
  background-color: #ffffff;
  color: black;
  flex-basis: 33.3%;
  padding: 2em;
  border-radius: 5px;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgba(149, 157, 165, 0.2) 3px 3px 6px 0px inset,
    rgba(149, 157, 165, 0.2) -3px -3px 6px 1px inset;

  p {
    margin-top: 10px;
    font-size: 0.7rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.1rem;
  }
`;

export const AboutTextBox = styled.div`
  width: 100%;
  color: black;
`;

export default AboutContainer;
