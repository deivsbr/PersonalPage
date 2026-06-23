let language = "en";

const world = document.getElementById("world");
const player = document.getElementById("player");
const buttonPlay = document.querySelector("#start");
const viewport = document.getElementById("viewport");

//VARIAVEIS DO PERSONAGEM
let gameStarted= false;
let playerX = 200;
let cameraX = 0;
let speed = 3;
let nextCheckPoint = 200;
let playerState = "idle";
let currentCheckpoint = 0;
let isShowingCard = false;

//VARIAVEIS DOS CARDS
const infoCard = document.getElementById("infoCard");
const infoImg = document.getElementById("infoImg");
const infoYears = document.getElementById("infoYears");
const infoCompany = document.getElementById("infoCompany");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const projectsContainer = document.getElementById("projectsContainer");
const projectTitle = document.getElementById("projectTitle");

const checkpoints = [
    {
        position: 600,
        image: "./img/senaiLogo.png",
        company:"SENAI",
        years: {
            pt: "Dez/2022 - Abr/2026",
            en: "Dec/2022 - Apr/2026"
        }, 
        title: {
            pt:"Instrutor de Formação Profissional III",
            en:"Vocational Training Instructor III"}
            ,
        desc: {
            pt: "Ministrar formação prática em desenvolvimento de software, desenvolvimento web/mobile e banco de dados, além de design criativo e produção multimídia. O conteúdo abrange fundamentos de programação e desenvolvimento full-stack, ferramentas Adobe Creative Cloud (Photoshop, Illustrator, Premiere Pro e After Effects), gamificação com JavaScript para criar experiências interativas de aprendizado e design UI/UX com Figma para wireframing, prototipagem e sistemas de design. Fomentar um ambiente colaborativo baseado em projetos, adaptar o ensino às diferentes necessidades dos alunos e prepará-los para certificações da indústria e para o sucesso profissional.",
            en:"Deliver hands-on vocational training in software development, web/mobile development, and database management, alongside creative design and multimedia production. Instruction covers programming fundamentals and full-stack development, Adobe Creative Cloud tools including Photoshop, Illustrator, Premiere Pro, and After Effects, gamification using JavaScript to create interactive learning experiences, and UI/UX design with Figma for wireframing, prototyping, and design systems. Foster a project-based, collaborative learning environment, adapt instruction to diverse student needs, and prepare learners for industry certifications and career success."
        }
        },
    {
        position: 1000,
        image: "./img/senacLogo.png",
        company:"SENAC",
        years: {
            pt: "Jul/2024 - Out/2024  | Abr/2023 - Jul/2023 | Set/2022 - Dez/2022", 
            en: "July/2024 - Oct/2024  | Apr/2023 - July/2023 | Sep/2022 - Dec/2022"
        },
            title: {
            pt:"Professor",
            en:"Instructor – Information Technology Assistant Course"
            },
        desc: {
            pt:"Ministrar formação abrangente em fundamentos de TI, abrangendo sistemas operacionais cliente, suítes de produtividade de escritório e operação de periféricos. Oferecer instrução prática em montagem e manutenção de hardware, instalação e configuração de sistemas operacionais cliente, softwares aplicativos e periféricos. Ensinar configuração e administração básica de rede local (LAN), incluindo endereçamento IP, cabeamento e compartilhamento de recursos em rede. Orientar os alunos em um Projeto Integrador que sintetiza todo o conteúdo do curso em uma aplicação prática e real, desenvolvendo habilidades de resolução de problemas, trabalho em equipe e documentação técnica. Adaptar os métodos de ensino aos diferentes estilos de aprendizagem e preparar os alunos para funções de suporte de TI de nível inicial e para certificações reconhecidas pelo mercado.",
            en:"Deliver comprehensive training in IT fundamentals, covering client operating systems, office productivity suites, and peripheral device operation. Provide hands-on instruction in hardware assembly and troubleshooting, installation and configuration of client operating systems, software applications, and peripherals. Teach local area network (LAN) setup, configuration, and basic administration, including IP addressing, cabling, and network resource sharing. Guide students through an Integrative Project that synthesizes all course content into a practical, real-world application, fostering problem-solving, teamwork, and technical documentation skills. Adapt teaching methods to diverse learning styles and prepare students for entry-level IT support roles and industry-recognized certifications." 
              }
        },
    {
        position: 1400,
        image: "./img/etecLogo.png",
        company:"ETEC",
        years: {
            pt: "Jun/2016 - Nov/2022", 
            en: "Jun/2016 - Nov/2022"
        },
        title: {
            pt: "Auxiliar de Docente de Informática",
            en: "Computer Science Teaching Assistant"
        },
        desc: {
            pt: "Atuar como suporte técnico e auxiliar pedagógico nos laboratórios de informática, garantindo o pleno funcionamento de todos os equipamentos e sistemas utilizados nas atividades de ensino. Responsável pela instalação e configuração de softwares e sistemas operacionais em estações de trabalho, além da execução de manutenção preventiva e corretiva em computadores e periféricos. Gerenciar a infraestrutura de quatro laboratórios de informática, abrangendo desde a montagem e organização física até a configuração e atualização contínua dos equipamentos. Administrar servidores locais, incluindo criação, configuração e manutenção de serviços de rede, controle de acesso e backups. Atuar também na instalação, configuração e manutenção de redes de internet, garantindo conectividade estável e segura para alunos e docentes. Colaborar com os instrutores no preparo dos ambientes para as aulas, solucionar problemas técnicos em tempo real e contribuir para a qualidade do processo de ensino-aprendizagem.",
            en: "Provide technical support and pedagogical assistance across computer labs, ensuring full functionality of all equipment and systems used in instructional activities. Responsible for installing and configuring software applications and operating systems on workstations, as well as performing preventive and corrective maintenance on computers and peripherals. Manage the infrastructure of four computer labs, covering physical setup, organization, and continuous equipment updates. Administer local servers, including creation, configuration, and maintenance of network services, access control, and backups. Also handle the installation, configuration, and maintenance of internet networks, ensuring stable and secure connectivity for both students and faculty. Collaborate with instructors in preparing lab environments for classes, resolve technical issues in real time, and contribute to the overall quality of the teaching-learning process."
        } 
    },
    {
        position: 1550,
        image: "./img/etecLogo.png",
        company:"ETEC",
        years: {
            pt: "Mar/2018 - Dez/2019", 
            en: "Mar/2018 - Dec/2019"
        },
        title: {
            pt: "Professor",
            en: "Instructor"
        },
        desc: {
            pt: "Ministrei aulas de HTML, CSS e PHP, iniciando com os fundamentos de criação de páginas HTML para estabelecer uma base sólida. Em seguida, avancei para a estilização visual com CSS, aprimorando o design e a experiência do usuário nas páginas web. Por fim, abordei a programação orientada a objetos em PHP e a integração com bancos de dados, capacitando os alunos a desenvolver aplicações web dinâmicas e completas.",
            en: "Taught HTML, CSS, and PHP courses, starting with the fundamentals of creating HTML pages to build a solid foundation. Progressed to visual styling with CSS, enhancing web page design and user experience. Finally, covered object-oriented programming in PHP and database integration, enabling students to develop dynamic, full-featured web applications."
        } 
    },
    {
        position: 1800,
        image: "./img/unipLogo.png",
        company:"UNIP",
        years: {
            pt: "Abr/2016 - Jun/2017",
            en: "Apr/2016 - Jun/2017"
        }, 
        title: {
            pt: "Tutor de Análise e Desenvolvimento de Sistemas",
            en: "Systems Analysis and Development Tutor"
        },
        desc: {
            pt: "Atuei como tutor orientando alunos no curso de Análise e Desenvolvimento de Sistemas, oferecendo suporte pedagógico e técnico em disciplinas como programação, banco de dados, engenharia de software, análise de sistemas e desenvolvimento web/mobile. Auxiliei na compreensão de conceitos fundamentais e avançados, esclarecendo dúvidas, revisando exercícios práticos e apoiando a execução de projetos acadêmicos. Contribuí para o desenvolvimento de habilidades lógicas e de resolução de problemas, preparando os estudantes para os desafios do mercado de tecnologia.",
            en: "Served as a tutor guiding students in the Systems Analysis and Development course, providing pedagogical and technical support in subjects such as programming, databases, software engineering, systems analysis, and web/mobile development. Assisted in understanding fundamental and advanced concepts, clarifying doubts, reviewing practical exercises, and supporting the execution of academic projects. Contributed to the development of logical thinking and problem-solving skills, preparing students for the challenges of the technology job market."
        }
    },
    {
        position: 2200,
        image: "./img/thsLogo.png",
        company:"THS INFORMÁTICA",
        years: {
            pt:"Abr/2014 - Ago/2015",
            en:"Apr/2014 - Aug/2015"
        },
        title: {
            pt:"Técnico em Informática",
            en:"IT Technician"
        },
        desc: {
            pt:"Atuei na área de suporte e manutenção de sistemas e infraestrutura de TI, realizando instalação e configuração de softwares e sistemas operacionais, manutenção preventiva e corretiva de computadores e periféricos, e gerenciamento de redes locais e servidores. Responsável pela administração de laboratórios de informática, garantindo o pleno funcionamento dos equipamentos para atividades educacionais e corporativas. Prestei suporte técnico presencial e remoto, diagnosticando e solucionando problemas com agilidade, além de orientar usuários no uso adequado das ferramentas tecnológicas.",
            en:"Worked in the area of IT support and infrastructure maintenance, performing software and operating system installation and configuration, preventive and corrective maintenance on computers and peripherals, and managing local networks and servers. Responsible for administering computer labs, ensuring full equipment functionality for educational and corporate activities. Provided on-site and remote technical support, diagnosing and resolving issues efficiently, while also guiding users on the proper use of technological tools."
        }  
    },
    {
        position: 2600,
        image: "./img/evoluaLogo.png",
        company:"ESCOLA EVOLUA",
        years: {
            pt: "Jun/2013 - Set/2013",
            en: "Jun/2013 - Sep/2013"
        }, 
        title: {
            pt: "Professor",
            en: "Instructor"
        }, 
        desc: {
            pt: "Ministrei cursos presenciais de design e desenvolvimento web, abordando ferramentas e tecnologias essenciais para a criação de conteúdos digitais. Lecionei disciplinas de Adobe Photoshop, para edição e tratamento de imagens; Adobe Illustrator, para criação de vetores e identidade visual; Macromedia/Adobe Flash, para animações e recursos interativos; e HTML, para estruturação e desenvolvimento de páginas web. As aulas foram planejadas com foco prático, estimulando a criatividade e a autonomia dos alunos por meio de projetos reais, exercícios progressivos e acompanhamento individualizado, preparando-os para atuar no mercado de design, publicidade e desenvolvimento web.",
            en: "Taught in-person courses in design and web development, covering essential tools and technologies for digital content creation. Taught Adobe Photoshop for image editing and retouching, Adobe Illustrator for vector graphics and visual identity, Macromedia/Adobe Flash for animations and interactive content, and HTML for structuring and developing web pages. Lessons were planned with a hands-on approach, encouraging students' creativity and autonomy through real-world projects, progressive exercises, and individualized support, preparing them for careers in design, advertising, and web development."
        }, 
    },
    {
        position: 3000,
        image: "./img/aceLogo.png",
        company:"ACE PF",
        years: {
            pt: "Jan/2009 - Out/2012",
            en: "Jan/2009 - Oct/2012"
        },
        title: {
            pt: "Auxiliar de Escritório",
            en: "Office Assistant"
        },
        desc: {
            pt: "Atuei no suporte administrativo e operacional da instituição, auxiliando na rotina diária do escritório. Realizei atendimento ao público, presencial e telefônico, prestando informações e encaminhando demandas. Organizei e arquivei documentos, mantendo o controle e a atualização de cadastros e processos. Auxiliei na elaboração de planilhas, relatórios e correspondências, utilizando pacote office e ferramentas de gestão. Colaborei com a equipe na execução de tarefas administrativas, contribuindo para a eficiência e o bom andamento das atividades da associação",
            en: "Atuei no suporte administrativo e operacional da instituição, auxiliando na rotina diária do escritório. Realizei atendimento ao público, presencial e telefônico, prestando informações e encaminhando demandas. Organizei e arquivei documentos, mantendo o controle e a atualização de cadastros e processos. Auxiliei na elaboração de planilhas, relatórios e correspondências, utilizando pacote office e ferramentas de gestão. Colaborei com a equipe na execução de tarefas administrativas, contribuindo para a eficiência e o bom andamento das atividades da associação"
        }
    },
         {
        position: 3200,
        title: {
            pt: "Projetos",
            en: "Projects"
        },
        isFinal:true,
        projects: [
            {
                name: "Gerador de QR Code",
                image: "./img/qrCode.png",
                link: "https://github.com/deivsbr/Gerador-de-QRCode-e-Password"
            },
            {
                name: "Mundo Invertido",
                image: "./img/mundoInvertido.png",
                link: "https://deivsbr.github.io/Mundo-Invertido/"
            },
            {
                name: "Pokedex",
                image: "./img/pokemon.png",
                link: "https://deivsbr.github.io/Pokedex/"
            },
            {
                name: "Vertical Plataform",
                image: "./img/verticalPlataform.png",
                link: "https://deivsbr.github.io/Vertical-Plataform/"
            },
            {
                name: "Dog Care",
                image: "./img/dogCare.png",
                link: "https://deivsbr.github.io/dog-care/"
            },
            {
                name: "To-do List",
                image: "./img/todoList.png",
                link: "https://deivsbr.github.io/todo/"
            },
        ]
        
    },
    
];
const checkpointDistance = 50;


