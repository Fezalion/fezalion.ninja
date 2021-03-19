$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    anchors: ['section1', 'section2', 'section3', 'section4'],
        menu: '#Menu',
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: ['#fc9867', '#A9DC76', '#AB9DF2', '#FFDFD3'],
        scrollingSpeed: 1000,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,        
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff'
        },

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
    });    
});