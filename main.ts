window.addEventListener('DOMContentLoaded', () => {
  let projectDiv = document.getElementById('projectsDiv');
  let web = document.getElementById('web');
  let cpp = document.getElementById('cpp');
  let Hardware = document.getElementById('Hardware');
  let cv = document.getElementById('CV');
  let firstcomponent=document.getElementById('firstComponent');
  let fifthcomponent=document.getElementById('fifthComponent');

const webarr: { caption: string; img: string; link: string }[] = [
  {
    caption: "Portfolio",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
    link: "https://bard.google.com/",
  },
  {
    caption: "Portfolio",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
    link: "https://bard.google.com/",
  },
];

const cpparr: { caption: string; img: string; link: string }[] = [
  {
    caption: "Paint game",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
    link: "https://bard.google.com/",
  },
  {
    caption: "Paint game",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
    link: "https://bard.google.com/",
  },
];

const hardarr: { caption: string; img: string; link: string }[] = [
  {
    caption: "AES",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
    link: "https://bard.google.com/",
  },
  {
    caption: "AES",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
    link: "https://bard.google.com/",
  },
];

function displayProjects(arr) {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += `<div class="project">  <img src="${arr[i].img}"><p>${arr[i].caption}</p>\n`;
    s += ` <a href="${arr[i].link}" target="_blank"><img class="git"src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></a></div>\n`;
  }
  if(projectDiv)
  {
  projectDiv.innerHTML=s;
  }
 
}
displayProjects(webarr);
  web?.classList.add("selected");
  cpp?.classList.remove("selected");
  Hardware?.classList.remove("selected");
  web?.addEventListener("click", function(){
  displayProjects(webarr);
  web?.classList.add("selected");
  cpp?.classList.remove("selected");
  Hardware?.classList.remove("selected");
});

cpp?.addEventListener("click", function(){
  displayProjects(cpparr);
  cpp?.classList.add("selected");
  web?.classList.remove("selected");
  Hardware?.classList.remove("selected");
});

Hardware?.addEventListener("click", function(){
  displayProjects(hardarr);
  Hardware?.classList.add("selected");
  web?.classList.remove("selected");
  cpp?.classList.remove("selected");
});


window.onscroll=function(){
  if(firstcomponent&&(document.body.scrollTop>(firstcomponent?.clientHeight)||document.documentElement.scrollTop > firstcomponent?.clientHeight))
  {
    document.getElementById('navbarid')?.classList.add("light");
    document.getElementById('navbarid')?.classList.remove("dark");
  }
  else{
    document.getElementById('navbarid')?.classList.add("dark");
    document.getElementById('navbarid')?.classList.remove("light");
  }
}


});
