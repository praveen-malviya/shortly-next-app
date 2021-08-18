import styled from "styled-components";
import Image from "next/image";
import logo from "../images/logo.svg";
import { useState } from "react";

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 13vw;
  color: #9e9aa7;
  font-size: 15px;

  @media (max-width: 851px) {
    justify-content: space-between;
    margin: 20px 2vw;
  }
`;

const Nav = styled.div`
  display: flex;
  width: 96%;
  justify-content: space-between;

  @media (max-width: 851px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #3b3054;
    position: absolute;
    top: 80px;
    height: 68vw;
    z-index: 2;
    text-align: center;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
  }
`;

const Menu = styled.div`
  margin-left: 5vw;

  @media (max-width: 851px) {
    display: flex;
    flex-direction: column;
    margin: 0 0 5px 0;
    border-bottom: 0.5px solid #9e9aa7;
  }
`;

const MenuLink = styled.a`
  margin-right: 2vw;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #35323e;
  }
  @media (max-width: 851px) {
    margin: 3vw 0px;
    font-size: 4vw;
    color: #fff;
    &:hover {
      color: #9e9aa7;
    }
  }
`;

const UserIn = styled.div`
  /* float: right; */
  @media (max-width: 851px) {
    display: flex;
    flex-direction: column;
  }
`;

const UserInLink = styled.a`
  margin-left: 2.5vw;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #9ce2e2;
    border-radius: 25px;
    color: #fff;
  }
  @media (max-width: 851px) {
    margin-right: 2.5vw;
    font-size: 4vw;

    padding: 2vw 0px;
    color: #fff;
  }
`;

const HamMenu = styled.div`
  display: none;
  @media (max-width: 851px) {
    display: block;
  }
`;

const HamBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${({ isOpen }) => (isOpen ? "#3b3054" : "#9e9aa7")};
  margin: 6px 0;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderMain>
      <Image src={logo} alt="Shortly Logo" />

      <Nav isOpen={isOpen}>
        <Menu>
          <MenuLink>Features</MenuLink>
          <MenuLink>Pricing</MenuLink>
          <MenuLink>Resources</MenuLink>
        </Menu>
        <UserIn>
          <UserInLink>Login</UserInLink>
          <UserInLink>Sign Up</UserInLink>
        </UserIn>
      </Nav>
      <HamMenu onClick={() => setIsOpen(!isOpen)}>
        <HamBar isOpen={isOpen}></HamBar>
        <HamBar isOpen={isOpen}></HamBar>
        <HamBar isOpen={isOpen}></HamBar>
      </HamMenu>
    </HeaderMain>
  );
};

export default Header;
