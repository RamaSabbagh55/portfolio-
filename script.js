document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Document loaded, initializing particles.js...");
    try {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 170,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#fff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    } catch (error) {
      console.error("Error initializing particles.js:", error);
    }
  });

  /*toggel icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
  // screen sizes  <<< this code not important >>>
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  window.onscroll = () => {
    sections.forEach(sec =>{
      let top= window.scrollY;
      let offset = sec.offsetTop -150;
      let hight = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + hight){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*= '+ id +']').classList.add('active');
        })
      }



    })
  }

let headeer =document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove toggrl icon and navbar when click navbar link 

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');