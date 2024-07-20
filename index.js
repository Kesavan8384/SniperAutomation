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