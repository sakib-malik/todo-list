
//strike through the clicked li
$("ul").on("click", "li", function(){
    $(this).toggleClass("strike");
});

//delete todo on click
$("ul").on("click", "span", function(){
	//remove the li containing this span
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

//get input and add to todo list
$("input").keypress(function(event){
if(event.key==="Enter"){
	var todo = $(this).val();
	$("ul").append("<li><span><i class = 'fa fa-trash-alt'></i></span> "+todo+"</li>");
	$(this).val("");
}
});
//toggle input on clicking the plus
$(".fa.fa-plus").click(function(){
	$("input").fadeToggle();
});



