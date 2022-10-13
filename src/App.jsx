import Ilustraçao from "./imgs/1.png";
import Foto from "./imgs/Foto.jpg";
import Projeto1 from "./imgProjetos/resenhafilmes.png";
import Projeto2 from "./imgProjetos/DHO.svg";
import Projeto3 from "./imgProjetos/emconstrucao.png";
import Projeto4 from "./imgProjetos/CoInvest.jpg";
import img from "./imgs/gifdev.gif";
import Button from "./components/Button";
import Card from "./components/Card";

import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillGearFill,
} from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillEnvironment,
  AiFillGithub,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BiUserCircle, BiNews } from "react-icons/bi";
import {
  DiBootstrap,
  DiCss3,
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiSass,
  DiPhotoshop,
  DiScrum,
} from "react-icons/di";
import { FiFigma } from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import "./styles/App.css";
import "./styles/Banner.css";
import "./styles/Header.css";
import "./styles/Contato.css";
import "./styles/Projetos.css";
import "./styles/Sobre.css";

function App() {
  function scrollTop() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }

  const animateProgress = () => {
    const bar = document.querySelector(".barra");
    const main = document.querySelector(".App");

    const heightScroll = -main.getBoundingClientRect().top;
    const widthProgress =
      (heightScroll /
        (main.getBoundingClientRect().height -
          document.documentElement.clientHeight)) *
      100;
    const value = Math.floor(widthProgress);
    bar.style.width = value + "%";
  };

  window.addEventListener("scroll", animateProgress);

  return (
    <div className="App">     
      <ul className="circles">
        <li><DiBootstrap/></li> 
        <li><DiCss3/></li>
        <li><DiJavascript1/></li>
        <li><DiHtml5/></li>
        <li><DiReact/></li>
        <li><DiSass/></li>
        <li><DiPhotoshop/></li>
        <li><DiScrum/></li>
        <li><FiFigma/></li>
        <li><DiHtml5/></li>
        <li><DiBootstrap/></li> 
        <li><DiCss3/></li>
        <li><DiJavascript1/></li>
        <li><DiHtml5/></li>
      </ul>
      <header data-aos="fade-down" id="home">
        <div className="barra"></div>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <FaBars />
          </label>
          <h1 onClick={scrollTop} className="logo">
            {"<"}S/H{">"}
          </h1>
          <ul data-aos="fade-left">
            <li>
              <a onClick={scrollTop} href="#home">
                HOME
              </a>
            </li>
            <li>
              <a href="#sobre">SOBRE</a>
            </li>
            <li>
              <a href="#projetos">PROJETOS</a>
            </li>
            <li>
              <a href="#contato">CONTATO</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="area">
        <section data-aos="fade-right" className="bannerInfos">
          <h5>Olá!</h5>
          <h4>Eu sou</h4>
          <h1>SAMUEL HECK</h1>
          <h3>Desenvolvedor Front End</h3>
          <div className="buttons">
            <Button
              link="https://www.linkedin.com/in/samuel-heck-04210a222"
              name="Linkedin"
            />
            <Button link="https://github.com/samuueel" name="GitHub" />
          </div>
        </section>
        <div data-aos="fade-left" className="card-lustration">
          <div className="circle"></div>
          <div className="content">
            <ul className="content-icons">
              <li className="icon1">
                <DiHtml5></DiHtml5>
              </li>
              <li className="icon2">
                <DiCss3></DiCss3>
              </li>
              <li className="icon3">
                <DiJavascript1></DiJavascript1>
              </li>
              <li className="icon4">
                <DiBootstrap></DiBootstrap>
              </li>
              <li className="icon5">
                <DiReact></DiReact>
              </li>
              <li className="icon6">
                <DiSass></DiSass>
              </li>
              <li className="icon7">
                <DiPhotoshop></DiPhotoshop>
              </li>
              <li className="icon8">
                <AiFillGithub></AiFillGithub>
              </li>
              <li className="icon9">
                <DiScrum></DiScrum>
              </li>
              <li className="icon10">
                <FiFigma></FiFigma>
              </li>
            </ul>
          </div>
          <img
            className="imgIlustraçao"
            alt="Ilustraçao"
            src={Ilustraçao}
          ></img>
        </div>
      </main>

      <section id="sobre" className="divSobre">
        <BiUserCircle data-aos="flip-up"></BiUserCircle>
        <h2 data-aos="fade-up">Um pouco sobre mim!</h2>
        <div className="barraAnimed"></div>
        <div className="divSobreImgTexto">
          <figure data-aos="fade-right">
            <img src={Foto}></img>
          </figure>
          <p data-aos="fade-up">
            Olá, meu nome é Samuel Vinícius Heck, tenho 19 anos e moro
            atualmente em Lindolfo Collor/RS. Descobri a programação através do
            YouTube, uma plataforma que assisto muito, e me apaixonei pela
            profissão. Meu sonho é poder trabalhar com programação, mas não está
            sendo fácil. Como sou autodidata, luto sozinho diariamente para um
            dia eu me tornar um excelente profissional! <br />
            <p>
              "Um sonho é apenas um desejo, até o momento em que você começa a
              atuar sobre ele, e propõe-se a transformá-lo em uma meta." -Mary
              Kay Ash
            </p>
          </p>
        </div>
      </section>

      <div id="projetos" className="headerProjetos">
        <BiNews data-aos="flip-up"></BiNews>
        <h1 data-aos="fade-right">Projetos</h1>
        <div className="barraAnimed"></div>
        <p data-aos="fade-up">
          Tenho muitos projetos no GitHub, como calculadoras, gerador de senha,
          formulários, projetos com consumo de APIs, alguns templates de blogs,
          entre outros... <br />
        </p>
        <Button link="https://github.com/samuueel" name="GitHub" />
      </div>
      <div className="projetos">
        <Card
          link="https://resenhafilmes.netlify.app/"
          img={Projeto1}
          title="Resenha Filmes"
          description="
                Site de resenhas de filmes 
                Site feito juntamente com tutorial do youtube, com o intuito de aprimorar o React e consumo de APis
                Desenvolvido em ReactJS com consumo de API (TMDB).
                Adicionado sistema de Login 
                "
        />
        <Card
          link="https://consultoriadho.com.br"
          img={Projeto2}
          title="Meu Primeiro Freelancer"
          description="
              Site feito para um consultório 
              Todo o Design foi feito por mim.
              Desenvolvido em HTML, CSS e JS."
        />
        <Card
          link="https://bancoruja.com.br/"
          img={Projeto4}
          title="CoInveste"
          description="
            Site de uma instituição financeira
            Participação no Front, ideias, arrumar layout e bugs."
        />
        <Card
          link="#"
          img={Projeto3}
          title="Desenvolvendo o próximo projeto"
          description="
            Site em desenvolvimento..."
        />
      </div>

      <footer id="contato">
        <img data-aos="fade-right" src={img} alt="" />
        <aside>
          <h2>Contato</h2>
          <p>Entre em contato conosco pelos canais de comunicação abaixo.</p>
          <ul>
            <li>
              <BsFillEnvelopeFill></BsFillEnvelopeFill>svheck2016@gmail.com
            </li>
            <li>
              <BsFillTelephoneFill></BsFillTelephoneFill>(51) 995039193
            </li>
            <li>
              <AiFillInstagram></AiFillInstagram>@samuel.heck_
            </li>
            <li>
              <AiFillEnvironment></AiFillEnvironment>Lindolfo Collor/RS
            </li>
          </ul>
          <Button
            link="https://drive.google.com/u/0/uc?id=1A2_dtIyCivulkmbElbTKKIZbNa58glIK&export=download"
            name="Currículo"
          />
        </aside>
      </footer>
      <div className="copy">
        <span>
          Copyright©2022,
          <a
            href="https://samuueel.github.io/developer-front-end/"
            target="_blank"
          >
            Samuel Heck
          </a>
          . Todos os direitos reservados.
        </span>
      </div>
    </div>
  );
}

export default App;
