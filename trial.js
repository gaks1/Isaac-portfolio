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
const portfoliopopup = document.querySelector('.portfolio-popup');
const section = document.querySelectorAll("section");
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
        LeftBLockButton.id = project[i].uniqueid;
        divLeftBLockButton.appendChild(LeftBLockButton);
        divLeftBLockButton.className = "butt";
        divLeftblock.appendChild(divLeftBLockButton);
        
    }//end of for loop
    
    let buttons = document.querySelectorAll('.Acbutt');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
       
        // portfolio.style.display = 'none';
        portfoliopopup.style.display = 'flex';

        let popupdiv = document.createElement('div');
        popupdiv.className = "popup-div"
        let divtitle = document.createElement('div');
        let divtop = document.createElement('div');
        let divbottom = document.createElement('div');
        divbottom.className = "div-bottom";
        let popupimage = new Image();
            let divtitlename = document.createElement('h2');
            let divtitlecanopy = document.createElement('p');
            let divtitlebackend = document.createElement('p');
            let divtitleyear = document.createElement('p');
            let divtitlecounter1 = new Image();
            let divtitlecounter2 = new Image();
            let divtitlecancel = new Image();
            let frametitle = document.createElement('div');
            frametitle.className = "frame-title";
            let framecanopy = document.createElement('div');
            framecanopy.className = "frame-canopy";
            let frameLanguage = document.createElement('div');
            frameLanguage.className = "frame-language";




            divtitlename.textContent = project[i].name;
            frametitle.appendChild(divtitlename);
            divtitle.appendChild(frametitle);

            divtitlecancel.src = project[i].cancel;
            divtitlecancel.className = "portfolio1-cancel";
            frametitle.appendChild(divtitlecancel);
            divtitle.appendChild(frametitle);



          divtitlecanopy.textContent = project[i].projectsummary[0];
            divtitlecanopy.className = "canopy";
            framecanopy.appendChild(divtitlecanopy);
            divtitle.appendChild(framecanopy);

            divtitlecounter1.src = project[i].counter;
            framecanopy.appendChild(divtitlecounter1);
            divtitle.appendChild(framecanopy);



            divtitlebackend.textContent = project[i].projectsummary[1];
            divtitlebackend.className = "backend";
            framecanopy.appendChild(divtitlebackend);
            divtitle.appendChild(framecanopy);

            divtitlecounter2.src = project[i].counter;
            framecanopy.appendChild(divtitlecounter2);
            divtitle.appendChild(framecanopy);


            divtitleyear.textContent = project[i].projectsummary[2];
            divtitleyear.className = "y15";
            framecanopy.appendChild(divtitleyear);
            divtitle.appendChild(framecanopy);
 

        portfoliopopup.appendChild(popupdiv);
        popupdiv.appendChild(divtitle);
        popupdiv.appendChild(divtop);
        popupdiv.appendChild(divbottom);
        divtop.appendChild(popupimage);
        popupimage.src = project[i].imagesource;
        popupimage.alt = project[i].altmessage;
        popupimage.className = "popup-image";

        let divbottomdescription = document.createElement('p');
        divbottomdescription.className= "popup-description";
        divbottomdescription.textContent = project[i].longdescription;
        divbottom.appendChild(divbottomdescription);
        
        let divbottomlanguage = document.createElement('ul');
        divbottomlanguage.className = "bottom-list";
            for (let x = 0; x < project[i].technologies.length; x += 1) {
                let divbottomlanguageListitem = document.createElement('li');
                let cs = "cs-1";
                let ht = "ht-1";
                let js = "js-1";
                if (project[i].technologies[x] === "html") {
                    divbottomlanguageListitem.textContent = project[i].technologies[x];
                    divbottomlanguageListitem.className = ht;

                } else if (project[i].technologies[x] === "css") {
                    divbottomlanguageListitem.textContent = project[i].technologies[x];
                    divbottomlanguageListitem.className = cs;

                } else if (project[i].technologies[x] === "javascript") {
                    divbottomlanguageListitem.textContent = project[i].technologies[x];
                    divbottomlanguageListitem.className = js;

                }
                divbottomlanguage.appendChild(divbottomlanguageListitem);

            }
            frameLanguage.appendChild(divbottomlanguage); 
            divbottom.appendChild(frameLanguage);

            let divbottombutton1 = document.createElement('a');
            divbottombutton1.type= "button";
            divbottombutton1.className = "projectbutton";
            divbottombutton1.href = project[i].livelink[0];
            divbottombutton1.textContent = project[i].livelink[1];
            frameLanguage.appendChild(divbottombutton1);
            divbottom.appendChild(frameLanguage);

            let divbottombutton2 = document.createElement('a');
            divbottombutton2.type = "button";
            divbottombutton2.className = "projectbutton";
            divbottombutton2.href = project[i].sourcelink[0];
            divbottombutton2.textContent = project[i].sourcelink[1];
            frameLanguage.appendChild(divbottombutton2);
            divbottom.appendChild(frameLanguage);


    
            let c = document.querySelector('.portfolio1-cancel');
            c.addEventListener('click', () => {
                portfoliopopup.style.display = 'none';
                popupdiv.remove();
            });



        });

        
    }



    
    

   


    // projectbutton.addEventListener('click', function () {
    //     alert("fdkv");
    //     portfolio.style.display = 'none';
    //     portfoliopopup.style.display = 'block';

    //     let popupdiv = document.createElement('div');
    //     let divtop = document.createElement('div');
    //     let divbottom = document.createElement('div');
    //     let popupimage = new Image();

    //     portfolio.appendChild(popupdiv);
    //     popupdiv.appendChild(divtop);
    //     popupdiv.appendChild(divbottom);
    //     divtop.appendChild(popupimage);
    //     popupimage.src = project[i].imagesource;
    //     popupimage.alt = project[i].altmessage;



    // });
}

