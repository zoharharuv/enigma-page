(this["webpackJsonpenigma-demo"]=this["webpackJsonpenigma-demo"]||[]).push([[0],{59:function(e){e.exports=JSON.parse('{"btcMarkets":{"XRP":[{"asset":"XRPAUD","lastPrice":1.55,"change":-0.57,"volume":"121.8K"},{"asset":"XRPBTC","lastPrice":0.00002354,"change":0.43,"volume":"824.6K"},{"asset":"XRPCAD","lastPrice":1.43,"change":-0.35,"volume":"222.3K"},{"asset":"XRPETH","lastPrice":0.0003566,"change":0.39,"volume":"230.8K"},{"asset":"XRPEUR","lastPrice":0.956,"change":-0.35,"volume":"6.450M"},{"asset":"XRPGBP","lastPrice":0.8176,"change":-0.65,"volume":"976.1K"},{"asset":"XRPJPY","lastPrice":124.02,"change":-0.76,"volume":"26.32K"},{"asset":"XRPUSD","lastPrice":1.13,"change":-0.36,"volume":"4.333M"},{"asset":"XRPUSDT","lastPrice":1.13,"change":-0.35,"volume":"825.7K"}],"BCH":[{"asset":"BCHAUD","lastPrice":929.99,"change":-0.05,"volume":"7.58"},{"asset":"BCHBTC","lastPrice":0.01347,"change":-3.37,"volume":"155.61"},{"asset":"BCHETH","lastPrice":0.204,"change":-3.32,"volume":"64.78"},{"asset":"BCHEUR","lastPrice":548.56,"change":-4.06,"volume":"1.227k"},{"asset":"BCHGBP","lastPrice":466.7,"change":-4.82,"volume":"9.65"},{"asset":"BCHJPY","lastPrice":707759,"change":-5,"volume":"20.61"},{"asset":"BCHUSD","lastPrice":646.66,"change":-4,"volume":"2.216K"},{"asset":"BCHUSDT","lastPrice":646.7,"change":-4.33,"volume":"150.12"}],"LTC":[{"asset":"LTCAUD","lastPrice":238.88,"change":-3.63,"volume":"61.66"},{"asset":"LTCBTC","lastPrice":0.003587,"change":-2.45,"volume":"2.587K"},{"asset":"LTCETH","lastPrice":0.05441,"change":-2.42,"volume":"590.38"},{"asset":"LTCEUR","lastPrice":145.99,"change":-3,"volume":"9.364K"},{"asset":"LTCGPB","lastPrice":124.91,"change":-3.05,"volume":"261.35"}]},"krakenMarkets":{"ETH":[{"asset":"ETHAUD","lastPrice":929.99,"change":-0.05,"volume":"7.58"},{"asset":"ETHBTC","lastPrice":0.01347,"change":-3.37,"volume":"155.61"},{"asset":"ETHETH","lastPrice":0.204,"change":-3.32,"volume":"64.78"}],"BNB":[{"asset":"BNBEUR","lastPrice":145.99,"change":-3,"volume":"9.364K"},{"asset":"BNBGPB","lastPrice":124.91,"change":-3.05,"volume":"261.35"}]}}')},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(21),s=a.n(r),o=a(15),i=a(29),l=a(27),u=a(33),m=a(20),h={markets:[],watchlist:new Set,filterBy:""};var f=Object(l.b)({marketModule:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0,c=t;switch(a.type){case"FILTER_MARKET":c=Object(m.a)(Object(m.a)({},t),{},{market:a.market});break;case"SET_MARKETS":c=Object(m.a)(Object(m.a)({},t),{},{markets:a.markets});break;case"SET_FILTER":c=Object(m.a)(Object(m.a)({},t),{},{filterBy:a.filterBy});break;case"SET_WATCHLIST":(e=new Set(t.watchlist)).has(a.asset)?e.delete(a.asset):e.add(a.asset),c=Object(m.a)(Object(m.a)({},t),{},{watchlist:e})}return c}}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,p=Object(l.d)(f,j(Object(l.a)(u.a))),b=a(4),k=a(10),O=a.n(k),d=a(17),v=a(59);function x(){return(x=Object(d.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g={query:function(){return x.apply(this,arguments)}};function P(){return(P=Object(d.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.query();case 2:return t=e.sent,a=t.btcMarkets,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y={getBtcMarket:function(){return P.apply(this,arguments)}};function T(){return(T=Object(d.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.query();case 2:return t=e.sent,a=t.krakenMarkets,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={getKrakenMarket:function(){return T.apply(this,arguments)}};function B(e){return function(){var t=Object(d.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:"SET_FILTER",filterBy:e})}catch(c){console.log("marketActions: err in setFilter",c)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var E=a(81),C=a(2),M=function(e){var t=e.market,a=Object(o.c)((function(e){return e.marketModule})).watchlist,n=Object(o.b)(),r=function(e){n(function(e){var t=e.asset;return function(){var e=Object(d.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a({type:"SET_WATCHLIST",asset:t})}catch(c){console.log("marketActions: err in toggleMarket",c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e))},s=Object(c.useMemo)((function(){return a.has(t.asset)}),[a]);return Object(C.jsx)("section",{className:"market-info flex align-center space-between ".concat(s?"watched":""),children:Object.keys(t).map((function(e){return Object(C.jsxs)("div",{className:"market-".concat(e," flex align-center gap \n                ").concat("change"===e?t[e]>=0?"green":"red":""),children:[Object(C.jsx)("span",{children:t[e]}),"volume"===e&&Object(C.jsx)("span",{className:"market-star",onClick:function(){return r(t)},children:s?Object(C.jsx)(E.a,{style:{color:"#e5952b"}}):Object(C.jsx)(E.a,{style:{color:"#373737"}})})]},e)}))})},R=Object(c.memo)((function(e){var t=e.marketList;return Object(C.jsx)("section",{className:"market-list flex column",children:t.map((function(e){return Object(C.jsx)(M,{market:e},e.asset)}))})})),S=function(e){var t=e.match,a=Object(o.c)((function(e){return e.marketModule})),n=a.markets,r=a.filterBy,s=Object(o.b)();Object(c.useEffect)((function(){var e=t.params.market;e&&s(function(e){return function(){var t=Object(d.a)(O.a.mark((function t(a){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"btc"!==e){t.next=7;break}return t.next=4,y.getBtcMarket();case 4:c=t.sent,t.next=11;break;case 7:if("kraken"!==e){t.next=11;break}return t.next=10,w.getKrakenMarket();case 10:c=t.sent;case 11:a({type:"SET_MARKETS",markets:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("marketActions: err in loadMarkets",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]);var i=Object(c.useMemo)((function(){if(r){var e=new RegExp(r,"i");return Object.keys(n).reduce((function(t,a){return t[a]=n[a].filter((function(t){return e.test(t.asset)})),t}),{})}return n}),[n,r]);return Object(C.jsx)("section",{className:"app-board flex column gap",children:Object.keys(i).length?Object.keys(i).map((function(e){return Object(C.jsxs)("div",{className:"market-category flex column",children:[Object(C.jsxs)("div",{className:"market-category-title flex align-center gap",children:[Object(C.jsx)("img",{src:"".concat("https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/32/white/"+e.toLowerCase(),".png"),alt:"".concat(e," icon")}),Object(C.jsx)("h2",{children:e})]}),Object(C.jsx)(R,{marketList:i[e]})]},e)})):Object(C.jsx)("h1",{children:"Choose a market!"})})},N=a(39),H=[{path:"/",component:S},{path:"/market/:market",component:S},{path:"/watchlist",component:Object(c.memo)((function(){var e=Object(o.c)((function(e){return e.marketModule})).watchlist,t=Object(c.useMemo)((function(){var t,a=[],c=Object(N.a)(e);try{for(c.s();!(t=c.n()).done;){var n=t.value;a.push(n)}}catch(r){c.e(r)}finally{c.f()}return a}),[e]);return Object(C.jsxs)("section",{className:"watch-list flex column ",children:[Object(C.jsx)("h1",{children:t.length?"Markets in watchlist: ":"No markets found!"}),t.map((function(e,t){return Object(C.jsx)("h2",{children:e},t)}))]})}))}],K=a(84),L=a(85),_=a(82),A=a(83),U=Object(c.memo)((function(){var e=Object(o.c)((function(e){return e.marketModule})).filterBy,t=Object(o.b)();return Object(C.jsxs)("section",{className:"market-search flex align-center gap",children:[Object(C.jsx)(L.a,{style:{textTransform:"unset",fontFamily:"monospace",color:"#ffffff",background:"#1c2663",padding:"5px 10px"},onChange:function(e){var a=e.target.value;t(B(a))},value:e,placeholder:"Search all markets",autoComplete:"off"}),Object(C.jsx)(_.a,{style:{color:"#ffffff",background:"#1c2663",borderRadius:"0px",padding:"8px"},"aria-label":"clear search",component:"span",onClick:function(){e&&t(B(""))},children:Object(C.jsx)(A.a,{})})]})})),X=Object(c.memo)((function(){return Object(C.jsxs)("header",{className:"app-header flex column gap",children:[Object(C.jsx)("nav",{className:"flex align-center gap",children:[{path:"/market/btc",name:"BTC markets"},{path:"/market/kraken",name:"Kraken markets"},{path:"/watchlist",name:"Watchlist"}].map((function(e){return Object(C.jsx)(i.b,{to:e.path,children:Object(C.jsx)(K.a,{style:{textTransform:"unset",fontFamily:"monospace",color:"#ffffff",background:"#1c2663"},children:e.name})},e.name)}))}),Object(C.jsx)(U,{})]})}));function D(){return Object(C.jsxs)("section",{className:"app flex column",children:[Object(C.jsx)(X,{}),Object(C.jsx)("main",{className:"main-layout",children:Object(C.jsx)(b.c,{children:H.map((function(e){return Object(C.jsx)(b.a,{exact:!0,component:e.component,path:e.path},e.path)}))})})]})}a(65);s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(o.a,{store:p,children:Object(C.jsx)(i.a,{children:Object(C.jsx)(D,{})})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.93d5086a.chunk.js.map