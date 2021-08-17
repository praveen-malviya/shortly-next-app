import styled from "styled-components";



const FooterMain = styled.div `
    background-color:#232127;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    padding: 4vw 13vw;

    @media (max-width: 851px) {
        flex-direction: column;
        text-align: center;
        align-items: center;

    }

`;

const Logo = styled.img `
    margin-right: 11vw;

    @media (max-width: 851px){
        margin-right: 0;
    }
`;

const DirectLinks = styled.div `
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
`;

const HeadingD = styled.h4 `
    font-size: .9em;
    margin-top: 0;
`; 

const LinksD = styled.a `
    color: #bfbfbf;
    font-size: .9em;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        color:#2acfcf;
    }
`;

const SocialIcon = styled.div `
    display: flex;
`;



const IconF = styled.a `
     margin-left: 1.6vw;
    }
    @media (max-width: 851px){
        margin: 20px 25px 5px 0px;
    }
`;

const Icon = styled.img `
    
    &:hover {
        cursor: pointer;
    }
`;



const Footer = () => {
    return ( 
        <FooterMain>
            {/* <Logo src="../images/logo.svg" /> */ }

            <Logo src = "/logo-white.svg" />
            <DirectLinks>
                <HeadingD>Features</HeadingD>
                <LinksD>Link Shorting</LinksD>
                <LinksD>Branded Links</LinksD>
                <LinksD>Analytics</LinksD>
            </DirectLinks>
            <DirectLinks>
                <HeadingD>Resources</HeadingD>
                <LinksD>Blog</LinksD>
                <LinksD>Developer</LinksD>
                <LinksD>Support</LinksD>
            </DirectLinks>
            <DirectLinks>
                <HeadingD>Comapnay</HeadingD>
                <LinksD>About</LinksD>
                <LinksD>Our Team</LinksD>
                <LinksD>Careers</LinksD>
                <LinksD>Contact</LinksD>
            </DirectLinks>
            <SocialIcon>
                <IconF></IconF>
                <IconF><Icon src="../images/icon-facebook.svg" /></IconF>                
                <IconF><Icon src="../images/icon-twitter.svg" /></IconF>               
                <IconF><Icon src="../images/icon-pinterest.svg" /></IconF>
                <IconF><Icon src="../images/icon-instagram.svg" /></IconF>
            </SocialIcon>
        </FooterMain>
     );
}
 
export default Footer;