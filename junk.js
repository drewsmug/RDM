var t;
function incrementor() {
    var chosen = $('.increment').eq(Math.floor(Math.random()* 5));
    var previousNum = chosen.text();
    var newNum = parseInt(previousNum) + 1;
    chosen.text(newNum);
    t = setTimeout("incrementor()", 10000);
}
$(document).ready(function() {
    t = setTimeout("incrementor()", 3000)
});