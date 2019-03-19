window.onload = function(){
	//中英文页面切换
	$("#zyqh_btu").click(function(){
		$(".changeBox").eq(0).toggle();
	});
	//显示国家
	$(".zoneInput_down").click(function(){
		$("#gj").eq(0).toggle();
	});
	let boxDom = document.getElementById("gj");
	let arr = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O"];
	for(let i=0;i<15;i++){
		gj(boxDom,17,arr[i]);
	}
	//在输入框输入首字母显示地区
	$("#ss").focus(function(){
		$(this).keyup(function(){
			
		});
	});
	//输入手机号显示地区
	$("#phone").change(function(){
		if($("#phone").val().length >= 6){
			$(this).css({"text-indent":"82px"});
			$(".phone_qh").eq(0).css({"display":"block"});
			$("#xlb").click(function(){
				$("#phone_gj").eq(0).toggle();
			});
		}else{
			$(this).css({"text-indent":"13px"});
			$(".phone_qh").eq(0).css({"display":"none"});
			$("#gj").eq(0).css({"display":"none"});
		}
	});
	//选择地区(动态创建)
	let phoneBoxDom = document.getElementById("phone_gj");
	for(let i=0;i<15;i++){
		gj(phoneBoxDom,17,arr[i]);
	}
	//在输入框输入首字母显示地区
	$("#phont_ss").focus(function(){
		$(this).keyup(function(){
			
		});
	});
	function gj(box,num,gjszm){
		let divDom = document.createElement("div");
		divDom.style.width = "100%";
		let szm = document.createElement("div");
		szm.className = "gj_szm";
		szm.innerHTML = gjszm;
		divDom.appendChild(szm);
		let ulDom = document.createElement("ul");
		divDom.appendChild(ulDom);
		for(let i=0;i<num;i++){
			let liDom = document.createElement("li");
			liDom.innerHTML = "中国";
			ulDom.appendChild(liDom);
			let spanDom = document.createElement("span");
			spanDom.innerHTML = "+"+86;
			liDom.appendChild(spanDom);
		}
		box.appendChild(divDom);
	}
	//密码的显示隐藏
	$("#pass_ycxs").click(function(){
		if($("#pass").eq(0).attr("type") == "text"){
			$("#pass").eq(0).attr({"type":"pawssword"});
		}else{
			$("#pass").eq(0).attr({"type":"text"});
		}
	});
	$("#pass_zc").click(function(){
		if($("#pass_zcqr").eq(0).attr("type") == "text"){
			$("#pass_zcqr").eq(0).attr({"type":"pawssword"});
		}else{
			$("#pass_zcqr").eq(0).attr({"type":"text"});
		}
	});
	//判断是否注册成功
	$("#but").click(function(){
		$.post("php/register.php", {"userPhone":$("#phone").val(),"userPass":$("#pass").val()},loginCg);
		alert($("#phone").val());
		alert($("#pass").val());
	});
	//成功后执行
	function loginCg(data){
		if(data == "1"){
			$(".loginTips").eq(0).css({"opacity":0});
			location.href="../login.html";
		}else{
			$(".loginTips").eq(0).css({"opacity":1});
		}
	}
}