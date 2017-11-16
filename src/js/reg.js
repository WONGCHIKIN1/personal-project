/* 
* @Author: Marte
* @Date:   2017-11-15 16:09:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-15 16:38:09
*/

//因为jq和jqUI通过配置文件 因此不用写路径 
//而其他文件因为与config同一目录下因此直接写名字即可
require(['config'],function(){
    require(['jquery','jqueryUI','common'],function($){
        $('.footer').load('../html/footer.html')
    })
})