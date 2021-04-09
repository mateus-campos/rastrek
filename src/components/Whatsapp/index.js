import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Icon = styled.div `
height:60px;
width:60px;
position: fixed;
z-index: 1001;
right: 40px;
bottom: 40px;
font-size: 40px;
color: #ffff;
background-color: #25d366;
border-radius: 50%;
text-align: center;
box-shadow: 2px 2px 5px #1d1d146e;
svg {
  margin-top: 9px;
}
a {
  text-decoration: none;
  list-style: none;
  color: #ffff;
}

`

export default function Whatsapp(props) {
  return(
    <Icon>
      <a href="https://api.whatsapp.com/send?phone=5511987079920&text=Olá!%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20rastreamento%20veícular." target="_blank">
        <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
      </a>
    </Icon>
  )
}

