

/*var parseDate = d3.timeParse("%m/%d/%Y %H:%M:%S %p"),
    formatCount = d3.format(",.0f");*/
    
/*    
var hook = d3.select("#soil-health-data")
var barId = ".bar"; 
var dataColumn = 'aggregate_stability';
var csv = "js/data/soilhealth.csv";
*/

drawHistogram(d3.select("#soil-health-as"), ".bar-charcoal", 'aggregate_stability', "js/data/soilhealth.csv");
//drawHistogram(d3.select("#soil-health-om"), ".bar-green", 'organic_matter', "js/data/soilhealth.csv");
drawHistogram(d3.select("#soil-health-activec"), ".bar-green", 'active_carbon', "js/data/soilhealth.csv");


function drawHistogram(hook, barId, dataColumn, csv) {
 
 var w = hook.style('width').slice(0,-2);
 var h = hook.style('height').slice(0,-2);
 
 //console.log("width->" + w +  "\nheight->" + h);
 
 var margin = {top: 15, right: 15, bottom: 15, left: 15},
    width = w - margin.left - margin.right,
    height = h - margin.top - margin.bottom;
 
 
 var svg = hook.append("svg")    
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
   
d3.csv(csv, function(error, data) {
  if (error) throw error;
	//console.log(data);
	
	
	 // format the data
  data.forEach(function(d) {
      d[dataColumn] = +d[dataColumn];
	  //console.log( d[dataColumn]);
  });
  
		
	var values = data.map(function(d) { return d[dataColumn]; });	
	
	//console.log(values);
	
	
	var y = d3.scaleLinear()
    .range([height, 0]);
    
	//var max = d3.max(values);
	//var min = d3.min(values);
	var x = d3.scaleLinear()
      .domain(d3.extent(values))
      .range([0, width]);
          
	svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    //.call(d3.axisBottom(x));

	 // add the y Axis
  /*svg.append("g")
      .call(d3.axisLeft(y));*/

	var histogram = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(10))
      
  var bins = histogram(values);
	//console.log(bins);	
	
	  // Scale the ran ge of the data in the y domain
  y.domain([0, d3.max(bins, function(d) { return d.length; })]); 
	
	//console.log(y.domain());
 
    		
  var bar = svg.selectAll(barId) 
      .data(bins)
    .enter().append("g")
      .attr("class", "bar")
      .attr("id", barId.substring(1))
      .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });
      
     

  bar.append("rect")
      .attr("id", dataColumn)
      .attr("x", 1)
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1; })
      .attr("height", function(d) { return height - y(Number(d.length)); });

  bar.append("text")
      .attr("dy", ".75em")
      .attr("y", -10)
      .attr("x", function(d) { return (x(d.x1) - x(d.x0)) / 2; })
      .attr("text-anchor", "middle")
      .text(function(d) { return d.x0; });
});

}
	
		
	

	
	
		
	
		



    