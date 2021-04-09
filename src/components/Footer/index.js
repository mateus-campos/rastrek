import styled from 'styled-components';
import React from 'react';

const FooterContainer = styled.footer `
min-height: 400px;
background-color: #F5F5F5;
position: relative;
margin-top: 100px;
border-bottom: 8px solid ${({ theme }) => theme.colors.primary};
.head{
  img {
  height:115px;
  top: -63px;
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
  }
   @media(max-width: 468px) {
    img {
    display: none;
    }
    border-top: 5px solid ${({ theme }) => theme.colors.gray};
  }
} 
.content{
  max-width:1080px;
  margin: 0 auto;
  padding-top: 40px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align: center;
  img {
    width:250px;
    margin: 0 auto;
  }
  .content-description{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
    max-width: 500px;
    margin: 20px auto;
    line-height: 20px;
  }
  .contact {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
  }
}
`;

export default function Footer() {
  return(
    <FooterContainer>
      <div className="head">
        <img  src="./images/footer.png" alt="Footer"></img>
      </div>
      <div className="content">
        <img  src="./images/logo.png" alt="Logo"></img>
        <p className="content-description">Rastrek Zona Sul é uma empresa que trabalha com o rastreamento e bloqueio 
          de veículos dos mais variados portes – de carros e motos a caminhões. 
          Utilizamos dados logísticos e geográficos dos veículos permitindo que eles sejam monitorados 24h em todo território nacional.
        </p>
        <p className="contact">Contato: (11)9870-79920</p>
      </div>
    </FooterContainer>
  )
}