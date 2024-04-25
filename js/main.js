const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" }, 
    { name: "Dissertation", price: 8.95, size: "large" }, 
    { name: "Highlander", price: 6.50, size: "small" }, 
    { name: "Just Tuna", price: 6.50, size: "small" }, 
    { name: "So-La", price: 7.95, size: "large" }, 
    { name: "Special", price: 12.50, size: "small" }
];

const width = 500;
const height = 500;

const svg = d3.select("#svg-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Append lingkaran
svg.selectAll("circle")
    .data(sandwiches)
    .enter()
    .append("circle")
    .attr("cx", (d, index) => 30 + index * 70)
    .attr("cy", 50 )
    .attr("r", d => d.size === "large" ? 30 : 15)
    .attr("class", d => d.price < 7.00 ? "circle-small" : "circle-large")
    .attr("stroke", "black")

