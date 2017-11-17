<?php
/**
 * @Author: Marte
 * @Date:   2017-11-17 13:12:38
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-17 16:37:02
 */
    include 'connect.php';

    // 接受前端数据
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    // 密码md5加密
    $password = md5($password);
    // echo "$password";

     //查看用户名是否已经存在
    $sql = "select phone from user_data where phone='$phone'";
    $result = $conn->query($sql);

    if($result->num_rows>0){
        // 释放查询内存(销毁)
        $result->free();
        // 如果用户名已经存在，则判断密码
        $sqlpass = "select password from user_data where password='$password' and phone='$phone'";
        $resultpass = $conn->query($sqlpass);
        // // 如果密码已经存在，判断用户登录成功
        if($resultpass->num_rows>0){
            echo "$password";
        }else{
            echo "wrong_password";
        }

    }
    else{
        echo "not_existed";
    }
?>