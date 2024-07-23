import previewPortifolio from './images/projects/previewPortifolio.png'
import previewNarutoCard from './images/projects/previewNarutoCard.png';
import previewEneasOS from './images/projects/previewEneasOS.png';
import soonImage from './images/soon.png';

import degreeADS from './images/certificados/DiplomaADS.png';
import degreeESSD from './images/certificados/DiplomaESSD.png';

var python = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
var html = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
var css = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
var react = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
var angular = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg";
var java = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
var javaScript = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
var javaSpring = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg";
var bootstrap = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
var gitHub = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
var mySql = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg";
var tailwindcss = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
var nextJs = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg";
var docker = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg";
var typeScript = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";

export const data = {
    "projects": [
        {
            "image": previewPortifolio,
            "title": "Site Portifólio",
            "description": "Site para portifolio pessoal para apresentação, contendo diversas sessões. Construido em react.js, html, css e java script",
            "technologies1": html,
            "technologies2": css,
            "technologies3": react,
            "technologies4": javaScript,
            "link": ""
        },
        {
            "image": previewNarutoCard,
            "title": "Naruto Card",
            "description": "Projeto de um jogo de cartas baseado no anime naruto, realizado em react.js, disponivel na versão web e responsivo para mobile",
            "technologies1": html,
            "technologies2": css,
            "technologies3": react,
            "technologies4": javaScript,
            "link": "/naruto-card"
        },
        {
            "image": previewEneasOS,
            "title": "Eneas-OS",
            "description": "Projeto de simulação de um sistema operacional baseado no widnowns, com icones referentes curriculos e projetos pessoais contruido em react.js, no momento apenas para Desktop",
            "technologies1": html,
            "technologies2": css,
            "technologies3": react,
            "technologies4": javaScript,
            "link": "/eneas-os"
        },
        {
            "image": soonImage,
            "title": "Em Andamento",
            "description": "",
            "technologies1": nextJs,
            "technologies2": tailwindcss,
            "technologies3": docker,
            "technologies4": mySql,
            "link": ""
        }

    ],
    "knowleadges": [
        {
            "image": react,
            "alt": "react",
            "text": "React.js"
        },
        {
            "image": nextJs,
            "alt": "next.js",
            "text": "Next.js"
        },
        {
            "image": angular,
            "alt": "angular",
            "text": "Angular.js"
        },
        {
            "image": javaSpring,
            "alt": "Spring",
            "text": "Spring"
        },
        {
            "image": tailwindcss,
            "alt": "Tailwind.css",
            "text": "Tailwind.css"
        },
        {
            "image": html,
            "alt": "Html",
            "text": "HTML"
        },
        {
            "image": css,
            "alt": "css",
            "text": "CSS"
        },
        {
            "image": java,
            "alt": "Java",
            "text": "Java"
        },
        {
            "image": python,
            "alt": "Python",
            "text": "Python"
        },
        {
            "image": javaScript,
            "alt": "JavaScript",
            "text": "JavaScript"
        },
        {
            "image": typeScript,
            "alt": "TypeScript",
            "text": "TypeScript"
        },
        {
            "image": gitHub,
            "alt": "GitHub",
            "text": "GitHub"
        },
        {
            "image": docker,
            "alt": "Docker",
            "text": "Docker"
        },
        {
            "image": mySql,
            "alt": "MySql",
            "text": "MySql"
        }
    ],
    "courses" : [
        {
            "href" : "https://www.udemy.com/certificate/UC-a07dc80f-89a9-4e5b-a6a5-26ab2b7f520e/",
            "text" : "Algoritimos e Lógica de Programação 2021 | Udemy"
        },
        {
            "href" : "https://www.udemy.com/certificate/UC-2e0e12dd-a187-46ff-8ea9-c1cde6aa671c/",
            "text" : "Java – Orientação a Objetos | Udemy"
        },
        {
            "href" : "https://cursos.alura.com.br/certificate/b4c33bbe-0f33-4cda-bdb7-3a10166fa12b",
            "text" : "GIT Controle e compartilhe seu Código | Alura"
        },
        {
            "href" : "https://cursos.alura.com.br/certificate/3f6193e5-2e40-4fe2-94ac-b0ddd639da94",
            "text" : "TDD e Java: Testes automatizados com JUnit | Alura"
        },
        {
            "href" : "https://www.coursera.org/account/accomplishments/verify/XTJGS3XC76H2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
            "text" : "USP –Laboratório de Programação Orientada a Objetos – Parte1 | Coursera"
        },
        {
            "href" : "https://cursos.alura.com.br/degree/certificate/9e22dfae-de1d-4345-be75-6e5a824d8117",
            "text" : "USP –Formação para Certificação Java SE 7 Programmer 80hrs | Alura"
        },
        {
            "href" : "https://cursos.alura.com.br/degree/certificate/f81b3877-8e2a-4c61-be8b-5bf7d67ba9fa",
            "text" : "Formação Spring Framework 130hrs | Alura"
        },
        {
            "href" : "https://portalservicos.usp.br/iddigital/6P8N-9BSX-WCR7-LRZR",
            "text" : "USP -Interfaces Web com HTML, CSS e JavaScript EAD 30hrs| USP"
        }
    ],
    "degrees" : [
        {
            "title": "Análise e Desenvolvimento de Sistemas",
            "university" : "UNIP",
            "year" : "2020-2022",
            "degree" : degreeADS
        },
        {
            "title": "Técnico de Policia Ostesiva e Preservação da Ordem Publica",
            "university" : "PMESP",
            "year" : "2017-2018",
            "degree" : degreeESSD
        }
    ]
}