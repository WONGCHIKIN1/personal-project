/* 
* @Author: Marte
* @Date:   2017-11-15 14:10:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-16 20:56:10
*/

//因为jq和jqUI通过配置文件 因此不用写路径 
//而其他文件因为与config同一目录下因此直接写名字即可
require(['config'],function(){
    require(['jquery','jqueryUI','common'],function($){
        $('.footer').load('../html/footer.html',function(){
                    //轮播图
                    // $('.carousel li').eq(4).delay(3000).animate({opacity:0},300);
                    // $('.carousel li').eq(3).delay(6000).animate({opacity:0},300);
                    // $('.carousel li').eq(2).delay(9000).animate({opacity:0},300);
                    // $('.carousel li').eq(1).delay(12000).animate({opacity:0},300);
                    // $('.carousel li').eq(0).delay(15000).animate({opacity:0},300,function(){
                    //     $('.carousel li').eq(5).animate({opacity:1},300)
                    // });
                //
                //
                //获取页面数据
                    $.ajax({
                        url: '../api/index.php',
                        type: 'GET',
                        dataType: 'json',
                        success: function(res){
                            console.log(res[4]);
                            $('.item_list1_l>a').html('<img src='+res[0].imgurl+'>');
                            $('.item_list2_l>a').html('<img src='+res[1].imgurl+'>');
                            $('.item_list2_c>a').html('<img src='+res[2].imgurl+'>');

                            $('li:nth-of-type(3n) .ig').html('<img src='+res[3].imgurl+'>');
                            $('li:nth-of-type(3n) p a').html(res[3].name);
                            $('li:nth-of-type(3n) span').html('￥'+res[3].price);

                            $('li:nth-of-type(3n-1) .ig').html('<img src='+res[4].imgurl+'>');
                            $('li:nth-of-type(3n-1) p a').html(res[4].name);
                            $('li:nth-of-type(3n-1) span').html('￥'+res[4].price);

                            $('li:nth-of-type(3n-2) .ig').html('<img src='+res[5].imgurl+'>');
                            $('li:nth-of-type(3n-2) p a').html(res[5].name);
                            $('li:nth-of-type(3n-2) span').html('￥'+res[5].price);

                            $('.il4bottom').html('<img src='+res[6].imgurl+'>');

                            $('.hot_item_list:nth-of-type(2n)>a').html('<img src='+res[7].imgurl+'>');
                            $('.hot_item_list:nth-of-type(2n) p a').html(res[7].name);
                            $('.hot_item_list:nth-of-type(2n) span').html('￥'+res[7].price);

                            $('.hot_item_list:nth-of-type(2n-1)>a').html('<img src='+res[8].imgurl+'>');
                            $('.hot_item_list:nth-of-type(2n-1) p a').html(res[8].name);
                            $('.hot_item_list:nth-of-type(2n-1) span').html('￥'+res[8].price);
                        }
                    })
                     
                
            //购物车按钮点击切换页面
            $('.cart').on('click',function(){
                location.href = '../html/login.html'
            })

        })
    })
})