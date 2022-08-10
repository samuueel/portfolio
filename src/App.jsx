import logonav from './imgs/logohori.png'
import Ilustraçao from './imgs/1.png'
import Foto from "./imgs/Foto.jpg"
import Projeto1 from './imgProjetos/resenhafilmes.png'
import Projeto2 from './imgProjetos/DHO.svg'
import Projeto3 from './imgProjetos/emconstrucao.png'
import img from "./imgs/undraw_static_website_re_x70h.svg"

import { BsFillEnvelopeFill, BsFillTelephoneFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { AiFillInstagram, AiFillEnvironment, AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BiUserCircle, BiNews } from "react-icons/bi";
import { DiBootstrap, DiCss3, DiJavascript1, DiHtml5, DiReact, DiSass, DiPhotoshop, DiScrum } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

/* import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();*/

import './styles/App.css'
import './styles/Banner.css'
import './styles/Header.css'
import './styles/Contato.css'
import './styles/Projetos.css'
import './styles/Sobre.css'

function App() {

  return (
    <div className="App">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <header id='home'>
        <nav>
          <input type="checkbox" id='check' />
          <label for="check" className='checkbtn'>
            <FaBars />
          </label>
          <img data-aos="fade-right" src={logonav} alt="" />
          <ul data-aos="fade-left">
            <li><a href="#home">HOME</a></li>
            <li><a href="#sobre">SOBRE</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </ul>
        </nav>
      </header>
      <main class="area">
        <section data-aos="fade-right" className='bannerInfos'>
          <h5>Olá!</h5>
          <h4>Eu sou</h4>
          <h1>SAMUEL HECK</h1>
          <h3>Desenvolvedor Front End Jr</h3>
          <div className='buttons'>
            <a href="https://www.linkedin.com/in/samuel-heck-04210a222">
              <div class="on-light">
                <button class="coolBeans">
                  Linkedin
                </button>
              </div>
            </a>
            <a href="https://github.com/samuueel">
              <div class="on-light">
                <button class="coolBeans">
                  GitHub
                </button>
              </div>
            </a>
          </div>
        </section>
        <div class="card-lustration">
          <div class="circle"></div>
          <div class="content">
            <ul className="content-icons">
              <li className="icon1"><DiHtml5></DiHtml5></li>
              <li className="icon2"><DiCss3></DiCss3></li>
              <li className="icon3"><DiJavascript1></DiJavascript1></li>
              <li className="icon4"><DiBootstrap></DiBootstrap></li>
              <li className="icon5"><DiReact></DiReact></li>
              <li className="icon6"><DiSass></DiSass></li>
              <li className="icon7"><DiPhotoshop></DiPhotoshop></li>
              <li className="icon8"><AiFillGithub></AiFillGithub></li>
              <li className="icon9"><DiScrum></DiScrum></li>
              <li className="icon10"><FiFigma></FiFigma></li>
            </ul>
          </div>
          <img className='imgIlustraçao' alt='Ilustraçao' src={Ilustraçao}></img>
        </div>
      </main>

      <section id='sobre' className='divSobre'>
        <BiUserCircle></BiUserCircle>
        <h2 data-aos="fade-up">Um pouco sobre mim!</h2>
        <div className='barraAnimed'></div>
        <div className='divSobreImgTexto'>
          <img data-aos="fade-right" src={Foto}></img>
          <p data-aos="fade-up">
            Olá, meu nome é Samuel Vinícius Heck, tenho 19 anos e moro atualmente em Lindolfo Collor/RS.
            Descobri a programação através do YouTube, uma plataforma que assisto muito, e me apaixonei pela profissão.
            Meu sonho é poder trabalhar com programação, mas não está sendo fácil.
            Como sou autodidata, luto sozinho diariamente para um dia eu me tornar um excelente profissional! <br />
          </p>
        </div>
      </section>

      <div id='projetos' className='headerProjetos'>
        <BiNews></BiNews>
        <h1 data-aos="fade-right">Projetos</h1>
        <div className='barraAnimed'></div>
        <p data-aos="fade-up"> 
          Tenho muitos projetos no GitHub, como calculadoras, gerador de senha, formulários, projetos com consumo de APIs, alguns templates de blogs, entre outros... <br /> 
        </p>
        <a href="https://github.com/samuueel">
              <div class="on-light">
                <button class="coolBeans">
                  GitHub
                </button>
              </div>
            </a>
      </div>
      <div className='projetos'>
        <a href='https://resenha-filmes.vercel.app/' target={'_blank'} >
          <div className='card'>
            <img src={Projeto1}></img>
            <div className='cardInfos'>
              <h3>Resenha Filmes</h3>
              <p>
                Site de resenhas de filmes<br></br>
                Site feito juntamente com tutorial do youtube, com o intuito de aprimorar o React e consumo de APis
                Desenvolvido em ReactJS com consumo de API (TMDB).<br></br>
              </p>
            </div>
          </div>
        </a>
        <a href='https://consultoriadho.com.br' target={'_blank'} >
          <div className='card'>
            <img src={Projeto2}></img>
            <div className='cardInfos'>
              <h3>Meu Primeiro Freelancer</h3>
              <p>
                Site feito para um consultório <br></br>
                Todo o Design foi feito por mim.<br></br>
                Desenvolvido em HTML, CSS e JS.
              </p>
            </div>
          </div>
        </a>
        <a href='#' target={'_blank'}>
          <div className='card'>
            <img src={Projeto3}></img>
            <div className='cardInfos'>
              <h3>Desenvolvendo o próximo projeto</h3>
            </div>
          </div>
        </a>
      </div>

      <footer id="contato">
        <img data-aos="fade-right" src={img} alt="" />
        <aside data-aos="fade-up">
          <h2>Contato</h2>
          <p>
            Entre em contato conosco pelos canais de comunicação abaixo.
          </p>
          <ul>
            <li>
              <BsFillEnvelopeFill></BsFillEnvelopeFill>svheck2016@gmail.com
            </li>
            <li><BsFillTelephoneFill></BsFillTelephoneFill>(51) 995039193</li>
            <li><AiFillInstagram></AiFillInstagram>@samuel.heck_</li>
            <li><AiFillEnvironment></AiFillEnvironment>Lindolfo Collor/RS</li>
          </ul>
          <a href='https://drive.google.com/u/0/uc?id=1A2_dtIyCivulkmbElbTKKIZbNa58glIK&export=download'>
            <button class="coolBeans">
              Currículo
            </button>
          </a>
        </aside>
      </footer>
      <div class="copy">
        <span
        >Copyright©2022,
          <a href="https://samuueel.github.io/developer-front-end/" target="_blank"
          > Samuel Heck</a>. Todos os direitos reservados.</span>
      </div>
    </div>
  )
}

export default App
