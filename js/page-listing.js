$(document).ready(function () {
  // Open Sidebar
  $("#open-sidebar").click(function () {
    $("#sidebar").toggleClass("show");
    $("body").prepend('<div id="overlay"></div>');
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
    });
  });

  // Close Sidebar
  $("#close-sidebar").click(function () {
    $("#sidebar").removeClass("show");
    $("#overlay").detach();
  });
});
