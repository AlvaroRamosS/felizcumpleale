function noclick(){
    alert('I told you not to click reeeee');
}


$("#do").click(function (e) { 
    e.preventDefault();

    alert('yess that felt good');
    
});