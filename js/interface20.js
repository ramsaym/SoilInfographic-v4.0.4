/*chart Defaults*/
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio= false;
 
/*---------------------------------------------Global variables------------------------------------------*/
//initial docstate 0=minimized menu, 1=content expanded
var docstate =1;

//*these variables store different html selectors as screens to be hidden or exposed
var screen21 ="";
var screen22 ="";
var screen23 ="";
var screen24 ="";
var screen25 ="";


//globalized chart variables for accessibility
var omFractionsSimpleChart;
var reducedTillageChart;
var peisomchart;
var somchart;
var somnchart;
var aomchart;
var npoolchart;
var cecChart;
var nValueChart;
var nueChart;
var minOrgReleaseChart;
var manuregreenchart;
var microbeChart;
var cNChart;
var carbonHfsChart;
var WSAIchart;
var wHIchart;
var tillageTrialsKNWSAChart;
var tillageTrialsKNWSAChart2;
var tillageTrialsKNWSAChart3;
var biomassPos=0;
var cnPos=0;
var tillagePos=0;
var lastSliderPos4=0;
var lastSliderPos5=0;


window.onload = function(){
	
	/*--------------------------------Main Story chart initialization - conditional, adaptive chart draws start here -----------------------------------------*/ 	
		
	//KNWSA tillage trials 2015-2015		
	//var KNWSAtillagectx3 = $("#knwsa-tillage-activec-graph").get(0).getContext("2d");
	//tillageTrialsKNWSAChart3 = new Chart(KNWSAtillagectx3 , tillageActiveCarbonKNorthConfig);
	
	var KNWSAtillagectx = $("#knwsa-tillage-graph").get(0).getContext("2d");
	tillageTrialsKNWSAChart = new Chart(KNWSAtillagectx , tillagePayYieldsKNorthConfig);							
		
	/*var KNWSAtillagectx2 = $("#knwsa-tillage-soilhealth-graph").get(0).getContext("2d");
	tillageTrialsKNWSAChart2 = new Chart(KNWSAtillagectx2 , tillageSoilHealthKNorthConfig);*/
				
	//om fractions pie chart
	var omFractionsCtx = $("#om-fractions-graph").get(0).getContext("2d");
	omFractionsSimpleChart = new Chart(omFractionsCtx,omFractionsConfig);
	
	var aomctx = document.getElementById("c-pools-graph").getContext("2d");
	aomchart = new Chart(aomctx, soilCPoolConfig);
	
	//var somctx = document.getElementById("som-pool-graph").getContext("2d");
	//aomchart = new Chart(somctx, stableSOMConfig);
	
	//var somcctx = document.getElementById("som-c-graph").getContext("2d");
	//somchart = new Chart(somcctx,soilOrgMtrConfig);	
				
	var CarbonHfsCtx = document.getElementById("carbon-hfs-graph").getContext("2d");
	carbonHfsChart = new Chart(CarbonHfsCtx,carbonHfsConfig);
	
	var nValueCtx = $("#soil-n-value-graph").get(0).getContext("2d");
	nValueChart = new Chart(nValueCtx, SoilNSupplyConfig);
	
	var wHIctx = $("#waterHoldingIncrease-graph").get(0).getContext("2d");
	wHIchart = new Chart(wHIctx, waterHoldingIncreaseConfig);
			
	var cecCtx = $("#cec-graph").get(0).getContext("2d");
	cecChart = new Chart(cecCtx, cecConfig);
	
		
	//Based on CCA study guide 15% Humus retention timeline - dovetails with minOrgRelease curve below (SVG alternative)
	var organicMatterDecompCtx = $("#om-decomp-graph").get(0).getContext("2d");
	organicMatterDecompChart = new Chart(organicMatterDecompCtx,soilOMCreationConfig);
	
	/*Mineralization data*/
	var minOrgReleaseCtx = $("#minorgrelease-graph").get(0).getContext("2d");
	minOrgReleaseChart = new Chart(minOrgReleaseCtx, minOrgReleaseData );
	
	var cNCtx = $("#cn-graph").get(0).getContext("2d");
	cNChart = new Chart(cNCtx, CNRatioConfig); 
	
	//Angers et. al Tillage Frequency
	var reducedtillagectx = $("#rotation-labile-om-graph").get(0).getContext("2d");
	reducedTillageChart = new Chart(reducedtillagectx, rotationTillageConfig);
	
	/*Islam&Weil - Management induced data*/	
	var microbeCtx = $("#active-mb-graph").get(0).getContext("2d");
	microbeChart = new Chart(microbeCtx, increasedMicrobiaBiomassConfig);
	
	//Judith N. Manure work - Quebec
	var manuregreenctx = $("#manure-graph").get(0).getContext("2d");
	manuregreenchart = new Chart(manuregreenctx, manurePmnConfig);	
	
	//Soil Health payback
	//var soilHealthPaybackctx = $("#sh-payback-graph").get(0).getContext("2d");
	//soilHealthPaybackChart = new Chart(soilHealthPaybackctx , soilHealthPaybackConfig);
	
	
	//Draggable.create("#lever1", {type:"y", edgeResistance:0.5, throwProps:true, bounds:window});


	//--------------dynamic chart config------------------------------------
	
	var buffer = 60;
	var min_X = -250 + buffer;
	var min_Y = 250-buffer;
	
	Draggable.create("#biomassLever", {
	type:"x",
	bounds: {minX:min_X, maxX:min_Y},
	edgeResistance:0.5, 
	throwProps:true, 
	
	onDrag:dragUpdate1
	});	
	
		Draggable.create("#cnLever", {
	type:"x",
	bounds: {minX:min_X, maxX:min_Y},
	edgeResistance:0.5, 
	throwProps:true, 
	
	onDrag:dragUpdate2
	});	
	
		Draggable.create("#tillageLever", {
	type:"x",
	bounds: {minX:min_X, maxX:min_Y},
	edgeResistance:0.5, 
	throwProps:true, 
	
	onDrag:dragUpdate3
	});	
	
		
}//end window.onload()


