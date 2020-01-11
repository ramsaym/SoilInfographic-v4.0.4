			
$(document).ready(function () {
					  	
	//initialize swiper when document ready  
	//var mySwiper = new Swiper ('.swiper-container', {
	//	pagination: '.swiper-pagination',
  	//	slidesPerView: 3,
  	//	paginationClickable: true,
  	//	spaceBetween: 0
	//})
		

});	
	
Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: true,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: 5,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: 20,
    // Number - The scale starting value
    scaleStartValue: 0,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 14,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,
    
    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %>",
    

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){}
}


var data = {
    labels: ["0 Kg/ha", "40 Kg/ha", "80 Kg/ha", "160 Kg/ha", "200 Kg/ha"],
    datasets: [
        {
            label: "Nitrogen Use Efficiency",
            fillColor: "#666666",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [99, 79, 72, 53, 47]
        }
    ]
};

var data2 = {
    labels: ["0 Kg/ha", "40 Kg/ha", "80 Kg/ha", "160 Kg/ha", "200 Kg/ha"],
    datasets: [
        {
            label: "Nitrogen Use Efficiency",
            fillColor: "#666666",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [99, 79, 72, 53, 47]
        }
    ]
};



window.onload = function(){
	// Get context with jQuery - using jQuery's .get() method.
	var ctx = $("#nutrient-use-efficiency").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var myLineChart = new Chart(ctx).Line(data,options);
	var options = Chart.defaults.global;
	 var ctx2 = $("#manure-retention").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var myLineChart2 = new Chart(ctx2).Line(data2,options2);
	var options2 = Chart.defaults.global;
	
	
}







		
		$( "#g-water" ).click(function() {       	    		    		
     		TweenMax.to("#g-nhc-content", .3, {display:"block",alpha:1,ease:Power2.easeIn});
     		
});	
$( "#g-nhc-content" ).click(function() {       	    		    		
     		TweenMax.to("#g-nhc-content", .3, {display:"none",alpha:0,ease:Power2.easeIn});
     		
});	



$( "#g-added-nutrients" ).click(function() {       	    		    		
     		TweenMax.to("#screen-1", .3, {alpha:.5,display:"none",ease:Power2.easeIn});
     		TweenMax.to("#screen-2", .3, {alpha:1,display:"block",ease:Power2.easeIn});
     		TweenMax.to("#g-close", .3, {alpha:1,display:"block",ease:Power2.easeIn});
     		TweenMax.to("#screen-2-text-1", .3, {alpha:1,display:"block",ease:Power2.easeIn});
     		
});	
$( "#g-close" ).click(function() {  
	TweenMax.to("#screen-2", .3, {alpha:.5,display:"none",ease:Power2.easeIn});     	    		    		
     		TweenMax.to("#screen-1", .3, {display:"block",alpha:1,ease:Power2.easeIn});
     		
});	




		var tl = new TimelineMax(),
      //cache the bezier path coordinates as a variable to reuse for both animations
      bezier = [{x:-200,y:-100},{x:-400,y:-500}];

		
		//-------- scroll and touch interactive framing --------//
		var currentSlideState=1;
		//uncomment to use rotating g circle
 		TweenLite.set("#microbe-dial", {transformOrigin:"center center"})
Draggable.create("#microbe-dial", {type: "rotation", throwProps: false});
/*
Draggable.create("#scrollTarget", {
	type:"x",
	bounds: {minX:0, maxX:360},
	//liveSnap:[0,90,180,270,360],
	onPress:function(){
		//tl.play('blobUp')
	},
	onRelease:function(){
	   //tl.play('blobDown')
	 },
	onDrag:dragUpdate
	});	
*/
		function dragUpdate() {
 	console.log(this.x+ " drag update call " + currentSlideState);
 	//keep this light because it's called every pixel
 	var sliderPos = this.x;
 	if (sliderPos>=90 && sliderPos<180) {
 		var newSlideState=2;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			frame(2);
 		}
 	}
 	else if (sliderPos >=180 && sliderPos <270) {
 		var newSlideState=3;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			frame(3);
 		}
 	}
 	else if (sliderPos >=270 && sliderPos <360) {
 		var newSlideState=4;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			frame(4);
 		}
 	}
 	else {
 		var newSlideState=1;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			frame(1);
 		}		
			}
		}
	
