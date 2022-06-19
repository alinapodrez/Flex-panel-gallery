const images = document.querySelectorAll('.img');

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

   /* images.onclick = () =>{
      images.classList.toggle('open');
      images.classList.toggle('open-active');
    } */