// ESTADOS DO PERSONAGEM - IDLE, WALK AND SHOWINFO
const playerAnimation = {
    idle:{
        currentFrame:0,
        frameWidth:618,
        totalFrames:3,
        frameSpeed:200,
    },

    walk:{
        currentFrame:0,
        frameWidth:618,
        totalFrames:3,
        frameSpeed:200,
    },
    showInfo:{
        currentFrame:0,
        frameWidth:618,
        totalFrames:3,
        frameSpeed:200,
    }
}

// TEMPO DE PAUSA EM CADA CARD
const showInfoPause = 1;

// POSIÇÃO CENÁRIO
const worldWidth = 3300; // Medida corrigida
const viewPortWidth = 1920;
const playerWidth = 80;

// CONTROLE DO IDLE - AO MUDAR PARA O CONST PLAYERANIMATION - APAGAR
let currentFrame = 0;
let idleAnimation;


// PLAY RESUME
const buttonOpPlay = {
    frameAtual: 0,
    totalFrames: 2,
    larguraFrame: 550,
    velocidade: 500
}

// BUTTON PLAY ANIMATION
function animateButton(){
        
    const posicao = buttonOpPlay.frameAtual * buttonOpPlay.larguraFrame;

    buttonPlay.style.backgroundPosition = `-${posicao}px 0`;
    buttonOpPlay.frameAtual++;

    if(buttonOpPlay.frameAtual >= buttonOpPlay.totalFrames){
        buttonOpPlay.frameAtual = 0;
    }
}

