$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#Menu',
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: ['#fc9867', '#A9DC76', '#AB9DF2', '#2D2A2E'],
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