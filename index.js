// ===== NAVBAR ===== //
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 100) {
      $(".nav-menu").addClass("costum-navbar");
      $(".menu-item").addClass("costum-menu-item");
      $(".navbar-brand").addClass("costum-menu-item");
      $(".logo-right-sub-content").addClass("costum-menu-item");
      $(".pos").removeClass("hide");
      $(".down").addClass("logo-hide");
      $(".pos").removeClass("logo-hide");
    } else {
      $(".nav-menu").removeClass("costum-navbar");
      $(".menu-item").removeClass("costum-menu-item");
      $(".navbar-brand").removeClass("costum-menu-item");
      $(".logo-right-sub-content").removeClass("costum-menu-item");
      $(".down").removeClass("logo-hide");
      $(".pos").addClass("hide");
      $(".pos").addClass("logo-hide");

    }
  });
  
  // ===== HAMBURGER BUTTON ===== //
  // $(document).ready(function () {
  //   $(".nav-button").click(function () {
  //     $(".nav-button").toggleClass("change");
  //   });
  // });

  $(document).ready(function () {
    $(".nav-button").click(function () {
      $(".navbar-nav").slideToggle(); // Toggle the visibility of the nav items
    });
  });
  

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('show');
});



function sendEmail(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var subject = document.getElementById('subject').value;
  
  var mailtoLink = 'mailto:kesavan8384@gmail.com' +
                   '?subject=' + encodeURIComponent('Contact Form Submission') +
                   '&body=' + encodeURIComponent('Name: ' + name + '\n' +
                                                 'Email: ' + email + '\n' + 'Subject: ' + subject + '\n'+
                                                 'Message: ' + message);
  
  window.location.href = mailtoLink;
}





// gallery page 
const images = [
  {
      src: 'https://iili.io/d36prss.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'                                                                                                                                                                                                               
  },
  {
      src: 'https://iili.io/d36pUzX.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36p6qG.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pP1f.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pQ72.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pgXn.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pLdl.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36p8bt.jpg"',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36ptm7.jpg"',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pig4.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pmXe.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36y9qb.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pbI9.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d36pZeS.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  {
      src: 'https://iili.io/d3PBjB2.jpg',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
  // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById('modal-img').src = images[index].src;
  document.getElementById('modal-text').innerText = images[index].text;
  document.getElementById('modal').style.display = 'block';
  document.getElementById('header').style.display = 'none';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('header').style.display = 'block';
}

function prevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateModal();
}

function nextImage() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateModal();
}

function updateModal() {
  document.getElementById('modal-img').src = images[currentIndex].src;
  document.getElementById('modal-text').innerText = images[currentIndex].text;
}