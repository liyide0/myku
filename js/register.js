window.onload = function(){
	//定义变量确定账号密码是否按要求填写
	var zhangHu = false;
	var miMa = false;
	var qrMiMa = false;
	var isxieYi = false;
	var yanZhengMa = false;
	//中英文页面切换
	$("#zyqh_btu").click(function(){
		$(".changeBox").eq(0).toggle();
	});
	//显示国家
	function fun1(obj){
		 obj.css({"border-top-color":"transparent","border-bottom-color":"#dcdcdc","top":"16px"});
	};
	function fun2(obj){
		 obj.css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
	};
	//按钮的旋转
	$(".zoneInput_down").click(function(){
		$("#gj").toggle(500,function(){
			if($("#gj").css("display") == "block"){
				fun1($(".zoneInput_down"));
			}else{
				fun2($(".zoneInput_down"));
			}
		});
		
	});
	let boxDom = document.getElementById("gj");
	let arr = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O"];
	for(let i=0;i<15;i++){
		gj(boxDom,17,arr[i]);
	}
	//在输入框输入字显示地区
	let dq = [];
	for(let i=0;i<$("#gj").children().length;i++){
		for(let y=1;y<$("#gj").children().eq(i).children().length;y++){
			dq.push($("#gj").children().eq(i).children().eq(y).html());
		}
	}
	$("#ss").focus(function(){
		$(this).keyup(function(){
			for(){
				if($(this).val().{
				
				}
			}
			
		});
	});
	//输入手机号显示地区
	$("#phone").change(function(){
		if($("#phone").val().length >= 6){
			$(this).css({"text-indent":"82px"});
			$(".phone_qh").eq(0).css({"display":"block"});
			$("#xlb").click(function(){
				$("#phone_gj").eq(0).toggle(500,function(){
					if($("#phone_gj").css("display") == "block"){
						fun1($("#xlb"));
					}else{
						fun2($("#xlb"));
					}
				});
				
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
			liDom.className = "lis";
			ulDom.appendChild(liDom);
			let spanDom = document.createElement("span");
			spanDom.innerHTML = "+"+86;
			liDom.appendChild(spanDom);
		}
		box.appendChild(divDom);
	}
	//判断手机号是否注册过
	function sfzc(data){
		if(data == "0"){
			$("#cwts").html("账号可以使用");
			$("#cwts").css({"opacity":1});
		}else{
			$("#cwts").html("账号已注册");
			$("#cwts").css({"opacity":1});
		}
	}
	//判断手机号是否正确
	$("#phone").blur(function(){
		//手机的规则：11位数字，1开头
		let sj = /^1[1-9]\d{9}$/;
		//电子邮箱的规则：至少3个数字字母下划线@至少2个数字字母下划线.(com|cn|net|com.cn)
		let yx = /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/;
		if($("#phone").val() != ""){
			if(sj.test(this.value) || yx.test(this.value)){
				zhangHu = true;
				$.post("php/registerId.php", {"userId":$("#phone").val()},sfzc);
			}else{
				$("#cwts").html("手机号或者邮箱格式错误");

				$("#cwts").css({"opacity":1});
				zhangHu = false;
			}
		}else{
			$("#cwts").css({"opacity":1});
			$("#cwts").html("手机号或者邮箱不能为空");
			zhangHu = false;
		}
	});
	//随机生成验证码
	function yzm(n){
		var arr=["a","b","c","d","e","f","g","h","0","1","2","3","4","5","6","7","8","9","i"];
		var yz="";
		for(var i=0;i<n;i++){
			var zm = parseInt(Math.random()*arr.length);
			yz += arr[zm];
		}
		return yz;
	}
	//判断验证码
	$("#yanZheng").click(function(){
		let a = yzm(4);
		$("#yanZheng").html(a);
		$("#yz").blur(function(){
			if(a == $("#yz").val()){
				$("#yzm").html("验证正确");
				$("#yzm").css({"opacity":1,"color":"greenyellow"});
				yanZhengMa = true;
			}else{
				$("#yzm").html("验证错误");				
				$("#yzm").css({"opacity":1});							yanZhengMa = false;
			}
		});
		
	});
	//密码的规则：密码由6-16位数字、字母或符号组成、至少包含两种字符
	$("#pass").blur(function(){
		let mm = /^[a-zA-Z0-9]\w{5,14}$/;
		if($("#pass").val() != ""){
			if(mm.test(this.value)){
				$("#region_tip").html("√");
				$("#region_tip").css({"color":"greenyellow","opacity":1});
				miMa = true;
			}else{
				$("#region_tip").html("密码格式错误");
				$("#region_tip").css({"color":"red","opacity":1});
				miMa = false;
			}
		}else{
			$("#region_tip").html("密码不能为空");
			$("#region_tip").css({"color":"red","opacity":1});
			miMa = false;
		}
	});
	//密码的显示隐藏
	$("#pass_ycxs").click(function(){
		if($("#pass").eq(0).attr("type") == "text"){
			$("#pass").eq(0).attr({"type":"password"});
		}else{
			$("#pass").eq(0).attr({"type":"text"});
		}
	});
	$("#pass_zc").click(function(){
		if($("#pass_zcqr").eq(0).attr("type") == "text"){
			$("#pass_zcqr").eq(0).attr({"type":"password"});
		}else{
			$("#pass_zcqr").eq(0).attr({"type":"text"});
		}
	});
	//判断两次输入的密码是否一样
	$("#pass_zcqr").blur(function(){
		if($("#pass").val() == $("#pass_zcqr").val()){
			$("#zcsr").html("两次密码一样");
			$("#zcsr").css({"color":"greenyellow","opacity":1});
			qrMiMa = true;
		}else{
			$("#zcsr").html("两次密码不一样");
			$("#zcsr").css({"color":"red","opacity":1});
			qrMiMa = false;
		}
	});
	//判断是否勾选协议
	$("#checkbox").click(function(){
		let isNo = $(this).attr("checked");
		if(isNo == undefined){
			isxieYi = true;
			$("#checkbox").attr({"checked":"checked"});
		}else{
			isxieYi = false;
			$("#checkbox").removeAttr("checked");
		}
	});
	var zhangHu = false;
	var miMa = false;
	var qrMiMa = false;
	var isxieYi = false;
	//判断是否都填写
	$("#but").click(function(){
		if(zhangHu == true && miMa == true && qrMiMa == true && isxieYi == true && yanZhengMa == true){
			//判断是否注册成功
			$.post("php/register.php", {"userPhone":$("#phone").val(),"userPass":$("#pass").val()},loginCg);
		}else{
			if(zhangHu == true){
				$("#phone").css({"border":"none"})
				if(miMa == true){
					$("#pass").css({"border":"none"})
					if(qrMiMa == true){
						$("#pass_zcqr").css({"border":"none"})
						if(isxieYi == true){
							$("#checkbox").css({"border":"none"})
						}else{
							$("#checkbox").css({"border":"1px solid rde"})
						}
					}else{
						$("#pass_zcqr").css({"border":"1px solid rde"})
					}
				}else{
					$("#pass").css({"border":"1px solid rde"})
				}
			}else{
				$("#phone").css({"border-width":"1px","border-color":"red"})
			}
		}
	});
	//成功后执行
	function loginCg(data){
		if(data == "1"){
			$(".loginTips").eq(0).css({"opacity":0});
			location.href="login.html";
		}else{
			$(".loginTips").eq(0).css({"opacity":1});
		}
	}
}