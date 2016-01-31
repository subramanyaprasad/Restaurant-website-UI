function onViewReservationClick()
{
    document.getElementById("idViewReservation").className="";
}
function showDiv() {
    document.getElementById("details").style.display = "block";
}


$(document).ready(function() {
    $("#temp3").hide();
    $("#temp1").focus();
    var placeHolder = 0;
    var text_item= "Welcome to Tastebuds...";
    var d = new Date();
    var yyyy = d.getFullYear().toString();
    var mm = (d.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = d.getDate().toString();

    var x = yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
    console.log(x);
    document.getElementById("demo").setAttribute('min',x);

    var textAdder = setInterval(function(){
        document.getElementById('temp100').innerHTML += text_item.charAt(placeHolder);
        if (++placeHolder == text_item.length){
            clearInterval(textAdder);
        }
    }, 25);

});
$("#guest").click(function(){
    $("#temp1").show();
    $("#temp3").hide();


});

$("#owner").click(function(){
    $('#temp3').show();
    $('#temp1').hide();
    /*$('#temp3').css( 'background-color',' rgba(255, 255, 255, 0.75)');
    $('#temp4').css( 'background-color',' rgba(255, 255, 255, 0.25)');*/

});

