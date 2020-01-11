/*using blended data from https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/soils/health/biology/?cid=nrcs142p2_053868 together with Willson & Harwood (2011) p513 pp1. POM defined as organic C and N of 53-2000um particles and used here as the decomposing fraction which is less than the 33-55% the first source reports*/
var omFractionsConfig = {
	type: "doughnut",
	data:{ 
		labels: ["Organisms + Residues","Decomposing","Stable"],
		datasets: [
			{
		      	data: [15,35,50],
		       	backgroundColor: ["#64B269","#8C7A5E","#666666"],
		       	borderWidth: 0,
		        label: 'Organic Matter',
				
		    }
		]
	},
	options: { 
		segmentShowStroke : false , 
		responsive : true,
		cutoutPercentage: 70,
       	tooltips: {
               enabled: false,
               position:"nearest",
               mode: "single",
               displayColors: false,
               yPadding:8,
               //bodyColor: "#666666",
               //backgroundColor:"rgba(255,255,255,0.7)",
               caretSize:8,
               cornerRadius:10
           },			
           legend: {
			display:false,
			position: 'right',
			//fullWidth: true,
		
		}
	}
};

/*Data from Cornell CEC fact sheet as cited in doc and references*/
/*This could be better represented it doesn't carry much information or data*/
var cecConfig = {
    type: "bar",
    data: {
    	//meq/100g CCA international study guide 2019
		//kaolinite
		labels: ["Kao", "SOM"],
    	datasets: [
	        {
	            label: "CEC",
	           	backgroundColor:"#8E7EBF",
	            data: [10,200]
	        }    
    	]
    },
    options: { 	
		scaleFontColor:"#777777",
		responsive: true,
		legend: {
			display:false,
	
		},
		scales: {
                  xAxes: [{
                    display: true,
                  	
                   
                  }],
                  yAxes: [{      
                      display: true,
                      position: "left",
                      ticks: {
	                    max: 210,
	                    min: 0,
	                    stepSize: 70
                	  }
                  }]
             }
	}
};


/*This is a stub for now until we have some firmer numbers on chemical, biological, and physical value*/
/*We have a rough idea on Carbon and Nitrogen value. See Carbon Valuation & Sequestration worksheet on Matt R G-Drive*/
/* Nutrient value of high mineralization N potential could be a difference of 100kg/ha or around $25 per acre per year*/
/*Template: fixed time period to build x%. Revolving nutrient values discounted to present value over fixed term*/
/*Each value added over time in either chemical, physical, or biological categories inflates or fans out the graphic*/
var soilHealthPaybackConfig = {
    type: "line",
    data: {
    	labels: ["1YR", "3YR","5YR","10YR"],
    	datasets: [
	        {
	            label: "Physical",
	           	backgroundColor:"#666666",
	            data: [10,1000,2000,8000]
	        },  
	        {
	            label: "Biological",
	           	backgroundColor:"#64B269",
	            data: [10,1000,2000,8000]
	        },
	        {
	            label: "Chemical",
	           	backgroundColor:"#8E7EBF",
	            data: [10,1000,2000,8000]
	        }
	         
	            
    	]
    },
    options: { 	
		//scaleFontColor:"#777777",
		responsive: true,
		legend: {
			display:false,
			position: 'right'
		},
		scales: {
                  xAxes: [{
                    display: true,
                    stacked:false,
                    ticks: { 
                	},
                	gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                      }                 
                  }],
                  yAxes: [{      
                      display: false,
                      stacked:true,
                      position: "left",
                      ticks: {
	                    max: 25000,
	                    min: 0,
	                    stepSize: 5
                	  },
                	  gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                      }
                	  
                  }]
             }
	}
};




var soilOMCreateBaseline = [        
	        {
	            label: "Stable Humus",
	           	backgroundColor:"#666666",
	            data: [2,2,3,3.5]
	        },
			 {
	            label: "N Release",
	           	backgroundColor:"#8E7EBF",
	            data: [1,5,5,1]
	        },
				 {
	            label: "Active OM",
	           	backgroundColor:"#64B269",
	            data: [1,10,5,1]
	        },
			 
	        {
	            label: "Microbial Biomass",
	           	backgroundColor:"#509f56",
	            data: [1,15,10,2]
	        }
		
			
	         
	            
 ];
 
