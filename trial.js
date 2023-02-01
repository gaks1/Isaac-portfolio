const project = [
    {name: "Tonic", 
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagesource: "img/beigebg.png",
    altmessage: "project1",
    technologies: ['html','css','javascript'],
    projectsummary: ['CANOPY','Back end dev','2015'],
        livelink: ['#', 'See live','img/seelive.png'],
        sourcelink: ['#', 'See Source','img/seesource.png'],
    buttontext: "See Project",
    uniqueid : "0",
    counter: "img/Counter.png",
    cancel: "img/portfoliocancel.png"

},
{
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagesource: "img/whitebg.png",
    altmessage: "project2",
    technologies: ['html', 'css', 'javascript'],
    projectsummary: ['CANOPY', 'Back end dev', '2015'],
    livelink: ['#', 'See live', 'img/seelive.png'],
    sourcelink: ['#', 'See Source', 'img/seesource.png'],
    buttontext: "See Project",
    uniqueid: "1",
    counter: "img/Counter.png",
    cancel: "img/portfoliocancel.png"
},
    {
        name: "Tonic",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        imagesource: "img/orabg.png",
        altmessage: "project3",
        technologies: ['html', 'css', 'javascript'],
        projectsummary: ['CANOPY', 'Back end dev', '2015'],
        livelink: ['#', 'See live', 'img/seelive.png'],
        sourcelink: ['#', 'See Source', 'img/seesource.png'],
        buttontext: "See Project",
        uniqueid: "2",
        counter: "img/Counter.png",
        cancel: "img/portfoliocancel.png"


    },
    {
        name: "Multi-Post Stories",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        imagesource: "img/multibg.png",
        altmessage: "project4",
        technologies: ['html', 'css', 'javascript'],
        projectsummary: ['CANOPY', 'Back end dev', '2015'],
        livelink: ['#', 'See live', 'img/seelive.png'],
        sourcelink: ['#', 'See Source', 'img/seesource.png'],
        buttontext: "See Project",
        uniqueid: "3",
        counter: "img/Counter.png",
        cancel: "img/portfoliocancel.png"


    }
]
const portfolio = document.querySelector('.works');

function generateHtml(tag, tagClassName) {
    tag = document.createElement(tag);
    tag.className = tagClassName;
    return tag;
}

function addTextAppend (tag, text, parent) {    
    tag.textContent = text;
    parent.appendChild(tag);
    return tag;
}

function fetchPortfolio(){
    for (let i = 0; i < project.length; i += 1) {
        let div = generateHtml('div','con con1 con-1');        
        let divSnapshot = generateHtml('div','snapshot');        
        let divLeftblock = generateHtml('div','left-block1');
        let image = new Image();        
        let divLeftBLockText = generateHtml('div','l-block1-text');
        let divLeftBLockTextHead = generateHtml('div','Text2');
        let divLeftBLockTextyear = generateHtml('div','year');
        let divLeftBLockCanopy = generateHtml('div','div1-can');
        let LeftBLockCanopy= generateHtml('p','canopy');
        let divLeftBLockSeparator1 = generateHtml('div','portfolio-separtor portfolio-separtor-1');
        let divLeftBLockSeparator2 = generateHtml('div','portfolio-separtor portfolio-separtor-3');
        let divLeftBLockBackend = generateHtml('div','div3-back');
        let LeftBLockBackend = generateHtml('p','backend');
        let divLeftBLockY15 = generateHtml('div','div5-y15');
        let LeftBLockY15 = generateHtml('p','y15');
        let divLeftBLockDescription = generateHtml('div','description');
        let divLeftBLockLanguageList = generateHtml('div','lang');
        let divLeftBLockButton = generateHtml('div','butt');
        let LeftBLockButton = generateHtml('button','Acbutt');
        image.src=project[i].imagesource;
        image.alt=project[i].altmessage;        

        if(i%2===0){
            div.classList.toggle('con-1');
        }

        portfolio.appendChild(div);
        divSnapshot.appendChild(image);
        div.appendChild(divSnapshot);
        div.appendChild(divLeftblock);
          
        
        divLeftblock.appendChild(divLeftBLockText);

        addTextAppend(divLeftBLockTextHead,project[i].name,divLeftBLockText);                                
                
        divLeftBLockText.appendChild(divLeftBLockTextyear);

        divLeftBLockTextyear.appendChild(divLeftBLockCanopy);

        addTextAppend(LeftBLockCanopy,project[i].projectsummary[0],divLeftBLockCanopy);

        divLeftBLockTextyear.appendChild(divLeftBLockSeparator1);

        divLeftBLockBackend.className = "div3-back";
        divLeftBLockTextyear.appendChild(divLeftBLockBackend);

        LeftBLockBackend.textContent = project[i].projectsummary[1];        
        divLeftBLockBackend.appendChild(LeftBLockBackend);
        
        divLeftBLockTextyear.appendChild(divLeftBLockSeparator2);
        
        divLeftBLockTextyear.appendChild(divLeftBLockY15);

        addTextAppend(LeftBLockY15,project[i].projectsummary[2],divLeftBLockY15);

        addTextAppend(divLeftBLockDescription,project[i].description,divLeftblock);
       
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
        
        divLeftblock.appendChild(divLeftBLockLanguageList);
        div.appendChild(divLeftblock);

        addTextAppend(LeftBLockButton,project[i].buttontext,divLeftBLockButton);
        divLeftblock.appendChild(divLeftBLockButton);
    }
}


