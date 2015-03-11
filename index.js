

/*****
	 *
	 *	Enabling auto-advance.
	 *
	 ****/
var timer_is_on=1;
var timer;
var c = 1;
	 
function autoadvance(){
    changeimage();
    timer=setTimeout("autoadvance()",5000);
}
/********************/


var theEvent = false;
var theld;

function changeimage()
{
    if(c == 1){
        theId = "#" + "one";
        theClass = "." + "one";
        c=2;
    }
    else if(c == 2){
        theId = "#" + "two";
        theClass = "." + "two";
        c=3;
    }
    else if(c == 3){
        theId = "#" + "three";
        theClass = "." + "three";
        c=1;
    }
   
    if(theId != "#" + $('.splash-content .selected').attr('id') && theEvent == false)
    {
        var theTarget = $(theClass).find('img');
        $('#splash_select li img[src="image/selected.png"]').attr('src', 'image/selected_not.png');
        theEvent = true;
        $('.splash-content .selected').animate({
            left: '-100%'
        }, 1000, function() {
            theTarget.attr('src', 'image/selected.png');
            $(this).removeClass('selected').css({
                'left' : '100%'
            });
            theEvent = false;
        });
        $(theId).animate({
            left: '0%'
        }, 1000, function() {
            $(this).addClass('selected');
            theEvent = false;
        });
    }
}


$(document).ready(function() 
{
    $('#splash_select li').click(function() 
    {
        /*STOP THE TIMER*/
		
        clearTimeout(timer);
        timer_is_on=0;
		
        theId = "#" + $(this).attr('class');
		
		
        if(theId != "#" + $('.splash-content .selected').attr('id') && theEvent == false) 
        {
            var theTarget = $(this).find('img');
		
            $('#splash_select li img[src="image/selected.png"]').attr('src', 'image/selected_not.png');
            theEvent = true;
            $('.splash-content .selected').animate({
                left: '-100%'
            }, 1000, function() {
                theTarget.attr('src', 'image/selected.png');
                $(this).removeClass('selected').css({
                    'left' : '100%'
                });
                theEvent = false;
            });
            $(theId).animate({
                left: '0%'
            }, 1000, function() {
                $(this).addClass('selected');
                theEvent = false;
            });
        }
    });
});