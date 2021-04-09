import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #F5F5F5;
  padding: 60px 0;
  text-align: center;
  @media (max-width: 468px) {
    padding-top: 0;
  }
  div {
    max-width: 1080px;
    width:90%;
    height: 300px;
    margin: 0 auto;
    text-align: initial;
  }
  h3 {
    font-size: 4.0rem;
    color : #fec63e;
    color: ${({ theme }) => theme.colors.black};
     @media (max-width: 900px) {
      margin-bottom: 30px;
      min-height: 100px;
    }
    @media (max-width: 468px) {
      margin-top: 0;
    }
  }
  p {
    font-size:1.6rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 25px;
     @media (max-width: 900px) {
      margin-top: 20px;
      text-align: center;
    }
  }
  .container{
    display: flex;
    flex-direction: row;
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content:center;
      text-align: center;
    }
    .description {
      margin-right:40px;
      max-width:450px;
       @media (max-width: 900px) {
      margin: 0 auto;
      text-align: center;
    }
    }
    .image {
      @media (max-width: 900px) {
        text-align: center;
      }
      img {
        border-radius:  10px 10px 10px 160px;
        max-width: 500px;
        @media (max-width: 900px) {
        max-width: 380px;
        border-radius: 10px 10px 10px 10px;
        }
        @media (max-width: 430px) {
        max-width: 300px;
        }
      }
    }
  }
`;

export default function About(props) {
  return(
    <AboutContainer {...props}>
      <h3>Rastrek Zona Sul</h3>
      <div className="container">
        <div className="description">
           <p>
          Oferecemos soluções 100% em nuvem proporcionando flexibilidade e redução de custos para empresas.
          </p>
          <p>Com um time de profissionais capacitados para atender à você em todo o suporte que seu negócio precisa com atendimento diferenciado e 0800 24 horas para casos de roubos e furtos.</p>
        </div>
       <div className="image">
         <img src="./images/bg-quem-somos.jpg" alt="imagem de um casal dentro do veiculo acessando gps"></img>
       </div>
      </div>
      
    </AboutContainer>
  )
}