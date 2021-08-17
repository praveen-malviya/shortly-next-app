import styled from "styled-components";
import Image from 'next/image'
import logo from '../images/logo.svg'


const Nav = styled.div`
    display: flex;
    align-items:center;
    margin: 20px 13vw;
    color:  #9e9aa7;
    font-size: 15px;

    @media (max-width: 851px) {
    justify-content:space-between;
    
`;

const Menu = styled.div`
    flex-grow:2;
    margin-left:5vw;

    @media (max-width: 851px) {
    display: none;
  }
`;

const MenuLink = styled.a `
    margin-right: 2vw;
    font-weight: 700;
    cursor:pointer;
    &:hover {
        color: #35323e;
    }
`;

const UserIn = styled.div`
    float: right;
    @media (max-width: 851px) {
    display: none;
`;

const UserInLink = styled.a `
    margin-left: 2.5vw;
    padding: 10px 20px;
    cursor:pointer;
    &:hover {
        background-color: #9ce2e2;
        border-radius: 25px;
        color:#fff;
       }

`;

const HamMenu = styled.div `
    display: none;
    

    @media (max-width: 851px) {
    display:block;
    }
`;

const HamBar = styled.div `
    width: 35px;
    height: 5px;
    background-color: #9e9aa7;
    margin: 6px 0;
`;






const Header = () => {
    return ( 
         <Nav>
            <Image src={logo} />

            <Menu>
                <MenuLink>Features</MenuLink>
                <MenuLink>Pricing</MenuLink>
                <MenuLink>Resources</MenuLink>
            </Menu>
            <UserIn>
                <UserInLink>Login</UserInLink>
                <UserInLink>Sign Up</UserInLink>
            </UserIn>
            <HamMenu>
                <HamBar></HamBar>
                <HamBar></HamBar>
                <HamBar></HamBar>
            </HamMenu>
         </Nav>
     );
}
 
export default Header;