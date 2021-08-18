import styled from "styled-components";

const StatisticsContianer = styled.div `
    background-color: #f0f1f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`;

const Heading = styled.h1 `
    margin-bottom: 0;
    font-size: 2.7em;
    color: #35323e;
    font-weight: 700;

    @media (max-width: 851px) {
    font-size: 2em;
    }
`;

const Para = styled.p `
    max-width: 38vw;
    font-size: 1.25em;
    color: #9e9aa7;
    text-align: center;

    @media (max-width: 851px) {
    max-width: 100%;
    margin-right: 1vw;
    margin-left: 1vw;
    }
`;

const SubSection = styled.div `
    display: flex;
    justify-content:space-around;
    max-width: 70%;
    margin-top: 50px;
    padding-bottom: 100px;

    @media (max-width: 851px) {
    flex-direction: column;
    text-align: center;
    max-width: 80%;
    margin-top: 0;
    }
`;

const SubContainer = styled.div `
    margin-right:30px;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 25px;
    position: relative;
    margin-top: ${(props) => props.marginTop};

    @media (max-width: 851px) {
    margin-top: 70px;
    margin-right:0;
    }
`

const LogoContainer = styled.div `
    position: absolute;
    top: -35px;
    background-color: #3b3054;
    padding: 15px;
    width: 50px;
    text-align: center;
    border-radius: 50px;
    
    @media (max-width: 851px) {
     margin-left: auto;
     margin-right: auto;
     left:0;
     right: 0;
    }
`

const IMG = styled.img `

`;

const HeadingSub = styled.h2 `
    color:  #35323e;
    margin-top: 50px;
    font-size: 1.3em;
    font-weight: 700;
`;

const ParaSub = styled.p `
    color: #bfbfbf;
    font-size: .9em;
`;





const Statistics = () => {
    return ( 
        <StatisticsContianer>
            <Heading>Advanced Statistics</Heading>
            <Para>Track how your links are performing across the web with our advanced statistic dashboard</Para>
            <SubSection>
                <SubContainer marginTop="10px">
                <LogoContainer>
                <IMG src="../images/icon-brand-recognition.svg" />
                </LogoContainer>

                <HeadingSub>Brand Recognition</HeadingSub>
                <ParaSub>
                    Boost your brand recognition with each click. Generic
                        links don't mean a thing. Branded links help 
                        instil confidence in your content.
                </ParaSub>
                </SubContainer>

                <SubContainer marginTop="50px">
                <LogoContainer>
                <IMG src="../images/icon-detailed-records.svg" /> 
                </LogoContainer>

                <HeadingSub>Detailed Records</HeadingSub>
                <ParaSub>
                    Gain insight into who is clicking your links. 
                    Knowing when and where people engage with content 
                    helps inform better decisions.
                </ParaSub>
                </SubContainer>

                <SubContainer marginTop="100px">
                <LogoContainer>
                <IMG src="../images/icon-fully-customizable.svg" width="40px" /> 
                </LogoContainer>

                <HeadingSub>Fully Customizable</HeadingSub>
                <ParaSub>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                </ParaSub>
                </SubContainer>
            </SubSection>
        </StatisticsContianer>

     );
}
 
export default Statistics;