
document.addEventListener("DOMContentLoaded", function() {

	window.mPages = new MPages(document.querySelector('.wrapper'), {
		pageClass: "page",
		timeSlide: 500,
		initPage: 1
	})
})