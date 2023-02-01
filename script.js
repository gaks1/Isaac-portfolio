const ham = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const sections = document.querySelectorAll('section');
const menuContainer = document.querySelector('.menu-container');
const mobileLinKItem = document.querySelectorAll('.mobile-link-item');

function sectionFunc() {
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.remove('blur');
  }

  menuContainer.style.display = 'block';
}

function sectionHide() {
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.remove('blur');
  }

  menuContainer.style.display = 'none';
}
ham.addEventListener('click', sectionFunc);

closeMenu.addEventListener('click', sectionHide);

for (let i = 0; i < mobileLinKItem.length; i += 1) {
  mobileLinKItem[i].addEventListener('click', sectionHide);
}


const project = [{
  name: "Tonic",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imagesource: "img/beigebg.png",
  altmessage: "project1",
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'img/seelive.png'],
  sourcelink: ['#', 'See Source', 'img/seesource.png'],
  buttontext: "See Project",
  uniqueid: "0",
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
const header = document.querySelector('.text-section');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('.works');
const portfoliopopup = document.querySelector('.portfolio-popup');
const section = document.querySelectorAll("section");

function generateHtml(tag, tagClassName) {
  tag = document.createElement(tag);
  tag.className = tagClassName;
  return tag;
}

function addTextAppend(tag, text, parent) {
  tag.textContent = text;
  parent.appendChild(tag);
  return tag;
}

function fetchPortfolio() {
  for (let i = 0; i < project.length; i += 1) {
    let div = generateHtml('div', 'con con1 con-1');
    let divSnapshot = generateHtml('div', 'snapshot');
    let divLeftblock = generateHtml('div', 'left-block1');
    let image = new Image();
    let divLeftBLockText = generateHtml('div', 'l-block1-text');
    let divLeftBLockTextHead = generateHtml('div', 'Text2');
    let divLeftBLockTextyear = generateHtml('div', 'year');
    let divLeftBLockCanopy = generateHtml('div', 'div1-can');
    let LeftBLockCanopy = generateHtml('p', 'canopy');
    let divLeftBLockSeparator1 = generateHtml('div', 'portfolio-separtor portfolio-separtor-1');
    let divLeftBLockSeparator2 = generateHtml('div', 'portfolio-separtor portfolio-separtor-3');
    let divLeftBLockBackend = generateHtml('div', 'div3-back');
    let LeftBLockBackend = generateHtml('p', 'backend');
    let divLeftBLockY15 = generateHtml('div', 'div5-y15');
    let LeftBLockY15 = generateHtml('p', 'y15');
    let divLeftBLockDescription = generateHtml('div', 'description');
    let divLeftBLockLanguageList = generateHtml('div', 'lang');
    let divLeftBLockButton = generateHtml('div', 'butt');
    let LeftBLockButton = generateHtml('button', 'Acbutt');
    image.src = project[i].imagesource;
    image.alt = project[i].altmessage;

    if (i % 2 === 0) {
      div.classList.toggle('con-1');
    }

    portfolio.appendChild(div);
    divSnapshot.appendChild(image);
    div.appendChild(divSnapshot);
    div.appendChild(divLeftblock);


    divLeftblock.appendChild(divLeftBLockText);

    addTextAppend(divLeftBLockTextHead, project[i].name, divLeftBLockText);

    divLeftBLockText.appendChild(divLeftBLockTextyear);

    divLeftBLockTextyear.appendChild(divLeftBLockCanopy);

    addTextAppend(LeftBLockCanopy, project[i].projectsummary[0], divLeftBLockCanopy);

    divLeftBLockTextyear.appendChild(divLeftBLockSeparator1);

    divLeftBLockBackend.className = "div3-back";
    divLeftBLockTextyear.appendChild(divLeftBLockBackend);

    LeftBLockBackend.textContent = project[i].projectsummary[1];
    divLeftBLockBackend.appendChild(LeftBLockBackend);

    divLeftBLockTextyear.appendChild(divLeftBLockSeparator2);

    divLeftBLockTextyear.appendChild(divLeftBLockY15);

    addTextAppend(LeftBLockY15, project[i].projectsummary[2], divLeftBLockY15);

    addTextAppend(divLeftBLockDescription, project[i].description, divLeftblock);

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

    addTextAppend(LeftBLockButton, project[i].buttontext, divLeftBLockButton);
    divLeftblock.appendChild(divLeftBLockButton);

  } //end of for loop

  let buttons = document.querySelectorAll('.Acbutt');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      header.classList.add('blur');
      about.style.display = 'none';
      contact.style.display = 'none';
      portfolio.style.display = 'none';
      portfoliopopup.style.display = 'flex';
      window.scrollTo(0, 0);

      let popupdiv = generateHtml('div', 'popup-div');

      let divtitle = document.createElement('div');
      divtitle.className = "div-title";
      let divtop = generateHtml('div', 'div-top');

      let divbottom = generateHtml('div', 'div-bottom');
      let divbutton = generateHtml('div', 'div-button');
      let popupimage = new Image();
      let divtitlename = document.createElement('h2');
      let divtitlecanopy = generateHtml('p', 'canopy');
      let divtitlebackend = generateHtml('p', 'backend');
      let divtitleyear = generateHtml('p', 'y15');
      let divtitlecounter1 = new Image();
      let divtitlecounter2 = new Image();
      let divtitlecancel = new Image();
      let frametitle = generateHtml('div', 'frame-title');
      let framecanopy = generateHtml('div', 'frame-canopy');
      let frameLanguage = generateHtml('div', 'frame-language');

      addTextAppend(divtitlename, project[i].name, frametitle);
      divtitle.appendChild(frametitle);

      divtitlecancel.src = project[i].cancel;
      divtitlecancel.className = "portfolio1cancel";
      frametitle.appendChild(divtitlecancel);
      divtitle.appendChild(frametitle);


      addTextAppend(divtitlecanopy, project[i].projectsummary[0], framecanopy)


      divtitle.appendChild(framecanopy);

      divtitlecounter1.src = project[i].counter;
      divtitlecounter1.className = "canopyimage";
      framecanopy.appendChild(divtitlecounter1);
      divtitle.appendChild(framecanopy);


      addTextAppend(divtitlebackend, project[i].projectsummary[1], framecanopy);
      divtitle.appendChild(framecanopy);

      divtitlecounter2.src = project[i].counter;
      divtitlecounter2.className = "canopyimage";
      framecanopy.appendChild(divtitlecounter2);
      divtitle.appendChild(framecanopy);

      addTextAppend(divtitleyear, project[i].projectsummary[2], framecanopy);
      divtitleyear.className = "y15";
      divtitle.appendChild(framecanopy);


      portfoliopopup.appendChild(popupdiv);
      popupdiv.appendChild(divtitle);
      popupdiv.appendChild(divtop);
      popupdiv.appendChild(divbottom);
      divtop.appendChild(popupimage);
      popupimage.src = project[i].imagesource;
      popupimage.alt = project[i].altmessage;
      popupimage.className = "popup-image";

      let divbottomdescription = generateHtml('p', 'popup-description');
      addTextAppend(divbottomdescription, project[i].longdescription, divbottom)


      let divbottomlanguage = generateHtml('ul', 'bottom-list');
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

      let divbottombutton1 = generateHtml('a', 'projectbutton');
      divbottombutton1.type = "button";
      divbottombutton1.href = project[i].livelink[0];
      let image1 = new Image();
      image1.src = project[i].livelink[2];
      addTextAppend(divbottombutton1, project[i].livelink[1], divbutton);
      divbottombutton1.appendChild(image1);
      frameLanguage.appendChild(divbutton);
      divbottom.appendChild(frameLanguage);

      let divbottombutton2 = generateHtml('a', 'projectbutton');
      divbottombutton2.type = "button";
      divbottombutton2.href = project[i].sourcelink[0];
      let image2 = new Image();
      image2.src = project[i].sourcelink[2];
      addTextAppend(divbottombutton2, project[i].sourcelink[1], divbutton);
      divbottombutton2.appendChild(image2);
      frameLanguage.appendChild(divbutton);
      divbottom.appendChild(frameLanguage);

      let c = document.querySelector('.portfolio1cancel');
      c.addEventListener('click', () => {
        header.classList.remove('blur');
        about.style.display = 'flex';
        contact.style.display = 'flex';
        portfoliopopup.style.display = 'none';
        portfolio.style.display = 'grid';
        popupdiv.remove();
      });

    });

  }
}


const form = document.querySelector(".contact-form");
const EMAIL_INVALID = "Note: Please enter the email address in small letters. The form is not sent.";

function showMessage(message, type) {

  const msg = document.querySelector(".error");
  msg.innerText = message;
  return type;
}

function showError(message) {
  return showMessage(message, false);
}

function showSuccess() {
  return showMessage("", true);
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
  const email = input.value;
  if (!emailRegex.test(email)) {
    
    return showError(invalidMsg);
  }else{
   
    return showSuccess();
  }
  
}

form.addEventListener("submit", function (event) {
  
  event.preventDefault();

  let emailValid = validateEmail(form.elements["useremail"], EMAIL_INVALID);
  
  if (emailValid) {
    form.submit();
  }
});