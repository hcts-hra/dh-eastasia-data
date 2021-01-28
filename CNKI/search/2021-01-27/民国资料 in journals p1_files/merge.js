﻿/*
* jQuery Migrate - v1.1.1 - 2013-02-16
* https://github.com/jquery/jquery-migrate
* Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
*/
(function(g,r,w){var y={};g.migrateWarnings=[];if(!g.migrateMute&&r.console&&console.log){}if(g.migrateTrace===w){g.migrateTrace=true}g.migrateReset=function(){y={};g.migrateWarnings.length=0};function D(G){if(!y[G]){y[G]=true;g.migrateWarnings.push(G);if(r.console&&console.warn&&!g.migrateMute){}}}function j(K,H,G,I){if(Object.defineProperty){try{Object.defineProperty(K,H,{configurable:true,enumerable:true,get:function(){D(I);return G},set:function(L){D(I);G=L}});return}catch(J){}}g._definePropertyBroken=true;K[H]=G}if(document.compatMode==="BackCompat"){D("jQuery is not compatible with Quirks Mode")}var d=g("<input/>",{size:1}).attr("size")&&g.attrFn,a=g.attr,i=g.attrHooks.value&&g.attrHooks.value.get||function(){return null},v=g.attrHooks.value&&g.attrHooks.value.set||function(){return w},c=/^(?:input|button)$/i,b=/^[238]$/,q=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,h=/^(?:checked|selected)$/i;j(g,"attrFn",d||{},"jQuery.attrFn is deprecated");g.attr=function(J,G,L,H){var I=G.toLowerCase(),K=J&&J.nodeType;if(H){if(a.length<4){D("jQuery.fn.attr( props, pass ) is deprecated")}if(J&&!b.test(K)&&(d?G in d:g.isFunction(g.fn[G]))){return g(J)[G](L)}}if(G==="type"&&L!==w&&c.test(J.nodeName)&&J.parentNode){D("Can't change the 'type' of an input or button in IE 6/7/8")}if(!g.attrHooks[I]&&q.test(I)){g.attrHooks[I]={get:function(O,M){var P,N=g.prop(O,M);return N===true||typeof N!=="boolean"&&(P=O.getAttributeNode(M))&&P.nodeValue!==false?M.toLowerCase():w},set:function(O,M,P){var N;if(M===false){g.removeAttr(O,P)}else{N=g.propFix[P]||P;if(N in O){O[N]=true}O.setAttribute(P,P.toLowerCase())}return P}};if(h.test(I)){D("jQuery.fn.attr('"+I+"') may use property instead of attribute")}}return a.call(g,J,G,L)};g.attrHooks.value={get:function(I,G){var H=(I.nodeName||"").toLowerCase();if(H==="button"){return i.apply(this,arguments)}if(H!=="input"&&H!=="option"){D("jQuery.fn.attr('value') no longer gets properties")}return G in I?I.value:null},set:function(I,G){var H=(I.nodeName||"").toLowerCase();if(H==="button"){return v.apply(this,arguments)}if(H!=="input"&&H!=="option"){D("jQuery.fn.attr('value', val) no longer sets properties")}I.value=G}};var e,F,f=g.fn.init,l=g.parseJSON,x=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;g.fn.init=function(I,H,J){var G;if(I&&typeof I==="string"&&!g.isPlainObject(H)&&(G=x.exec(I))&&G[1]){if(I.charAt(0)!=="<"){D("$(html) HTML strings must start with '<' character")}if(H&&H.context){H=H.context}if(g.parseHTML){return f.call(this,g.parseHTML(g.trim(I),H,true),H,J)}}return f.apply(this,arguments)};g.fn.init.prototype=g.fn;g.parseJSON=function(G){if(!G&&G!==null){D("jQuery.parseJSON requires a valid JSON string");return null}return l.apply(this,arguments)};g.uaMatch=function(H){H=H.toLowerCase();var G=/(chrome)[ \/]([\w.]+)/.exec(H)||/(webkit)[ \/]([\w.]+)/.exec(H)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(H)||/(msie) ([\w.]+)/.exec(H)||H.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(H)||[];return{browser:G[1]||"",version:G[2]||"0"}};if(!g.browser){e=g.uaMatch(navigator.userAgent);F={};if(e.browser){F[e.browser]=true;F.version=e.version}if(F.chrome){F.webkit=true}else{if(F.webkit){F.safari=true}}g.browser=F}j(g,"browser",g.browser,"jQuery.browser is deprecated");g.sub=function(){function G(K,J){return new G.fn.init(K,J)}g.extend(true,G,this);G.superclass=this;G.fn=G.prototype=this();G.fn.constructor=G;G.sub=this.sub;G.fn.init=function I(K,J){if(J&&J instanceof g&&!(J instanceof G)){J=G(J)}return g.fn.init.call(this,K,J,H)};G.fn.init.prototype=G.fn;var H=G(document);D("jQuery.sub() is deprecated");return G};g.ajaxSetup({converters:{"text json":g.parseJSON}});var C=g.fn.data;g.fn.data=function(G){var J,I,H=this[0];if(H&&G==="events"&&arguments.length===1){J=g.data(H,G);I=g._data(H,G);if((J===w||J===I)&&I!==w){D("Use of jQuery.fn.data('events') is deprecated");return I}}return C.apply(this,arguments)};var E=/\/(java|ecma)script/i,t=g.fn.andSelf||g.fn.addBack;g.fn.andSelf=function(){D("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");return t.apply(this,arguments)};if(!g.clean){g.clean=function(J,M,H,O){M=M||document;M=!M.nodeType&&M[0]||M;M=M.ownerDocument||M;D("jQuery.clean() is deprecated");var G,N,K,L,I=[];g.merge(I,g.buildFragment(J,M).childNodes);if(H){K=function(P){if(!P.type||E.test(P.type)){return O?O.push(P.parentNode?P.parentNode.removeChild(P):P):H.appendChild(P)}};for(G=0;(N=I[G])!=null;G++){if(!(g.nodeName(N,"script")&&K(N))){H.appendChild(N);if(typeof N.getElementsByTagName!=="undefined"){L=g.grep(g.merge([],N.getElementsByTagName("script")),K);I.splice.apply(I,[G+1,0].concat(L));G+=L.length}}}}return I}}var A=g.event.add,s=g.event.remove,B=g.event.trigger,o=g.fn.toggle,p=g.fn.live,z=g.fn.die,n="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",u=new RegExp("\\b(?:"+n+")\\b"),m=/(?:^|\s)hover(\.\S+|)\b/,k=function(G){if(typeof(G)!=="string"||g.event.special.hover){return G}if(m.test(G)){D("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return G&&G.replace(m,"mouseenter$1 mouseleave$1")};if(g.event.props&&g.event.props[0]!=="attrChange"){g.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}if(g.event.dispatch){j(g.event,"handle",g.event.dispatch,"jQuery.event.handle is undocumented and deprecated")}g.event.add=function(I,J,H,K,G){if(I!==document&&u.test(J)){D("AJAX events should be attached to document: "+J)}A.call(this,I,k(J||""),H,K,G)};g.event.remove=function(J,K,I,G,H){s.call(this,J,k(K)||"",I,G,H)};g.fn.error=function(){var G=Array.prototype.slice.call(arguments,0);D("jQuery.fn.error() is deprecated");G.splice(0,0,"error");if(arguments.length){return this.bind.apply(this,G)}this.triggerHandler.apply(this,G);return this};g.fn.toggle=function(G,H){if(!g.isFunction(G)||!g.isFunction(H)){return o.apply(this,arguments)}D("jQuery.fn.toggle(handler, handler...) is deprecated");var K=arguments,J=G.guid||g.guid++,I=0,L=function(N){var M=(g._data(this,"lastToggle"+G.guid)||0)%I;g._data(this,"lastToggle"+G.guid,M+1);N.preventDefault();return K[M].apply(this,arguments)||false};L.guid=J;while(I<K.length){K[I++].guid=J}return this.click(L)};g.fn.live=function(H,I,G){D("jQuery.fn.live() is deprecated");if(p){return p.apply(this,arguments)}g(this.context).on(H,this.selector,I,G);return this};g.fn.die=function(H,G){D("jQuery.fn.die() is deprecated");if(z){return z.apply(this,arguments)}g(this.context).off(H,this.selector||"**",G);return this};g.event.trigger=function(I,J,H,G){if(!H&&!u.test(I)){D("Global events are undocumented and deprecated")}return B.call(this,I,J,H||document,G)};g.each(n.split("|"),function(H,G){g.event.special[G]={setup:function(){var I=this;if(I!==document){g.event.add(document,G+"."+g.guid,function(){g.event.trigger(G,null,I,true)});g._data(this,G,g.guid++)}return false},teardown:function(){if(this!==document){g.event.remove(document,G+"."+g._data(this,G))}return false}}})})(jQuery,window); 
 var dragsort_flag=false;(function(a){a.fn.dragsort=function(e){if("destroy"==e){a(this.selector).trigger("dragsort-uninit")}else{var d=a.extend({},a.fn.dragsort.defaults,e),b=[],c=null,g=null;this.each(function(i,h){a(h).is("table")&&1==a(h).children().size()&&a(h).children().is("tbody")&&(h=a(h).children().get(0));var f={draggedItem:null,placeHolderItem:null,pos:null,offset:null,offsetLimit:null,scroll:null,container:h,init:function(){var j=0==a(this.container).children().size()?"li":a(this.container).children(":first").get(0).tagName.toLowerCase();""==d.itemSelector&&(d.itemSelector=j);""==d.dragSelector&&(d.dragSelector=j);""==d.placeHolderTemplate&&(d.placeHolderTemplate="<"+j+"> </"+j+">");a(this.container).attr("data-listidx",i).mousedown(this.grabItem).bind("dragsort-uninit",this.uninit);this.styleDragHandlers(!0)},uninit:function(){var j=b[a(this).attr("data-listidx")];a(j.container).unbind("mousedown",j.grabItem).unbind("dragsort-uninit");j.styleDragHandlers(!1)},getItems:function(){dragsort_flag=true;setTimeout(function(){dragsort_flag=false},1000);return a(this.container).children(d.itemSelector)},styleDragHandlers:function(j){this.getItems().map(function(){return a(this).is(d.dragSelector)?this:a(this).find(d.dragSelector).get()}).css("cursor",j?"pointer":"")},grabItem:function(j){if(!(1!=j.which||a(j.target).is(d.dragSelectorExclude)||0<a(j.target).closest(d.dragSelectorExclude).size()||0==a(j.target).closest(d.itemSelector).size())){j.preventDefault();for(var k=j.target;!a(k).is(d.dragSelector);){if(k==this){return}k=k.parentNode}a(k).attr("data-cursor",a(k).css("cursor"));a(k).css("cursor","move");var m=b[a(this).attr("data-listidx")],n=this,l=function(){m.dragStart.call(n,j);a(m.container).unbind("mousemove",l)};a(m.container).mousemove(l).mouseup(function(){a(m.container).unbind("mousemove",l);a(k).css("cursor",a(k).attr("data-cursor"))})}},dragStart:function(k){null!=c&&null!=c.draggedItem&&c.dropItem();c=b[a(this).attr("data-listidx")];c.draggedItem=a(k.target).closest(d.itemSelector);c.draggedItem.attr("data-origpos",a(this).attr("data-listidx")+"-"+c.getItems().index(c.draggedItem));var j=parseInt(c.draggedItem.css("marginTop")),l=parseInt(c.draggedItem.css("marginLeft"));c.offset=c.draggedItem.offset();c.offset.top=k.pageY-c.offset.top+(isNaN(j)?0:j)-1;c.offset.left=k.pageX-c.offset.left+(isNaN(l)?0:l)-1;d.dragBetween||(j=0==a(c.container).outerHeight()?Math.max(1,Math.round(0.5+c.getItems().size()*c.draggedItem.outerWidth()/a(c.container).outerWidth()))*c.draggedItem.outerHeight():a(c.container).outerHeight(),c.offsetLimit=a(c.container).offset(),c.offsetLimit.right=c.offsetLimit.left+a(c.container).outerWidth()-c.draggedItem.outerWidth(),c.offsetLimit.bottom=c.offsetLimit.top+j-c.draggedItem.outerHeight());j=c.draggedItem.height();l=c.draggedItem.width();"tr"==d.itemSelector?(c.draggedItem.children().each(function(){a(this).width(a(this).width())}),c.placeHolderItem=c.draggedItem.clone().attr("data-placeholder",!0),c.draggedItem.after(c.placeHolderItem),c.placeHolderItem.children().each(function(){a(this).css({borderWidth:0,width:a(this).width()+1,height:a(this).height()+1}).html(" ")})):(c.draggedItem.after(d.placeHolderTemplate),c.placeHolderItem=c.draggedItem.next().css({height:j,width:l}).attr("data-placeholder",!0));if("td"==d.itemSelector){var m=c.draggedItem.closest("table").get(0);a("<table id='"+m.id+"' style='border-width: 0px;' class='dragSortItem "+m.className+"'><tr></tr></table>").appendTo("body").children().append(c.draggedItem)}m=c.draggedItem.attr("style");c.draggedItem.attr("data-origstyle",m?m:"");c.draggedItem.css({position:"absolute",opacity:0.8,"z-index":999,height:j,width:l});c.scroll={moveX:0,moveY:0,maxX:a(document).width()-a(window).width(),maxY:a(document).height()-a(window).height()};c.scroll.scrollY=window.setInterval(function(){if(d.scrollContainer!=window){var n=a(d.scrollContainer).scrollTop();a(d.scrollContainer).scrollTop(n+c.scroll.moveY)}else{var n=a(d.scrollContainer).scrollTop();if((0<c.scroll.moveY&&n<c.scroll.maxY)||(0>c.scroll.moveY&&0<n)){a(d.scrollContainer).scrollTop(n+c.scroll.moveY),c.draggedItem.css("top",c.draggedItem.offset().top+c.scroll.moveY+1)}}},10);c.scroll.scrollX=window.setInterval(function(){if(d.scrollContainer!=window){a(d.scrollContainer).scrollLeft(a(d.scrollContainer).scrollLeft()+c.scroll.moveX)}else{var n=a(d.scrollContainer).scrollLeft();if(0<c.scroll.moveX&&n<c.scroll.maxX||0>c.scroll.moveX&&0<n){a(d.scrollContainer).scrollLeft(n+c.scroll.moveX),c.draggedItem.css("left",c.draggedItem.offset().left+c.scroll.moveX+1)}}},10);a(b).each(function(n,o){o.createDropTargets();o.buildPositionTable()});c.setPos(k.pageX,k.pageY);a(document).bind("mousemove",c.swapItems);a(document).bind("mouseup",c.dropItem);d.scrollContainer!=window&&a(window).bind("DOMMouseScroll mousewheel",c.wheel)},setPos:function(m,l){var n=l-this.offset.top,o=m-this.offset.left;d.dragBetween||(n=Math.min(this.offsetLimit.bottom,Math.max(n,this.offsetLimit.top)),o=Math.min(this.offsetLimit.right,Math.max(o,this.offsetLimit.left)));this.draggedItem.parents().each(function(){if("static"!=a(this).css("position")&&(!a.browser.mozilla||"table"!=a(this).css("display"))){var p=a(this).offset();n-=p.top;o-=p.left;return !1}});if(d.scrollContainer==window){l-=a(window).scrollTop(),m-=a(window).scrollLeft(),l=Math.max(0,l-a(window).height()+5)+Math.min(0,l-5),m=Math.max(0,m-a(window).width()+5)+Math.min(0,m-5)}else{var k=a(d.scrollContainer),j=k.offset(),l=Math.max(0,l-k.height()-j.top)+Math.min(0,l-j.top),m=Math.max(0,m-k.width()-j.left)+Math.min(0,m-j.left)}c.scroll.moveX=0==m?0:m*d.scrollSpeed/Math.abs(m);c.scroll.moveY=0==l?0:l*d.scrollSpeed/Math.abs(l);this.draggedItem.css({top:n,left:o})},wheel:function(k){if((a.browser.safari||a.browser.mozilla)&&c&&d.scrollContainer!=window){var j=a(d.scrollContainer),l=j.offset();k.pageX>l.left&&k.pageX<l.left+j.width()&&k.pageY>l.top&&k.pageY<l.top+j.height()&&(l=k.detail?5*k.detail:k.wheelDelta/-2,j.scrollTop(j.scrollTop()+l),k.preventDefault())}},buildPositionTable:function(){var j=[];this.getItems().not([c.draggedItem[0],c.placeHolderItem[0]]).each(function(k){var l=a(this).offset();l.right=l.left+a(this).outerWidth();l.bottom=l.top+a(this).outerHeight();l.elm=this;j[k]=l});this.pos=j},dropItem:function(){if(null!=c.draggedItem){var j=c.draggedItem.attr("data-origstyle");c.draggedItem.attr("style",j);""==j&&c.draggedItem.removeAttr("style");c.draggedItem.removeAttr("data-origstyle");c.styleDragHandlers(!0);c.placeHolderItem.before(c.draggedItem);c.placeHolderItem.remove();a("[data-droptarget], .dragSortItem").remove();window.clearInterval(c.scroll.scrollY);window.clearInterval(c.scroll.scrollX);c.draggedItem.attr("data-origpos")!=a(b).index(c)+"-"+c.getItems().index(c.draggedItem)&&d.dragEnd.apply(c.draggedItem);c.draggedItem.removeAttr("data-origpos");c.draggedItem=null;a(document).unbind("mousemove",c.swapItems);a(document).unbind("mouseup",c.dropItem);d.scrollContainer!=window&&a(window).unbind("DOMMouseScroll mousewheel",c.wheel);return !1}},swapItems:function(l){if(null==c.draggedItem){return !1}c.setPos(l.pageX,l.pageY);for(var k=c.findPos(l.pageX,l.pageY),m=c,n=0;-1==k&&d.dragBetween&&n<b.length;n++){k=b[n].findPos(l.pageX,l.pageY),m=b[n]}if(-1==k){return !1}var j=function(){return a(m.container).children().not(m.draggedItem)},l=j().not(d.itemSelector).each(function(){this.idx=j().index(this)});null==g||g.top>c.draggedItem.offset().top||g.left>c.draggedItem.offset().left?a(m.pos[k].elm).before(c.placeHolderItem):a(m.pos[k].elm).after(c.placeHolderItem);l.each(function(){var o=j().eq(this.idx).get(0);this!=o&&j().index(this)<this.idx?a(this).insertAfter(o):this!=o&&a(this).insertBefore(o)});a(b).each(function(o,p){p.createDropTargets();p.buildPositionTable()});g=c.draggedItem.offset();return !1},findPos:function(j,k){for(var l=0;l<this.pos.length;l++){if(this.pos[l].left<j&&this.pos[l].right>j&&this.pos[l].top<k&&this.pos[l].bottom>k){return l}}return -1},createDropTargets:function(){d.dragBetween&&a(b).each(function(){var k=a(this.container).find("[data-placeholder]"),j=a(this.container).find("[data-droptarget]");0<k.size()&&0<j.size()?j.remove():0==k.size()&&0==j.size()&&("td"==d.itemSelector?a(d.placeHolderTemplate).attr("data-droptarget",!0).appendTo(this.container):a(this.container).append(c.placeHolderItem.removeAttr("data-placeholder").clone().attr("data-droptarget",!0)),c.placeHolderItem.attr("data-placeholder",!0))})}};f.init();b.push(f)});return this}};a.fn.dragsort.defaults={itemSelector:"",dragSelector:"",dragSelectorExclude:"input, textarea",dragEnd:function(){},dragBetween:!1,placeHolderTemplate:"",scrollContainer:window,scrollSpeed:5}})(jQuery); 
 $(function(){var a=["CJFQ","CDMD","CIPD","CCND","BDZK","CISD","SNAD","CCJD","GXDB","GXDB_SECTION","CJFN","CCVD"];var h=$(".doctype-list");var k=$(".haschecked-list");function j(){var o=[];h.find("li").each(function(q,r){if(!$(this).hasClass("selected")){return}o.push($(r).attr("id"))});var m=GEetUInfoFromECP("utype");if(islogin()&&m=="jf"){var p=getPersonSets(1);if(p&&p.indexOf(";")>0){var n=p.split(";");f(n[0],o);if(n.length>3){l(n[1],n[2],n[3])}}}else{b()}g()}function b(){var r=[];h.find("li").each(function(o,p){r.push($(p).attr("id"))});var m=sessionCookieUnit.getCookie("showlist");f(m,r);var t=sessionCookieUnit.getCookie("dperpage");var q=sessionCookieUnit.getCookie("dstyle");var n=sessionCookieUnit.getCookie("dsorder");l(t,q,n)}function f(n,p){var m="";if(!n){return}var o=n.split(",");o.forEach(function(q){var t=h.find("#"+q);if(t.length>0){t.addClass("selected");var r=t.find("span").text();m+=e(q,r);var s=p.indexOf(q);if(s>-1){p.splice(s,1)}}});k.html(m);p.forEach(function(q){h.find("#"+q).removeClass("selected").find("a").html(message.add)})}function l(q,m,n){if(q){$(".dperpage input").prop("checked",false);$(".dperpage input[value='"+q+"']").prop("checked",true).parent().addClass("on").siblings().removeClass("on").find("input")}if(m){$(".dstyle input").prop("checked",false);$(".dstyle input[value='"+m+"']").prop("checked",true).parent().addClass("on").siblings().removeClass("on").find("input")}if(n){$(".dsorder input").prop("checked",false);$(".dsorder input[value='"+n+"']").prop("checked",true).parent().addClass("on").siblings().removeClass("on").find("input")}}function g(){$(".setup").find("label").click(function(){_this=$(this);$input=_this.find("input");if($input.prop("checked")){if($input.attr("type")=="radio"){_this.siblings().removeClass("on").find("input").prop("checked",false)}_this.addClass("on")}else{_this.removeClass("on")}})}$("body").on("click",".haschecked-list .icon-del",function(){var n=$(this).closest("li");var m=n.attr("data-id");h.find("#"+m).removeClass("selected").find("a").html(message.add);n.remove()});$(".add-doctype").click(function(){h.slideToggle(200).mouseleave(function(){$(this).slideUp(200)}).on("click","li",function(p){p.preventDefault();if($(this).hasClass("selected")){return}var o=$(this).attr("id");var m=$(this).find("span").text();var n=e(o,m);k.append(n);$(this).addClass("selected").find("a").html(message.choosed)})});$("#ctrl-s").click(function(){var o=[];k.find("li").each(function(q,r){o.push($(r).attr("data-id"))});if(o.length<1){layer.msg(message.selectOneDB1);return}var m=GEetUInfoFromECP("utype");if(islogin()&&m=="jf"){var p=o.join(",")+";"+$(".dperpage .on input").val()+";"+$(".dstyle .on input").val()+";"+$(".dsorder .on input").val()+";"+new Date().getTime();sessionCookieUnit.addToCookie("personsets",p);var n=$("#krs").val()+"/WriteSearchSetUp.ashx?username="+getUsername()+"&value="+p;i(n,function(q){if(q.success){layer.msg(message.saved)}else{layer.msg(message.savedFail)}})}else{sessionCookieUnit.addToCookie("showlist",o.join(",")+","+new Date().getTime());sessionCookieUnit.addToCookie("dperpage",$(".dperpage .on input").val());sessionCookieUnit.addToCookie("dstyle",$(".dstyle .on input").val());sessionCookieUnit.addToCookie("dsorder",$(".dsorder .on input").val());layer.msg(message.saved)}});function i(m,o){function n(p){o.apply(p);if(!(!!window.ActiveXObject||"ActiveXObject" in window)){console.log(p)}}$.getJSON(m+"&callback=?",o)}function e(n,o){var m='<li data-id="'+n+'"><div class="item">'+o+'</div><i class="icon-del"></i></li>';return m}function d(){var m=GEetUInfoFromECP("utype");if(islogin()&&m=="jf"){sessionCookieUnit.unset("personsets");var n=$("#krs").val()+"/delete.ashx?type=setup&username="+getUsername();i(n,function(o){layer.msg(message.unsetMsg)})}else{sessionCookieUnit.unset("showlist");sessionCookieUnit.unset("dperpage");sessionCookieUnit.unset("dstyle");sessionCookieUnit.unset("dsorder");a.forEach(function(o){var p=h.find("#"+o);p.addClass("selected")});layer.msg(message.unsetMsg)}}function c(){}$("#ctrl-z").click(function(){var m="";a.forEach(function(n){var o=h.find("#"+n);o.addClass("selected");dbname=o.find("span").text();if(dbname!=""&&dbname!=undefined){m+=e(n,dbname)}});k.html(m);a.forEach(function(n){h.find("#"+n).addClass("selected").find("a").html(message.choosed)});$(".setup").find("dd").each(function(){var o=$(this),n=0;if(o.hasClass("dperpage")){n=1}o.find("label").removeClass("on").eq(n).addClass("on");o.find("input[type=radio]").prop("checked",false).eq(n).prop("checked",true)});d()});window.SetSearchState=j}); 
 