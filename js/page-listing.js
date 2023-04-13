$(document).ready(function () {
  // Open Sidebar
  $("#open-sidebar").click(function () {
    $("#sidebar").toggleClass("show");
    $("body").prepend('<div id="overlay"></div>');
    $("body").css("overflowY", "hidden");
    $("#overlay").css({
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 55,
      animation: "effectOverlay 0.24s ease-in-out",
    });
    $("#overlay").click(function () {
      $("#overlay").detach();
      $("#sidebar").removeClass("show");
      $("body").removeAttr("style");
    });
  });

  // Close Sidebar
  $("#close-sidebar").click(function () {
    $("#sidebar").removeClass("show");
    $("#overlay").detach();
    $("body").removeAttr("style");
  });
});

// Dropdown Category
$("#dropdown-button-1").click(function () {
  $("#dropdown-content-1").toggle();
  $(this).find(".dropdown-icon").toggleClass("rotate");
});

$("#dropdown-button-2").click(function () {
  $("#dropdown-content-2").toggle();
  $(this).find(".dropdown-icon").toggleClass("rotate");
});

$("#dropdown-button-3").click(function () {
  $("#dropdown-content-3").toggle();
  $(this).find(".dropdown-icon").toggleClass("rotate");
});

$("#dropdown-button-4").click(function () {
  $("#dropdown-content-4").toggle();
  $(this).find(".dropdown-icon").toggleClass("rotate");
});

$("#dropdown-button-5").click(function () {
  $("#dropdown-content-5").toggle();
  $(this).find(".dropdown-icon").toggleClass("rotate");
});
