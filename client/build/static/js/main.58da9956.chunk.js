(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){},138:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),o=(a(89),a(21)),c=a(10),s=a(17),u=a(22),m=a(20),d=(a(51),a(142)),p=a(143),f=a(144),b=a(145),g=a(148),h=a(149),v=a(150),E=a(151),C=a(152),y=a(153),k=a(36),O=a(15),x=a.n(O),j=a(23),w=function(e){var t=1e3*(e.tokenObj.expires_in||35700),a=function(){var n=Object(j.a)(x.a.mark(function n(){var r;return x.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.reloadAuthResponse();case 2:r=n.sent,t=1e3*(r.expires_in||3300),console.log("newAuthRes:",r),console.log("new auth Token",r.id_token),setTimeout(a,t);case 7:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();setTimeout(a,t)},S=a(18),F=a.n(S),N="189373330737-gaq6pd4a79ebfgrtmviujopcdti56n5e.apps.googleusercontent.com";var A=function(){var e=Object(c.g)();return r.a.createElement("div",null,r.a.createElement(k.GoogleLogin,{className:"gbutton",clientId:N,buttonText:"Login",onSuccess:function(t){F.a.post("auth/signup",{email:t.profileObj.email,firstName:"jack",lastName:"hill",password:"hello"}).then(function(t){200===t.status&&e.push("/mainpage")}),w(t)},onFailure:function(e){},cookiePolicy:"single_host_origin",isSignedIn:!0}))},_=a(76),P=a.n(_),L=a(157),D=a(146),T=a(147),B=function(){var e=Object(n.useState)({isAuthenticated:!1}),t=Object(m.a)(e,2),a=t[0],l=t[1],i=Object(c.g)(),o=Object(n.useState)({email:"",password:""}),k=Object(m.a)(o,2),O=k[0],x=k[1],j=Object(n.useState)({validateEmail:"",validatePassword:""}),w=Object(m.a)(j,2),S=w[0],N=w[1],_=function(e){return x(Object(u.a)({},O,Object(s.a)({},e.target.name,e.target.value)))},B=O.email,I=O.password,G=Object(n.useState)(!1),W=Object(m.a)(G,2),H=W[0],R=W[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement("img",{src:P.a,alt:"Logo",id:"logo"}),r.a.createElement(b.a,{id:"Popover1",type:"button"},"About Crypto-Tracker"),r.a.createElement(L.a,{placement:"bottom",isOpen:H,target:"Popover1",toggle:function(){return R(!H)}},r.a.createElement(D.a,null,"About"),r.a.createElement(T.a,null,"Your personalized finance app to track all potential cryptocurrency investments"))),r.a.createElement(f.a,{sm:"2",id:"home",style:{height:500}},r.a.createElement(g.a,{body:!0,className:"login-card"},r.a.createElement(h.a,{className:"login-form"},r.a.createElement("h2",{className:"text-center"},"Welcome"),r.a.createElement("h3",{className:"text-center"},"____________"),r.a.createElement(v.a,null,r.a.createElement(E.a,{for:"exampleEmail"},"Email"),r.a.createElement(C.a,{invalid:S.validateEmail,onChange:_,value:B,type:"email",required:!0,name:"email",placeholder:"email"}),r.a.createElement(y.a,null,"Please enter email")),r.a.createElement(v.a,null,r.a.createElement(E.a,{for:"examplePassword"},"Password"),r.a.createElement(C.a,{invalid:S.validatePassword,onChange:_,value:I,type:"password",required:!0,name:"password",placeholder:"password"}),r.a.createElement(y.a,null,"Please enter password")),r.a.createElement(b.a,{onClick:function(){return""===O.password&&N({validatePassword:!0}),""===O.email&&N({validateEmail:!0}),void F.a.post("auth/login",O).then(function(e){200===e.status&&(a.isAuthenticated=!0,i.push("/mainpage"),l())}).catch(function(e){console.log(e),alert("Wrong username or password"),window.location.reload()})},className:"but-lg btn-dark btn-block"},"Login"),r.a.createElement("div",{className:"text-center pt-3"}," or sign in with Google account"),r.a.createElement(A,null),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:"/signup"}," Sign up"),r.a.createElement("span",{className:"p-2"},"|"),r.a.createElement("a",{href:"/ForgotPw"},"Forgot password"))))))))},I=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null))},G="189373330737-gaq6pd4a79ebfgrtmviujopcdti56n5e.apps.googleusercontent.com";var W,H=function(){var e=Object(c.g)();return r.a.createElement("div",null,r.a.createElement(k.GoogleLogout,{className:"gbutton",clientId:G,buttonText:"Logout",onLogoutSuccess:function(){F.a.post("auth/logout").then(function(t){200===t.status&&e.push("/login")}),alert("Logged out \u270c")}}))},R=function(){var e=Object(c.g)(),t=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),a=Object(m.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)({validateFirstName:"",validateLastName:"",validateEmail:"",validatePassword:""}),d=Object(m.a)(o,2),p=d[0],E=d[1],k=function(e){return i(Object(u.a)({},l,Object(s.a)({},e.target.name,e.target.value)))},O=l.firstName,x=l.lastName,j=l.email,w=l.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{sm:"4",id:"home",style:{height:500}},r.a.createElement(g.a,{body:!0,className:"signup-card"},r.a.createElement(h.a,{className:"login-form"},r.a.createElement("h2",{className:"text-center"},"Sign Up"),r.a.createElement("h3",{className:"text-center"},"__________"),r.a.createElement(v.a,null,r.a.createElement(C.a,{invalid:p.validateFirstName,onChange:k,value:O,type:"name",name:"firstName",placeholder:"First name"}),r.a.createElement(y.a,null,"Please enter first name")),r.a.createElement(v.a,null,r.a.createElement(C.a,{invalid:p.validateLastName,onChange:k,value:x,type:"name",name:"lastName",placeholder:"Last name"}),r.a.createElement(y.a,null,"Please enter last name")),r.a.createElement(v.a,null,r.a.createElement(C.a,{invalid:p.validateEmail,onChange:k,value:j,type:"email",name:"email",placeholder:"email"}),r.a.createElement(y.a,null,"Please enter email")),r.a.createElement(v.a,null,r.a.createElement(C.a,{invalid:p.validatePassword,onChange:k,value:w,type:"Password",name:"password",placeholder:"Password"}),r.a.createElement(y.a,null,"Please enter password")),r.a.createElement(b.a,{onClick:function(){return""===l.password&&E({validatePassword:!0}),""===l.email&&E({validateEmail:!0}),""===l.lastName&&E({validateLastName:!0}),""===l.firstName&&E({validateFirstName:!0}),void F.a.post("auth/signup",l).then(function(t){console.log(t),console.log(t.data),200===t.status&&t.data.success&&e.push("/mainpage")})},className:"but-lg btn-dark btn-block"},"Sign up"),r.a.createElement("div",{className:"text-center pt-3"}," or sign in with Google account"),r.a.createElement(A,null),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:"/login"}," Login"),r.a.createElement("span",{className:"p-2"},"|"),r.a.createElement("a",{href:"/ForgotPw"},"Forgot password"))))))},V=(a(135),a(4)),U=a(5),z=U.b.div(W||(W=Object(V.a)(["\npadding: 40px;\n"]))),M=a(48),J=a(25),q=a(26),$=a(28),K=a(27),X=a(29),Y=a(19),Q=a.n(Y),Z=a(46),ee=a.n(Z),te=a(75);te.setApiKey("");var ae,ne,re,le,ie,oe=r.a.createContext(),ce=10,se=10,ue=function(e){function t(e){var a;return Object(J.a)(this,t),(a=Object($.a)(this,Object(K.a)(t).call(this,e))).componentDidMount=function(){a.fetchCoins(),a.fetchPrices(),a.fetchHistorical()},a.fetchCoins=Object(j.a)(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.coinList();case 2:t=e.sent.Data,a.setState({coinList:t});case 4:case"end":return e.stop()}},e)})),a.fetchPrices=Object(j.a)(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.prices();case 4:t=e.sent,a.setState({prices:t});case 6:case"end":return e.stop()}},e)})),a.fetchHistorical=Object(j.a)(x.a.mark(function e(){var t,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.historical();case 4:t=e.sent,n=[{name:a.state.currentFavorite,data:t.map(function(e,t){return[ee()().subtract(Object(s.a)({},a.state.timeInterval,se-t)).valueOf(),e.USD]})}],a.setState({historical:n});case 7:case"end":return e.stop()}},e)})),a.prices=Object(j.a)(x.a.mark(function e(){var t,n,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=0;case 2:if(!(n<a.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,te.priceFull(a.state.favorites[n],"USD");case 6:r=e.sent,t.push(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error: ",e.t0);case 13:n++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}},e,null,[[3,10]])})),a.historical=function(){for(var e=[],t=se;t>0;t--)e.push(te.priceHistorical(a.state.currentFavorite,["USD"],ee()().subtract(Object(s.a)({},a.state.timeInterval,t)).toDate()));return Promise.all(e)},a.addCoin=function(e){var t=Object(M.a)(a.state.favorites);t.length<ce&&(t.push(e),a.setState({favorites:t}))},a.removeCoin=function(e){var t=Object(M.a)(a.state.favorites);a.setState({favorites:Q.a.pull(t,e)})},a.isInFavorites=function(e){return Q.a.includes(a.state.favorites,e)},a.confirmFavorites=function(){var e=a.state.favorites[0];a.setState({firstVisit:!1,page:"dashboard",currentFavorite:e,prices:null,historical:null},function(){a.fetchPrices(),a.fetchHistorical()}),localStorage.setItem("cryptoDash",JSON.stringify({favorites:a.state.favorites,currentFavorite:e}))},a.setCurrentFavorite=function(e){a.setState({currentFavorite:e,historical:null},a.fetchHistorical),localStorage.setItem("cryptoDash",JSON.stringify(Object(u.a)({},JSON.parse(localStorage.getItem("cryptoDash")),{currentFavorite:e})))},a.setPage=function(e){return a.setState({page:e})},a.setFilteredCoins=function(e){return a.setState({filteredCoins:e})},a.changeChartSelect=function(e){a.setState({timeInterval:e,historical:null},a.fetchHistorical)},a.state=Object(u.a)({page:"dashboard",favorites:["BTC","ETH","XMR","DOGE","ADA"],timeInterval:"months"},a.savedSettings(),{setPage:a.setPage,addCoin:a.addCoin,removeCoin:a.removeCoin,isInFavorites:a.isInFavorites,confirmFavorites:a.confirmFavorites,setCurrentFavorite:a.setCurrentFavorite,changeChartSelect:a.changeChartSelect,setFilteredCoins:a.setFilteredCoins}),a}return Object(X.a)(t,e),Object(q.a)(t,[{key:"savedSettings",value:function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:{page:"settings",firstVisit:!0}}},{key:"render",value:function(){return r.a.createElement(oe.Provider,{value:this.state},this.props.children)}}]),t}(r.a.Component),me=U.b.div(ae||(ae=Object(V.a)(["\nfont-size: 2.5em;\n"]))),de=U.b.div(ne||(ne=Object(V.a)(["\n    display: grid;\n    grid-template-columns: 350px auto 100px 100px;\n    margin-bottom: 40px;\n"]))),pe=U.b.div(re||(re=Object(V.a)(["\n    cursor: pointer;\n    ","\n    ","\n"])),function(e){return e.active&&Object(U.a)(le||(le=Object(V.a)(["\n        text-shadow: 12px 12px 6px #515dff;\n    "])))},function(e){return e.hidden&&Object(U.a)(ie||(ie=Object(V.a)(["\n        display: none;\n    "])))});function fe(e){var t=e.name;return r.a.createElement(oe.Consumer,null,function(e){var a,n=e.firstVisit,l=e.page,i=e.setPage;return r.a.createElement(pe,{active:l===t,onClick:function(){return i(t)},hidden:n&&"dashboard"===t},(a=t).charAt(0).toUpperCase()+a.substr(1))})}var be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null,r.a.createElement(me,null,"Crypto-Tracker"),r.a.createElement(fe,{active:!0,name:"dashboard"}),r.a.createElement(fe,{name:"settings"}),r.a.createElement(fe,{name:"About Us"}),r.a.createElement(H,null)))},ge=function(e){e.firstVisit;return r.a.createElement(oe.Consumer,null,function(e){return e.firstVisit?r.a.createElement("div",null,"Welcome to Crypto-Tracker, please begin by selecting 5 coins to follow.",""):null})};var he,ve,Ee,Ce,ye,ke,Oe,xe,je,we,Se,Fe="background-color: ".concat("#061a44"),Ne="background-color: ".concat("#010e2c"),Ae=("background-color: ".concat("#42ff3a"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),_e="box-shadow: 0px 0px 4px 2px rgb(81, 93, 255)",Pe=U.b.div(he||(he=Object(V.a)(["\n    margin: 20px;\n    color: ","\n    ","\n    padding: 5px;\n    cursor: pointer;\n    &:hover {\n        ","\n    }\n"])),"#42ff3a","font-size: 1.5em;",_e),Le=U.b.div(ve||(ve=Object(V.a)(["\n    display: grid;\n    justify-content: center;\n"]))),De=function(){return r.a.createElement(oe.Consumer,null,function(e){var t=e.confirmFavorites;return r.a.createElement(Le,null,r.a.createElement(Pe,{onClick:t},"Confirm Favorites"))})},Te=function(e){var t=e.name,a=e.children;return r.a.createElement(oe.Consumer,null,function(e){return e.page!==t?null:r.a.createElement("div",null," ",a," ")})},Be=(a(75),U.b.div(Ee||(Ee=Object(V.a)(["\n    ","\n    ","\n    padding: 15px;\n    border-radius: 4px;\n"])),Ae,Fe)),Ie=Object(U.b)(Be)(Ce||(Ce=Object(V.a)(["\n    &:hover {\n        cursor: pointer;\n        ","\n    }\n"])),_e),Ge=Object(U.b)(Ie)(ye||(ye=Object(V.a)(["\n    &:hover {\n        cursor: pointer;\n        ","\n    }\n"])),"box-shadow: 0px 0px 2px 2px #e41111"),We=Object(U.b)(Be)(ke||(ke=Object(V.a)(["\n    pointer-events: none;\n    opacity: 0.4;\n"]))),He=(a(136),U.b.div(Oe||(Oe=Object(V.a)(["\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n"])))),Re=U.b.div(xe||(xe=Object(V.a)(["\n    justify-self: right;\n    padding-top: 10px;\n"]))),Ve=U.b.div(je||(je=Object(V.a)(["\n    justify-self: right;\n    display: none;\n    ",":hover & {\n        display: block;\n        color: red;\n    }\n"])),Ge),Ue=function(e){var t=e.name,a=e.symbol,n=e.topSection;return r.a.createElement(He,null,r.a.createElement("div",null," ",t," "),n?r.a.createElement(Ve,null,"X"):r.a.createElement(Re,null," ",a," "))},ze=U.b.img(we||(we=Object(V.a)(["\n    height: 50px;\n    ","\n"])),function(e){return e.spotlight&&Object(U.a)(Se||(Se=Object(V.a)(["\n        height: 200px;\n        margin: auto;\n        display: block;\n    "])))}),Me=function(e){var t=e.coin,a=e.spotlight;return r.a.createElement(ze,{spotlight:a,alt:t.CoinSymbol,src:"http://cryptocompare.com/".concat(t.ImageUrl)})};function Je(e,t,a,n){return e?function(){n(t)}:function(){a(t)}}var qe,$e=function(e){var t=e.coinKey,a=e.topSection;return r.a.createElement(oe.Consumer,null,function(e){var n=e.coinList,l=e.addCoin,i=e.removeCoin,o=e.isInFavorites,c=n[t],s=Ie;return a?s=Ge:o(t)&&(s=We),r.a.createElement(s,{onClick:Je(a,t,l,i)},r.a.createElement(Ue,{topSection:a,name:c.CoinName,symbol:c.Symbol}),r.a.createElement(Me,{coin:c}))})},Ke=U.b.div(qe||(qe=Object(V.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n    grid-gap: 15px;\n    margin-top: 40px;\n"])));function Xe(e,t,a,n){return t?a:function(e,t){return t&&Object.keys(t)||Object.keys(e).slice(0,50)}(e,n)}var Ye,Qe,Ze=function(e){var t=e.topSection;return r.a.createElement(oe.Consumer,null,function(e){var a=e.coinList,n=e.favorites,l=e.filteredCoins;return r.a.createElement(Ke,null,Xe(a,t,n,l).map(function(e){return r.a.createElement($e,{key:e,topSection:t,coinKey:e})}))})},et=a(82),tt=a.n(et),at=U.b.div(Ye||(Ye=Object(V.a)(["\ndisplay: grid;\ngrid-template-columns: 200px 1fr;\n"]))),nt=U.b.input(Qe||(Qe=Object(V.a)(["\n    ","\n    ","\n    border: 1px solid;\n    height: 25px;\n    color: #1163c9;\n    place-self: center left;\n"])),Ne,"font-size: 1.0em"),rt=Q.a.debounce(function(e,t,a){var n=Object.keys(t),r=n.map(function(e){return t[e].CoinName}),l=n.concat(r),i=tt.a.filter(e,l,{}).map(function(e){return e.string});a(Q.a.pickBy(t,function(e,t){var a=e.CoinName;return Q.a.includes(i,t)||Q.a.includes(i,a)}))},500);var lt,it,ot,ct,st,ut,mt,dt,pt=function(){return r.a.createElement(oe.Consumer,null,function(e){var t=e.setFilteredCoins,a=e.coinList;return r.a.createElement(at,null,r.a.createElement("h2",null,"Search all coins"),r.a.createElement(nt,{onKeyUp:function(e){return function(e,t,a){var n=e.target.value;n?rt(n,a,t):t(null)}(e,t,a)}}))})},ft=function(){return r.a.createElement(Te,{name:"settings"},r.a.createElement(ge,null),r.a.createElement(Ze,{topSection:!0}),r.a.createElement(De,null),r.a.createElement(pt,null),r.a.createElement(Ze,null))},bt=function(e){return r.a.createElement(oe.Consumer,null,function(t){var a=t.coinList,n=t.prices,l=t.firstVisit;return a?l||n?r.a.createElement("div",null," ",e.children," "):r.a.createElement("div",null,"Loading Prices"):r.a.createElement("div",null," Loading Coins ")})},gt=U.b.div(lt||(lt=Object(V.a)(["\n    justify-self: right;\n"]))),ht=U.b.div(it||(it=Object(V.a)(["\n    justify-self: left;\n"]))),vt=U.b.div(ot||(ot=Object(V.a)(["\n    ","\n"])),"font-size: 2em"),Et=U.b.div(ct||(ct=Object(V.a)(["\n    color: green;\n    ","\n"])),function(e){return e.red&&Object(U.a)(st||(st=Object(V.a)(["\n        color: red;\n    "])))}),Ct=function(e){return+(e+"").slice(0,7)},yt=Object(U.b)(Ie)(ut||(ut=Object(V.a)(["\n    ","\n  ","\n"])),function(e){return e.compact&&Object(U.a)(mt||(mt=Object(V.a)(["\n    display: grid;\n    ","\n    grid-gap: 5px;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: right;\n  "])),"font-size: .75em")},function(e){return e.currentFavorite&&Object(U.a)(dt||(dt=Object(V.a)(["\n    ","\n    pointer-events: none;\n  "])),_e)});function kt(e){var t=e.data;return r.a.createElement(gt,null,r.a.createElement(Et,{red:t.CHANGEPCT24HOUR<0},Ct(t.CHANGEPCT24HOUR),"%"))}function Ot(e){var t=e.sym,a=e.data,n=e.currentFavorite,l=e.setCurrentFavorite;return r.a.createElement(yt,{onClick:l,currentFavorite:n},r.a.createElement(He,null,r.a.createElement("div",null," ",t," "),r.a.createElement(kt,{data:a})),r.a.createElement(vt,null,"$",Ct(a.PRICE)))}function xt(e){var t=e.sym,a=e.data,n=e.currentFavorite,l=e.setCurrentFavorite;return r.a.createElement(yt,{onClick:l,compact:!0,currentFavorite:n},r.a.createElement(ht,null," ",t," "),r.a.createElement(kt,{data:a}),r.a.createElement("div",null,"$",Ct(a.PRICE)))}var jt,wt,St,Ft=function(e){var t=e.price,a=e.index,n=Object.keys(t)[0],l=t[n].USD,i=a<5?Ot:xt;return r.a.createElement(oe.Consumer,null,function(e){var t=e.currentFavorite,a=e.setCurrentFavorite;return r.a.createElement(i,{sym:n,data:l,currentFavorite:t===n,setCurrentFavorite:function(){return a(n)}})})},Nt=U.b.div(jt||(jt=Object(V.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 15px;\n    margin-top: 40px;\n"]))),At=function(){return r.a.createElement(oe.Consumer,null,function(e){var t=e.prices;return r.a.createElement(Nt,null,t.map(function(e,t){return r.a.createElement(Ft,{key:"priceTile-".concat(t),index:t,price:e})}))})},_t=U.b.h2(wt||(wt=Object(V.a)(["\n    text-align: center;\n"]))),Pt=function(){return r.a.createElement(oe.Consumer,null,function(e){var t=e.currentFavorite,a=e.coinList;return r.a.createElement(Be,null,r.a.createElement(_t,null,a[t].CoinName),r.a.createElement(Me,{spotlight:!0,coin:a[t]}))})},Lt=function(e){return{title:{text:"Comparative Coin Value Over Time"},subtitle:{text:"Source: thesolarfoundation.com"},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsiveness:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}},Dt=a(47),Tt=a.n(Dt),Bt={colors:["#515dff"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderColor:"#CCCCCC",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineWidth:0,gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}},It=U.b.select(St||(St=Object(V.a)(["\n    ","\n    ","\n    color: #1163c9;\n    border: 1px solid;\n    float: right;\n"])),Ne,"font-size: 1.0em");Tt.a.Highcharts.setOptions(Bt);var Gt,Wt,Ht=function(){return r.a.createElement(oe.Consumer,null,function(e){var t=e.historical,a=e.changeChartSelect;return r.a.createElement(Be,null,r.a.createElement(It,{defaultValue:"months",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:"days"},"Days"),r.a.createElement("option",{value:"weeks"},"Weeks"),r.a.createElement("option",{value:"months"},"Months")),t?r.a.createElement(Tt.a,{config:Lt(t)}):r.a.createElement("div",null,"Loading Historical Data"))})},Rt=(U.b.div(Gt||(Gt=Object(V.a)(["\n    // display: grid;\n    // grid-template-columns: auto;\n    // justify-self: center;\n"]))),function(){return r.a.createElement("div",{className:"marquee"},r.a.createElement("ul",{className:"marquee-content"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Georgian_lari",target:"_blank"},"\u20be")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ethereum",target:"_blank"},"\u039e")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/United_States_dollar",target:"_blank"},"$")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ruble",target:"_blank"},"\u20bd")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Bangladeshi_taka",target:"_blank"},"\u20ba")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Bitcoin",target:"_blank"},"\u20bf")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Yuan_(currency)",target:"_blank"},"\u5143")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Monero",target:"_blank"},"\u0271")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Pound_sterling",target:"_blank"},"\xa3")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Georgian_lari",target:"_blank"},"\u20be")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ethereum",target:"_blank"},"\u039e")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/United_States_dollar",target:"_blank"},"$")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ruble",target:"_blank"},"\u20bd"))))}),Vt=U.b.div(Wt||(Wt=Object(V.a)(["\n    display: grid;\n    margin-top: 20px;\n    grid-gap: 15px;\n    grid-template-columns: 1fr 3fr;\n"]))),Ut=function(){return r.a.createElement(Te,{name:"dashboard"},r.a.createElement(At,null),r.a.createElement(Vt,null,r.a.createElement(Pt,null),r.a.createElement(Ht,null)),r.a.createElement(Rt,null))},zt=(a(138),a(154)),Mt=a(155),Jt=a(156),qt=function(e){function t(e){return Object(J.a)(this,t),Object($.a)(this,Object(K.a)(t).call(this,e))}return Object(X.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props.person,t=(e.id,e.name),a=e.company,n=e.description;return r.a.createElement("div",null,r.a.createElement(g.a,{body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},r.a.createElement(zt.a,{className:"text-white"},t),r.a.createElement(Mt.a,{className:"text-muted"},a),r.a.createElement(Jt.a,null," ",r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"Github"))))}}]),t}(n.Component),$t=function(e){function t(){var e;return Object(J.a)(this,t),(e=Object($.a)(this,Object(K.a)(t).call(this))).state={people:[{id:1,name:"Project 3 ",company:"A React powered stock market tracker",description:"https://github.com/jamescbaldwin/react-finance"},{id:2,name:"Aro Parada",company:"Raleigh, NC",description:"https://github.com/AroParada"},{id:3,name:"Casey Overton",company:"Raleigh, NC",description:"https://github.com/CaseyOverton"},{id:4,name:"Christopher Derteano",company:"Raleigh, NC",description:"https://github.com/cadertea"},{id:5,name:"James Baldwin",company:"Raleigh, NC",description:"https://github.com/jamescbaldwin"},{id:6,name:"Nihal Williams",company:"Raleigh, NC",description:"https://github.com/nihalwill"}]},e}return Object(X.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.state.people.map(function(e){return r.a.createElement(f.a,{sm:"5"},r.a.createElement(qt,{key:e.id,person:e}))});return r.a.createElement(d.a,{fluid:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},r.a.createElement(p.a,null,e))}}]),t}(n.Component),Kt=function(){return r.a.createElement(Te,{name:"About Us"},r.a.createElement($t,null))};var Xt=function(){return r.a.createElement(z,null,r.a.createElement(ue,null,r.a.createElement(be,null),r.a.createElement(bt,null,r.a.createElement(ft,null),r.a.createElement(Ut,null),r.a.createElement(Kt,null))))},Yt=a(83),Qt=function(e){var t=e.component,a=e.isAuthenticated,n=Object(Yt.a)(e,["component","isAuthenticated"]);return r.a.createElement(c.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(c.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var Zt=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:B}),r.a.createElement(c.b,{exact:!0,path:"/login",component:B}),r.a.createElement(c.b,{exact:!0,path:"/signup",component:R}),r.a.createElement(Qt,{exact:!0,path:"/mainpage",component:Xt,isAuthenticated:!0})),r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(139);i.a.render(r.a.createElement(Zt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/Screenshot (178).e2b6db6c.png"},84:function(e,t,a){e.exports=a(140)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.58da9956.chunk.js.map