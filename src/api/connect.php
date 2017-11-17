<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 19:48:39
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-16 19:49:23
 */
    // 配置参数
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'personal-project';

    // 连接数据库
    $conn = new mysqli($servername,$username,$password ,$database);//得到实例对象

    // 检测连接
    if($conn->connect_errno){
        die('连接失败'.$conn->connect_error);
    }

    // 设置编码
    $conn->set_charset('utf8');
?>