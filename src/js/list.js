/* 
* @Author: Marte
* @Date:   2017-11-15 16:09:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-16 17:30:03
*/

//因为jq和jqUI通过配置文件 因此不用写路径 
//而其他文件因为与config同一目录下因此直接写名字即可
require(['config'],function(){
    require(['jquery','jqueryUI','common'],function($){
        $('.header').load('../html/header.html',function(){
            $('.footer').load('../html/footer.html',function(){
                //左边栏伸缩功能
                $('.list_title').on('click',function(){

                    if($(this).next().css('height').slice(0,-2)-0 <= 1){
                        $('.list_title').siblings('div').next().css({height:0});
                        $(this).next().css({height:'100%'});
                    }
                    else if($(this).next().css('height').slice(0,-2)-0 > 1){
                        $(this).next().css({height:0});
                    }
                })

                //分类：tab标签切换
                $('.list_choose p:first-child a:nth-of-type(1)').css({backgroundColor:'#E91456',color:'#fff'});
                $('.list_choose p:first-child i').on('click',function(){
                    $(this).closest('a').siblings('a').css({backgroundColor:'#fff',color:'#444'});
                    $(this).closest('a').css({backgroundColor:'#E91456',color:'#fff'});
                })
                

                //二级分类：tab标签切换
                $('.list_choose p:last-child a:nth-of-type(1)').css({backgroundColor:'#E91456',color:'#fff'});
                $('.list_choose p:last-child i').on('click',function(){
                    $(this).closest('a').siblings('a').css({backgroundColor:'#fff',color:'#444'});
                    $(this).closest('a').css({backgroundColor:'#E91456',color:'#fff'});
                })
            })
        })
    })
})