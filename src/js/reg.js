/* 
* @Author: Marte
* @Date:   2017-11-15 16:09:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 11:58:32
*/

//因为jq和jqUI通过配置文件 因此不用写路径 
//而其他文件因为与config同一目录下因此直接写名字即可
require(['config'],function(){
    require(['jquery','jqueryUI','common'],function($){
        $('.footer').load('../html/footer.html',function(){
                $('button').on('click',function(){
                     //验证成功则用保存手机号码
                     let phoneNumber;
                     // //验证成功则用保存密码
                     let password;


                    //手机号验证
                    if(!/^[1][3,5,7,8][\d]{9}$/.test($(':text').val())){
                        $(':text').next('i').html('请输入手机号码');
                        return;
                    }else{
                        $(':text').next('i').html('');
                        //验证成功则用保存手机号码
                        phoneNumber = $(':text').val();
                    };

                    //密码验证
                    if(!/^[\da-zA-Z~!@#$%^&*()_+-=\;\'\:\"\,\.\<\>\?\/\{\}\[\]\`\|\\]{6,}$/.test($(':password').eq(0).val())){
                        $(':password').eq(0).next('i').html('请输入至少六位数的密码');
                        return;
                    }else{
                        $(':password').eq(0).next('i').html('');
                        password = $(':password').eq(0).val();
                    }
                    
                    //确认密码验证
                    if($(':password').eq(0).val() != $(':password').eq(1).val()){
                        $(':password').eq(1).next('i').html('请再次输入相同的密码');
                        return;
                    }else{
                        $(':password').eq(1).next('i').html('');
                    }

                    //条款同意验证
                    if($(':checkbox').prop('checked') == false){
                        $(':checkbox').nextAll('i').html('请同意嘉丽购物网服务条款');
                        return;
                    }else{
                         $(':checkbox').nextAll('i').html('');
                    }


                    $.ajax({
                        url: '../api/reg.php',
                        type: 'get',
                        // dataType: 'json',
                        data: {phone: phoneNumber,password:password},
                        success:function(res){
                            console.log(res);
                            //若存在手机号则报错且清空手机号和密码
                            if(res == 'fail'){
                                alert('操作失败！已存在手机号');
                                $(':text').val('');
                                $(':password').eq(0).val('');
                                $(':password').eq(1).val('');
                            }
                            if(res != 'fail'){
                                alert('注册成功！请重新登录账户');
                                location.href = '../html/login.html';
                            }
                        }
                    })
                    
                });
        });
    });
});