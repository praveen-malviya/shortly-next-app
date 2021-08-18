import styled from "styled-components";
import { Button } from "./Button.style";

const BoostContainer = styled.div`
  background-image: url("../images/bg-boost-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  width: 100%;
  padding: 39px 0;
  background-color: #3b3054;

  @media (max-width: 851px) {
    background-image: url("../images/bg-boost-mobile.svg");
  }
`;

const HeadingBoost = styled.h1`
  margin-top: 0;
  padding-top: 15px;
  font-size: 2.5em;
  font-weight: 700;
  color: #fff;

  @media (max-width: 851px) {
    font-size: 5.5vw;
  }
`;
const Boost = () => {
  return (
    <BoostContainer>
      <HeadingBoost>Boost your links today</HeadingBoost>
      <Button>Get Started</Button>
    </BoostContainer>
  );
};

export default Boost;
