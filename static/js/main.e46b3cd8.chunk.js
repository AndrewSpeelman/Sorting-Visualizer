(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),i=(n(27),n(11)),u=n(13),s=n(14),l=n(20),h=n(15),f=n(21);function m(e){var t=[];if(e.length<=1)return e;var n=e.slice();return function e(t,n,r,a,o){if(n===r)return;var c=Math.floor((n+r)/2);e(a,n,c,t,o),e(a,c+1,r,t,o),function(e,t,n,r,a,o){var c=t,i=t,u=n+1;for(;i<=n&&u<=r;)o.push([i,u]),o.push([i,u]),a[i]<=a[u]?(o.push([c,a[i]]),e[c++]=a[i++]):(o.push([c,a[u]]),e[c++]=a[u++]);for(;i<=n;)o.push([i,i]),o.push([i,i]),o.push([c,a[i]]),e[c++]=a[i++];for(;u<=r;)o.push([u,u]),o.push([u,u]),o.push([c,a[u]]),e[c++]=a[u++]}(t,n,c,r,a,o)}(e,0,e.length-1,n,t),t}n(28);var v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={array:[]},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.array;return a.a.createElement("div",{className:"array-container"},t.map((function(e,t){return a.a.createElement("div",{className:"array-bar",key:t,style:{height:"".concat(e,"px"),backgroundColor:"turquoise"}})})),a.a.createElement("button",{class:"button-box",onClick:function(){return e.resetArray()}},"Generate New Array"),a.a.createElement("button",{class:"button-box",onClick:function(){return e.mergeSort()}},"Merge Sort"),a.a.createElement("button",{class:"button-box",onClick:function(){return e.testAlgorithms()}},"Test Sorting Algorithms"))}},{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e=[],t=0;t<50;t++)e.push(g(5,500));this.setState({array:e})}},{key:"mergeSort",value:function(){for(var e=m(this.state.array),t=function(t){var n=document.getElementsByClassName("array-bar");if(t%3!==2){var r=Object(i.a)(e[t],2),a=r[0],o=r[1],c=n[a].style,u=n[o].style,s=t%3===0?"red":"turquoise";setTimeout((function(){c.backgroundColor=s,u.backgroundColor=s}),10*t)}else setTimeout((function(){var r=Object(i.a)(e[t],2),a=r[0],o=r[1];n[a].style.height="".concat(o,"px")}),10*t)},n=0;n<e.length;n++)t(n)}},{key:"testAlgorithms",value:function(){for(var e=0;e<100;e++){for(var t=[],n=g(1,1e3),r=0;r<n;r++)t.push(g(-1e3,1e3));var a=t.slice().sort((function(e,t){return e-t})),o=m(t.slice());console.log(p(a,o))}}}]),t}(a.a.Component);function g(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function p(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var b=n(9),y=n(19),d=n(6);function E(){return a.a.createElement(d.a,{as:y.a},a.a.createElement(b.a,{variant:"success"},"Split Button"),a.a.createElement(d.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic"}),a.a.createElement(d.a.Menu,null,a.a.createElement(d.a.Item,{href:"#/action-1"},"Action"),a.a.createElement(d.a.Item,{href:"#/action-2"},"Another action"),a.a.createElement(d.a.Item,{href:"#/action-3"},"Something else")))}n(33),n(34);var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,null),a.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e46b3cd8.chunk.js.map