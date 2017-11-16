/* 
* @Author: Marte
* @Date:   2017-11-15 14:07:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-15 15:08:40
*/

require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1',
        jqueryUI:'../lib/jquery-ui-1.12.1/jquery-ui'
    },
    //依赖性 JQUI依赖于JQ
    shim:{
        jqueryUI:['jquery']
    }
});