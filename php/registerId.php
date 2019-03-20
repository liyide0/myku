<?php
	header("Content-type:text/html;charset:utf-8");
	$ursNum = $_POST["userId"];
	//链接数据库
	$conn = mysql_connect("localhost:3306","root","root");
	if(!$conn){
		echo "服务器出错";
	}else{
		//选择数据库
		mysql_select_db("oppo",$conn);
		//传输数据
		$sqltr = "select * from zhanghu where vipPhone='$ursNum'";
		//查询语句的返回值是个表格
		$result = mysql_query($sqltr,$conn);
		mysql_close($conn);
		$rows = mysql_num_rows($result);
		if($rows==1){
			//3、响应
	     	echo "1";//账号可以使用！
	    }else{     	
			//3、响应
	     	echo "0";//账号已被占用！
	    }
	}
	
?>