var soilOMCreateCurves = [        
	        //Stable Humus matrix
			[
	            [3,2,3,4],
				[2,2,3,4],
				[2,2,3,3.5],
	            [2,2,2,2],
				[2,2,1,1]
	        ],	
			//N release
			 [
	            [1,10,15,5],
				[1,7,10,5],
				[1,5,5,1],
	            [1,1,1,1],
				[1,1,1,1]
	        ],
			//AOM matrix
			[
	            [2,20,9,2],
				[2,15,7,1],
				[1,10,5,1],
	            [2,7,2,1],
				[1,5,2,1]	      
	        ],	
			//Bio matrix 
	        [
				[2,20,15,10],
				[2,15,15,5],
				[1,15,10,2],
	            [1,10,8,1],
				[1,5,4,1]
	        ]					
			
			
	         
	            
 ];
 
var soilOMCreationConfig = {
    type: "line",
    data: {
    	labels: ["Days", "Weeks","Months","Years"],
    	datasets: soilOMCreateBaseline
    },
    options: { 	
		//scaleFontColor:"#777777",
		responsive: true,
		legend: {
			display:false,
			position: 'right'
		},
		scales: {
                  xAxes: [{
                    display: true,
                    stacked:false,
                    ticks: { 
                	},
                	gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                      }                 
                  }],
                  yAxes: [{      
                      display: false,
                      stacked:true,
                      position: "left",
                      ticks: {
	                    max: 60,
	                    min: .1,
	                    stepSize: 5
                	  },
                	  gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                      }
                	  
                  }]
             }
	}
};





/*This is also a stub to illustrate the balance in air and water that organic matter creates. */
/*We've all seen this in gardens where compost and mulch are used and bulk density is low but water holding is high*/
var waterAirHoldingConfig = {
    type: "line",
    data: {
    	labels: ["Sand", "Silt","Clay", "SOM"],
    	datasets: [
	        {
	            label: "Water capacity",
	           	backgroundColor:"#666666",
	            data: [1,5,20,20]
	        },
	         {
	            label: "Air capacity",
	           	backgroundColor:"#aaaaaa",
	            data: [20,10,1,20]
	        }    
    	]
    },
    options: { 	
		//scaleFontColor:"#777777",
		responsive: true,
		legend: {
			display:false,
			position: 'top'
		},
		scales: {
                  xAxes: [{
                    display: true,
                    stacked:true,
                    gridLines: {
                    	display:false
                	}  
                  
                  }],
                  yAxes: [{      
                      display: false,
                      stacked:true,
                      position: "left",
                      ticks: {
	                    max: 40,
	                    min: 0,
	                    stepSize: 5
                	  }
                  }]
             }
	}
};

/* Calculation on spreadsheet based on 1%OM weight = weight x 10 in water*/
/*KNWTSHD folder in 'data table' file under 'water' worksheet tab*/
var waterHoldingIncreaseConfig = {
    type: "bar",
    data: {
	    labels: ["0.1%","1%"],
	    datasets: [
	        {
	            backgroundColor:"#577fb4",
	            label: "Increase in water holding (L/ft^2)",
	            data: [.24,2.41]
	        }
	    ]
    },
    options: {
			pointDot: false	,
			responsive : true,
		    scaleFontColor:"#666666",
		    legend: {
		    	position: "top"
		    },
		   	scales: {
		      	yAxes: [{
		    		ticks: {
	                    max: 3,
	                    min: 0,
	                    stepSize: 1
	                }
		    	}],
		    	xAxes: [{
		    		ticks: { 
	                }
		    	}]
			},
			legend: {
				display:false,
				position: 'top'
			}	
		}
};




