<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 13:00:51
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-16 13:44:35
 */

    $fileurl = './json/data.json';


        // 读取文件内容
        $file = fopen($fileurl, 'r');
        $content = fread($file, filesize($fileurl));
        $arr = json_decode($content,true);

        echo json_encode($arr,JSON_UNESCAPED_UNICODE);

        fclose($file);

?>