setInterval(
    animateButton,
    buttonOpPlay.velocidade);

// EVENTO DE CLICK DO BUTTON
buttonPlay.addEventListener("click", ()=>{
    gameStarted = true;
    playerState = "walk";
    buttonPlay.style.display = "none";
})

// INICIA O GAME
function gameLoop(){
    if(gameStarted && playerState === "walk"){
        if(playerX < cameraX + viewPortWidth - playerWidth){
             playerX += speed;
        
        if(currentCheckpoint < checkpoints.length &&
            playerX >= checkpoints[currentCheckpoint].position - checkpointDistance &&
            !isShowingCard){
                playerState = "showInfo";
                showInfoCard(checkpoints[currentCheckpoint]);
            }
    }
        cameraX = playerX - 200;

        if(cameraX > worldWidth - viewPortWidth){
            cameraX = worldWidth - viewPortWidth;
        }

        player.style.left = playerX + "px";
        world.style.transform = `translateX(${-cameraX}px)`;
        console.log(playerX, playerState);
    }
    
    requestAnimationFrame(gameLoop);
}
gameLoop();


// ANIMACÃO IDLE
function startIdle(){
    idleAnimation = setInterval(() => {
        player.style.backgroundPosition = `-${currentFrame * playerAnimation.idle.frameWidth}px 0`;
        currentFrame++;
        if(currentFrame >= playerAnimation.idle.totalFrames){
            currentFrame = 0;
        }
    }, playerAnimation.idle.frameSpeed);
}