function frame(n) {
	//TweenMax.to("#g-plant", .8, {scale:1,ease:Power2.easeIn});
	switch(n) {
	    case 2: 
	        //TweenMax.set("#g-plant", {transformOrigin:"50% 68%"});
     		       	//TweenMax.to("#g-plant", .8, {scale:2,ease:Power2.easeIn});
	        //nutrientHistogram();
	        //TweenMax.to("#nutrients", .2, {display:"block",alpha:1,delay:1, onComplete:animateBezier, ease:Elastic.easeOut.config(0.4, 0.1)});
	        //animateBezier();
	        TweenMax.to("#svg-text-2", .2, {display:"block",alpha:1,ease:Power2.easeIn});
	        TweenMax.allTo(["#svg-text-1","#svg-text-3","#svg-text-4"], .2, {display:"none",alpha:0,ease:Power2.easeIn});
	        break;
	    case 3:
	        //TweenMax.to("#grass", .2, {rotation:90,transformOrigin:"50% 100%", ease:Elastic.easeOut.config(0.4, 0.1)});
	        TweenMax.to("#svg-text-3", .2, {display:"block",alpha:1,ease:Power2.easeIn});
	        TweenMax.allTo(["#svg-text-2","#svg-text-1","#svg-text-4"], .2, {display:"none",alpha:0,ease:Power2.easeIn});
	        break;
	    case 4:
	  		//TweenMax.to("#grass", .2, {rotation:180,transformOrigin:"50% 100%", ease:Elastic.easeOut.config(0.4, 0.1)});
	  		//TweenMax.to("#bacteria", .2, {alpha:.8,transformOrigin:"50% 100%", ease:Elastic.easeOut.config(0.4, 0.1)});
	        TweenMax.to("#svg-text-4", .2, {display:"block",alpha:1,ease:Power2.easeIn});
	        TweenMax.allTo(["#svg-text-2","#svg-text-3","#svg-text-1"], .2, {display:"none",alpha:0,ease:Power2.easeIn});
	        break;
	    default:
	       // TweenMax.to("#grass", .2, {rotation:0,transformOrigin:"50% 100%", ease:Elastic.easeOut.config(0.4, 0.1)});
	        TweenMax.to("#svg-text-1", .2, {display:"block",alpha:1,ease:Power2.easeIn});
	        TweenMax.allTo(["#svg-text-2","#svg-text-3","#svg-text-4"], .2, {display:"none",alpha:0,ease:Power2.easeIn});
	}
}

function nutrientHistogram() {
	 //bottom is less negative or greater number
	        TweenMax.set("#nitrate", {x:200});
	        TweenMax.set("#nitrate2", {x:200,y:-40,transformOrigin:"50% 50%"});
	        TweenMax.set("#nitrate3", {x:200,y:-80});
	        TweenMax.set("#nitrate4", {x:200,y:-120});
	        TweenMax.set("#nitrate5", {x:200,y:-160});
	        TweenMax.set("#nitrate6", {x:200,y:-200});
	        TweenMax.set("#potassium", {x:160});
	        TweenMax.set("#potassium2", {x:160,y:-40});
	        TweenMax.set("#potassium3", {x:160,y:-80});
	        TweenMax.set("#potassium4", {x:160,y:-120});
	        TweenMax.set("#calcium", {x:120});
	        TweenMax.set("#calcium2", {x:120,y:-40});
	        TweenMax.set("#phosphorus", {x:80});
	        TweenMax.set("#magnesium", {x:40});	        
}

function animateBezier() {
    //get the value from the dropdown
    tl.to($('#nitrate2'), 1.75, {
      //rotation: 360,
      bezier: {
        type: 'thru',
        values: bezier,
        curviness: 2
      },
      ease: Power1.easeInOut
    });
  }
;

  			
		

    
