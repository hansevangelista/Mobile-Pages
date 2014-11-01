
function MPages (container, options) {

	"use strict"

	var pages = container.children
	var pos = options.initPage || 0
	var speed = options.timeSlide || 500

	function setup () {

		document.body.style.margin = "0px"

		container.classList.add("mcontainer")

		for (var i = 0; i < pages.length; i++)
			pages[i].classList.add("mpage")

		setHeights()

		window.addEventListener("resize", setHeights)

		goTo(pos)

		setTimeout(function () { animation() }, 500)

		slides()
	}

	function setHeights () {
		
		container.style.height = innerHeight + "px"

		for (var i = 0; i < pages.length; i++)
			pages[i].style.height = innerHeight + "px"
	}

	function goTo (pos) {

		for (var i = 0; i < pages.length; i++) {
			
			var style = pages[i].style

			style.webkitTransform = 'translate(' + pos * -100 + '%,0)' + 'translateZ(0)'
			style.msTransform =
			style.MozTransform =
			style.OTransform = 'translateX(' + pos * -100 + '%)'
		}
	}

	function animation () {

		for (var i = 0; i < pages.length; i++) {
			
			var style = pages[i].style

			style.webkitTransitionProperty =
			style.MozTransitionProperty =
			style.msTransitionProperty =
			style.OTransitionProperty =
			style.transitionProperty = 'transform'

			style.webkitTransitionDuration =
			style.MozTransitionDuration =
			style.msTransitionDuration =
			style.OTransitionDuration =
			style.transitionDuration = speed + 'ms'
		}
	}

	function slides () {
		
		container.addEventListener('touchstart', touchStart)
		container.addEventListener('touchmove', touchMove)
		container.addEventListener('touchend', evalSlide)

		container.addEventListener('mousedown', mousedown)
		container.addEventListener('mousemove', mousemove)
		container.addEventListener('mouseup', evalSlide)
	}

	var start = {}
	var delta = {}

	function touchStart (e) {

		start = {
			x: e.touches[0].pageX,
			y: e.touches[0].pageY,
			time : new Date
		}

		delta = {}
	}

	function touchMove (e) {

		delta = {
			x: e.touches[0].pageX - start.x,
			y: e.touches[0].pageY - start.y
		}
	}

	function mousedown (e) {

		start = {
			x: e.pageX,
			y: e.pageY,
			time : new Date
		}

		delta = {}
	}

	function mousemove (e) {

		delta = {
			x: e.pageX - start.x,
			y: e.pageY - start.y
		}
	}

	function evalSlide (e) {
		
		var duration = new Date - start.time,
			isValid = false

		if(e.type == 'touchend') isValid = duration < 250 && Math.abs(delta.x) > 50
		if(e.type == 'mouseup') isValid = duration < 250 && Math.abs(delta.x) > 20
		
		if(isValid){

			var direction = (delta.x < 0)? 1 : -1

			var newPos = pos + direction

			if(newPos >= 0 && newPos < pages.length) {

				goTo(newPos)
				pos = newPos
			}
		}
	}

	setup()
}