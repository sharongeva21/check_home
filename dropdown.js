// drop down for the house number
function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<data.length; j++) {
                //tarr.push(headers[j]+":"+data[j]);
				tarr.push(data[j]); // thake just the values without header
            }
            lines.push(tarr);
        }
    }
     
	x = lines
	
	// push each value in x to the dropdown
const home_num = document.getElementById("readHomeNum")

	x.forEach( x => {	const option = document.createElement("option")
		option.textContent = x
		//option.id = t.id
		home_num.appendChild(option)
		})
}
// use processData() and use x
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "homes1.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

///////////////////////////////////////////////////////////////////////////////////////////////////

// dropdown for first name
function processData2(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<data.length; j++) {
                //tarr.push(headers[j]+":"+data[j]);
				tarr.push(data[j]); // thake just the values without header
            }
            lines.push(tarr);
        }
    }
     
	x = lines
	
	// push each value in x to the dropdown
const first_name = document.getElementById("readFirstName")

	x.forEach( x => {	const option = document.createElement("option")
		option.textContent = x
		//option.id = t.id
		first_name.appendChild(option)
		})
}
// use processData() and use x
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "firts_name.csv",
        dataType: "text",
        success: function(data) {processData2(data);}
     });
});
///////////////////////////////////////////////////////////////////////////////////////////////////

// dropdown for second name
function processData3(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<data.length; j++) {
                //tarr.push(headers[j]+":"+data[j]);
				tarr.push(data[j]); // thake just the values without header
            }
            lines.push(tarr);
        }
    }
     
	x = lines
	
	// push each value in x to the dropdown
const second_name = document.getElementById("readSecondName")

	x.forEach( x => {	const option = document.createElement("option")
		option.textContent = x
		//option.id = t.id
		second_name.appendChild(option)
		})
}
// use processData() and use x
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "second_name.csv",
        dataType: "text",
        success: function(data) {processData3(data);}
     });
});



