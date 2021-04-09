import styled from 'styled-components';
import React from 'react';


const HeaderWrapper = styled.header`
  background: #fec63e;
  box-shadow: 0px 3px 4px 0 rgba(0,0,0,0.3);
  position: fixed;
  z-index: 100;
  width: 100%;
  div {
    max-width: 1080px;
    width: 90%;
    margin: 0 auto;
    &::after, ::before {
      content: '';
      display: table;
      clear: both;
    }
  }
  a {
    float: left;
    display: block;
    padding: 20px 0;
    margin-top:5px;
    font-weight:500;
    font-size:1.6em;
    img {
      width:180px;
    }
  }
  .menu {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
      clear: both;
      max-height: 0;
      transition: max-height .2s ease-out;
      background: #fec63e;
      @media (min-width: 960px){
      clear: none;
      float: right;
      max-height: none
    }
    li{
      @media (min-width: 960px) {
        float: left;
      }
      a {
        display: block;
        width:100%;
        padding: 20px 20px;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        color:#000000;
        &:hover {
          color: #ffff; 
        }
        @media (min-width: 960px) {
        padding: 40px 30px;
        }
      }
      }
    }
  .menu-icon {
    padding: 40px 20px;
    position: relative;
    float: right;
    cursor: pointer;
    @media (min-width: 960px){
      display: none;
    }
    .nav-icon {
      background: #333333;
      display: block;
      height: 2px;
      width: 22px;
      position: relative;
      transition:background .2s ease-out;
      &::before {
        content: '';
        background: #333333;
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        transition: all .2s ease-out;
        top: 5px;
      }
      &::after {
        content: '';
        background: #333333;
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        transition: all .2s ease-out;
        top: -5px;
      }
    }
  }
  .menu-btn {
    display: none;
  }
  .menu-btn:checked ~ .menu-icon .nav-icon{
    background: transparent;
  }
  .menu-btn:checked ~ .menu-icon .nav-icon::before {
    transform: rotate(-45deg);
    top:0;
  }
  .menu-btn:checked ~ .menu-icon .nav-icon::after {
    transform: rotate(45deg);
    top:0;
  }
  .menu-btn:checked ~ .menu {
    max-height: none;
    clear: none;
    float: right;
  }
`

export default function Header(props) {
  return (
      <HeaderWrapper {...props}>
      <div>
      <a href="./">
        <img  src="./images/logo.png" alt="Logo"></img>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn"></input>
      <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
      <nav>
        <ul className="menu" id="teste">
          <li> <a href="#">Sobre</a></li>
          <li> <a href="#">Soluções</a></li>
          <li> <a href="#">Painel do cliente</a></li>
          <li> <a href="#">Produtos</a></li>
        </ul>
      </nav>
    </div>
    </HeaderWrapper>
  );
}; 