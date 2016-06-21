$(".product-hide").hide();

$(document).ready(function(){
	$(".product-btn").click(function(){
		if($(".product-hide").css('display') == "none"){
			$(".product-hide").show();
		} else {
			$(".product-hide").hide();
		}
		
	});
});