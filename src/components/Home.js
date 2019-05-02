import React from 'react';
import styled from 'styled-components'

function Home(){
  const Something = styled.h1`
  @keyframes pulse {
    0%{color: green}
    50%{color: red}
    100%{color: green}
  }
    animation: pulse 1s linear infinite;
    color: green;
  `
  return(
    <div>
      <Something>Welcome to the home component</Something>
    </div>
  )
}

export default Home