/* kg/ha - Burton, Zebarth, Style, 2016 */
/* This is based on the presentation Dave Burton sent me in 2016*/
/*It isn't correlated with soil health but it illustrates the range of variation in Soil mineralizable N*/
var SoilNSupplyConfig = {
    type: "bar",
    data: {
	    labels: ["Min", "Max"],
	    datasets: [
	        {
	            backgroundColor:"#8E7EBF",
	            label: "Burton (2016). Soil N supply of PE soils (kg/ha)",
	            data: [31,111]
	        }
	    ]
    },
    options: {
			pointDot: false	,
			responsive : true,
		    scaleFontColor:"#777777",
		    legend: {
		    	position: "top"
		    },
		   	scales: {
		      	yAxes: [{
		    		ticks: {
	                    max: 120,
	                    min: 0,
	                    stepSize: 40
	                }
		    	}],
		    	xAxes: [{
		    		ticks: {
						maxRotation: 0						
	                }
		    	}]
			},
			legend: {
				display:false,
				position: 'top'	
			}	
		}
};


/*This is just a stub until better data is found*/
/*Typically as C:N increases the Nitrogen availability goes from positive to negative*/
/*20-30 range is a commonly reported point where microbial activity starts to fix and sink Nitrogen temporarily*/ 
var CNRatioConfig = {
    type: "bar",
    data: { 
	    labels: ["10","15", "20","25","30"],
	    datasets: [
	       		{
	            type: "line",
	            label: "Mineralization",
	            data: [100,50,30,20,0],
	            backgroundColor:'rgba(142, 126, 191, 0.8)',			
	            yAxisID: "y-axis-2",
				fill:true,
	        },
			{
	            type: "line",
	            label: "Immobilization",
	            data: [0,20,30,50,100],
	            backgroundColor:'rgba(100, 178, 105, 0.8)',			
	            yAxisID: "y-axis-2",
				fill:true,
	        },
	       
	       	 {
	            type: "bar",
	            label: "Carbon",
	            data: [10,15,20,25,30],
	            backgroundColor: "#666666",
	            fill: true,
	            yAxisID: "y-axis-1",
	        },
	       
	       	/*{
	            type: "bar",
	            label: "Nitrogen",
	            //doubleed so it shows up
				data: [2,2,2,2,2],
	            backgroundColor:"#8E7EBF",
	            yAxisID: "y-axis-1",
	        },*/
			   
	    ]
    },
    options: { 
				backgroundColor: "#666666",
				scaleShowLabels: false,
				scaleFontColor:"#777777",
				responsive: true,
				legend: {
					display:false,
				
				},
				scales: {
	                   xAxes: [{
	                       display: true,  
						   stacked:true,
	            
	                   }],
	                   yAxes: [{      
	                       display: false,
						   stacked:true,
	                       position: "left",
	                       id: "y-axis-1",
	                       ticks: {
		                    max: 32,
		                    min: 0,
		                    stepSize: 5
		                }
	                   }, {                     
	                       display: false,
	                       scaleLabel: {
	                           show: true,
	                           labelString: 'Test label'
	                       },
	                       position: "right",
	                       id: "y-axis-2",
	                       ticks: {
		                    max: 110,
		                    min: 0,
		                    stepSize: 20
		                },
	                   }],
	               }

	}
};


/*Nyraneza 2009 - manure study*/
/*This was done in Quebec and focuses on long term manure use*/
/*While not directly application it does illustrate that maintained organic carbon + nutrient application shows up in testing*/ 
var manurePmnConfig = {
    type:"bar",
    data: {
	    labels: ["Control", "Manure"],
	    datasets: [
	        {
	            label: "PMN",
	            backgroundColor: "#64B269",
	            yAxisID: 'A',
	            data: [26, 42]
	        },
	         {
	            label: "Organic C",
	      		backgroundColor: "#666666",
	      		yAxisID: 'B',
	            data: [8, 12.7]
	        }
	    ]
    },
    options: {
		responsive : true,
		scaleFontColor:"#777777",					 
	   	scales: {
	      	yAxes: [{
	    		id: 'A',
	    		display:false,
	    		stacked:false,
		    		ticks: {
	                    max: 50,
	                    min: 0,
	                    stepSize: 10
	                }
	    		},
                 {
		        id: 'B',
		        display:false,
		        type: 'linear',
		        position: 'right',
			        ticks: {
			          max: 15,
			          min: 0
			        }
                 
	    	}],
	    	xAxes: [{
	    		stacked:false,
	    		ticks: { 
                }
	    	}]
		},
		legend: {
			display:false,
			position: 'top'	
		}				
	}
    
};