// PARAR IDLE
function stopIdle(){
    clearInterval(idleAnimation);
}

// INICIAR O PERSONAGEM
startIdle();

// TROCA AS SPRITESHEET DEPENDENDO O ESTADO DO PERSONAGEM
function updatePlayerAnimation(){
}

//MOSTRA O CARD NO RESUME
function showInfoCard(data){
    isShowingCard = true;

    //limpa projetos antigos
    projectsContainer.innerHTML = data.title[language];
if(data.projects){
    infoCompany.innerHTML = "";
    infoTitle.innerText = data.title[language];
    infoImg.style.display = "none";
    infoText.style.display = "none";
    infoYears.style.display = "none";
    showProjects(data.projects);

} else {
    infoImg.style.display = "block";
    infoText.style.display = "block";
    infoYears.style.display = "block";

    infoCompany.innerHTML = data.company;
    infoImg.src = data.image;
    infoTitle.innerText = data.title[language];
    infoText.innerText = data.desc[language];
    infoYears.innerText = data.years[language];
}
    infoCard.classList.remove("hidden");
    infoCard.offsetWidth;

    infoCard.classList.add("show");

    if(!data.isFinal){
    setTimeout(()=>{
        hideInfoCard();
}, showInfoPause);
}
}

// FECHAR CARD
function hideInfoCard(){
    infoCard.classList.remove("show");

    setTimeout(()=>{
        infoCard.classList.add("hidden");
        isShowingCard = false;
        playerState = "walk";
        currentCheckpoint++;
    }, 600);
}

// CARD PROJECTS
function showProjects(projects){
    console.log("PROJETOS:", projects);
    projectsContainer.innerHTML = "";
    projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="projectItem">
            <a href="${project.link}" target="_blank">
            <img
            src="${project.image}"
            class="projectImage">
            </a>
            <a href="${project.link}"
            target="_blank"
            class="projectName">
                ${project.name}
                </a>
            </div>
        `;
    });
}

