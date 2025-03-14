import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    transition: all 0.3s ease;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 10px;
    background: ${({ theme }) => theme.bg};
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primary + 'cc'};
  }

  /* Selection Styles */
  ::selection {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  /* Code Block Styles */
  pre, code {
    font-family: 'Fira Code', monospace;
  }

  /* Link Styles */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Image Styles */
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles; 