/*This is general shape of the data from the PEI soil quality survey*/
/*Actual spreadsheet data could be used here with permission*/
var peiSomConfig = {
    type: "bar",
    data: {
	    labels: ["1999", "2002", "2005", "2008","2011"],   
	    datasets: [
	        {
	            label: "PEI SOM Trend",
	            //fill:false,
	            //borderWidth:8,
	            //borderColor:"#666666",
	            backgroundColor:"#666666",
	            data: [3.5,3.4,2.8,2.7,2.8]
	        }
	    ]
    },
    options: {
		legend: {
			display: false
		},
		segmentShowStroke : true , 
		scales: {
	      	yAxes: [{
	    		ticks: {
                    max: 4,
                    min: 1,
                    stepSize: 1
                }
	    	}]
		},
  		scaleFontColor:"#666666",
  		responsive: true
	}	
};


/*This is based on a calculation in the Carbon Valuation and Sequestration spreadsheet*/
/* It uses the formula given by D Burtons Nutrient Management course based on bulk density and organic matter from soil test*/
var carbonHfsConfig = {
	type: 'bar',
    data: {
    	labels: ["1%","2%","3%"],
	    datasets: [
	        {
	            label: "Carbon in %SOM (MT)",
	         	backgroundColor:"#3a3129",
	            data: [11,23,34]
	        }
	    ]
    },
    options: {
		pointDot: false,
	    
	    legend: {
	    	display: false
	    },
	    scales: {
	      	
			yAxes: [{
				fontColor:"#ededed",
				ticks: {
                    max: 40,
                    min: 0,
                    stepSize: 10
                }
	    	}]
		}
	    
	}   
};


/*This is from the Weil & Islam, 2000. paper*/
/*Conservation tillage defined as: */
/*"...some combination of reduced tillage, increased crop diversity more
perennial crops, increased crop residue return, increased soil fertility and/or increased application
of organic amendments"*/
var increasedMicrobiaBiomassConfig = {
	type: 'bar',
    data: {
    	labels: ["Reg", "Min"],
	    datasets: [
	        {
	            label: "Total",
	         	backgroundColor:"#64B269",
	            data: [218.2,316.3]
	        },
	        {
	          	label: "Active",
	          	backgroundColor:"#509f56",
	          	data: [68.4,115.7]
	      }
	    ]
    },
    options: {
		pointDot: false,
	    scaleFontColor:"#777777",
	    legend: {
	    	display:false,
	    	position: 'top'
	    },
	    scales: {
           	xAxes: [{
           		stacked:true,
				display:true
           	}],	
            yAxes: [{
            	display:false,
            	stacked:true,
                ticks: {
                    max: 500,
                    min: 0,
                    stepSize: 100
                }
            }]
       	}
	}   
};

 

/*Angers et. al 1999 paper that was done on PEI*/
/*likely some of the better data we have for local conditions and tillage induced differences*/
var rotationTillageConfig = {
    type: "bar",
    data: {
    	labels: ["10x","9x","8x","7x"],
	    datasets: [
	      {
	          label: "Labile C",
	       	  backgroundColor:"#666666",
	          data: [111,147,157,164]
	      },
	      {
	          label: "Labile N",
	          backgroundColor:"#64B269",
	          data: [119,170,183,195]
	      } 
	    ]
    },
    options: {
		pointDot: false	,
		responsive : true,
	    scaleFontColor:"#777777",
	    legend: { 	
	    	display:false,
	    	position: 'top'
	    },
	    scales: {
	    	xAxes: [{
            	stacked:true
            }],
            yAxes: [{
            	display:false,
            	stacked:true,
                ticks: {
                    max: 400,
                    min: 0,
                    stepSize: 100
                }
            }]
       	}
       	
	}
};



