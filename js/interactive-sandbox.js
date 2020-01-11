//-----------------------------OLD INTERACTIVE STUFF----------------------------------
		//svar tl = new TimelineMax(),
      //cache the bezier path coordinates as a variable to reuse for both animations
      //bezier = [{x:-200,y:-100},{x:-400,y:-500}];

/*------------------------timelines--------------------------*/
		
		//-------- scroll and touch interactive framing --------//
		var currentSlideState=1;
		//uncomment to use rotating g circle
 		//TweenLite.set("#microbe-dial", {transformOrigin:"center center"})
		//Draggable.create("#microbe-dial", {type: "rotation", throwProps: false});



Draggable.create("#scroll-target", {
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



function dragUpdate() {
 	console.log(this.x+ " drag update call " + currentSlideState);
 	//keep this light because it's called every pixel
 	var sliderPos = this.x;
 	if (sliderPos>=90 && sliderPos<180) {
 		var newSlideState=2;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			rzt1.play();
 		}
 	}
 	else if (sliderPos >=180 && sliderPos <270) {
 		var newSlideState=3;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			rzt2.play();
 		}
 	}
 	else if (sliderPos >=270 && sliderPos <360) {
 		var newSlideState=4;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			rzt3.play();
 		}
 	}
 	else {
 		var newSlideState=1;
 		if (currentSlideState!=newSlideState) {
 			currentSlideState = newSlideState;
 			rzt4.play();
 		}		
	}
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
