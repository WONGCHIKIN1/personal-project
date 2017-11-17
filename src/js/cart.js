/* 
* @Author: Marte
* @Date:   2017-11-15 16:08:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 20:19:31
*/

//因为jq和jqUI通过配置文件 因此不用写路径 
//而其他文件因为与config同一目录下因此直接写名字即可
require(['config'],function(){
    require(['jquery','jqueryUI','common'],function($){
        $('.footer').load('../html/footer.html',function(){
            //获取用户名和密码
            var url = location.search ? location.search : '';
            var data = url.slice(1).split('&');
            data1 = data[0].split('=')[1];
            // data2 = data[1];
            //
            //重置点击链接（附带用户名密码）
            $('.line').prev().prev().attr('href','../index.html'+url);
            $('.title').find('a').attr('href','../index.html'+url);
            //设置页面用户名
            if(data1 != ''){
                $('.num').next().css({display:'none'});
                $('.uname').css({display:'inline-block'}).html('Hi,'+data1+' 欢迎回嘉!').next().html('[退出]').attr('href','../html/login.html');
                

            }
        })
    })
})