import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px
  }
}

a {
  text-decoration: none;
  color: #000;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
