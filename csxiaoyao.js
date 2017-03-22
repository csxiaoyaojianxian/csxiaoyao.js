/*
* @Author: SUNSHINE
* @Date:   2017-03-22 16:09:57
* @Last Modified by:   SUNSHINE
* @Last Modified time: 2017-03-22 19:40:34
*/

'use strict';

(function(window, undefined){

	var csxiaoyao = (function() {
		// 构建csxiaoyao对象
		var csxiaoyao = function( selector, context ) {
			return new csxiaoyao.fn.init( selector, context, root );
		}

		// csxiaoyao对象原型
		csxiaoyao.fn = csxiaoyao.prototype = {
			constructor: csxiaoyao,
			init: function( selector, context, root ) {
				if ( !selector ) {
					return this;
				}
				// 其他分支 ……
			}
		}

		// csxiaoyao.fn.init原型赋值，便于实例化
		csxiaoyao.fn.init.prototype = csxiaoyao.fn;

		// 在csxiaoyao上扩展静态方法
		csxiaoyao.extend = csxiaoyao.fn.extend = function() {

		};
		return csxiaoyao;
	})();

	window.csxiaoyao = window.$$ = csxiaoyao;

})(window);