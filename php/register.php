<?php
	header("Content-type:text/html;charset:utf-8");
	$userPhone = $_POST["userPhone"];
	$userPass = $_POST["userPass"];
	
	$conn = mysql_connect("localhost:3306","root","root");
	if(!$conn){
		echo "服务器出错";
	}else{
		mysql_select_db("oppo",$conn);
		
		$sqlstr = "insert into zhanghu(vipPhone,vipPass)
       values('$userPhone','$userPass')";
		
		$res = mysql_query($sqlstr,$conn);
		
		mysql_close($conn);
		
		if($res>0){
			echo "1";
		}else{
			echo "0";
		};
	}
?>