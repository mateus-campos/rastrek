import styled from 'styled-components';
import React, {Fragment, useState} from 'react';
import Lottie from 'react-lottie';
import animationData from './location.json'
import animationData2 from './telemetria.json'
import animationData3 from './alert.json'


const  Section = styled.section`
padding:30px 0;
text-align:center;
margin:0 auto;
overflow: hidden;
max-width: 1080px;
width: 90%;
h4 {
  font-size: 1.8em;
  text-transform:uppercase;
  color:  ${({ theme }) => theme.colors.gray};
}
h2 {
  font-size: 3em;
  &::after {
    content: '';  
    display: block;
    width: 250px;
    height: 6px;
    background: ${({ theme }) => theme.colors.primary};
    margin: 40px auto;
  }
}
h3 {
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align:initial;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  padding-left:10px;
  @media(max-width: 468px) {
    font-size: 1.75rem;
  }
}
p {
  font-size: 1.6em;
  text-align:initial;
  line-height: 30px;
  max-width: 450px;
  color: ${({ theme }) => theme.colors.gray};
}
.container {
  max-width: 100%;
  display: flex;
  flex-flow: row nowrap;	
  justify-content: space-between;
  margin-top: 50px;
  border-bottom: 1px solid #d8d1d1;
  padding-bottom: 60px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  &:last-child {
    border-bottom: none;
  }
  div > div{
    margin: 40px;
  }
}
.animation {
  padding: 0;
  margin: 10px 60px 0 60px;
}
`;


export default function Solutions(props) {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  });

  const configureOptions = (param) => {
    return {
     loop: true,
     autoplay: true, 
     animationData: param,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice'
     }
   };
  }

  return (
    <Section {...props}>
      <h4>Conheça nossas Soluções</h4>
      <h2>A melhor proteção para seu veiculo</h2>
      <div className="container" id="solutions">
        <div>
          <h3>Monitoramento e Rastreamento</h3>
          <p>
          Monitore e rastreie seu veículo 24 horas por dia através da plataforma web ou aplicativos Android e iOS. 
          Os nossos serviços são disponibilizados 100% em nuvem e podem ser acessados de qualquer lugar.
          </p>
        </div>
        <div className="animation">
          <Lottie options={configureOptions(animationData)}
              height={200}
              width={200}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
        </div>
      </div>
      <div className="container">
        <div>
          <h3>Telemetria Veicular</h3>
          <p>
          Controle e gerencie o seu veículo com KMs percorridos, horímetro, despesas e manutenções do veículo. 
          Além de poder contar de modo fácil e rápido o historio de percurso do seu veículo ou frota.
          </p>
        </div>
        <div className="animation">
          <Lottie options={configureOptions(animationData2)}
              height={200}
              width={200}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
        </div>
      </div>
      <div className="container">
        <div>
          <h3>Informações em Tempo Real</h3>
          <p>
          Veja as informações do seu veículo em tempo real como velocidade, ignição e muito mais.
          Receba um alertas se o veículo ultrapassar o perímetro estabelecido.
          </p>
        </div>
        <div className="animation">
          <Lottie options={configureOptions(animationData3)}
              height={200}
              width={200}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
        </div>
      </div>
    </Section>
  )
}