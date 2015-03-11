

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
        theId = "#" + "healthcare";
        theClass = "." + "healthcare";
		c=2;}
   		else if(c == 2){
        theId = "#" + "education";
        theClass = "." + "education";
		c=3;}
   		else if(c == 3){
        theId = "#" + "finance";
        theClass = "." + "finance";
		c=4;}
   		else if(c == 4){
        theId = "#" + "services";
        theClass = "." + "services";
		c=5;}
   		else if(c == 5){
        theId = "#" + "sales";
        theClass = "." + "sales";
		c=1;}
		
        if(theId != "#" + $('.work_images .selected2').attr('id') && theEvent == false) 
		{
			var theTarget = $(theClass).find('img');
			$('#work_image_select li img[src="image/selected.png"]').attr('src', 'image/selected_not.png');
        $('#splash_select li img[src="image/selected.png"]').attr('src', 'image/selected_not.png');
            theEvent = true;
            $('.work_images .selected2').animate({
                left: '-100%'
            }, 1000, function() {
				theTarget.attr('src', 'image/selected.png');
                $(this).removeClass('selected2').css({'left' : '100%'});
                theEvent = false;
            });
            $(theId).animate({
                left: '0%'
            }, 1000, function() {
                $(this).addClass('selected2');
                theEvent = false;
            });
        }
	
}

$(document).ready(function() 
{
    $('#work_image_select li').click(function() 
	{
		/*STOP THE TIMER*/
		
		clearTimeout(timer);
		timer_is_on=0;
		
        theId = "#" + $(this).attr('class');
		
        if(theId != "#" + $('.work_images .selected2').attr('id') && theEvent == false) 
		{
			var theTarget = $(this).find('img');
			$('#work_image_select li img[src="image/selected.png"]').attr('src', 'image/selected_not.png');
            theEvent = true;
            $('.work_images .selected2').animate({
                left: '-100%'
            }, 1000, function() {
				theTarget.attr('src', 'image/selected.png');
                $(this).removeClass('selected2').css({'left' : '100%'});
                theEvent = false;
            });
            $(theId).animate({
                left: '0%'
            }, 1000, function() {
                $(this).addClass('selected2');
                theEvent = false;
            });
        }
    });
});