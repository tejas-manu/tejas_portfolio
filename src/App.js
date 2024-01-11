import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificate from "./components/Certificates"
import Footer from "./components/Footer"
import './App.css';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(141.27deg, rgba(195, 55, 100, 0) 50%, rgba(195, 55, 100, 0.15) 100%), linear-gradient(38.73deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 50%);
  width: 100%;
  // clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Router >
      <Navbar />
      <Body>
        <About />
        <Skill />
      <Wrapper>
        <Experience />
      </Wrapper>
      <Wrapper>
        <Education />
      </Wrapper>
      <Wrapper>
        <Certificate />
      </Wrapper>
        <Footer />
      </Body>
    </Router>
    </ThemeProvider>
  );
}

export default App;
