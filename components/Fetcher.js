import styled from "styled-components";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
// import { Button } from "./Button.style";

const FetchSection = styled.div `
    background: #f0f1f6;
`;

const FetchMain = styled.div `
background: linear-gradient(180deg, #FFF 50%, #f0f1f6 50%);
`;

const FetchContainer = styled.div `
    background-image: url("../images/bg-shorten-desktop.svg");
    background-repeat: no-repeat;
    background-size:cover;
    padding: 45px 0px;
    background-color: #3b3054;
    max-width: 73%;
    margin-left: 13vw;
    margin-top: 60px;
    border-radius: 10px;
    text-align: center;

    @media (max-width: 851px) {
        background-image: url("../images/bg-shorten-mobile.svg");
     }

`;

const InputURL = styled.input `
     box-sizing: border-box;
     width: 60%;
     height: 70px;
     font-family: inherit;
     font-size: 1.2em;
     padding: 18px;
     border-radius: 10px;
     margin-right: 22px;
     
     /* color: #f46262; */

     @media (max-width: 851px) {
        width: 80% ;
        margin-right:0;
        margin-bottom: 15px;
     }
`;
const SubmitB = styled.button `
    color: white;
    background-color: #2acfcf;
    padding: 20px 40px;
    border-radius: 10px;
    font-size: 1.2em;
    border:none;
    font-family: inherit;
    box-sizing: border-box;

    @media (max-width: 851px) {
    padding: 20px 0px;
     width: 80%;
    /* margin: 10px; */
    }
    
`;

const LinkContainer = styled.div `
    display: flex;
    max-width: 69.5%;
    margin-left: 13vw;
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    border-radius: 5px;
    align-items: baseline;

    @media (max-width: 851px) {
    flex-direction: column;
    }  
`;
const OriginalLink = styled.span `
    flex-grow:2;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 851px) {
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #bfbfbf;
        /* display: inline-block; */
        width: 100%;
   }
`;

const ShortLink = styled.span `
    margin-right: 20px;
    color:#2acfcf;
`;

const CopyButton = styled.button `
    color: white;
    background-color: #2acfcf;
    padding: 5px 20px;
    border-radius: 5px;
    /* font-size: 1.2em; */
    border:none;
    font-family: inherit;

    @media (max-width: 851px) {
        margin-top: 10px;
        width: 100%;
    } 
`

const Fetcher = () => {

     
    const apiURL = "https://api.shrtco.de/v2/shorten?url=";

// const [shortLinks, setShortLinks] = useState({});

const [webURL, setWebURL] = useState('');
const [originalLink, setOriginalLink] = useState('');
const [shortLink, setShortLink] = useState('');

const [linkTrue, setLinkTrue] = useState(false);
const [copySuccess, setCopySuccess] = useState('copy');

// function copyToClipboard(e) {
//     setCopySuccess('Copied!');
//   };

const onsubmit = (e) =>{
    e.preventDefault()
    fetch(apiURL+webURL)
    .then(response => response.json())
    .then(json => {
        console.log(json.result)
        // setShortLinks(json.result);
        // console.log(shortLinks);

        setOriginalLink(json.result.original_link);
        setShortLink(json.result.full_short_link); 
        setLinkTrue(true);   
        
    });
       
}


    return (
        <FetchSection> 
        <FetchMain>
        <FetchContainer>
            <form action="#" onSubmit="return false">
                <InputURL 
                    placeholder="Shorten a link here..."
                    required
                    onChange= {(e) => setWebURL(e.target.value)}
                />
                <SubmitB 
                    type='submit'
                    onClick = {(e) => onsubmit(e)}
                    
                >Shorten it!</SubmitB>
            </form>

            
        </FetchContainer>
        </FetchMain>

        { linkTrue &&
        <LinkContainer>
            {/* <OriginalLink>http://nowbuttonadded.com</OriginalLink> */}
            <OriginalLink>{originalLink}</OriginalLink>
            <ShortLink>{shortLink}</ShortLink>
            {/* <ShortLink>https://shrtco.de/qK6BEQ</ShortLink> */}

            <CopyToClipboard 
            text={shortLink}
            onCopy={() => setCopySuccess('Copied!')}
            >
            <CopyButton
            >{copySuccess}</CopyButton>
            </CopyToClipboard>
        </LinkContainer>
        }
        
        </FetchSection>
     );
}
 
export default Fetcher;