var lastClicked = null;

var menuarr = ["o-menu","c-menu","e-menu","a-menu","n-menu","i-menu","s-menu"];
function addEventListener(id) {
    document.getElementById(id).addEventListener("input", function (e) {
        if (document.getElementById(this.id).checked) {
            d3.selectAll('.menu').property('checked', false);
            d3.select("#" + this.id).property('checked', true);
            d3.select("#traits")
            .transition().duration(45).style("top", "88%").transition().duration(900).style('opacity', 0);
        }
    });
}

var i;
for (i = 0; i < menuarr.length; i++) {
    addEventListener(menuarr[i]);
}

function finalpage() {
    d3.selectAll('svg > rect').remove();
    d3.select(".hoverinstruct").transition().delay(300).duration(800).style("opacity", 1);
    // d3.select(".chart").selectAll("text").transition().duration(800).style("opacity", 0.7);
    d3.select(".chart").selectAll("line").transition().duration(800).style("opacity", 0.7);
    d3.selectAll('ellipse')
        .on('mouseover', function(d, i) {
                d3.select("#s" + this.id.substr(1))
                .transition()
                    .delay(100)
                    .duration(1000)
                    .style("opacity", 1);
                d3.select("#" + this.id.substr(1))
                .transition()
                    .duration(800)
                    .style("opacity", 0);
            })
            .on('mouseout', function(d, i) {
                d3.select("#s" + this.id.substr(1))
                .transition()
                    .delay(1800)
                    .duration(1000)
                    .style("opacity", 0);
                d3.select("#" + this.id.substr(1))
                .transition()
                    .delay(800)
                    .duration(1000)
                    .style("opacity", 1);
            });
    d3.select(".annotations p").remove();
    d3.select(".annotations")
        .append("p")
        .append("text")
        .text("This overview is meant to visually convey the surprising level of consistency in the personality profiles of both groups. Hopefully, you were able to recognize these personality endophenotypes for yourself. Currently, the field is attempting to map psychometric measures to biological, cognitive, and behavioral frameworks to further unravel their implications, applications, and limitations.");
}

