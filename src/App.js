
import './App.css';
import CardProject from './components/CardProject/CardProject';
import ShowInFullScreen from './components/ShowInFullScreen/ShowInFullScreen';
import aboutImage from './images/aboutImage.png';
import logoPalmLabs from './images/logoPalmLabs.png';
import TresAsesLogo from './images/TresAsesLogo.png';
import pmespLogo from './images/pmespLogo.png';
import decLogo from './images/decLogo.png';
import DegreeButton from './components/DegreeButton/DegreeButton';
import contactImage from './images/contactImage.png';
import laureaQuintoGrau from './images/laureaQuintoGrau.png';
import laureaQuartoGrau from './images/laureaQuartoGrau.png';
import medalhaMMDC from './images/medalhaMMDC.png';
import certificadoLaureaQuarto from './images/certificados/certificadoLaureaQuarto.JPEG';
import certificadoLaureaQuinto from './images/certificados/certificadoLaureaQuinto.JPEG';
import certificadoMedalhaMMDC from './images/certificados/certificadoMedalhaMMDC.JPEG';

import { data } from './data';


export function activeFullScreen(src) {
  const showInFullScreen = document.querySelector('.showInFullScreen');
  showInFullScreen.classList.add('active');

  const changeImg = document.getElementById('showInFullScreenId');
  changeImg.setAttribute('src', src);
}

function changeJobText(job) {
  let image
  switch (job) {
    case "3Ases":
      document.getElementById("jobText").innerHTML = "Vendas em licitação, controle de pagamento, atendimento ao publico, controle de caixa e estoque.";
      document.getElementById("jobPeriod").innerHTML = "2015 - 2017";
      document.getElementById("jobTitle").innerHTML = "Auxiliar Administrativo";
      image = document.getElementById("jobLogo");
      image.src = TresAsesLogo;
      break;
    case "PMESP":
      document.getElementById("jobText").innerHTML = "Policial Militar do Estado de São Paulo, atuando no policiamento ostensivo e preservação da ordem pública, serviço administrativo como: controle de estoque, pagamento de contas, logística e telemática.";
      document.getElementById("jobPeriod").innerHTML = "2017-2021";
      document.getElementById("jobTitle").innerHTML = "Militar Estadual";
      image = document.getElementById("jobLogo");
      image.src = pmespLogo;
      break;
    case "PalmLabs":
      document.getElementById("jobText").innerHTML = "Contribui ativamente para diversos projetos de desenvolvimento web, envolvendo-se em tarefas de Front-End e Back-End para entregar aplicativos robustos e responsivos.<p> Desenvolveu e otimizou aplicativos web usando uma pilha de tecnologia que incluía React.js, Angular.js, Java, Spring Boot e Python, garantindo alto desempenho e escalabilidade.<p> Projetou e construiu páginas web e aplicativos sob medida para as necessidades das empresas, entregando soluções amigáveis ​​e visualmente atraentes que atendiam aos requisitos comerciais.";
      document.getElementById("jobPeriod").innerHTML = "2021-2022";
      document.getElementById("jobTitle").innerHTML = "Estagio de Desenvolvimento";
      image = document.getElementById("jobLogo");
      image.src = logoPalmLabs;
      break;
    case "DEC":
      document.getElementById("jobText").innerHTML = "Projetei e implementei um sistema abrangente de gerenciamento de logística usando React.js e Java Spring Boot. <p> Este sistema simplificou os processos de gerenciamento de inventário, melhorando significativamente a eficiência operacional e a qualidade do serviço.<p> Desenvolvi o site do departamento usando WordPress, implementando recursos para publicação de eventos e regulamentos, garantindo uma experiência de usuário e gerenciamento de conteúdo eficaz.<p> Configurei e otimizei a infraestrutura de rede do departamento, incluindo a instalação e o gerenciamento de redes de internet (TCP/IP), cabeamento e acesso à rede interna por meio do Active Directory, garantindo a operação eficiente de serviços de TI e web.";
      document.getElementById("jobPeriod").innerHTML = "2022 - 2024";
      document.getElementById("jobTitle").innerHTML = "Assistente de Suporte de TI";
      image = document.getElementById("jobLogo");
      image.src = decLogo;
      break;
  }
}



