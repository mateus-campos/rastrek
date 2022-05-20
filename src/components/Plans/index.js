import styled from 'styled-components';
import React from 'react';


const PlansContainer = styled.section `
  max-width: 1080px;
  margin: 0 auto;
  min-height: 600px;
  h3 {
    font-size: 4rem;
    text-align: center;
  }
  .obs {
    text-align: center;
    font-size: 1.3rem;
    color:  ${({ theme }) => theme.colors.gray};
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center
    }
    .wrapper {
    max-width: 90%;
    margin: 0 auto 20px;
    :last-child{
      margin-right: 0;
       @media (max-width: 969px) {
        margin-right: 40px;
      }
      @media (max-width: 800px) {
        margin: 0 0 40px;
      }
    }
      .container {
      max-width: 280px;
      width: 100%;
      min-height: 370px;
      border-radius: 20px 20px 20px 20px;
      box-shadow: 0px 0px 30px -12px rgb(0 0 0 / 50%);
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      @media (max-width: 1080) {
      padding: 0 60px;
      }
        .header {
        background-color: ${({ theme }) => theme.colors.primary};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 20px 20px 0 0;
        padding: 15px;
          h4 {
            font-size: 3.2em;
            color : #ffff;
            margin: 0;
          }
          p {
            color: #ffff;
            font-size: 1.5rem;
          }
        }
        .price {
          padding: 15px 0;
          display:flex;
          flex-direction: column;
          text-align: center;
          .values {
            display: flex;
            margin: 0 auto;
              .primary {
            color: #555555;
            font-size:1.5rem;
            align-self:flex-start;
            margin: 35px 5px 0 0;
            }
            .second {
              color: #555555;
              font-size:4.5rem;
              line-height: .5;
              margin-bottom:0;
            }
          }
        }
        .list {
          list-style: none;
          text-align: left;
          padding:0;
          li {
            margin:0 40px;
            border-bottom: 1px solid #ddd;
            p {
              font-size: 1.3rem;
            }
          }
          div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start
          }
          i {
            margin: 10px 10px 0 0;
            font-size: 1.5rem;
            color: #555555;
            ::before {
              content: "✔";
              color: ${({ theme }) => theme.colors.primary};
            }
          }
          span {
            margin: 12px 10px 0 0;
            font-size: 1.5rem;
            color: red;
            ::before {
              content: "✘";
            }
          }
        }
      }
    }
  }
`;

export default function Plans(props) {
  return (
    <PlansContainer>
      <h3>Planos para o seu veiculo</h3>
      <div>
        <div className="wrapper">
          <div className="container">
            <div className="header">
            <h4>Motos</h4>
            <p>Plano ideal para você que busca suporte e economia</p>
            </div>
            <div className="price">
            <div className="values">
              <p className="primary">R$</p>
              <p className="second">59</p>
              <p className="primary">90</p>
            </div>
            <p>Mês</p>
            </div>
            <ul className="list">
            <li>
              <div>
                <i></i>
                <p>Monitoramento em tempo real</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Historico de Percurso</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Proteção 24h</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Cerca Virtual</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>0800 para roubo ou furto</p>
              </div>
            </li>
            <li>
              <div>
                <span></span>
                <p>Guincho 24h</p>
              </div>
            </li>
          </ul>
          <p className="obs">*Consulte valores de instalação</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="container">
            <div className="header">
            <h4>Carros</h4>
            <p>Plano ideal para o seu veiculo</p>
            </div>
            <div className="price">
            <div className="values">
              <p className="primary">R$</p>
              <p className="second">79</p>
              <p className="primary">90</p>
            </div>
            <p>Mês</p>
            </div>
            <ul className="list">
            <li>
              <div>
                <i></i>
                <p>Monitoramento em tempo real</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Historico de Percurso</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Proteção 24h</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Cerca Virtual</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>0800 para roubo ou furto</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Guincho 24h</p>
              </div>
            </li>
          </ul>
          <p className="obs">*Consulte valores de instalação</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="container">
          <div className="header">
            <h4>Caminhão</h4>
            <p>Plano ideal para os veiculos do seu negócio</p>
            </div>
            <div className="price">
            <div className="values">
              <p className="primary">R$</p>
              <p className="second">89</p>
              <p className="primary">90</p>
            </div>
            <p>Mês</p>
            </div>
            <ul className="list">
            <li>
              <div>
                <i></i>
                <p>Monitoramento em tempo real</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Historico de Percurso</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Proteção 24h</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>Cerca Virtual</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>0800 para roubo ou furto</p>
              </div>
            </li>
            <li>
                <div>
                <i></i>
                <p>Guincho 24h</p>
              </div>
            </li>
          </ul>
          <p className="obs">*Consulte valores de instalação</p>
          </div>
        </div>
      </div>
    </PlansContainer>
  )
}