      $(document).ready(function () {
        $('#main_content').headsmart()
      })
	  
	  
	  
      $(document).ready(function(){
    $(".main").click(function(){
        $(".derivatives").fadeIn();
		$(".line").fadeIn();
    });
});

$(document).ready(function(){
    $(".main").dblclick(function(){
		$("#definition").animate({opacity:'toggle'}, 400);
    });
});



function OpenComputer() {
    window.open("computer.html");
}


function Info() {
   window.alert("Click once to reveal all related words. Double click center word to reveal definition");
}
