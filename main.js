

$(document).ready(function () {
    
    $( "#hidden" ).hide();


});




$("#continue").click(function (e) { 
    e.preventDefault();

    $( "#hidden" ).show();
    
});
