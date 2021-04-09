import Header from '../src/components/Header'
import Main from '../src/components/Main'
import Solutions from '../src/components/Solutions';
import Platform from '../src/components/Platform';
import About from '../src/components/About';
import Plans from '../src/components/Plans';
import Footer from '../src/components/Footer';
import Whatsapp from '../src/components/Whatsapp';
import Head from 'next/head';



export default function Home() {
  return (
    <div>
    <Head>
    <link rel="icon" sizes="32x32" href="static/favicon.ico" />
    <title>Rastrek Zona Sul</title>  
    </Head>
    <Header/>
    <Main/>
    <About/>
    <Solutions/>
    <Platform/>
    <Plans/>
    <Whatsapp/>
    <Footer/>
    </div>
  )
}
