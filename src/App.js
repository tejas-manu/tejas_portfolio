import React from 'react';
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import themes from './themes/default';
import GlobalStyles from './themes/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificate from "./components/Certificates"
import Footer from "./components/Footer"
import './App.css';
import BlogPost from './components/BlogPost';
import ProjectPost from './components/ProjectPost';

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

const MainContent = () => {
  return (
    <Body>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <Wrapper id="experience">
        <Experience />
      </Wrapper>
      <Wrapper id="education">
        <Education />
      </Wrapper>
      <Wrapper id="certifications">
        <Certificate />
      </Wrapper>
      <Footer />
    </Body>
  );
}

function App() {
  const [darkMode] = React.useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  
  return (
    <ThemeProvider theme={darkMode ? themes.darkTheme : themes.lightTheme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectPost />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
