const project = [
    {name: "Tonic", 
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    imagesource: "img/beigebg.png",
    altmessage: "project1",
    technologies: ['html','css','javascript'],
    projectsummary: ['CANOPY','Back end dev','2015'],
    livelink: "#",
    sourcelink: "#",
    buttontext: "See Project"
},
{
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    imagesource: "img/whitebg.png",
    altmessage: "project2",
    technologies: ['html', 'css', 'javascript'],
    projectsummary: ['CANOPY', 'Back end dev', '2015'],
    livelink: "#",
    sourcelink: "#",
    buttontext: "See Project"
},
    {
        name: "Tonic",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        imagesource: "img/orabg.png",
        altmessage: "project3",
        technologies: ['html', 'css', 'javascript'],
        projectsummary: ['CANOPY', 'Back end dev', '2015'],
        livelink: "#",
        sourcelink: "#",
        buttontext: "See Project"
    },
    {
        name: "Multi-Post Stories",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        imagesource: "img/multibg.png",
        altmessage: "project4",
        technologies: ['html', 'css', 'javascript'],
        projectsummary: ['CANOPY', 'Back end dev', '2015'],
        livelink: "#",
        sourcelink: "#",
        buttontext: "See Project"
    }
]
const portfolio = document.querySelector('.works');

function fetchPortfolio(){
    for (let i = 0; i < project.length; i += 1) {
        let div = document.createElement('div');
        let divSnapshot = document.createElement('div');
        let divLeftblock = document.createElement('div');
        let image = new Image();
        let divLeftBLockText = document.createElement('div');
        let divLeftBLockTextHead = document.createElement('h2');
        let divLeftBLockTextyear = document.createElement('div');
        let divLeftBLockCanopy = document.createElement('div');
        let LeftBLockCanopy= document.createElement('p');
        let divLeftBLockSeparator1 = document.createElement('div');
        let divLeftBLockSeparator2 = document.createElement('div');
        let divLeftBLockBackend = document.createElement('div');
        let LeftBLockBackend = document.createElement('p');
        let divLeftBLockY15 = document.createElement('div');
        let LeftBLockY15 = document.createElement('p');
        let divLeftBLockDescription = document.createElement('p');
        let divLeftBLockLanguageList = document.createElement('ul');
        let divLeftBLockButton = document.createElement('div');
        let LeftBLockButton = document.createElement('button');
        image.src=project[i].imagesource;
        image.alt=project[i].altmessage;


        div.className = 'con con1 con-1';
        if(i%2===0){
            div.classList.toggle('con-1');
        }
        divSnapshot.className = "snapshot";
        divLeftblock.className = "left-block1"
        portfolio.appendChild(div);
        divSnapshot.appendChild(image);
        div.appendChild(divSnapshot);
        div.appendChild(divLeftblock);
          

        divLeftBLockText.className = "l-block1-text";
        divLeftblock.appendChild(divLeftBLockText);

        divLeftBLockTextHead.textContent = project[i].name;
        divLeftBLockTextHead.className = "Text2";
        divLeftBLockText.appendChild(divLeftBLockTextHead);
        
        divLeftBLockTextyear.className = "year";
        divLeftBLockText.appendChild(divLeftBLockTextyear);



        divLeftBLockCanopy.className = "div1-can";
        divLeftBLockTextyear.appendChild(divLeftBLockCanopy);

        LeftBLockCanopy.textContent = project[i].projectsummary[0];
        LeftBLockCanopy.className = "canopy";
        divLeftBLockCanopy.appendChild(LeftBLockCanopy);

        divLeftBLockSeparator1.className = "portfolio-separtor portfolio-separtor-1"
        divLeftBLockTextyear.appendChild(divLeftBLockSeparator1);

        divLeftBLockBackend.className = "div3-back";
        divLeftBLockTextyear.appendChild(divLeftBLockBackend);

        LeftBLockBackend.textContent = project[i].projectsummary[1];
        LeftBLockBackend.className = "backend";
        divLeftBLockBackend.appendChild(LeftBLockBackend);

        divLeftBLockSeparator2.className = "portfolio-separtor portfolio-separtor-3"
        divLeftBLockTextyear.appendChild(divLeftBLockSeparator2);

        divLeftBLockY15.className = "div5-y15";
        divLeftBLockTextyear.appendChild(divLeftBLockY15);

        LeftBLockY15.textContent = project[i].projectsummary[2];
        LeftBLockY15.className = "y15";
        divLeftBLockY15.appendChild(LeftBLockY15);



        divLeftBLockDescription.textContent = project[i].description;
        divLeftBLockDescription.className = "description";
        divLeftblock.appendChild(divLeftBLockDescription);


        for (let x = 0; x < project[i].technologies.length; x += 1) {
            let divLeftBLockLanguageListitem = document.createElement('li');
            let cs = "cs-1";
            let ht = "ht-1";
            let js = "js-1";
            if (project[i].technologies[x] === "html") {
                divLeftBLockLanguageListitem.textContent = project[i].technologies[x];
                divLeftBLockLanguageListitem.className = ht;

            } else if (project[i].technologies[x] === "css") {
                divLeftBLockLanguageListitem.textContent = project[i].technologies[x];
                divLeftBLockLanguageListitem.className = cs;

            } else if (project[i].technologies[x] === "javascript") {
                divLeftBLockLanguageListitem.textContent = project[i].technologies[x];
                divLeftBLockLanguageListitem.className = js;

            }
            divLeftBLockLanguageList.appendChild(divLeftBLockLanguageListitem);

        }
        divLeftBLockLanguageList.className = "lang";
        divLeftblock.appendChild(divLeftBLockLanguageList);
        div.appendChild(divLeftblock);

        LeftBLockButton.textContent = project[i].buttontext;
        LeftBLockButton.className = "Acbutt";
        divLeftBLockButton.appendChild(LeftBLockButton);
        divLeftBLockButton.className = "butt";
        divLeftblock.appendChild(divLeftBLockButton);

        
        
        
    }
}

function generateListItems() {
    
}
