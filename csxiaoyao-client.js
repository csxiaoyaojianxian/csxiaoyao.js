/*
* @Author: csxiaoyaojianxian
* @Date:   2017-02-16 18:30:52
* @Last Modified by:   SUNSHINE
* @Last Modified time: 2017-03-23 00:30:46
*/
(function(csxiaoyao){
    //判断语言
    csxiaoyao.language = (navigator.browserLanguage||navigator.language).toLowerCase();
    //判断是否为移动端(新方法)
    csxiaoyao.isMobile = 'ontouchstart' in document;
    //判断是否为移动端(旧方法)
    function isMobileOld(){
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];
        var flag = false;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = true;
                break;
            }
        }
        return flag;
    }
    csxiaoyao.isMobileOld = isMobileOld();
    //获取屏幕可视区域的宽高
    csxiaoyao.client = function(){
        if(window.innerHeight !== undefined){
            return {
                "width": window.innerWidth,
                "height": window.innerHeight
            }
        }else if(document.compatMode === "CSS1Compat"){
            return {
                "width": document.documentElement.clientWidth,
                "height": document.documentElement.clientHeight
            }
        }else{
            return {
                "width": document.body.clientWidth,
                "height": document.body.clientHeight
            }
        }
    }
    csxiaoyao.elementSite = function (ele) {
        var x = ele.offsetLeft;
        var y = ele.offsetTop;
        return {x:x,y:y};
    }
    csxiaoyao.mouseSite = function (event) {
        event = event || window.event;
        return {x:event.clientX,y:event.clientY};
    }
    csxiaoyao.mousePageSite = function (event,ele) {
        event = event || window.event;
        //获取鼠标在整个页面的位置
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;
        return {x:pagex,y:pagey};
    }
    csxiaoyao.aaa = function (event,ele) {
        event = event || window.event;
        //获取鼠标在整个页面的位置
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;
        //获取盒子在整个页面的位置
        if(arguments.length === 1){
            var xx=0,yy=0;//针对页面的位置
        }else{
            var xx = ele.offsetLeft;
            var yy = ele.offsetTop;
        }
        //用鼠标的位置减去盒子的位置赋值给盒子的内容。
        var targetx = pagex - xx;
        var targety = pagey - yy;
    }

})(csxiaoyao);





// document.onclick = function (event) {
//     //兼容写法
//     event = event || window.event;
//     console.log(event);
//     console.log(event.timeStamp);
//     console.log(event.bubbles);
//     console.log(event.button);
//     console.log(event.pageX); //body
//     console.log(event.pageY); //body
//     console.log(event.screenX); //屏幕
//     console.log(event.screenY); //屏幕
//     console.log(event.target);
//     console.log(event.type);
//     console.log(event.clientX); //浏览器可视区域
//     console.log(event.clientY); //浏览器可视区域
// }
// 
// （1）Width和height
// offset带border
// scroll不带border，内容的宽高
// client不带border
// clientWidth  = width  + padding
// clientHeight  = height + padding
// offsetWidth  = width  + padding + border
// offsetHeight  = height + padding + border
// scrollWidth   = 内容宽度（不包含border）
// scrollHeight  = 内容高度（不包含border）

// （2）top和left
// // offset距离父系盒子带有定位的盒子之间的距离
// // scroll被卷去的部分的距离
// // client指border的宽高
// offsetTop/offsetLeft:
//         调用者：任意元素。(盒子为主)
//         作用：距离父系盒子中带有定位的距离。
// scrollTop/scrollLeft:(盒子也可以调用，必须有滚动条)
//         调用者：document.body.scrollTop/.....(window)
//         作用：浏览器无法显示的部分（被卷去的部分）。
// clientTop/clientLeft:(指的是border，不常用)
        
// （3）clientX和clientY
//         调用者：event.clientX(event)
//         作用：鼠标距离浏览器可视区域的距离（左、上）

