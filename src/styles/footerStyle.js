import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 2em 1em;
  color: white;
  background-color: black;

  span {
    color: #4267b1;
  }

  ul {
    line-height: 1.2;
  }
  li {
    padding: 0.5em 0;
  }

  a {
    color: white;
  }

  h6 {
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1em 0;
`;

export default FooterContainer;
