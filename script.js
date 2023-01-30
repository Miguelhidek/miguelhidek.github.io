//Scroll Rolling
function scrollSection(secid){
	let scrollObject = document.getElementById(secid).getBoundingClientRect();
	let scrollPosition = scrollObject.y - 100;
	window.scrollBy({
		top: scrollPosition,
		let: scrollObject.x,
		behavior: 'smooth'
	});
}

console.log('Entrou aqui');