//basic function to convert slider POS into a standardized scale
function translatePos(type,sliderPos) {
		//console.log(sliderPos);
		//use 250 for buffer on ends. visible range is -190 to 190 (190/2 = 95)
		// 0 (<=-95 > -250) - 1 (<-50 > -95) - 2 (<50>-50) - 3 (<=95 > 50) - 4(>95 < 250)
		//neutral position
		if (sliderPos > -50 && sliderPos <= 50) {
			pos=0;	
		}
		else if (sliderPos > 50 && sliderPos <= 95) {
			pos=1;	
		}
		else if (sliderPos >95) {
			pos=2;	
		}	
		else if (sliderPos < -50 && sliderPos >= -95) {
			pos=-1;	
		}		
		else  {
			pos=-2;		
		}
		
		return pos;
}

function dragUpdate1() {
 	//keep this light because it's called every pixel
 	var sliderPos = this.x;
	
		var pos=0;
		pos = translatePos(0,sliderPos);	
		if (biomassPos != pos) {
			biomassPos = pos;
			updateChartData(1,pos);	
		}
			
			
}
function dragUpdate2() {
 	//keep this light because it's called every pixel
 	var sliderPos = this.x;
	var pos=0;
	pos = translatePos(0,sliderPos);
	if (cnPos != pos) {
		cnPos = pos;
		updateChartData(2,pos);
	}
	
}

function dragUpdate3() {
 	//keep this light because it's called every pixel
 	var sliderPos = this.x;
	var pos=0;
	//invert it because more is negatively correlated to OM
	pos = translatePos(0,sliderPos);	
	if (tillagePos != pos){
		tillagePos = pos;
		updateChartData(3,pos);	
	}
	
}

function updateChartData(lever, pos) {		
	console.log("slider pos:" + pos);
	var multiplerTable;
	var calcPos;
	var paramKeys = new Array(4);
	var calcPosmax = 2; //2 x 3 variables
	var calcPosMin = -2;
	//DATA transform logic	-----------	
	//address in array important -> [0-stable Humus,1-N release, 2-active OM, 3-microbial biomass  ]
	//C:N on Nitrogen release (this is a stub for an actual function for a curve as opposed to preloaded curves	
	//map range from interface to data 
	console.log(biomassPos.map(calcPosMin,calcPosmax,4,0));
	console.log(cnPos.map(calcPosMin,calcPosmax,0,4));
	console.log(tillagePos.map(calcPosMin,calcPosmax,0,4)); //invert the range
	//these will key out a curve for eash parameter
	paramKeys[0] =  Math.round((biomassPos.map(calcPosMin,calcPosmax,4,0)*.5 + cnPos.map(calcPosMin,calcPosmax,4,0) * .1 + tillagePos.map(calcPosMin,calcPosmax,0,4) *.4));
	paramKeys[1] =  Math.round((biomassPos.map(calcPosMin,calcPosmax,4,0)*.5 + cnPos.map(calcPosMin,calcPosmax,0,4) * .25 + tillagePos.map(calcPosMin,calcPosmax,0,4) *.25));		
	paramKeys[2] =  Math.round((biomassPos.map(calcPosMin,calcPosmax,4,0)*.5 + cnPos.map(calcPosMin,calcPosmax,4,0) * .1 + tillagePos.map(calcPosMin,calcPosmax,0,4) *.4));
	paramKeys[3] =  Math.round((biomassPos.map(calcPosMin,calcPosmax,4,0)*.4 + cnPos.map(calcPosMin,calcPosmax,0,4) * .3 + tillagePos.map(calcPosMin,calcPosmax,0,4) *.3));
	//end DATA transform logic--------	
	
				
	console.log (biomassPos +"-" + cnPos + "-" + tillagePos +  "keys:" + paramKeys.toString() );	
	//data manipulation logic
	transformData(paramKeys);
	//update chart
	organicMatterDecompChart.update();
}

function transformData (paramKeys) {
		swapDataForParameter(0,paramKeys[0]); //organic inputs or n release
		swapDataForParameter(1,paramKeys[1]); //microbial biomass
		swapDataForParameter(2,paramKeys[2]); //active OM
		swapDataForParameter(3,paramKeys[3]); //stable humus
}
 
