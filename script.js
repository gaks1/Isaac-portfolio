const ham = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const sections = document.querySelectorAll('section');
const menuContainer = document.querySelector('.menu-container');
const mobileLinKItem = document.querySelectorAll('.mobile-link-item');

function sectionFunc() {
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.add('blur');
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
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imagesource: 'img/beigebg.png',
  altmessage: 'project1',
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'img/seelive.png'],
  sourcelink: ['#', 'See Source', 'img/seesource.png'],
  buttontext: 'See Project',
  uniqueid: '0',
  counter: 'img/Counter.png',
  cancel: 'img/portfoliocancel.png',

},
{
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imagesource: 'img/whitebg.png',
  altmessage: 'project2',
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'img/seelive.png'],
  sourcelink: ['#', 'See Source', 'img/seesource.png'],
  buttontext: 'See Project',
  uniqueid: '1',
  counter: 'img/Counter.png',
  cancel: 'img/portfoliocancel.png',
},
{
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imagesource: 'img/orabg.png',
  altmessage: 'project3',
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'img/seelive.png'],
  sourcelink: ['#', 'See Source', 'img/seesource.png'],
  buttontext: 'See Project',
  uniqueid: '2',
  counter: 'img/Counter.png',
  cancel: 'img/portfoliocancel.png',

},
{
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imagesource: 'img/multibg.png',
  altmessage: 'project4',
  technologies: ['html', 'css', 'javascript'],
  projectsummary: ['CANOPY', 'Back end dev', '2015'],
  livelink: ['#', 'See live', 'img/seelive.png'],
  sourcelink: ['#', 'See Source', 'img/seesource.png'],
  buttontext: 'See Project',
  uniqueid: '3',
  counter: 'img/Counter.png',
  cancel: 'img/portfoliocancel.png',

},
];
const header = document.querySelector('.text-section');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('.works');
const portfoliopopup = document.querySelector('.portfolio-popup');

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

