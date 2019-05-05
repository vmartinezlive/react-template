import React from 'react';
import styled from 'styled-components'

function Animation(){
  const Div = styled.div`
  @keyframes slideUp {
    0%{top: 0}
    100%{top: -50vh}
  }
  @keyframes slideDown{
    0%{bottom: 0}
    100%{bottom: -50vh}
  }
    position: fixed;
    width: 100vw;
    height: 100vh;
    .top{
      animation: slideUp 2s linear forwards 2s;
      overflow: hidden;
      position: relative;
      top: 0;
      background-color: white;
      height: 50vh;
    }
    .bottom{
      animation: slideDown 2s linear forwards 2s;
      position: relative;
      overflow: hidden;
      height: 50vh;
      background-color: white;
      bottom: 0;
      img{
        margin-top: -50vh;
      }
    }
  `
  return(
    <Div>
      <div class="top">
        <img src={require('../assets/images/eye.png')}/>
      </div>
      <div class="bottom">
        <img src={require('../assets/images/eye.png')}/>
      </div>
    </Div>
  )
}
export default Animation;
