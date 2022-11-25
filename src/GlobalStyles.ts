import {createGlobalStyle} from 'styled-components';
import img from './components/FeedbackFormWrapper/bg-vintage-autumn.jpg';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ol,
    ul {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  section {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-color: hsl(33, 89%, 14%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover
  }

`;