function App() {
  return (
    <div id='home' className="App">
      <ShowInFullScreen ></ShowInFullScreen>
      <div className='masterDiv'>

        {/*--------------------------------------------Intro--------------------------------------*/}
        <section className='sectionNome'>
          <div className='firstText'>
            <p>Olá, eu sou o</p>
            <h1>LUCAS ENEAS</h1>
          </div>
          <div className='secondText'>
            <h1>MARCOVECHIO</h1>
            <p>Desenvolvedor Junior</p>
          </div>
          <p className='portifolioTextLeft'>Seja bem vindo ao meu Portfólio<p></p></p>
          <p className='line'></p>
        </section>

        {/*--------------------------------------------About--------------------------------------*/}

        <section id='about' className='sectionAbout'>
          <img className='pulse aboutImage' alt="fotoPerfil" src={aboutImage} />
          <div className='aboutText'>
            <p>Busco oportunidades desafiadoras no campo do desenvolvimento de sistemas de TI, onde minha experiência e habilidades possam ser aplicadas para impulsionar a inovação e o sucesso organizacional.</p>
            <p>Estou comprometido em aprender continuamente e contribuir para o crescimento da equipe e da empresa como um todo, onde posso aplicar minha paixão pela programação e contribuir para projetos inovadores. Estou em busca de um ambiente de trabalho colaborativo, que ofereça desafios estimulantes e oportunidades para aprendizado contínuo.</p>
            <p>conhecimentos</p>
            <div className='techDivMother'>
              {data.knowleadges.map((resp, index) => (
                <div key={index} className='techDiv'>
                  <img alt={resp.alt} className='techIcon' src={resp.image} ></img>
                  <p className='techText'>{resp.text}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/*--------------------------------------------Projects--------------------------------------*/}

        <section id='projects' className='sectionProject'>
          <h2 className="title"> Projetos</h2>
          <div className='internalProjectDiv'>

            {data.projects.map((resp, index) => (
              <div key={index} className='projectColumn'>

                <CardProject
                  image={resp.image}
                  title={resp.title}
                  description={resp.description}
                  technologies1={resp.technologies1}
                  technologies2={resp.technologies2}
                  technologies3={resp.technologies3}
                  technologies4={resp.technologies4}
                  link={resp.link}
                />
              </div>
            ))}
          </div>
        </section>

        {/*--------------------------------------------Jobs--------------------------------------*/}

        <section id='jobs' className="sectionJobs">
          <h2 className="title"> Experiencias Profissionais</h2>
          <div className='divJobs'>
            <div className='jobs'>
              <button onClick={() => changeJobText("DEC")}>DEC - Diretoria de Educação e Cultura</button>
              <button onClick={() => changeJobText("PalmLabs")}>Palm Labs</button>
              <button onClick={() => changeJobText("PMESP")}>Governo do Estado de São Paulo</button>
              <button onClick={() => changeJobText("3Ases")}>3 Ases Comercio de Materiais de Higiene EPP</button>
            </div>
            <div className='jobDescription'>
              <div className='jobDescriptionInternal'>
                <img id='jobLogo' src={decLogo}></img>
                <div>
                  <h6 id='jobPeriod' > 2022 - 2024</h6>
                  <h6 id='jobTitle'>Assistente de Suporte de TI</h6>
                </div>
              </div>
              <p id='jobText'>Projetei e implementei um sistema abrangente de gerenciamento de logística usando React.js e Java Spring Boot. <p/>
                Este sistema simplificou os processos de gerenciamento de inventário, melhorando significativamente a eficiência operacional e a qualidade do serviço.<p/>
                Desenvolvi o site do departamento usando WordPress, implementando recursos para publicação de eventos e regulamentos, garantindo uma experiência de usuário e gerenciamento de conteúdo eficaz. <p/>
                Configurei e otimizei a infraestrutura de rede do departamento, incluindo a instalação e o gerenciamento de redes de internet (TCP/IP), cabeamento e acesso à rede interna por meio do Active Directory, garantindo a operação eficiente de serviços de TI e web.</p>
            </div>
          </div>
        </section>
        {/*--------------------------------------------Awards--------------------------------------*/}
        <section id='awards' className='sectionAwards' >
          <h2 className="title">Premiações</h2>
          <div className='awardsDivInternal'>
            <div className='award'>
              <img src={laureaQuintoGrau}></img>
              <span>
                <h3>Laurea de Mérito Pessoal de 5º Grau</h3>
                <button className='buttonAwards'>
                  <button onClick={() => activeFullScreen(certificadoLaureaQuinto)} className='buttonAwardsInternal'>Ver Certificado</button>
                </button>
              </span>
            </div>
            <div className='award'>
              <img src={laureaQuartoGrau}></img>
              <span>
                <h3>Laurea de Mérito Pessoal de 4º Grau</h3>
                <button className='buttonAwards'>
                  <button onClick={() => activeFullScreen(certificadoLaureaQuarto)} className='buttonAwardsInternal'>Ver Certificado</button>
                </button>
              </span>
            </div>
            <div className='award'>
              <img src={medalhaMMDC}></img>
              <span>
                <h3>Medalha do Mérito Juventude Constitucionalista MMDC</h3>
                <button className='buttonAwards'>
                  <button onClick={() => activeFullScreen(certificadoMedalhaMMDC)} className='buttonAwardsInternal'>Ver Certificado</button>
                </button>
              </span>
            </div>
          </div>
        </section>
        {/*--------------------------------------------Degrees--------------------------------------*/}

        <section id='degrees' className='sectionDegree'>
          <h2 className="title">Formação & Certificações</h2>
          <div className='degreesDivInternal'>
            {data.degrees.map((resp, index) => (
              <div key={index} className='degree'>
                <DegreeButton
                  icon={resp.icon}
                  title={resp.title}
                  university={resp.university}
                  year={resp.year}
                  degree={resp.degree}
                ></DegreeButton>
              </div>
            ))}
          </div>
        </section>
        {/*--------------------------------------------Courses--------------------------------------*/}

        <section id='courses' className='sectionCourses'>
          <h2 className="title">Cursos</h2>
          <div className='coursesDivInternal'>
            {data.courses.map((resp, index) => (
              <a key={index} href={resp.href} target="_blank">
                <button className='coursesDivButton'>
                  <button className='coursesDivButtonInternal'>{resp.text}</button>
                </button>
              </a>
            ))}

          </div>
        </section>

        {/*--------------------------------------------Contact--------------------------------------*/}

        <section id='contact' className='sectionContact'>
          <h2 className='title'>Contato</h2>
          <div className='divContact'>
            <div className='divContactLeft'>
              <img src={contactImage}></img>
            </div>
            <div className='divContactRight'>
              <h3><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                Endereço</h3>
              <p>Vila Nova de Gaia - Porto - Portugal</p>
              <h3><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                Email
              </h3>
              <p>lucaseneasmarco@gmail.com</p>
              <h3><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                Ceular</h3>
              <p>+351 961775710</p>
              <span className='space'></span>
              <p>If ( you.like )</p>
              <a href='https://wa.me/5511989068301' target="_blank">
                <button className='buttonContact'>
                  <button className='buttonContactInternal'>fale comigo</button>
                </button>
              </a>
              <p>Else If</p>
              <a href='https://www.canva.com/design/DAF41yKOv7Q/Tuuvd_jZ0WZI8GZQkAWRQw/view?utm_content=DAF41yKOv7Q&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank">
                <button className='buttonContact'>
                  <button className='buttonContactInternal'>curriculum.download()</button>
                </button>
              </a>
              <p>else</p>
              <a href='https://github.com/lucaseneas' target="_blank">
                <button className='buttonContact'>
                  <button className='buttonContactInternal'><img src='https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF' />GitHub</button>
                </button>
              </a>

            </div>
          </div>

        </section>
      </div>


    </div>

  );
  
}


export default App;
