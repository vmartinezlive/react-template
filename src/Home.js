import React from 'react';
import styled from 'styled-components'

function Home(){
  const Something = styled.h1`
    color: red;
  `
  return(
    <div>
      <Something>Welcome to the home component</Something>
    </div>
  )
}

export default Home
