/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {  
    
// //1. 
$("button.alertme").click(function(){
    alert("jQuery seems easy so far!");
});
   
//2.  
$("button.clickme").click(function(){
    alert("I was clicked");
});
    
//3. 
$("button.addStyle").click(function(){
    $("button").addClass("buttonStyle")
})
	    
//4.
$("button.addDifferentStyle").click(function(){
    $("button.addDifferentStyle").addClass("addUniqueStyle")
})

//5. 
$("button.removeBtn").click(function(){
    $("button").removeClass("buttonStyle")
    $("button").removeClass("addUniqueStyle")
})
	
// //6.
$("button.clickToggle").click(function(){
    // $(this).addClass("buttonStyle")
    $(this).toggleClass("buttonStyle")
})
	
//7.
$("button.squareBtn").click(function(){
    $(".square").hide()
})
	
	
//8.
$(".circle").click(function(){
    $(".circle").hide()
})


//9.
$("button.toggleRedSquare").click(function(){
    // $(".redSquare").toggleClass("redSquare")
    // $(this).toggleClass()
    // var mo = $("redSquare")
    // mo.animate({left: '100px'}, 'fast')
    $(".redSquare").toggleClass()
    // {duration: 1500}

    // $( this ).toggleClass( "big-blue", 1000, "easeOutSine" );
})


});  // Close: $(document).ready(function() { 
	
	

	
	
