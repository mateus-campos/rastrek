import styled from 'styled-components';
import React from 'react';

const Intro = styled.main`
  background: url('./images/bg-intro.png') no-repeat center center;
  background-size: cover;
  padding: 150px 0px;
  text-align: center;
  width: 100vw;
  @media(max-width: 468px) {
    background: url('./images/bg-intro3.png') no-repeat center center;
    background-size: contain;
    background-color: #F5F5F5;
    padding: 35px 0px;
  }

  h1 {
    font-size: 6em;
    max-width: 450px;
    margin: 0 auto;
    letter-spacing: 3px;
    color:#ffff;
    @media(max-width: 768px) {
    font-size: 3rem;
    padding: 80px 10px;
    }
    &::after {
    content: '';  
    display: block;
    width: 60px;
    height: 6px;
    background: #fff;
    margin: 20px auto;
  } 
  }
`

export default function Main(props) {
  return (
    <Intro {...props}>
      <div>
        <h1>Tranquilidade para você sua família ou seu negócio!</h1>
      </div>
    </Intro>
  );
};