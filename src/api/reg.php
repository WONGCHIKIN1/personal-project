<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 20:58:48
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-17 11:36:37
 */
    include 'connect.php';

    // 接受前端数据
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    //查看用户名是否已经存在
    $sql = "select phone from user_data where phone='$phone'";
    $result = $conn->query($sql);

    if($result->num_rows>0){
        // 释放查询内存(销毁)
        $result->free();

        // 用户名已经被占用
        echo "fail";
    }else{
        // 释放查询内存(销毁)
        $result->free();

        // 密码md5加密
        $password = md5($password);echo "$password";

        $sql = "insert into user_data(phone,password) values('$phone','$password')";
        $result = $conn->query($sql);


        if ($result) {
            // 写入成功
            echo "ok";
        } else {
            // 写入失败
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
?>