window.onload = function(){
	//中英文页面切换
	$("#zyqh_btu").click(function(){
		$(".changeBox").eq(0).toggle();
	});
	//输入内容显示地区
	$("#phone").change(function(){
		if($("#phone").val().length >= 6){
			$(this).css({"text-indent":"82px"});
			$(".phone_qh").eq(0).css({"display":"block"});
		}
	});
	//密码的显示隐藏
	$("#pass_ycxs").click(function(){
		if($("#pass").eq(0).attr("type") == "text"){
			$("#pass").eq(0).attr({"type":"pawssword"});
		}else{
			$("#pass").eq(0).attr({"type":"text"});
		}
	});
	//切换登录方式
	$(".tab_two").eq(0).click(function(){
		$("#sm").eq(0).css({"display":"block"});
		$("div.login_input,div.login_fx").css({"display":"none"});
	});
	$(".tab_noe").eq(0).click(function(){
		$("#sm").eq(0).css({"display":"none"});
		$("div.login_input,div.login_fx").css({"display":"block"});
	});
}