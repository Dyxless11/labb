$(function(){
$(".postBut").click(function(){
	var t=$('.text_comment').val();
	$('.comments').append('<p>'+t+'</p>');
	$('.text_comment').val('');
});
});