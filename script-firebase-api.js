import * as domElement from './script-dom.js';
import intersectionObserver from './script-intersection-observer.js';

export let quotes = [];

const fetchFirebaseApi = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCB7kZlwhT3XJodzViuuRRP9ggDysOqSxY",
    authDomain: "fir-database-mikey.firebaseapp.com",
    databaseURL: "https://fir-database-mikey.firebaseio.com",
    projectId: "fir-database-mikey",
    storageBucket: "fir-database-mikey.appspot.com",
    messagingSenderId: "299569566671",
    appId: "1:299569566671:web:5b22d2ab28ec77479db8ba",
    measurementId: "G-LM0GHJJ6VX"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.database().ref().on('value', snap => {
    const firebaseDatabase = snap.val();

    // console.log('Firebase data loaded', firebaseDatabase);

    if (firebaseDatabase) {
      turnLoadSpinnerOff();
      loadIntersectionObserver();

      /* ********* HERO ********* */
      if (firebaseDatabase.hero && firebaseDatabase.hero.keyPoints) {
        firebaseDatabase.hero.keyPoints.forEach(word => {
          const keyItem = document.createElement('li');
          domElement.heroList.appendChild(keyItem);
          keyItem.innerText = word;
        });
      }
      domElement.heroDesc.innerText = firebaseDatabase.hero.intro;
      domElement.heroTitle.innerText = firebaseDatabase.hero.title;

      /* ********* QUOTE ********* */
      if (firebaseDatabase.quotes) {
        domElement.quotes = firebaseDatabase.quotes;
        quotes = firebaseDatabase.quotes;
        domElement.getRandomQuote(firebaseDatabase.quotes);
        // console.log('domElement', domElement);
      }

      /* ********* PROJECTS ********* */
      if (firebaseDatabase.projects) {
        firebaseDatabase.projects.forEach(project => {
          const projectElem = document.createElement('div');
          projectElem.classList.add('section-project__project');
          domElement.projectWrapper.appendChild(projectElem);
          const projectImage = document.createElement('img');
          projectImage.classList.add('section-project__image');
          if (project.id === 1) {
            projectImage.setAttribute('src', './project-trop-1920x1088.jpg');
            projectImage.setAttribute('alt', 'Trop landing page')
          } else if (project.id === 2) {
            projectImage.setAttribute('src', './project-wydawca-1920x1088.jpg');
            projectImage.setAttribute('alt', 'Wydawca.com.pl landing page')
          } else if (project.id === 3) {
            projectImage.setAttribute('src', './project-mikeystudio-1920x1088.png');
            projectImage.setAttribute('alt', 'Mikey studio landing page')
          } else if (project.id === 4) {
            projectImage.setAttribute('src', './project-ts-habit-app-1920x1088.jpg');
            projectImage.setAttribute('alt', 'Habits app landing page')
          } else if (project.id === 5) {
            projectImage.setAttribute('src', './project-indie-games.png');
            projectImage.setAttribute('alt', 'Indie games landing page')
          } else if (project.id === 6) {
            projectImage.setAttribute('src', './project-small-projects.png');
            projectImage.setAttribute('alt', 'Small projects landing page')
          }
          projectElem.appendChild(projectImage);
          const projectTitle = document.createElement('h3');
          projectTitle.classList.add('section-project__title');
          projectTitle.innerText = project.title;
          projectElem.appendChild(projectTitle);
          const projectHeader = document.createElement('h4');
          projectHeader.classList.add('section-project__header');
          projectHeader.innerText = project.header;
          projectElem.appendChild(projectHeader);
          const projectDesc = document.createElement('p');
          projectDesc.classList.add('section-project__description');
          projectDesc.innerText = project.description;
          projectElem.appendChild(projectDesc);
          if (project.hashtags) {
            const projectHashtagsDiv = document.createElement('div');
            projectHashtagsDiv.classList.add('section-project__hashtags');
            projectElem.appendChild(projectHashtagsDiv);
            for (let i = 0; i < project.hashtags.length; i++) {
              const hashtagSpan = document.createElement('span');
              hashtagSpan.classList.add('section-project__hashtag');
              hashtagSpan.innerText = `#${project.hashtags[i]}`;
              projectHashtagsDiv.appendChild(hashtagSpan);
              if ((i + 1) % 3 === 0) {
                projectHashtagsDiv.appendChild(document.createElement('br'));
              }
            };
          }
          const projectButtons = document.createElement('div');
          projectButtons.classList.add('section-project__buttons');
          projectElem.appendChild(projectButtons);
          if (project.websiteLink) {
            const websiteLink = document.createElement('a');
            projectButtons.appendChild(websiteLink);
            websiteLink.classList.add('button');
            websiteLink.setAttribute('target', '_blank');
            websiteLink.innerText = 'Website';
            websiteLink.setAttribute('href', project.websiteLink);
          }
          if (project.repoLink) {
            const repoLink = document.createElement('a');
            projectButtons.appendChild(repoLink);
            repoLink.classList.add('button');
            repoLink.setAttribute('target', '_blank');
            repoLink.innerText = 'Repo'
            repoLink.setAttribute('href', project.repoLink)
          }
        });
      }

      /* ********* ABOUT ********* */
      if (firebaseDatabase.aboutList) {
        (firebaseDatabase.aboutList).forEach(aboutItem => {
          const aboutSection = document.createElement('div');
          const aboutDescription = document.createElement('p');
          aboutSection.classList.add(`section-about__description`, `${aboutItem.className}`);
          aboutDescription.innerText = aboutItem.description;
          aboutSection.appendChild(aboutDescription);
          domElement.aboutWrapper.appendChild(aboutSection);
        });
      }

      /* ********* STACK ********* */
      if (firebaseDatabase.techStack) {
        for (let i = 0; i < domElement.techIcon.length; i++) {
          const techItem = domElement.techIcon[i];
          const svgClasses = [...domElement.techIcon[i].classList];
          firebaseDatabase.techStack.forEach(tech => {
            if (svgClasses.includes(tech.className)) {
              const techSpan = document.createElement('span');
              techSpan.classList.add('section-about__stack-technology');
              const techDescription = document.createElement('p');
              techDescription.classList.add('section-about__stack-description');
              techSpan.innerText = tech.technology;
              techDescription.innerText = tech.description;
              techItem.parentNode.insertBefore(techSpan, techItem.nextSibling);
              techSpan.parentNode.insertBefore(techDescription, techSpan.nextSibling);
            }
          });
        }
      }

    }

  });
}

function turnLoadSpinnerOff() {
  domElement.spinner.classList.add('spinner--off');
}

function loadIntersectionObserver() {
  intersectionObserver.listenToObserver();
}

export default { fetchFirebaseApi }
