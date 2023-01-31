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
        let divLeftBLockSeparator = document.createElement('div');
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


        div.className = 'con con1';
        divSnapshot.className = "snapshot";
        portfolio.appendChild(div);
        divSnapshot.appendChild(image);
        div.appendChild(divSnapshot);

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
        divLeftBLockLanguageList.className = "Lang";
        div.appendChild(divLeftBLockLanguageList);

        LeftBLockButton.textContent = project[i].buttontext;
        LeftBLockButton.className = "Acbutt";
        divLeftBLockButton.appendChild(LeftBLockButton);
        divLeftBLockButton.className = "butt";
        div.appendChild(divLeftBLockButton);
        
        
        
    }
}

function generateListItems() {
    
}
