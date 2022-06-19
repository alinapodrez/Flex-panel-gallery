const images = document.querySelectorAll('.img');
/*
//1

function toggleOpen() {
this.classList.toggle('open');
}

function toggleActive(e) {
if (e.propertyName.includes('flex')) {
 this.classList.toggle('open-active');
}
}

images.forEach(images => images.addEventListener('click', toggleOpen));
images.forEach(images => images.addEventListener('transitionend', toggleActive)); 

//2

images.forEach(image => image.onclick = () => {
  image.classList.toggle('open');
  image.classList.toggle('open-active');
});
*/

//3

images.forEach(image => image.addEventListener("click", () => {
  image.classList.toggle('open');
  image.classList.toggle('open-active');
}));