import Head from "next/head";
import Header from "../components/Header";
import styled from "styled-components";
import Hero from "../components/Hero";
import Fetcher from "../components/Fetcher";
import GlobalStyle from "../components/GlobalStyles";
import Statistics from "../components/Statistics";
import Boost from "../components/Boost";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
`;

export default function Home() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Shortly</title>
      </Head>
      <Header />
      <Hero />
      <Fetcher />
      <Statistics />
      <Boost />
      <Footer />
    </MainContainer>
  );
}
