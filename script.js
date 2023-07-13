// Initial Data

let menuMobile = false;

let projectList = [
	{
		image:"icon-image.png",
		name:"App ParkenPay",
		type:"Mobile", 
		tecnology:[
			"React Native",
			"Firebase"
		],
		link:null
	},
	{
		image:"parkenpay.png",
		name:"ParkenPay",
		type:"Landing Page", 
		tecnology:[
			"HTML e CSS",
			"Javascript",
			"Firebase"
		],
		link:"http://parkenpay.com.br/"
	},
	{
		image:"project-1.png",
		name:"Carlos Osterne Representações",
		type:"Landing Page", 
		tecnology:[
			"HTML e CSS",
			"Javascript",
		],
		link:"https://carlososterne.com.br"
	},
	{
		image:"project-2.png",
		name:"Brew Barw - Bar e Restaurante",
		type:"Landing Page", 
		tecnology:[
			"HTML e CSS",
			"Javascript",
		],
		link:"https://miguelhidek.github.io/BrewBarwAcademic/"
	},
	{
		image:"phoneTopProject.png",
		name:"AppleTop Store",
		type:"E-commerce", 
		tecnology:[
			"HTML e CSS",
			"Javascript",
		],
		link:"https://miguelhidek.github.io/phoneTopAcademic/"
	},
];

let skillList = [
	{
		skillName:"HTML e CSS",
		skillImage:"html5-e-css3.jpg",
		isLearned:true
	},
	{
		skillName:"Javascript",
		skillImage:"javascript.jpg",
		isLearned:true
	},
	{
		skillName:"PHP",
		skillImage:"php.jpg",
		isLearned:false
	},
	{
		skillName:"Banco de Dados",
		skillImage:"database.jpg",
		isLearned:true
	},
	{
		skillName:"React Native",
		skillImage:"react-native.jpg",
		isLearned:true
	},
	{
		skillName:"React Js",
		skillImage:"reactjs.jpg",
		isLearned:false
	},
	{
		skillName:"Laravel",
		skillImage:"laravel.jpg",
		isLearned:false
	},
	{
		skillName:"Typescript",
		skillImage:"typescript.jpg",
		isLearned:false
	},
	{
		skillName:"Sass",
		skillImage:"sass.jpg",
		isLearned:false
	},
	{
		skillName:"Git",
		skillImage:"git.jpg",
		isLearned:true
	},
	{
		skillName:"Adonis Js",
		skillImage:"adonisjs.jpg",
		isLearned:false
	},
	{
		skillName:"Angular",
		skillImage:"angular.jpg",
		isLearned:false
	},
	{
		skillName:"Bootstrap",
		skillImage:"bootstrap.jpg",
		isLearned:false
	},
	{
		skillName:"Docker",
		skillImage:"docker.jpg",
		isLearned:false
	},
	{
		skillName:"Firebase",
		skillImage:"firebase.jpg",
		isLearned:true
	},
	{
		skillName:"Flutter",
		skillImage:"flutter.jpg",
		isLearned:false
	},
	{
		skillName:"Next Js",
		skillImage:"nextjs.jpg",
		isLearned:false
	},
	{
		skillName:"Node Js",
		skillImage:"nodejs.jpg",
		isLearned:false
	},
	{
		skillName:"Tailwindcss",
		skillImage:"tailwindcss.jpg",
		isLearned:false
	},
	{
		skillName:"VueJs",
		skillImage:"vuejs.jpg",
		isLearned:false
	}
];


let sectionsYPosition = [
	{
		sectionId:"apresentation",
		animationClass:"apresentation-content-animation",
		elementChangeClass:"apresentation-content"
	},
	{
		sectionId:"projects",
		animationClass:"project-content-animation",
		elementChangeClass:"project-content"
	},
	{
		sectionId:"contact",
		animationClass:"contact-animation",
		elementChangeClass:"contact"
	},
];

//Events

window.addEventListener('scroll', (event)=>{
	setAnimation(this.scrollY);
})


//Functions


