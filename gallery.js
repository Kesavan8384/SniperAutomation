

// ===== NAVBAR ===== //
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 100) {
      $(".nav-menu").addClass("costum-navbar");
      $(".menu-item").addClass("costum-menu-item");
      $(".navbar-brand").addClass("costum-menu-item");
      $(".logo-right-sub-content").addClass("costum-menu-item");
     
    } else {
      $(".nav-menu").removeClass("costum-navbar");
      $(".menu-item").removeClass("costum-menu-item");
      $(".navbar-brand").removeClass("costum-menu-item");
      $(".logo-right-sub-content").removeClass("costum-menu-item");
    



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


// gallery page 
const images = [
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipM3lVHvo0PbyvStlbXCWhWmt8rRUf1TZIENhvz3=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'                                                                                                                                                                                                               
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipOaWkvYGN6SL-SsUiYm04hjCVGesM-gIETVtgUv=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipP13-bKc96ZP_Gc__yutxwmry5_M3ZtxwPU2I6h=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipOdPmaMIdWYy1G22h95s_yZukJ3Z44Q056NEROe=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipNAVFCE-IuKxBlhWer0vvVQ7Y2qczW_ewSeCISH=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipOoVo4PmGCTKTnu4TcuFt8OTZfjA4NbGIJgkY6S=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipOTiGSpDrPcHSTf49x1SS5BXn0xJGYHpjRrEyRS=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
      src: 'https://lh3.googleusercontent.com/p/AF1QipPhKFimTpg2CKnb97aOcOR6aPVYICBN8_PenZlk=s1360-w1360-h1020',
      text: 'Lorem ipsum dolor sit amet elit.'
  },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipN5FGzNSrtt63hv8KUqC2L6MVdGJo83SthQH18P=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
   
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipP7tU9kA5UGoFSZAz18gx9IVTnLy1bhsJfAuVSx=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipPfzNc_XKRDjpLWsmoSHrLnSPKwcSCeoxFKR8pQ=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipMu3IYbXnxeMfpPn0xpt6bsXoT2z7L_bZ_ns9JB=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipPp_6mkaLFlR34vxoCEGLWdTEiQe0X60pka0c1T=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipNBUxkJOYOpZqMBcfLQiG9Wk1RvFyvVEgEdXE23=s1360-w1360-h1020',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        src: 'https://lh3.googleusercontent.com/p/AF1QipNix28w8P4ZSXnKFOG5UJeIdLc7yXT1I4_oFOjC=s1360-w1360-h1020',
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