/*
* @Author: csxiaoyaojianxian
* @Date:   2017-02-16 18:30:52
* @Last Modified by:   SUNSHINE
* @Last Modified time: 2017-03-22 22:40:21
*/
(function(csxiaoyao){
	csxiaoyao.key = function(event){ 
		var e = event ? event :(window.event ? window.event : null); 
		return e.keyCode;
	}
	csxiaoyao.mouse = function(event){ 
		var e = event ? event :(window.event ? window.event : null); 
		return e.button;
	}
})(csxiaoyao);