//this updates a single param (e.g. stable humus) with higher or lower data curve
function swapDataForParameter(parameter,pos) {
	//one parameter at a time
	//for (i=0; i < organicMatterDecompChart.data.datasets[parameter].data.length; i++) {
			//the pos here indicates which row or point in curve gradient to pick
			organicMatterDecompChart.data.datasets[parameter].data = soilOMCreateCurves[parameter][pos];	
	//}
	
	//this is the reference to the matric
	console.log ("length:" + organicMatterDecompChart.data.datasets[parameter].data.length + " --" +  organicMatterDecompChart.data.datasets[parameter].data[pos] );
	
}

//--------------end dynamic chart config------------------------------------
//--------------------------------------------------------------------------


//helpers for 
//data manipulation--------------------------
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

mmultiply = function(a,b) {
	return a.map(function(x,i) {
		return transpose(b).map(function(y,k) {
			return dotproduct(x, y)
		});
	});
}

dotproduct = function(a,b) {
	return a.map(function(x,i) {
		return a[i] * b[i];
	}).reduce(function(m,n) { return m + n; });
}

transpose = function(a) {
	return a[0].map(function(x,i) {
		return a.map(function(y,k) {
			return y[i];
		})
	});
}
//usage: JSON.stringify(mmultiply(a,b)) // "[[58,64],[139,154]]"
//end helpers for
//data manipulation---------------------------



$('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if( target.length ) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top - 120
		}, 1000);
	}
});


/*------------------------Menu Click Config--------------------------*/
$( "#menu-icon" ).click(function() {  						
	if(docstate == 1) {
		//show main content
		$("#somfractions-content").hide();
		$("#knwsadata-content").hide();
		$("#conclusions-content").hide();
		$("#references-content").hide();
		//adjust interface buttons
		$( "#g-somfractions-close" ).hide();
		$( "#g-knwsadata-close" ).hide(); 		
		$( "#g-conclusions-close" ).hide(); 
		$( "#g-references-close" ).hide();
		$( "#g-somfractions-token" ).show();
		$( "#g-knwsadata-token" ).show();
		$( "#g-conclusions-token" ).show();
		$( "#g-references-token" ).show();
		 
		$("#menu-icon").css("background-color", "#666666");
		docstate=0;
			
	}
	else	{
		//show main content
		$("#somfractions-content").show();
		$("#knwsadata-content").show();
		$("#conclusions-content").show();
		$("#references-content").show();
		//adjust interface buttons
		$( "#g-somfractions-token" ).hide();
		$( "#g-knwsadata-token" ).hide();
		$( "#g-conclusions-token" ).hide();
		$( "#g-references-token" ).hide();
		$( "#g-somfractions-close" ).show();
		$( "#g-knwsadata-close" ).show(); 		
		$( "#g-conclusions-close" ).show(); 
		$( "#g-references-close" ).show(); 
		$("#menu-icon").css("background-color", "#64B269");
		docstate=1;
		
	}		
});	


/*------------------------Organic matter sub-story content--------------------------*/
$( "#g-somfractions-close" ).click(function() {  						
			$( "#g-somfractions-token" ).show();
			$( "#g-somfractions-close" ).hide(); 	     
			$("#somfractions-content").hide();	   		
});	

$( "#g-somfractions-token" ).click(function() {  
			$("#somfractions-content").show();
			$( "#g-somfractions-token" ).hide();
			$( "#g-somfractions-close" ).show(); 
});	

/*------------------------KNWSA DATA induced sub-story --------------------------*/
$( "#g-knwsadata-close" ).click(function() {  						
			$( "#g-knwsadata-token" ).show();
			$( "#g-knwsadata-close" ).hide(); 	     
     		$("#knwsadata-content").hide();	   		
});	

$( "#g-knwsadata-token" ).click(function() {  
			$("#knwsadata-content").show();
			$( "#g-knwsadata-token" ).hide();
			$( "#g-knwsadata-close" ).show(); 
});	

/*------------------------Conclusions sub-story --------------------------*/
$( "#g-conclusions-close" ).click(function() {  
						
			$( "#g-conclusions-token" ).show();
			$( "#g-conclusions-close" ).hide(); 	     
			$("#conclusions-content").hide();		   		
});	

$( "#g-conclusions-token" ).click(function() {  
			$("#conclusions-content").show();
			$( "#g-conclusions-token" ).hide();
			$( "#g-conclusions-close" ).show(); 
});	

/*------------------------References sub-story --------------------------*/
$( "#g-references-close" ).click(function() {  						
			$( "#g-references-token" ).show();
			$( "#g-references-close" ).hide(); 	     
     		$("#references-content").hide();;	   		
});	

$( "#g-references-token" ).click(function() {  
			$("#references-content").show();
			$( "#g-references-token" ).hide();
			$( "#g-references-close" ).show(); 
});	





/*------------------------helper functions--------------------------*/
function fetch_text_id(str) {
	var translation = translate(str);
	return translation.concat("-content");	
}

function translate(str) {
	var array =  str.split("-");
	return array[1].toString();	
}	
/*------------------------helper functions--------------------------*/
  			
		

    