const setSkills = ()=>{
	let skillContainer = document.querySelector(".skill-container");
	skillContainer.innerHTML = "";

	let skillContentTemp = ""

	skillList.forEach((skill)=>{
		skillContentTemp += `
			<div class="skill ${skill.isLearned?"":"skill-loading"}" title="${skill.skillName}">
				<img src="./assets/media/${skill.skillImage}">
			</div>
		`;
	});

	skillContainer.innerHTML = skillContentTemp;
}


//Set Filtrers Function
const setFilters = ()=>{
	let filterListTemp = ["Todos"];
	let filterContainer = document.querySelector(".project-filter-container");

	projectList.forEach((project)=>{
		if(!filterListTemp.includes(project.type)){
			filterListTemp.push(project.type);
		}
	});

	let newFilterItens = "";

	filterListTemp.forEach((filter)=>{
		newFilterItens += `
			<div data-item="${filter}" class="project-filter" onclick="doFilter(this)">${filter}</div>`
	});

	filterContainer.innerHTML = "";
	filterContainer.innerHTML = newFilterItens;
}

const doFilter = (element = null)=>{
	clearFilterActived();

	let newProjectList = "";

	if(element && (element.getAttribute("data-item")!="Todos")){
		element.classList.add("actived");
		newProjectList = projectList.filter((project)=>project.type == element.getAttribute("data-item"));
	}else{
		newProjectList = projectList;
	}

	if(element){
		element.classList.add("actived");
	}else if(element &&(element.getAttribute("data-item")=="Todos")){
		element.classList.add("actived");
	}
	
	newProjectItens = "";

	newProjectList.forEach((project)=>{	
		let skills = "";

		project.tecnology.forEach((tecnology)=>{
			let skillImage = "";
			let skill = skillList.filter(skill => skill.skillName == tecnology);
			
			if(skill){
				skillImage = skill[0].skillImage;

				skills += `
					<div class="skill" title="${tecnology}">
						<img src="./assets/media/${skillImage}">
					</div>
				`;
			}
		});

		newProjectItens += `
			<div class="project-item">
				<div class="project-item-image">
					<img src="./assets/media/${project.image}"/>
				</div>
				<div class="project-item-description-container">
					<div class="top">
						<h3 class="project-item-name">${project.name}</h3>
						<h4 class="project-item-type">${project.type}</h4>
					</div>
					<div class="bottom">
						<div class="project-item-tecnology-container">
							${skills}
						</div>
						${project.link?`<a href="${project.link}" target="_blank"> Visitar</a>`:''}
					</div>
				</div>
			</div>
		`;
	});

	document.querySelector(".project-content").innerHTML = "";
	document.querySelector(".project-content").innerHTML = newProjectItens;
}

const clearFilterActived = ()=>{ 
	let filterItens = document.querySelectorAll(".project-filter-container .project-filter");
	filterItens.forEach((item)=>{
		item.classList.remove("actived");
	});
}

//Set Animation Load Page
const setAnimation = (yPosition) => {
	sectionsYPosition.forEach((section)=>{
		let sectionElement = document.querySelector(`#${section.sectionId}`);
		let sectionYPosition = sectionElement.getBoundingClientRect().top;

		if((yPosition - (sectionYPosition)) >= 0){
			if(sectionElement.getAttribute("animation")=="false"){
				document.querySelector(`.${section.elementChangeClass}`).classList.add(section.animationClass);
				sectionElement.setAttribute("animation", "true");

				// console.log(document.querySelector(`.${section.elementChangeClass}`));
			}
		}
	});
}

//Menu Mobile Toggle
const menuMobileToggle = () => {
	let menuElement = document.querySelector("nav");
	if(!menuMobile){
		menuElement.style.padding = "5px";
		menuElement.style.width = "100%";
	}else{
		menuElement.style.padding = "0px";
		menuElement.style.width = "0%";
	}
	menuMobile = menuMobile?!menuMobile:true;
}

//Scroll Rolling Functions
const scrollSection = (secid) => {
	let scrollObject = document.getElementById(secid).getBoundingClientRect();
	let scrollPosition = scrollObject.y - 100;
	window.scrollBy({
		top: scrollPosition,
		let: scrollObject.x,
		behavior: 'smooth'
	});

	window.innerWidth<=450?menuMobileToggle():null;
}

//Calls

setSkills();
setFilters();
doFilter();
setAnimation(0);

