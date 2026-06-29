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
const githubButtonContainer = document.getElementById("githubButtonContainer")

// KNOWLEDGE

const skillsData = [
  { name: "HTML", color: "#E34F26", level: 90, img: "./IMG/HTML LOGO.png" },
  { name: "CSS", color: "#1572B6", level: 85, img: "../IMG/CSS LOGO.png" },
  { name: "JavaScript", color: "#F7DF1E", level: 80, img: "./IMG/JS LOGO.png" },
  { name: "Node.js", color: "#3C873A", level: 70, img: "./IMG/NODE LOGO.png" },
  { name: "React Native", color: "#61DAFB", level: 75, img: "./IMG/REACT LOGO.png" },
  { name: "Figma", color: "#F24E1E", level: 85, img: "./IMG/FIGMA LOGO.png" },
  { name: "After Effects", color: "#7A7FFF", level: 60, img: "./IMG/AE LOGO.png" },
  { name: "Premiere", color: "#E66BFF", level: 60, img: "./IMG/PR LOGO.png" },
  { name: "Illustrator", color: "#FF9A00", level: 70, img: "./IMG/AI LOGO.png" },
  { name: "Photoshop", color: "#31A8FF", level: 80, img: "./IMG/PS LOGO.png" }
];

const container = document.getElementById("knowColumns");


function showSkills(){

    container.innerHTML = "";

    skillsData.forEach(skill => {
        const item = document.createElement("div");
        item.classList.add("know");
        item.style.setProperty("--color", skill.color);

        item.innerHTML = `
        <img class="logoK" src="${skill.img}" alt="${skill.name}">
            <div class="tecskills">
                <p class="percent">${skill.level}%</p>
                <div class="skills" data-level="${skill.level}">
                    <div class="skillsFill"></div>
                </div>
            </div>
        `;

        container.appendChild(item);
    });

}

function animateSkills(){
const skills = document.querySelectorAll(".skills");

skills.forEach(skill => {
    const fill = skill.querySelector(".skillsFill");

    const level = skill.dataset.level;

    setTimeout(()=> {
        fill.style.width = level + "%";
    },300);
})
}

showSkills();
animateSkills();





