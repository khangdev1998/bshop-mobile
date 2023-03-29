$(document).ready(function () {
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 55,
    animation: "effectOverlay 0.24s ease-in-out",
  };

  // Icon Bars and Close
  $("#icon-close").hide();
  $("#bars").click(function () {
    $("#icon-bars").hide();
    $("#icon-close").show();
    $("#menuCategory").addClass("active");
    $("body").prepend('<div id="overlay"></div>');
    $("#overlay").css(overlayStyle);
    $("#overlay").click(function () {
      $("#overlay").detach();
      $("#menuCategory").removeClass("active");
      $("#icon-close").hide();
      $("#icon-bars").show();
    });
  });

  // Category Close
  $("#category-close").click(function () {
    $("#menuCategory").removeClass("active");
    $("#icon-close").hide();
    $("#icon-bars").show();
    $("#overlay").detach();
  });

  // Button Cart
  $("#button-cart").click(function (e) {
    e.preventDefault();
    $("#cart").toggleClass("active");
    $("body").prepend('<div id="overlay"></div>');
    $("#overlay").css(overlayStyle);
    $("#overlay").click(function () {
      $("#overlay").detach();
      $("#cart").removeClass("active");
    });
  });

  // Icon Close Cart
  $("#close-cart").click(function () {
    $("#cart").removeClass("active");
    $("#overlay").detach();
  });

  // Dropdown Category
  $("#dropdown-button-1").click(function () {
    $("#dropdown-content-1").toggleClass("show");

    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up1").toggleClass("rotate");
  });

  $("#dropdown-button-2").click(function () {
    $("#dropdown-content-2").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up2").toggleClass("rotate");
  });

  $("#dropdown-button-3").click(function () {
    $("#dropdown-content-3").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up3").toggleClass("rotate");
  });

  $("#dropdown-button-4").click(function () {
    $("#dropdown-content-4").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up4").toggleClass("rotate");
  });

  $("#dropdown-button-5").click(function () {
    $("#dropdown-content-5").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-6").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up6").removeClass("rotate");

    $("#icon-up5").toggleClass("rotate");
  });

  $("#dropdown-button-6").click(function () {
    $("#dropdown-content-6").toggleClass("show");

    $("#dropdown-content-1").removeClass("show");
    $("#dropdown-content-2").removeClass("show");
    $("#dropdown-content-3").removeClass("show");
    $("#dropdown-content-4").removeClass("show");
    $("#dropdown-content-5").removeClass("show");
    $("#icon-up1").removeClass("rotate");
    $("#icon-up2").removeClass("rotate");
    $("#icon-up3").removeClass("rotate");
    $("#icon-up4").removeClass("rotate");
    $("#icon-up5").removeClass("rotate");

    $("#icon-up6").toggleClass("rotate");
  });
});
