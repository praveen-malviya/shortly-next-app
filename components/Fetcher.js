import styled from "styled-components";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Button } from "./Button.style";

const FetchSection = styled.div`
  background: #f0f1f6;
`;

const FetchMain = styled.div`
  background: linear-gradient(180deg, #fff 50%, #f0f1f6 50%);
`;

const FetchContainer = styled.div`
  background-image: url("../images/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
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

const InputURL = styled.input`
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
    width: 80%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;
const SubmitB = styled.button`
  color: white;
  background-color: #2acfcf;
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 1.2em;
  border: none;
  font-family: inherit;
  box-sizing: border-box;

  cursor: pointer;
  &:hover {
    background-color: #9ce2e2;
  }

  @media (max-width: 851px) {
    padding: 20px 0px;
    width: 80%;
  }
`;

const ErrorText = styled.div`
  color: #f46262;
  margin-top: 20px;
  font-size: 1em;
`;

const LinkContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 73%;
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
const OriginalLink = styled.span`
  flex-grow: 2;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 851px) {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #bfbfbf;
    width: 100%;
  }
`;

const ShortLink = styled.span`
  margin-right: 20px;
  color: #2acfcf;
`;

const CopyButton = styled.button`
  color: white;
  background-color: ${({ copySuccess, copyIndex, indexLink}) =>
   copySuccess && copyIndex === indexLink ? "#3b3054" : "#2acfcf"};
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  font-family: inherit;

  @media (max-width: 851px) {
    margin-top: 10px;
    width: 100%;
  }
`;

const DeleteButton = styled.span`
  color: darkred;
  /* padding: 5px 2px; */
  margin-left:10px;

  &:hover {
  color: red;
  }

  @media (max-width: 851px) {
    margin: 10px 49% 0 49%;
    text-align: center;
  }
`;

const Fetcher = () => {
  const apiURL = "https://api.shrtco.de/v2/shorten?url=";

  const [webURL, setWebURL] = useState(null);
  const [linksData, setLinksData] = useState(" ");
  const [linkTrue, setLinkTrue] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const[copyIndex, setCopyIndex] = useState(" ");
  const [errorBlank, setErrorBlank] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if(!localStorage.getItem("my Links Data")){
      localStorage.setItem("my Links Data", "[{}]");
     }else{
      setLinkTrue(true)
     }
      setLinksData(JSON.parse(localStorage.getItem("my Links Data")));
  }, [])


  function errorHandler(error) {
    setIsFetching(false);
    setErrorMessage(true);
}

  const onsubmit = (e) => {
    e.preventDefault();
    setErrorMessage(false);
    setErrorBlank(false);

    if (webURL == null) {
      setErrorBlank(true);
    } else {
      setIsFetching(true);
      fetch(apiURL + webURL)
        .then((response) => response.json())
        .then((json) => {
          const links = [{ogLink: json.result.original_link, srtLink: json.result.full_short_link}];
          setLinksData([...links, ...linksData]);
          setLinkTrue(true);
          setIsFetching(false);
          if(copyIndex !== null){
          setCopyIndex(copyIndex+1);
        }
        })
        .catch(errorHandler)
    }
  };

  useEffect(() => {
    localStorage.setItem("my Links Data", JSON.stringify(linksData)); 
  }, [linksData]);

  const deletehandler = (shrtLink, deleteLink) => {
    if(copyIndex==deleteLink){
      setCopyIndex(null);
    }
    else if(copyIndex > deleteLink){
        setCopyIndex(copyIndex-1);
      }

    const newData = linksData.filter( data => data.srtLink !== shrtLink);
    setLinksData(newData); 
  }

  return (
    <FetchSection>
      <FetchMain>
        <FetchContainer>
          <form action="#">
            <InputURL
              placeholder="Shorten a link here..."
              required
              onChange={(e) => setWebURL(e.target.value)}
            />
            <SubmitB type="submit" onClick={(e) => onsubmit(e)}>
              Shorten it!
            </SubmitB>
          </form>
          {isFetching && <ErrorText> Shortening...</ErrorText>}
          {errorBlank && <ErrorText> Please add a WebSite Link </ErrorText>}
          {errorMessage && <ErrorText> Please Check The Website Link </ErrorText>}
         
        </FetchContainer>
      </FetchMain>

      {linkTrue && (
        
        linksData.map((link, indexLink) =>(
          link.ogLink &&(
        <LinkContainer key={indexLink}>
          <OriginalLink>{link.ogLink}</OriginalLink>
          <ShortLink>{link.srtLink}</ShortLink>
            
          <CopyToClipboard 
            text={link.srtLink} 
            onCopy={() => { setCopySuccess(true); setCopyIndex(indexLink) }}
            >
            <CopyButton 
                copySuccess={copySuccess}
                indexLink = {indexLink}
                copyIndex = {copyIndex}
                >
              {copySuccess && copyIndex == indexLink ? "Copied" : "Copy"}
            </CopyButton>
          </CopyToClipboard>

          <DeleteButton onClick={()=> deletehandler(link.srtLink, indexLink)}>
            X
          </DeleteButton>
        </LinkContainer>
        )
        ))

      )}
    </FetchSection>
  );
};

export default Fetcher;
