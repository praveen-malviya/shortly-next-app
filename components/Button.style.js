
import styled from "styled-components"

export const Button = styled.button `
    color: white;
    background-color: #2acfcf;
    padding: 15px 35px;
    border-radius: 25px;
    font-size: 1.2em;
    font-weight: 700;
    border : none;
    cursor:pointer;
    
    &:hover {
        background-color: #9ce2e2;
    }

    @media (max-width: 851px) {
        font-size: 5.1vw;
        border-radius: 100px;

    }
`;