//my guesses based on mineralization period in St Luce et al. (2013). 
//Cumulative N minera- lized between weeks 2 and 24 represented total mineralized N 
//and was referred to as Pool II (Sharifi et al. 2007b). 
var minOrgReleaseData = {
    type: "line",
	data: {
		labels: ["1wk","2wks", "12wks","24wks"],
    	datasets: [
        {
            label: "Mineralization",
           	backgroundColor:"#64B269",
			//borderColor: "#64B269",
			//borderWidth: 10,
			
            data: [1,40,40,1]
        },
        {
            label: "Fertilizer Release",
           	backgroundColor:"#8E7EBF",
            data: [180,50,10,0]
        }
         
    	]
	},	
	options: { 
		legend: {
					display:false
		},
		scales: {
                    yAxes: [{
                        display: false,
                    }]
		},
		pointDot: false,
		scaleShowLabels: false,
		scaleFontColor:"#777777",
		responsive: true
	}	
	};



//---------------------------------------------------------
//data from split tillage trials done by KNWSA in 2015-2017
//---------------------------------------------------------
/*RAINFALL DATA
	        {
	            label: "Rainfall (mm)",
	            yAxisID: "y-axis-2",
	            backgroundColor:"#d1c2ff",
	            data: [335,268,268,268,268,268,195]	        
	        } 
			
			**/
var tillagePayYieldsKNorthConfig = {
    type: "bar",
    data: {
    	labels: ["A","B","C","D","E", "F","G"],
	    datasets: [
	         {
	            label: "Res. Tillage ($000/a)",
	            yAxisID: "y-axis-1",
	            backgroundColor:"#8E7EBF",
	            data: [3.366,4.345,4.725,4.626,4.110,2.877,4.011]
	        
	        },
	        {
	            label: "M. Plough ($000/a)",
	            yAxisID: "y-axis-1",
	            backgroundColor:"#666666",
	            data: [2.739,4.571,3.917,4.322,3.485,2.716,3.297]
	        }

	                  
	    ]	   
    },
    options: { 				
				scaleFontColor:"#777777",
				responsive: true,
				title: {
                    display: false,
                    text: 'KNWSA Tillage Trials 2015-2016'
                },
				legend: {
					display: false,
					position:'right',

				},																
				scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{      
                        display: true,
                        stacked: false,
                        position: "left",
                        id: "y-axis-1",
                        ticks: {
		                    max: 5,
		                    min: 2,
		                    stepSize: 1
		                }
                    },
                    {
				        id: 'y-axis-2',
				        display: true,
				        type: 'linear',
				        position: 'right',
					    ticks: {
					          max: 360,
					          min: 150,
					          stepSize: 100
					    }

                    }]
				}
    }
    			   
};


//---------------------------------------------------------
//SOIL HEALTH data from split tillage trials done by KNWSA in 2015-2017
//---------------------------------------------------------
var tillageSoilHealthKNorthConfig = {
    type: "bar",
    data: {
    	labels: ["MP","RT"],
	    datasets: [
	         {
	            label: "Aggregate Stability",
	            yAxisID: "y-axis-1",
	            backgroundColor:"#aecc39",
	            data: [43.71,49.86]
	        
	        },
	        {
	            label: "Active Carbon",
	            yAxisID: "y-axis-2",
	            backgroundColor:"#666666",
	            data: [644.8,714.82]
	        }
	                  
	    ]	   
    },
    options: { 				
				scaleFontColor:"#777777",
				responsive: true,
				title: {
                    display: false,
                    text: 'KNWSA Tillage Trials 2015-2016'
                },
				legend: {
					display: false,
					position:'right',

				},																
				scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{      
                        display: true,
                        stacked: false,
                        position: "left",
                        id: "y-axis-1",
                        ticks: {
		                    max: 75,
		                    min: 0,
		                    stepSize: 20
		                }
                    },
                    {
				        id: 'y-axis-2',
				        display: true,
				        type: 'linear',
				        position: 'right',
					    ticks: {
					          max: 750,
					          min: 0,
					          stepSize: 200
					    }

                    }]
				}
    }
    			   
};

