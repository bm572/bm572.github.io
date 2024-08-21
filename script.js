// script.js-2


document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const title = document.querySelector('.title');
  const sections = document.querySelectorAll('.section');

  let currentSectionColor = '#000'; // Default color

  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSectionColor = getComputedStyle(section).backgroundColor;
      }
  });

  title.style.color = currentSectionColor;
});



// typewriter affect at the top of page and bottom page
// Typewriter function for the first p tag
function typeWriter1() {
var i = 0;
var j = 0;
var txtArray = ['a Creative', 'a Planner', 'a Project Manager', 'at Progressive Insurance!'];
var speed = 50;

function type() {
  if (i < txtArray[j].length) {
    document.getElementById("demo1").innerHTML += txtArray[j].charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    i = 0;
    j++;
    if (j < txtArray.length) {
      setTimeout(function() {
        document.getElementById("demo1").innerHTML = ''; // Clear the text
        type();
      }, 1000); // Wait 1 second before typing the next phrase
    } else {
      j = 0; // Reset to repeat the cycle
      setTimeout(function() {
        document.getElementById("demo1").innerHTML = ''; // Clear the text
        type();
      }, 1000);
    }
  }
}

type();
}


//bottom page typing
// Typewriter function for the second p tag
function typeWriter2() {
var i = 0;
var j = 0;
var txtArray = [' drawing', ' playing video games', 'hiking', 'fishing', 'crocheting', 'reading', 'learning another language', 'and exercising!'];
var speed = 50;

function type() {
  if (i < txtArray[j].length) {
    document.getElementById("demo2").innerHTML += txtArray[j].charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    i = 0;
    j++;
    if (j < txtArray.length) {
      setTimeout(function() {
        document.getElementById("demo2").innerHTML = ''; // Clear the text
        type();
      }, 1000); // Wait 1 second before typing the next phrase
    } else {
      j = 0; // Reset to repeat the cycle
      setTimeout(function() {
        document.getElementById("demo2").innerHTML = ''; // Clear the text
        type();
      }, 1000);
    }
  }
}

type();
}

// Start the typewriter effects when the page loads
document.addEventListener('DOMContentLoaded', function() {
typeWriter1();
typeWriter2();
});




// work-section info section 

document.addEventListener('DOMContentLoaded', () => {
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const items = document.querySelectorAll('.carousel-item');
let index = 0;
const itemWidth = items[0].getBoundingClientRect().width;

function updateCarousel() {
    track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
    } else {
        index = 0; // Loop back to start
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = items.length - 1; // Loop to end
    }
    updateCarousel();
});

document.querySelector('.next-button').addEventListener('click', () => {
  const track = document.querySelector('.carousel-track');
  track.scrollBy({ left: 250, behavior: 'smooth' });
});

document.querySelector('.prev-button').addEventListener('click', () => {
  const track = document.querySelector('.carousel-track');
  track.scrollBy({ left: -250, behavior: 'smooth' });
});


});

