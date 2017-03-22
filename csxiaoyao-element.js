/*
* @Author: SUNSHINE
* @Date:   2017-03-23 00:05:42
* @Last Modified by:   SUNSHINE
* @Last Modified time: 2017-03-23 00:06:04
*/

'use strict';

function show(ele){
    ele.style.display = "block";
}

/**
 * 获取元素样式兼容写法
 * @param ele
 * @param attr
 * @returns {*}
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}