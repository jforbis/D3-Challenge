// @TODO: YOUR CODE HERE!
let svgwidth = 960;
let svgheight = 620;

let margin = {
    top: 80,
    right: 80,
    bottom: 80,
    left: 80
};

let width = svgwidth - margin.left - margin.right;
let height = svgheight - margin.top - margin.bottom;

let svg = d3
    .select("body")
    .append("svg")
    .attr("height", svgheight)
    .attr("width", svgwidth);

let chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// reading in my data
d3.csv("assets/data/data.csv").then(function(data) {
    console.log(data);
    data.forEach(function(info) {
        info.hours = +info.hours;
    });
    let barSpacing = 10; 
    let scaleY = 10; 

    let barWidth = (width - (barSpacing * (data.length - 1))) / data.length;

    // Create code to build the bar chart using the data.
    chartGroup.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("width", d => width)
        // .attr("height", d => d.hours * scaleY)
        .attr("x", (d, i) => i * (barWidth + barSpacing))
        // .attr("y", d => chartHeight - d.hours * scaleY);
}).catch(function(error) {
    console.log(error);
});