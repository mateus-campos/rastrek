import styled from 'styled-components';

const App = styled.section`
  padding: 20px;
  background-color: #F5F5F5;
  min-height: 400px;
  box-sizing: border-box;
  div {
    max-width: 1080px;
    width: 100%;
    padding: 20px;
  }
  h3 {
    font-size: 3.2em;
    color : black;
    margin-top: 0;
  }
  h4 {
    font-size: 2.6em;
    margin: 32px 0 20px;
    color : #fec63e;
    text-align: end;
  }
  img { 
    margin-right:60px;
    position: relative;
      &::after {
      content: '';  
      display: block;
      width: 250px;
      height: 6px;
      background: ${({ theme }) => theme.colors.primary};
      margin: 40px auto;
  } 
    }
    p {
      font-size: 1.8em;
      margin-top: 0;
    }
  .wrapper {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 980px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;
      margin: 0 auto;
    }
    .content{
    max-width: 100%;
    margin:0 auto;
    box-sizing: border-box;
    padding: 0;
    @media (max-width: 768px) {
        text-align: center;
    }
      > img {
        max-width: 500px;
         @media (max-width: 980px) {
          max-width: 290px;
          margin: 0 auto;
        }
      }
      p {
        line-height: 25px
      }
      .store {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        padding-left:0;
        @media (max-width: 980px) {
        justify-content: center;
        }
        @media(max-width: 768px) {
          > a {
            margin-right: 10px;
          }
          a img {
          margin-right: 0;
          }
        }
        @media (max-width: 549px) {
        flex-direction: row;
        justify-content: center;
        height: 100px;
        align-items: center;
        }
    }
  }
  }
  .description-right {
      text-align: end;
  }
  .description-left {
      text-align: initial;
  }
`;


export default function Platform(props) {
  return (
    <App {...props}>
      <div className="wrapper">
         <div className="content">
        <h3>Tenha todo controle do através do nosso aplicativo e sistema web</h3>
        <p>Através dos nossos sistemas você pode localizar, 
          acompanhar todos os seus veiculos 24 horas por dia
          7 dias por semana, tendo todo controle e autonima a um click. 
        </p>
          <div className="store">
            <a href="">
              <img src="./images/google-play.png" alt="logo Apple Store" width="120px"></img>
            </a>
            <a href="">
              <img src="./images/app-store.png" alt="logo Play Store" width="120px"></img>
            </a>
          </div>
        </div>
        <div className="content">
          <img src="./images/web-app.png" ></img>
        </div>
      </div>
    </App>
  )
}