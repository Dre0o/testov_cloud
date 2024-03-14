// shadow-scroll
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".header_shadow").addClass("scroll");
  } else {
    $(".header_shadow").removeClass("scroll");
  }
});

// accordion
$(document).ready(function () {
  $(".accord_title").click(function () {
    $(this).next(".accordion_content").toggleClass("accordion_on");
  });
});
