$(function () {
  $("#header").load("shared/header.html");
  $("#footer").load("shared/footer.html");

  $(document).on("click", ".menu-toggle", function () {
    $(".navigation").toggleClass("active");
  });

  $(document).on("click", ".menuCloseBtn", function () {
    $(".navigation").toggleClass("active");
  });

  $(document).on("click", ".popupLink", function () {
	$(".popup-overlay").fadeIn(200);
  });

  $(document).on("click", ".popup-overlay, .popupCloseBtn", function (event) {
	if ($(event.target).hasClass("popup-overlay") || $(event.target).hasClass("popupCloseBtn")) {
		$(".popup-overlay").fadeOut(200);
	}
  });

  $(".featuredSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    focusOnChange: true,
  });
});
