import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: transparent;
  color: black;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const LogoName = styled.h1`
  width: 100%;
  background-color: transparent;
  cursor: pointer;

  span {
    color: #4267b1;
  }
`;

export const List = styled.ul`
  background-color: transparent;
  display: flex;
  padding: 0.2em;

  li {
    display: flex;
    padding: 0.5em;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.5s ease-out;
  }

  li:hover {
    color: #000934;
    border-radius: 4px;
  }

  @media (max-width: 760px) {
    display: block;
    background-color: white;
    color: black;
    width: 50%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${({ click }) => (click ? "-100%" : 0)};
    padding-left: 2em;
    padding-top: 3em;
    transition: all 1s ease-in-out;

    li:hover {
      color: #000934;
      background-color: white;
      border-radius: 4px;
    }
  }
`;

export const Mobile = styled.div`
  background-color: transparent;
  display: none;
  cursor: pointer;
  z-index: 9;

  @media (max-width: 760px) {
    display: block;
  }
`;

export default NavbarContainer;
