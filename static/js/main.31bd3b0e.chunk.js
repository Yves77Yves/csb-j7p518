(this["webpackJsonpmysolidity-access-v5-ongoing"]=this["webpackJsonpmysolidity-access-v5-ongoing"]||[]).push([[0],{235:function(e,t){},238:function(e,t){},241:function(e,t){},245:function(e,t){},246:function(e,t){},272:function(e,t){},274:function(e,t){},283:function(e,t){},285:function(e,t){},295:function(e,t){},297:function(e,t){},311:function(e,t){},336:function(e,t){},337:function(e,t){},411:function(e,t){},413:function(e,t){},420:function(e,t){},421:function(e,t){},524:function(e,t,n){},527:function(e,t,n){"use strict";n.r(t);var c=n(27),o=n(207),a=n(32),i=n(111),s=n(75),r=n(59),u=n.n(r),l=(n(524),"4dbec6e76f1a42b7ba71e789e4e67e60"),b=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"sendEther",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address payable",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferEther",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],d=n(14);var p=function(){console.log("run App");var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(0),p=Object(s.a)(r,2),f=p[0],j=p[1],w=Object(c.useState)(0),h=Object(s.a)(w,2),y=h[0],m=h[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=7;break}return console.log("11"),window.web3=new u.a(window.ethereum),e.next=5,window.ethereum.enable();case 5:e.next=8;break;case 7:window.web3?(console.log("22"),window.web3=new u.a(window.web3.currentProvider)):(console.log("33"),window.alert("No ethereum browser detected! You can check out MetaMask!"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){var t,c,i,s,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u.a(u.a.givenProvider||"https://goerli.infura.io/v3/"+l),console.log("https://goerli.infura.io/v3/"+l),c=new t.eth.Contract(b,"0xe78a5c60fa13BBB677d4c1D37a007ed59bE5Ca2e"),console.log(c),e.next=6,t.eth.getAccounts();case 6:return e.t0=e.sent,i=[e.t0],o(i[0]),console.log("account[0] : "+n),console.log("44"),e.next=13,c.methods.owner().call();case 13:return e.t1=e.sent,s=[e.t1],j(s[0]),console.log("this.state.owner : "+f),console.log("55"),e.next=20,c.methods.getBalance().call();case 20:e.t2=e.sent,r=[e.t2],console.log(r[0]),m(r[0]),console.log("this.state.balance : "+y);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[y,f]),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("main",{role:"main",className:"col-lg-12 d-flex justify-content-center",children:[Object(d.jsx)("div",{id:"loader",className:"text-center",children:Object(d.jsxs)("p",{className:"text-center",children:["On progress... ",console.log("on progress")]})}),Object(d.jsxs)("div",{id:"content",children:[Object(d.jsxs)("p",{children:[" the account is : ",n," "]}),Object(d.jsxs)("p",{children:[" the balance is : ",y," "]}),Object(d.jsxs)("p",{children:[" the owner is : ",f," "]}),Object(d.jsxs)("button",{type:"button",onClick:console.log("button clicked"),children:[" ","click to transfert 10 wei"]})]})]})})})})},f=document.getElementById("root");Object(o.createRoot)(f).render(Object(d.jsx)(c.StrictMode,{children:Object(d.jsx)(p,{})}))}},[[527,1,2]]]);
//# sourceMappingURL=main.31bd3b0e.chunk.js.map