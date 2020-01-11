/*------------------------section 3a animations --------------------------*/

var Ntl = new TimelineMax({repeat:0, repeatDelay:1});
function nMineralizeShow() {

	
	//Ntl.add( TweenMax.to("#root-water", .5, {alpha:.45,ease:Power2.easeIn} ));
	Ntl.add( TweenMax.to("#root", .5, {alpha:.25,ease:Power2.easeIn} ));
	//orgNtl.add( TweenMax.to("#sand-silt-clay", 0, {alpha:0,ease:Power2.easeIn} ));
	Ntl.add( TweenMax.to("#n-mineralize", .15, {delay:1,display:"block",transformOrigin:"right center", scale:3,ease:Power2.easeIn} ));	 
	Ntl.play();
}
function nMineralizeHide() {	
	 ionMovementReverse();
	 Ntl.reverse();
}


var iontl = new TimelineMax({repeat:0, repeatDelay:1});
function ionMovement() {
	iontl.add( TweenMax.to("#n-ion", .5, {display:"block",transformOrigin:"center center",bezier:{curviness:1.25, values:[{x:0, y:0}, {x:.1, y:-1}, {x:0, y:-5},{x:.1, y:-6.5}], autoRotate:false}, ease:Power1.easeInOut} ));
	iontl.play();
}

function ionMovementReverse() {
	//$( "#n-ion").hide();
	iontl.reverse();
		
}


var cectl = new TimelineMax({repeat:0, repeatDelay:1});
function cecShow() {
	if (cectl.getChildren().length == 0) {
		cectl.add( TweenMax.to("#cation1", .1, {display:"block",ease:Power2.easeIn} ));	
		cectl.add( TweenMax.to("#cation2", .1, {display:"block",ease:Power2.easeIn} ));
		cectl.add( TweenMax.to("#cation3", .1, {display:"block",ease:Power2.easeIn} ));
		cectl.add( TweenMax.to("#cation4", .1, {display:"block",ease:Power2.easeIn} ));
		cectl.add( TweenMax.to("#cation5", .1, {display:"block",ease:Power2.easeIn} ));
	}
	cectl.play();
}
function cecHide() {		
	if (! cectl.reversed())
		cectl.reverse();	 
}

var orgNtl = new TimelineMax({repeat:0, repeatDelay:1});
function bioShow() {
	if (orgNtl.getChildren().length == 0) {
		orgNtl.add( TweenMax.to("#sand-silt-clay", 0, {alpha:.25,ease:Power2.easeIn} ));
		orgNtl.add( TweenMax.to("#silt", 0, {alpha:0,ease:Power2.easeIn} ));
		orgNtl.add( TweenMax.to("#bio-value", .15, {delay:.5,display:"block",ease:Power2.easeIn} ));
		orgNtl.add( TweenMax.to("#og-n", .1, {delay:.5,display:"block",scale:1.5,ease:Power2.easeIn} ));
		orgNtl.add( TweenMax.to("#og-c", .1, {delay:.5,display:"block",scale:1.5,ease:Power2.easeIn} ));
	}
	orgNtl.play();
}
function bioHide() {	
	if (! orgNtl.reversed())
	 	orgNtl.reverse();
}

var phystl = new TimelineMax({repeat:0, repeatDelay:1});
function physShow() {
	if (phystl.getChildren().length == 0) {
		phystl.add( TweenMax.to("#root", .5, {alpha:.25,ease:Power2.easeIn} ));
		phystl.add( TweenMax.to("#bio-value", .15, {delay:1,display:"block",ease:Power2.easeIn} ));
	}
	phystl.play();
}

function physHide() {	
	 if (! phystl.reversed())
	 	phystl.reverse();
}



var aggSt = new TimelineMax({repeat:0, yoyo:false});
function aggStabilityShow() {
	if (aggSt.getChildren().length == 0) {	
		aggSt.add( TweenMax.to("#down-force", .25, {delay:1,y:1.5,ease:Power4.easeIn} ));
		aggSt.add( TweenMax.to("#clay-som-silt", .25, {transformOrigin:"center center",scaleX: 1.2,scaleY:.8,ease:Power4.easeOut},"-=1.25"));
		aggSt.add( TweenMax.to("#down-force", .15, {delay:1.5,y:0,ease:Power4.easeOut}  ));
		aggSt.add( TweenMax.to("#clay-som-silt", .15, {scaleX:1,scaleY:1,ease:Bounce.easeOut},"-=1.65" ));
	}
	aggSt.play();
}