function whichData(buttonElement) {

    d3.select("#drugclasses").transition().delay(300).duration(800).style("opacity", 0);
    d3.select(".hoverinstruct").transition().delay(300).duration(800).style("opacity", 0);

    function getAnnotations(buttonClickedId) {
        if ( buttonClickedId === 'btn1' ) {
            return "People who use cannabis-derived products tend to possess high levels of openness, impulsiveness, and sensation-seeking in addition to low levels of conscientiousness. Non-user tendencies are of roughly equal magnitude and opposite direction in these dimensions. This is the standard case, as you'll see.";
        }
        else if ( buttonClickedId === 'btn2' ) {
            return "People who use hallucinogens tend towards high openness, impulsiveness, and sensation-seeking, and low conscientiousness. Non-user tendencies are roughly equal and opposite, except for that it is sufficient for non-users to be less impulsive and sensation-seeking to a lesser degree of significance.";
        }
        else if ( buttonClickedId === 'btn3' ) {
            return "People who use inhalants tend towards moderate openness and impulsiveness, high sensation-seeking, and low conscientiousness. Non-user tendencies are roughly equal and opposite. Sensation seeking may be stressed as a result of subjects seeking out a novel experience, or 'high', from an unconventional source.";
        }
        else if ( buttonClickedId === 'btn4' ) {
            return "As with before, users tend towards high openness, impulsiveness, and sensation-seeking, and low conscientiousness, where the non-user profile exhibits a similar relationship. Interestingly, the two groups split harshly along traits agreeableness and neuroticism, where users are rather disgreeableness and neurotic.";
        }
        else if ( buttonClickedId === 'btn5' ) {
            return "You have probably caught onto the pattern at this point. For example, if you step back and animate the cannabis grouping again, you'll find that these two profile are nearly the same. Research has found that impulsiveness and sensation-seeking are particularly important in the psychopathologies of anti-social behavior and addictions.";
        }
    }

    function getData(buttonClickedId) {
        if ( buttonClickedId === 'btn1' ) {
            return [ [0.3641,1,"C"],[-0.2630,1,"C"],[-0.0211,1,"C"],
            [-0.1214,1,"C"],[0.1023,1,"C"],[0.2708,1,"C"],[0.4005,1,"C"],
                        [-0.3651,0,"C"],[0.2623,0,"C"],[0.0208,0,"C"],
            [0.1209,0,"C"],[-0.1022,0,"C"],[-0.2900,0,"C"],[-0.4585,0,"C"] ];
        }
        else if ( buttonClickedId === 'btn2' ) {
            return [ [0.4393,1,"H"],[-0.2980,1,"H"],[0.0629,1,"H"],
            [-0.1368,1,"H"],[0.0726,1,"H"],[0.3575,1,"H"],[0.5242,1,"H"],
                        [-0.4408,0,"H"],[0.2969,0,"H"],[-0.0634,0,"H"],
            [0.1362,0,"H"],[-0.0725,0,"H"],[-0.2025,0,"H"],[-0.3192,0,"H"] ];
        }
        else if ( buttonClickedId === 'btn3' ) {
            return [ [0.1916,1,"IN"],[-0.2033,1,"IN"],[-0.0172,1,"IN"],
            [-0.0951,1,"IN"],[0.1113,1,"IN"],[0.1993,1,"IN"],[0.2679,1,"IN"],
                        [-0.1925,0,"IN"],[0.2026,0,"IN"],[0.0169,0,"IN"],
            [0.0946,0,"IN"],[-0.1112,0,"IN"],[-0.2396,0,"IN"],[-0.3517,0,"IN"] ];
        }
        else if ( buttonClickedId === 'btn4' ) {
            return [ [0.3694,1,"O"],[-0.3853,1,"O"],[-0.2283,1,"O"],
            [-0.3388,1,"O"],[0.3666,1,"O"],[0.3731,1,"O"],[0.4518,1,"O"],
                        [-0.3723,0,"O"],[0.3832,0,"O"],[0.2274,0,"O"],
            [0.3375,0,"O"],[-0.3663,0,"O"],[-0.0768,0,"O"],[-0.1078,0,"O"] ];
        }
        else if ( buttonClickedId === 'btn5' ) {
            return [ [0.3196,1,"IL"],[-0.2698,1,"IL"],[-0.0395,1,"IL"],
            [-0.1684,1,"IL"],[0.1527,1,"IL"],[0.2812,1,"IL"],[0.3777,1,"IL"],
                        [-0.3206,0,"IL"],[0.2691,0,"IL"],[0.0392,0,"IL"],
            [0.1679,0,"IL"],[-0.1526,0,"IL"],[-0.3031,0,"IL"],[-0.4347,0,"IL"] ];
        }
    }

    console.log(lastClicked != null)
    console.log(lastClicked)

    if (lastClicked != null) {
        console.log("in clearance step");
        d3.select(".chart")
            .selectAll("rect")
            .transition()
                .delay(50)
                .duration(1000)
                .attr("height", 0)
                .attr("y", 0);
    }


    d3.selectAll("svg > rect").remove();
    d3.selectAll(".binits").style("color", "black");

    var buttonClickedId = buttonElement.id;
    d3.select("#" + buttonClickedId).select(".binits").style("color", "red");
    // lastClicked = buttonClickedId;

    var annotationString = getAnnotations(buttonClickedId);
    d3.select(".annotations p").remove();
    d3.select(".annotations")
        .append("p")
        .append("text")
        .text(annotationString);

    var data = getData(buttonClickedId);
    var barwidth = 11;
    var barspace = 14.89;
    var groupadjust = 104.23;

    d3.select(".chart")
        .selectAll(null).data(data).enter()
        .insert("rect")
            .attr("id", function(d,i) {
                var initid = "rid" + d[0].toString() + d[1].toString() + d[2];
                return initid.replace(/[,.-]/g, '');
            })
            .attr("class", "scalebar")
            .attr("width", barwidth)
            .attr("x", function(d,i) {
                if(d[1] == 1) {
                    return barspace*i;
                } 
                else {
                    return barspace*i - groupadjust;
                }
            })
            .attr("y", function(d) { 
                    if(d[0] < 0) { return 0 }
                })
            .attr("transform", "translate(9.5,0)")
            .style("fill-opacity", 0.8)
            .on('mouseover', function(d, i) {
                d3.select("#s" + this.id.substr(1)).style("opacity", 1);
                console.log("id", this.id);
                console.log("mouseover", d);
            })
            .on('mouseout', function(d, i) {
                d3.select("#s" + this.id.substr(1))
                .transition()
                    .delay(1200)
                    .duration(400)
                    .style("opacity", 0);
                console.log("id", this.id);
                console.log("mouseout", d);
            });;

    var selection = d3.select(".chart").selectAll("rect").data(data);
        selection.each(function (d) {
            if (d[0] >= 0) {
                d3.select(this)
                .attr("height", 0)
                .attr("y", 0)
                .transition()
                    .duration(600)
                    // .style("fill", function(d) { return "rgb("+ Math.abs(Math.round(d[0] * 800)) + ",204," + Math.abs(Math.round(d[0] * 900)) + ")"; })
                    .style("fill", function(d) { 
                        dval = 255 - (Math.abs(d[0]) * 255);
                        return "rgb("+ dval + "," + dval + "," + dval + ")"; 
                    })
                .transition()
                    .duration(800)
                    .attr("height", function(d) { return 100*d[0]; })
                    .attr("y", function(d) { return -100*d[0]; })
            }
            else if (d[0] < 0) {
                d3.select(this)
                .transition()
                    .duration(600)
                    // .style("fill", function(d) { return "rgb("+ Math.abs(Math.round(d[0] * 800)) + ",204," + Math.abs(Math.round(d[0] * 900)) + ")"; })
                    .style("fill", function(d) { 
                        dval = 255 - (Math.abs(d[0]) * 255);
                        return "rgb("+ dval + "," + dval + "," + dval + ")"; 
                    })
                .transition()
                    .duration(800)
                    .attr("height", function(d) { return -100*d[0]; })
            }

        })

    var hideline = 0.11;
    d3.select(".chart")
        .selectAll(null).data(data).enter()
        .insert("line")
            .attr("id", function(d,i) {
                var initid = "id" + d[0].toString() + d[1].toString() + d[2];
                return initid.replace(/[,.-]/g, '');
                })
            .attr("transform", "translate(9.5,0)")
            .attr("x1", function(d,i) {
                if(d[1] == 1) {
                    return barspace*i - hideline;
                } 
                else {
                    return barspace*i - groupadjust - hideline;
                }
            })
            .attr("x2", function(d,i) {
                if(d[1] == 1) {
                    return barspace*i + barwidth + hideline;
                } 
                else {
                    return barspace*i - groupadjust + barwidth + hideline;
                }
            })
            .attr("stroke-linecap", "round")
            .transition()
                .delay(50)
                .duration(1000)
                .attr("y1", function(d,i) { return -100*d[0] })
                .attr("y2", function(d,i) { return -100*d[0] })
                .style("opacity", 0.9)
                .style("stroke", function(d) { 
                        if(d[1] == 1) {
                            return "red";
                        } else {
                            return "black";
                        }
                    });

    var xshift = -3.2;
    var group = 
        d3.select(".chart")
        .selectAll(null)
        .data(data)
        .enter()
        .append("g")
            .attr("transform", "translate(" + xshift + "," + 0 + ")")


    group.append("ellipse")
        .attr("id", function(d,i) {
            var initid = "cid" + d[0].toString() + d[1].toString() + d[2];
            return initid.replace(/[,.-]/g, '');
        })
        .attr("cx", function(d,i) {
            if(d[1] == 1) {
                return barspace*i + barwidth + 5;
            } 
            else {
                return barspace*i - groupadjust + barwidth + 5;
            }
        })
        .attr("cy", function(d,i) { return -100*d[0] })
        .attr("ry", 1).attr("rx", 10)
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("stroke-width", 0.2)
        .style("opacity", 0)
        .on('mouseover', function(d, i) {
                d3.select("#s" + this.id.substr(1)).style("opacity", 1);
                console.log("id", this.id);
                console.log("mouseover", d);
            })
            .on('mouseout', function(d, i) {
                d3.select("#s" + this.id.substr(1))
                .transition()
                    .delay(800)
                    .duration(400)
                    .style("opacity", 0);
                console.log("id", this.id);
                console.log("mouseout", d);
            });

    // var shifts = [0, 15];
    group.append("text")
        .attr("id", function(d,i) {
            var initid = "sid" + d[0].toString() + d[1].toString() + d[2];
            return initid.replace(/[,.-]/g, '');
        })
        .text(function(d) { return d[2]; })
        .attr("x", function(d,i) {
            // shiftBool = shifts[Math.floor(Math.random() * shifts.length)];
            if(d[1] == 1) {
                var toReturn = barspace*i + barwidth - 0.6;
                if(d[2] == "IN" || d[2] == "IL" || d[2] == "O") {
                    toReturn = toReturn + 15.15;
                }
                return toReturn;
            } 
            else {
                var toReturn = barspace*i - groupadjust + barwidth - 0.6;
                if(d[2] == "IN" || d[2] == "IL" || d[2] == "O") {
                    toReturn = toReturn + 15.15;
                }
                return toReturn;
            }
        })
        .attr("y", function(d,i) { return -100*d[0] + 0.65 })
        .attr("text-anchor", "middle")
        .attr("stroke", "black")
        .attr("stroke-width", "0.2px")
        .style("opacity", 0)
        .style("font-family", "'DM' Sans, sans-serif")
        .style("font-weight", "normal")
        .style("font-size", 2);

    d3.select(".chart").insert("line").attr("x1","0").attr("x2","118").attr("y1","0").attr("y2","20").attr("stroke-width","5")
}