window.addEventListener('load', () => {
  for (let i = 0; i < project.length; i += 1) {
    const div = generateHtml('div', 'con con1 con-1');
    const divSnapshot = generateHtml('div', 'snapshot');
    const divLeftblock = generateHtml('div', 'left-block1');
    const image = new Image();
    const divLeftBLockText = generateHtml('div', 'l-block1-text');
    const divLeftBLockTextHead = generateHtml('div', 'Text2');
    const divLeftBLockTextyear = generateHtml('div', 'year');
    const divLeftBLockCanopy = generateHtml('div', 'div1-can');
    const LeftBLockCanopy = generateHtml('p', 'canopy');
    const divLeftBLockSeparator1 = generateHtml('div', 'portfolio-separtor portfolio-separtor-1');
    const divLeftBLockSeparator2 = generateHtml('div', 'portfolio-separtor portfolio-separtor-3');
    const divLeftBLockBackend = generateHtml('div', 'div3-back');
    const LeftBLockBackend = generateHtml('p', 'backend');
    const divLeftBLockY15 = generateHtml('div', 'div5-y15');
    const LeftBLockY15 = generateHtml('p', 'y15');
    const divLeftBLockDescription = generateHtml('div', 'description');
    const divLeftBLockLanguageList = generateHtml('div', 'lang');
    const divLeftBLockButton = generateHtml('div', 'butt');
    const LeftBLockButton = generateHtml('button', 'Acbutt');
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

    divLeftBLockBackend.className = 'div3-back';
    divLeftBLockTextyear.appendChild(divLeftBLockBackend);

    const projectSummary = project[i].projectsummary[1];
    LeftBLockBackend.textContent = projectSummary;
    divLeftBLockBackend.appendChild(LeftBLockBackend);

    divLeftBLockTextyear.appendChild(divLeftBLockSeparator2);

    divLeftBLockTextyear.appendChild(divLeftBLockY15);

    addTextAppend(LeftBLockY15, project[i].projectsummary[2], divLeftBLockY15);

    addTextAppend(divLeftBLockDescription, project[i].description, divLeftblock);

    for (let x = 0; x < project[i].technologies.length; x += 1) {
      const divLeftBLockLanguageListitem = document.createElement('li');
      const cs = 'cs-1';
      const ht = 'ht-1';
      const js = 'js-1';
      if (project[i].technologies[x] === 'html') {
        divLeftBLockLanguageListitem.textContent = project[i].technologies[x];
        divLeftBLockLanguageListitem.className = ht;
      } else if (project[i].technologies[x] === 'css') {
        divLeftBLockLanguageListitem.textContent = project[i].technologies[x];
        divLeftBLockLanguageListitem.className = cs;
      } else if (project[i].technologies[x] === 'javascript') {
        divLeftBLockLanguageListitem.textContent = project[i].technologies[x];
        divLeftBLockLanguageListitem.className = js;
      }
      divLeftBLockLanguageList.appendChild(divLeftBLockLanguageListitem);
    }

    divLeftblock.appendChild(divLeftBLockLanguageList);
    div.appendChild(divLeftblock);

    addTextAppend(LeftBLockButton, project[i].buttontext, divLeftBLockButton);
    divLeftblock.appendChild(divLeftBLockButton);
  } // end of for loop

  const buttons = document.querySelectorAll('.Acbutt');

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      header.classList.add('blur');
      about.style.display = 'none';
      contact.style.display = 'none';
      portfolio.style.display = 'none';
      portfoliopopup.style.display = 'flex';
      window.scrollTo(0, 0);

      const popupdiv = generateHtml('div', 'popup-div');

      const divtitle = document.createElement('div');
      divtitle.className = 'div-title';
      const divtop = generateHtml('div', 'div-top');

      const divbottom = generateHtml('div', 'div-bottom');
      const divbutton = generateHtml('div', 'div-button');
      const popupimage = new Image();
      const divtitlename = document.createElement('h2');
      const divtitlecanopy = generateHtml('p', 'canopy');
      const divtitlebackend = generateHtml('p', 'backend');
      const divtitleyear = generateHtml('p', 'y15');
      const divtitlecounter1 = new Image();
      const divtitlecounter2 = new Image();
      const divtitlecancel = new Image();
      const frametitle = generateHtml('div', 'frame-title');
      const framecanopy = generateHtml('div', 'frame-canopy');
      const frameLanguage = generateHtml('div', 'frame-language');

      addTextAppend(divtitlename, project[i].name, frametitle);
      divtitle.appendChild(frametitle);

      divtitlecancel.src = project[i].cancel;
      divtitlecancel.className = 'portfolio1cancel';
      frametitle.appendChild(divtitlecancel);
      divtitle.appendChild(frametitle);

      addTextAppend(divtitlecanopy, project[i].projectsummary[0], framecanopy);

      divtitle.appendChild(framecanopy);

      divtitlecounter1.src = project[i].counter;
      divtitlecounter1.className = 'canopyimage';
      framecanopy.appendChild(divtitlecounter1);
      divtitle.appendChild(framecanopy);

      addTextAppend(divtitlebackend, project[i].projectsummary[1], framecanopy);
      divtitle.appendChild(framecanopy);

      divtitlecounter2.src = project[i].counter;
      divtitlecounter2.className = 'canopyimage';
      framecanopy.appendChild(divtitlecounter2);
      divtitle.appendChild(framecanopy);

      addTextAppend(divtitleyear, project[i].projectsummary[2], framecanopy);
      divtitleyear.className = 'y15';
      divtitle.appendChild(framecanopy);

      portfoliopopup.appendChild(popupdiv);
      popupdiv.appendChild(divtitle);
      popupdiv.appendChild(divtop);
      popupdiv.appendChild(divbottom);
      divtop.appendChild(popupimage);
      popupimage.src = project[i].imagesource;
      popupimage.alt = project[i].altmessage;
      popupimage.className = 'popup-image';

      const divbottomdescription = generateHtml('p', 'popup-description');
      addTextAppend(divbottomdescription, project[i].longdescription, divbottom);

      const divbottomlanguage = generateHtml('ul', 'bottom-list');
      for (let x = 0; x < project[i].technologies.length; x += 1) {
        const divbottomlanguageListitem = document.createElement('li');
        const cs = 'cs-1';
        const ht = 'ht-1';
        const js = 'js-1';
        if (project[i].technologies[x] === 'html') {
          divbottomlanguageListitem.textContent = project[i].technologies[x];
          divbottomlanguageListitem.className = ht;
        } else if (project[i].technologies[x] === 'css') {
          divbottomlanguageListitem.textContent = project[i].technologies[x];
          divbottomlanguageListitem.className = cs;
        } else if (project[i].technologies[x] === 'javascript') {
          divbottomlanguageListitem.textContent = project[i].technologies[x];
          divbottomlanguageListitem.className = js;
        }

        divbottomlanguage.appendChild(divbottomlanguageListitem);
      }

      frameLanguage.appendChild(divbottomlanguage);
      divbottom.appendChild(frameLanguage);

      const divbottombutton1 = generateHtml('a', 'projectbutton');
      divbottombutton1.type = 'button';
      const projectlink = project[i].livelink[0];
      divbottombutton1.href = projectlink;
      const image1 = new Image();
      const live = project[i].livelink[2];
      image1.src = live;
      addTextAppend(divbottombutton1, project[i].livelink[1], divbutton);
      divbottombutton1.appendChild(image1);
      frameLanguage.appendChild(divbutton);
      divbottom.appendChild(frameLanguage);

      const divbottombutton2 = generateHtml('a', 'projectbutton');
      divbottombutton2.type = 'button';
      const ref1 = project[i].sourcelink[0];
      divbottombutton2.href = ref1;
      const image2 = new Image();
      const Source = project[i].sourcelink[2];
      image2.src = Source;
      addTextAppend(divbottombutton2, project[i].sourcelink[1], divbutton);
      divbottombutton2.appendChild(image2);
      frameLanguage.appendChild(divbutton);
      divbottom.appendChild(frameLanguage);

      const c = document.querySelector('.portfolio1cancel');
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
});
