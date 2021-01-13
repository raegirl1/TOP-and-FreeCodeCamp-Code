	const position = document.querySelector("#container");
function createDiv(number) {

	if (number > 0) {

	for (let i = 0; i < number; i++) {
 		for (let j = 0; j < number; j++) {
 		const div = document.createElement("div");
 		div.classList.add("box");
 		const boxNumber = 400/number;
 		div.setAttribute("style", `height: ${boxNumber}px; width: ${boxNumber}px;`);
 		position.appendChild(div);
 	}}

  	var boxes = document.querySelectorAll('.box');
  	boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = randomColor(); }); 
	});
	} else {
		alert("Enter a number which is larger than 0.");
		createDiv(8);
	}
}


function randomColor() {
	var r, g, b;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

function restart() {
	let boxes = document.querySelectorAll('.box');
	boxes.forEach(box => box.remove());
	let boxSize = document.getElementById("boxSize").value;
	createDiv(boxSize);
}

createDiv(8);


