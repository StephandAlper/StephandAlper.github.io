$("#timeline").on("click", () => {
	$("#gallery").slideToggle();
	$("#qualitiesList").slideUp();
	$("#video").slideUp();
	$("#timer").slideUp();
});

$("#qualities").on("click", () => {
	$("#gallery").slideUp();
	$("#qualitiesList").slideToggle();
	$("#video").slideUp();
	$("#timer").slideUp();
});

$("#videoB").on("click", () => {
	$("#gallery").slideUp();
	$("#qualitiesList").slideUp();
	$("#video").slideToggle();
	$("#timer").slideUp();
});

$("#timerB").on("click", () => {
	$("#gallery").slideUp();
	$("#qualitiesList").slideUp();
	$("#video").slideUp();
	$("#timer").slideToggle();
});

$("#part1B").on("click", () => {
	$("#part1").slideToggle();
	$("#part2").slideUp();
});

$("#part2B").on("click", () => {
	$("#part1").slideUp();
	$("#part2").slideToggle();
});

$('.heart').on('mouseover', () => {
    animateDiv();
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.heart').animate({ top: newq[0], left: newq[1] });
    
};

function startTime() {
    var today = new Date();
	var y = today.getFullYear() - 2013;
	var m = today.getMonth() - 4;
	var d = today.getDate() - 9;
	var h = today.getHours();
	var min = today.getMinutes();
	var s = today.getSeconds();
	
	$('#timeDated').text(y + " years, " + m + " months, " + d + " days, " + h + " hours, " + min + " minutes, and " + s + " seconds!"); 
	
	var t = setTimeout(startTime, 500);
}

function fixTime(year, day, month) {
	var y = year;
	var d = day;
	var m = month;
	
	if(d < 0){
		m--;
		d += 30;
	}
	if(m < 0){
		y--;
		m += 12;
	}
	return [y,d,m];
}