var swiperChem;
var swiperBio;
var swiperPhys;
$( "#g-chemical-token"  ).click(function() {       	    		    		 		
     		
	screen24="";
	screen24 = fetch_text_id($(this).attr('id'));						
	$( "#s3-replaceable-content").hide();
	$( "#" + screen24 ).show();
	cecShow();
	
	//load first chart outside of slide state changed callbacks
	if (cecChart==null) {
		//var cecCtx = $("#cec-graph").get(0).getContext("2d");
		//cecChart = new Chart(cecCtx, cecConfig);
	}
							
	swiperChem = new Swiper('.swiper-container-fe', {
		pagination: '.swiper-pagination-fe',
		paginationClickable: true,
		// Navigation arrows
		nextButton: '.swiper-button-next-fe',
		prevButton: '.swiper-button-prev-fe',
	    initialSlide:0,
	    onSlideChangeEnd: function (swiper) {	
	         if (swiper.activeIndex == 0) {              
	          	cecChart.update();
	            cecShow();
	            nMineralizeHide();	          		            
	         }
	         
	         if (swiper.activeIndex == 1) {              
	            cecHide();
	            if (nValueChart==null) {
	            	//var nValueCtx = $("#soil-n-value-graph").get(0).getContext("2d");
					//nValueChart = new Chart(nValueCtx, SoilNSupplyConfig);
	            }
	            nValueChart.update();
	            nMineralizeShow();	          		            
	         }
	         
	         if (swiper.activeIndex == 2) {              
	            if (nueChart==null) {
	            	var nueCtx = $("#nue-graph").get(0).getContext("2d");
					nueChart = new Chart(nueCtx, nueConfig);
	            }
	            nueChart.update();
	            cecHide();
	            nMineralizeShow();   	    	             
	         }
	         
	         if (swiper.activeIndex == 3) {              
	             cecHide();
	             nMineralizeShow();   	    	             
	         }
	       
	    }
	});
});

$( "#chemical-close").click(function() {  		 
	$("#" + screen24).hide();
	$( "#s3-replaceable-content").show();
	cecHide();
	nMineralizeHide();
	swiperChem.destroy(true,true);
		   		
});		

$( "#g-biological-token"  ).click(function() {   
			
	screen24="";
	screen24 = fetch_text_id($(this).attr('id'));						
	$( "#s3-replaceable-content").hide();
	bioShow();	
	$( "#" + screen24 ).show();		
	
	/*Mineral - organic release curves*/
	//var minOrgReleaseCtx = $("#minorgrelease-graph").get(0).getContext("2d");
	//minOrgReleaseChart = new Chart(minOrgReleaseCtx, minOrgReleaseData 	});
					
	swiperBio = new Swiper('.swiper-container-ut', {
	    pagination: '.swiper-pagination-ut',
	    paginationClickable: true,
	    // Navigation arrows
		nextButton: '.swiper-button-next-ut',
		prevButton: '.swiper-button-prev-ut',
	    initialSlide:0,
	     onSlideChangeEnd: function (swiper) {	
	         if (swiper.activeIndex == 0) {              
	             minOrgReleaseChart.update();       		            
	         }
	         
	         if (swiper.activeIndex == 1) {              
	           	if (cNChart==null) {
	           		//var cNCtx = $("#cn-graph").get(0).getContext("2d");
					//cNChart = new Chart(cNCtx, CNRatioConfig);  
	           	}         		            
	         }	      
	       
	    }
   	});	
							
});	


$( "#biological-close").click(function() {  
	$("#" + screen24).hide();
	$( "#s3-replaceable-content").show();
	bioHide();
	swiperBio.destroy(true,true);
});


$( "#g-physical-token"  ).click(function() {     
				
	screen24="";
	screen24 = fetch_text_id($(this).attr('id'));						
	$( "#s3-replaceable-content").hide();
	physShow();
	$( "#" + screen24 ).show();	
	
	//var wHctx = $("#waterHolding-graph").get(0).getContext("2d");
	//wHchart = new Chart(wHctx, waterAirHoldingConfig);	
       			   						     
	/*fertilizer efficiency swiper*/
	swiperPhys = new Swiper('.swiper-container-phy', {
		pagination: '.swiper-pagination-phy',
		paginationClickable: true,
		// Navigation arrows
		nextButton: '.swiper-button-next-phy',
		prevButton: '.swiper-button-prev-phy',
	    initialSlide:0,
	    onSlideChangeEnd: function (swiper) {		       	         
	         if (swiper.activeIndex == 0) {              
	                wHchart.update();
	                if ( $( "#down-force").css('display') != "none")
	                	$( "#down-force").hide();	             
	         }	         
	         if (swiper.activeIndex == 1) {              
	                if (wHIchart == null) {
	                	//var wHIctx = $("#waterHoldingIncrease-graph").get(0).getContext("2d");
						//wHIchart = new Chart(wHIctx, waterHoldingIncreaseConfig);
	                }
	                if ( $( "#down-force").css('display') != "none")
	                	$( "#down-force").hide();	             
	         }	         
	         if (swiper.activeIndex == 2) {              
	              	$( "#down-force").show();
	              	aggStabilityShow();
	              	if (WSAIchart ==null) {
	              		//var WSAIctx = $("#WSAIncrease-graph").get(0).getContext("2d");
						//WSAIchart = new Chart(WSAIctx, WSAIncreaseConfig);
	              	}    	             
	         }	         
	         else {
	         	 if ( $( "#down-force").css('display') != "none")
	                	$( "#down-force").hide();	
	         }	 	         	   	       
	    }

	});	
});	
			

$( "#physical-close " ).click(function() { 
	$("#" + screen24).hide();
	$( "#s3-replaceable-content").show();
	physHide();
	if ( $( "#down-force").css('display') != "none")
		$( "#down-force").hide();	
	swiperPhys.destroy(true,true);

});				

/*------------------------section 3a animations --------------------------*/

