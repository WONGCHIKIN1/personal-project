/* 
* @Author: Marte
* @Date:   2017-11-15 16:09:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 19:01:50
*/

//因为jq和jqUI通过配置文件 因此不用写路径 
//而其他文件因为与config同一目录下因此直接写名字即可
require(['config'],function(){
    require(['jquery','jqueryUI','common'],function($){
        $('.footer').load('../html/footer.html',function(){

            //封装 随机数验证码 函数
            function rdNum(){
                let rd = parseInt(Math.random()*(10000)) + 0;
                let rdNum = rd < 1000 ? '0' + rd : rd;
                rdNum = rd < 100 ? '00' + rd : rdNum;
                rdNum = rd < 10 ? '000' + rd : rdNum;
                $(':text').eq(1).next().html(rdNum);
            }
            //进入页面是执行一次函数
            rdNum();
            

            $('button').on('click',function(){
                event.preventDefault();
                //保存手机号码
                let phoneNumber = $(':text').eq(0).val();
                //用保存密码
                let password = $(':password').val();


                //非空验证
                if(phoneNumber == ''){
                    $(':text').eq(0).next().html('请输入手机号');
                    return;
                }else{
                    $(':text').eq(0).next().html('');
                }
                if(password == ''){
                    $(':password').next().html('请输入密码');
                    return;
                }else{
                    $(':password').next().html('');
                }

                var code = $(':text').eq(1).html() - 0;
                //验证码判断
                if(code == rdNum-0){
                    $(':text').eq(1).next().next().html('请输入正确的验证码');
                    rdNum();
                    $(':text').eq(1).val('');
                    return;
                }else{
                    $(':text').eq(1).next().next().html('验证正确!');
                    $(':text').eq(1).val('');
                }

                //手机号(用户名)、密码验证
                $.ajax({
                        url: '../api/login.php',
                        type: 'get',
                        // dataType: 'json',
                        data: {phone: phoneNumber,password:password},
                        success:function(res){
                            console.log(res);
                            if(res === 'not_existed'){
                                $(':text').eq(0).next().html('手机号码不存在，请重新输入手机号码！');
                                    return;
                            }else{
                                $(':text').eq(0).next().html('');
                            }

                            if(res === 'wrong_password'){
                                $(':password').next().html('密码错误，请重新输入密码！');
                                return;
                            }else{
                                 $(':password').next().html('');
                            }

                            if(res !== 'wrong_password' || res != 'not_existed'){
                                location.href = '../html/cart.html?phoneNumber='+phoneNumber+'&password='+res;
                            }
                        }
                    })
            });
        })
    })
})