//---------------------------------------------------------
//Active Carbon histogram data from split tillage trials done by KNWSA in 2015-2017
//---------------------------------------------------------
var tillageActiveCarbonKNorthConfig = {
    type: "bar",
    data: {
    	labels: ["1.5","","","","2.6","","","","4.0","","","20","","","35","","","80","","","","200","","","","450","","","","","700"],
	    datasets: [
	         {
	            label: "Organic Matter",
	            yAxisID: "y-axis-1",
	            backgroundColor:"#aecc39",
	            
	            
	            data: [3,5,12,27,36,16,6,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	        
	        },
	         {
	            label: "Active Carbon",
	            yAxisID: "y-axis-1",
	            backgroundColor:"#aecc39",
	            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,5,16,20,33,34,14,7,3,1]
	        
	        },
	        {
	            label: "Aggregate Stability",
	            yAxisID: "y-axis-2",
	            backgroundColor:"#666666",
	             data: [0,0,0,0,0,0,0,0,0,0,0,18,44,51,14,4,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
	        }
	                  
	    ]	   
    },
    options: { 				
				scaleFontColor:"#777777",
				responsive: true,
				title: {
                    display: false,
                    text: 'KNWSA Tillage Trials 2015-2016'
                },
				legend: {
					display: false,
					position:'right',

				},																
				scales: {
                    xAxes: [{
                        display: true,
                        barPercentage: 2.0,
                        //categoryPercentage: 2.0,
                    }],
                    yAxes: [{      
                        display: false,
                        stacked: false,
                        position: "left",
                        id: "y-axis-1",
                        ticks: {
		                    max: 50,
		                    min: 0,
		                    stepSize: 20
		                }
                    },
                    {
				        id: 'y-axis-2',
				        display: false,
				        type: 'linear',
				        position: 'right',
					    ticks: {
					          max: 50,
					          min: 0,
					          stepSize: 20
					    }

                    }]
				}
    }
    			   
};





/*POC:14, POXC: 4, microbial biomass:2. POXC part of POC so POC + microbial =~15%*/
/*http://slideplayer.com/slide/3402462/ - gives some interesting numbers and charts*/
/*https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/soils/health/biology/?cid=nrcs142p2_053868*/
/*Biologically active soil organic matter fractions in sustainable cropping systems. Willson, Paul, Harwood (2000) Returned residue:10, above ground biomass:15, POM: 5, microbial biomass 7.5, mineral N: 1*/
/*Had to play with numbers here to get visuals to look right. Note: Active C is part of Active SOM*/
var soilCPoolConfig = {	
	type: "doughnut",
	data: {
		labels: ["Stable SOM","Active SOM",],
		datasets: [
			{
		      	/*15% of 58% = 8.7%, 58% - 8.7% = 49.3 */
		      	data: [80,20],
		       	backgroundColor: ["#3a3129","#64B269"],
		       	borderWidth: 0,
		        label: 'Soil Carbon Pools'
		    }
		]
	},
	options: {
		cutoutPercentage: 75,
		rotation: Math.PI*1.22,
		segmentShowStroke : false , 
		scaleFontColor:"#777777",
		responsive : true,
		legend: {
			display:false,
			position:'right'	
		}
	
	}
			
};

/*Stable SOM*/
var stableSOMConfig = {	
	type: "doughnut",
	data: {
		labels: ["Stable SOM","Active SOM"],
		datasets: [
			{
		      	/*15% of 58% = 8.7%, 58% - 8.7% = 49.3 */
		      	data: [80,20],
		       	backgroundColor: ["#8c7a5e","#4c4136"],
		       	borderWidth: 0,
		        label: 'Soil Carbon Pools'
		    }
		]
	},
	options: {
		cutoutPercentage: 70,
		segmentShowStroke : false , 
		scaleFontColor:"#777777",
		responsive : true,
		legend: {
			display:false,
			position:'right'	
		}
	
	}
			
};

/*http://www.soilmanagementindia.com/organic-matter-in-soil/organic-matter-meaning-origin-and-composition/2496*/
/*This is widely cited and likely obvious but it puts elements into perspective*/
var soilOrgMtrConfig = {	
	type:"doughnut",
	data: {
		labels: ["Carbon","Nutrients","Oxygen & Hydrogen",],
		datasets: [
			{
				
		      	data: [55,10,35],
		       	backgroundColor: ["#666666","#8E7EBF","#cccccc"],
		       	borderWidth: 0,
		        label: 'Soil Organic Matter Composition'
		    }
		]
	},
	options: {
		cutoutPercentage: 70,
		segmentShowStroke : false , 
		scaleFontColor:"#777777",
		responsive : true,
		legend: {
			display:false,
			position:'right'
		}
	}			
};

