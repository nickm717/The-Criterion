//FLOAT LABEL FORM
$(function(){
	var onClass = "on";
	var showClass = "show";

	$("input,textarea").bind("checkval",function(){
		var label = $(this).parent().prev("label");
		if(this.value !== ""){
			label.addClass(showClass);
		} else {
			label.removeClass(showClass);
		}
	}).on("keyup",function(){
		$(this).trigger("checkval");
	}).on("focus",function(){
		$(this).parent().prev("label").addClass(onClass);
	}).on("blur",function(){
			$(this).parent().prev("label").removeClass(onClass);
	}).trigger("checkval");
});
