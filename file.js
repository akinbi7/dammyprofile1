let menu= document.queryselector('#menu-icon');
let navbar= document.queryselector('.navbar');

menu.onclick = () => {
	menu.classlist.toggle('bx-x');
	navbar.classlist.toggle('open')
};

const sr = ScrollReveal ({
	distance: '40px',
	duration: 2500,
	reset: true
});

sr.reveal('.logo',{delay:200, orgin: 'left'})