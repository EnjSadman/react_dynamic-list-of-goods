(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),c=e.n(r),a=e(2),s=e(6),o=e(1),u=e.n(o),i=e(3),p=(e(12),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function f(){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=function(){var t=Object(a.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=e(0),j=function(t){var n=t.goodsArray;return Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},x=function(){var t=Object(i.useState)([]),n=Object(s.a)(t,2),e=n[0],r=n[1];function c(){return(c=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:n=t.sent,r(n.sort((function(t,n){return t.name.localeCompare(n.name)})).splice(0,5));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:n=t.sent,r(n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",onClick:function(){!function(){c.apply(this,arguments)}()},children:"List Of Goods"}),Object(b.jsx)("button",{type:"button",onClick:function(){!function(){o.apply(this,arguments)}()},children:"First 5 Goods"}),Object(b.jsx)("button",{type:"button",onClick:function(){!function(){p.apply(this,arguments)}()},children:"Red Goods"}),Object(b.jsx)(j,{goodsArray:e})]})};c.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2376cb34.chunk.js.map