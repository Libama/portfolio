//texte magique

document.addEventListener('DOMContentLoaded', (event) => {
    const magicText = document.querySelector('.magic-text');

    magicText.addEventListener('animationend', () => {
        magicText.classList.add('finished');
    });
});



// bouton qui méne en haut de la page 
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };


  document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text');
    textElement.classList.add('animate');
});


//animation scrollable section

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop) {
            section.classList.add('fade-in');
        }
    });
});

  



  






  