// RESUME 
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
            en:"Vocational Training Instructor III"
        },
        desc: {
            pt: "Ministrei formação prática em desenvolvimento de software, web/mobile e banco de dados, além de design e multimídia com Adobe Creative Cloud (Photoshop, Illustrator, Premiere e After Effects). Ensinei gamificação com JavaScript para experiências interativas e UI/UX no Figma para wireframing e prototipagem. Fomentei ambiente colaborativo com projetos reais, adaptei o ensino às necessidades dos alunos e os preparei para certificações e o mercado de tecnologia.",
            en: "Delivered hands-on training in software development, web/mobile, databases, and multimedia design using Adobe Creative Cloud (Photoshop, Illustrator, Premiere, After Effects). Taught gamification with JavaScript for interactive experiences and UI/UX in Figma for wireframing and prototyping. Fostered collaborative project-based learning, adapted to student needs, and prepared them for certifications and the tech job market."
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
            pt:"Ensinei fundamentos de TI: sistemas operacionais, pacote office, periféricos, montagem e manutenção de hardware, instalação/configuração de SO e softwares. Ministrei configuração de redes locais (LAN), abordando IP, cabeamento e compartilhamento de recursos. Orientei Projeto Integrador com aplicação prática, desenvolvendo resolução de problemas e documentação técnica. Preparei alunos para suporte de TI e certificações reconhecidas.",
            en:"Taught IT fundamentals: operating systems, office suites, peripherals, hardware assembly and maintenance, OS and software installation/configuration. Instructed on LAN setup, IP addressing, cabling, and resource sharing. Guided students through an Integrative Project with practical application, developing problem-solving and technical documentation skills. Prepared students for entry-level IT support and industry-recognized certifications." 
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
        pt: "Atuei como suporte técnico em 4 laboratórios de informática, instalando/configurando SO e softwares, executando manutenção preventiva e corretiva em computadores e periféricos. Administrei servidores locais, redes de internet e controle de acesso. Colaborei com instrutores na preparação de ambientes para aulas, solucionei problemas em tempo real e contribuí para a qualidade do ensino-aprendizagem.",
        en: "Provided technical support across 4 computer labs, installing/configuring operating systems and software, performing preventive and corrective maintenance on computers and peripherals. Administered local servers, internet networks, and access control. Collaborated with instructors in preparing lab environments, resolved real-time technical issues, and contributed to the quality of the teaching-learning process."
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
            pt: "Ministrei aulas de HTML, CSS e PHP, iniciando com fundamentos de criação de páginas HTML, avançando para estilização visual com CSS e design responsivo. Concluí com programação orientada a objetos em PHP e integração com bancos de dados. As aulas foram práticas com projetos progressivos que capacitaram os alunos a desenvolver aplicações web dinâmicas e completas para o mercado.",
            en: "Taught HTML, CSS, and PHP, starting with HTML page creation fundamentals, advancing to visual styling with CSS and responsive design. Concluded with object-oriented programming in PHP and database integration. Classes were hands-on with progressive projects, enabling students to develop dynamic, full-featured web applications ready for the job market."
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
            pt: "Atuei como tutor no curso de Análise e Desenvolvimento de Sistemas, oferecendo suporte em programação, banco de dados, engenharia de software, análise de sistemas e desenvolvimento web/mobile. Auxiliei na compreensão de conceitos, esclareci dúvidas, revisei exercícios e apoiei projetos acadêmicos. Desenvolvi habilidades lógicas e de resolução de problemas, preparando alunos para o mercado de tecnologia.",
            en: "Served as tutor in the Systems Analysis and Development course, providing support in programming, databases, software engineering, systems analysis, and web/mobile development. Assisted with concept understanding, clarified doubts, reviewed exercises, and supported academic projects. Developed logical thinking and problem-solving skills, preparing students for the technology job market."
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
            pt: "Atuei em suporte e manutenção de TI, realizando instalação/configuração de SO e softwares, manutenção preventiva e corretiva de computadores e periféricos, gerenciamento de redes locais e servidores. Administrei laboratórios de informática, prestando suporte presencial e remoto, diagnosticando e solucionando problemas com agilidade, além de orientar usuários no uso de ferramentas tecnológicas.",
            en: "Worked in IT support and maintenance, performing software and OS installation/configuration, preventive and corrective maintenance on computers and peripherals, and managing local networks and servers. Administered computer labs, providing on-site and remote support, diagnosing and resolving issues efficiently, while guiding users on the proper use of technological tools."
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
            pt: "Ministrei cursos presenciais de design e desenvolvimento web na Escola Evolua, lecionando Photoshop (edição de imagens), Illustrator (vetores e identidade visual), Flash (animações interativas) e HTML (estruturação de páginas). As aulas foram práticas com projetos reais, exercícios progressivos e acompanhamento individualizado, preparando alunos para carreiras em design, publicidade e desenvolvimento web.",
            en: "Taught in-person design and web development courses at Escola Evolua, covering Photoshop (image editing), Illustrator (vector graphics and visual identity), Flash (interactive animations), and HTML (page structuring). Classes were hands-on with real-world projects, progressive exercises, and individualized support, preparing students for careers in design, advertising, and web development."
        }
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
        pt: "Atuei no suporte administrativo da Associação Comercial, realizando atendimento ao público presencial e telefônico, organizando e arquivando documentos, mantendo cadastros atualizados, elaborando planilhas, relatórios e correspondências com pacote office. Colaborei com a equipe em tarefas administrativas, contribuindo para a eficiência e o bom andamento das atividades da instituição.",
        en: "Provided administrative support at the Commercial Association, handling in-person and phone customer service, organizing and filing documents, updating records, and creating spreadsheets, reports, and correspondence using office tools. Collaborated with the team on administrative tasks, contributing to the efficiency and smooth operation of the institution's activities."
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
const showInfoPause = 7500;

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

    githubButtonContainer.style.display = "none";

    //limpa projetos antigos
    projectsContainer.innerHTML = data.title[language];
if(data.projects){

    githubButtonContainer.style.display = "flex";
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

// FORM FUNCTION
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const formData = new FormData(contactForm);

    await fetch(
        "https://formspree.io/f/xgojzpdr",
        {
            method:"POST",
            body:formData,
            headers:{
                "Accept":"application/json"
            }
        }
    );

    contactForm.reset();
    showMessage("Message sent successfully");
    playerState = "walk";
})

const messageBoxOk = document.getElementById("messageBoxOk");
const messageTextBoxOk = document.getElementById("messageTextBoxOk");

function showMessage(text){
    messageTextBoxOk.innerText = text;
    messageBoxOk.classList.add("show");

    setTimeout(()=> {
        messageBoxOk.classList.remove("show");
    },3000);
}