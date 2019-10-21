var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var offer1 = document.getElementById('offer1');
	var offer2 = document.getElementById('offer2');
	var app = document.getElementById('app');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		tl1.from(offer1, .5, {x:"-=200", ease: Expo.easeOut}, "+=.5")
		.from(offer2, .5, {x:"-=200", ease: Expo.easeOut}, "+=.5")
		.from(app, .5, {x:"-=200", ease: Expo.easeOut}, "+=.5");
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
