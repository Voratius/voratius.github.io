      $(document).ready(function () {
        $('#main_content').headsmart()
      })
      $(document).ready(function(){
    $(".main").click(function(){
        $(".derivatives").fadeIn();
		$(".line").fadeIn();
    });
});
function OpenComputer() {
    window.open("computer.html");
}


function Info() {
   window.alert("Click once to reveal all related words. Double click to open new page");
}

function distributeFields() {
    var radius = 200;
    var fields = $('.derivatives'), container = $('#network'),
        width = container.width(), height = container.height(),
        angle = 0, step = (2*Math.PI) / fields.length;
    fields.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
}



