import styled from "styled-components";
import Image from 'next/image'
import hero from '../images/illustration-working.svg'
import { Button } from "./Button.style";

const HeroSection = styled.div `
    display: flex;
    margin-top : 50px; 
    margin-top: 3.5vw;
    margin-left: 13vw;
    align-items:center;
    font-size: 1.05vw;
    

    @media (max-width: 851px) {
    flex-direction: column-reverse;  
    text-align :center ;
    margin-left: 0;

  }

`;

const HeroText = styled.div `
    /* margin-right: 100px; */
    max-width: 50%;

    @media (max-width: 851px) {
        max-width: 100%;
    }
`;

const HeroHeading = styled.h1 `
    font-size: 4.7em;
    line-height: 1.15em;
    color: #35323e;
    margin-bottom: 0%;
    font-weight: 700;

    @media (max-width: 851px) {
        font-size: 10em;
    }
`;

const HeroPara = styled.p `
    color:#9e9aa7;
    font-size: 1.2em;
    max-width: 75%;
    margin-top: 10px;
    margin-bottom: 60px;

    @media (max-width: 851px) {
        font-size: 4em;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
    }
`;

const HeroImage = styled.div `
    position: relative;
    margin-left: 2vw;
`;

// const StyledImage = styled(Image)`

//   `;

const Hero = () => {
    return ( 
        <HeroSection>
            <HeroText>
                <HeroHeading>More than just shorter links</HeroHeading>
                <HeroPara>Build your brand's recognition and get detailed
                     insight on how your links are performing.</HeroPara>
                <Button>Get Started</Button>
            </HeroText>
            <HeroImage>
            <Image 
                src={hero} 
                alt="Picture of the Hero" 
                />
            </HeroImage>
        </HeroSection>        
     );
}
 
export default Hero;