// ==UserScript==
// @name         51CTO不绑定微信
// @namespace    https://qinlili.bid
// @version      0.2
// @description  无需绑定微信就能看免费课
// @author       琴梨梨
// @match        https://edu.51cto.com/course/*.html
// @icon         https://edu.51cto.com/favicon.ico
// @grant        none
// @license      WTFPL
// ==/UserScript==

(function() {
    'use strict';
    (function(open) {

        oldXML.prototype.open = function(method, url, async, user, pass) {
            if(url.indexOf("wechat-status")>0){
                url= "data:application/json;base64,eyJzdGF0dXMiOjEsIm1zZyI6IiIsImRhdGEiOjExNDUxNH0=";
            }
            open.call(this, method, url, async, user, pass);
        };

    })(oldXML.prototype.open);
})();
