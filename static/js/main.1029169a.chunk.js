(this.webpackJsonprocket=this.webpackJsonprocket||[]).push([[0],{243:function(e,t){},252:function(e,t){},271:function(e,t){},273:function(e,t){},289:function(e,t){},290:function(e,t){},354:function(e,t){},356:function(e,t){},366:function(e,t){},368:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},402:function(e,t){},415:function(e,t){},427:function(e,t){},430:function(e,t){},435:function(e,t){},446:function(e,t){},449:function(e,t){},501:function(e,t,n){},502:function(e,t,n){},506:function(e,t,n){},507:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(1),i=n(81),r=n.n(i),u=n(117),p=n(60),c=n(45),o=n(212),d=n(4),l=n(7),y=n(11),m=n(10),b=n(16),f=n(46),h=n(17),j=n.n(h),v=n(37),T=n(213),x=n.n(T),O=function(){return new Promise(function(){var e=Object(v.a)(j.a.mark((function e(t,n){var a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return a=new x.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(e.t0);case 11:e.next=14;break;case 13:window.web3&&(s=window.web3,t(s));case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}())},w=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"holder",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"blackholeDonation",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lockPeriod",type:"uint256"}],name:"LPClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"holder",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"eth",type:"uint256"},{indexed:!1,internalType:"uint256",name:"r3t",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timeStamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lockPeriod",type:"uint256"}],name:"LPQueued",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"LockedLP",outputs:[{internalType:"address",name:"holder",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes16",name:"a",type:"bytes16"},{internalType:"bytes16",name:"b",type:"bytes16"},{internalType:"bytes16",name:"c",type:"bytes16"},{internalType:"bytes16",name:"d",type:"bytes16"},{internalType:"uint256",name:"maxReserves",type:"uint256"}],name:"calibrate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes16",name:"d_max",type:"bytes16"},{internalType:"bytes16",name:"P0",type:"bytes16"},{internalType:"bytes16",name:"d0",type:"bytes16"},{internalType:"bytes16",name:"beta",type:"bytes16"}],name:"calibrateLockPercentage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"calibration",outputs:[{internalType:"bytes16",name:"a",type:"bytes16"},{internalType:"bytes16",name:"b",type:"bytes16"},{internalType:"bytes16",name:"c",type:"bytes16"},{internalType:"bytes16",name:"d",type:"bytes16"},{internalType:"uint256",name:"maxReserves",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claimLP",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"config",outputs:[{internalType:"address",name:"R3T",type:"address"},{internalType:"contract IUniswapV2Router02",name:"uniswapRouter",type:"address"},{internalType:"contract IUniswapV2Pair",name:"tokenPair",type:"address"},{internalType:"contract FeeDistributorLike",name:"feeDistributor",type:"address"},{internalType:"contract SlidingWindowOracle",name:"uniswapOracle",type:"address"},{internalType:"address",name:"self",type:"address"},{internalType:"address",name:"weth",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"fee",outputs:[{internalType:"bytes16",name:"",type:"bytes16"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeUINT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"flushToTreasury",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"holder",type:"address"},{internalType:"uint256",name:"position",type:"uint256"}],name:"getLockedLP",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLockedPeriod",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"globalLPLockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockPercentageCalibration",outputs:[{internalType:"bytes16",name:"d_max",type:"bytes16"},{internalType:"bytes16",name:"P0",type:"bytes16"},{internalType:"bytes16",name:"d0",type:"bytes16"},{internalType:"bytes16",name:"beta",type:"bytes16"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockPercentageUINT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"holder",type:"address"}],name:"lockedLPLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"purchaseLP",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"beneficiary",type:"address"}],name:"purchaseLPFor",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"r3t",type:"address"},{internalType:"address",name:"feeDistributor",type:"address"},{internalType:"address",name:"uniswapRouter",type:"address"},{internalType:"address",name:"uniswapPair",type:"address"},{internalType:"address",name:"_treasury",type:"address"},{internalType:"address",name:"_uniswapOracle",type:"address"}],name:"seed",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"treasury",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],g=[{inputs:[{internalType:"address",name:"_feeDistributor",type:"address"},{internalType:"address",name:"feeApprover",type:"address"},{internalType:"address",name:"_router",type:"address"},{internalType:"address",name:"_factory",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"feeApprover",type:"address"},{internalType:"address",name:"_feeDistributor",type:"address"},{internalType:"address",name:"_liquidVault",type:"address"}],name:"addressesSetup",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"createUniswapPair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"feeDistributor",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"liquidVault",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_feeDistributor",type:"address"}],name:"setFeeDistributor",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_transferCheckerAddress",type:"address"}],name:"setShouldTransferChecker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenUniswapPair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"transferCheckerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferGrabLP",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapFactory",outputs:[{internalType:"contract IUniswapV2Factory",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapRouter",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"}],k="0x05a87F1135504e096a6Cc71B956bD8c7Be30588F",M=n.p+"static/media/metamask.872a6ec4.svg",P=n.p+"static/media/discord.d6e91214.svg",L=n.p+"static/media/github.1f9b67f1.svg",N=n.p+"static/media/icon.0fff83c3.svg",A=n.p+"static/media/telegram.acfdae47.svg",C=n.p+"static/media/rocketLogo.dad5b4bd.svg",D=n.p+"static/media/metamask.57b9c840.svg",_=(n(501),function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={auth:!1,isProfileOpen:!1},e.toLogin=e.toLogin.bind(Object(f.a)(e)),e.closeModal=e.closeModal.bind(Object(f.a)(e)),e.openModal=e.openModal.bind(Object(f.a)(e)),e.renderModalBody=e.renderModalBody.bind(Object(f.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.checkAuth()}},{key:"checkAuth",value:function(){var e=this,t=window.ethereum;t&&(null!==t.selectedAddress?(this.setState({auth:t.selectedAddress}),localStorage.auth=t.selectedAddress):(this.setState({auth:localStorage.auth}),this.timeout=setTimeout((function(){var t=window.ethereum;null!==t.selectedAddress?(e.setState({auth:t.selectedAddress}),localStorage.auth=t.selectedAddress):(localStorage.auth="",e.setState({auth:!1}))}),400)))}},{key:"openModal",value:function(){this.setState({isProfileOpen:!0})}},{key:"renderModalBody",value:function(){var e=this.state.auth;return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:"modal-title",children:"Profile"}),Object(a.jsx)("div",{className:"center",children:"Metamask id:"}),Object(a.jsx)("div",{className:"info",children:e})]})}},{key:"toLogin",value:function(){this.props.getAuth()}},{key:"closeModal",value:function(){this.setState({isProfileOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state.auth,n=this.props.authorized;return Object(a.jsx)("div",{className:"header-wrap",children:Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{alt:"",src:C})}),Object(a.jsxs)("div",{className:"wrap-navigation",children:[Object(a.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/rock3tfinance",children:Object(a.jsx)("img",{alt:"",src:N})}),Object(a.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://discord.gg/3HMJ7caFhj",children:Object(a.jsx)("img",{alt:"",src:P})}),Object(a.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://t.me/Rock3Tfinance",children:Object(a.jsx)("img",{alt:"",src:A})}),Object(a.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/degen-vc",children:Object(a.jsx)("img",{alt:"",src:L})}),Object(a.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://medium.com/rock3t",children:Object(a.jsx)("img",{src:M,alt:""})}),Object(a.jsx)("img",{className:"metamask-icon",src:D,alt:"",onClick:function(){(t||n)&&e.toLogin()}})]})]})})}}]),n}(s.PureComponent)),B=Object(p.b)((function(e){return{authorized:e.auth.authorization}}),(function(e){return{getAuth:function(){e(function(){var e=Object(v.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return n=e.sent,e.next=5,n.eth.getAccounts();case 5:a=e.sent,t({type:"AUTHORIZATION",payload:a[0]});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(_),I=n.p+"static/media/eth.4391c1d3.svg",S=(n(502),function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={ethValue:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getLockedLP()}},{key:"changeEthValue",value:function(e){var t=e.target.value;this.setState({ethValue:t})}},{key:"render",value:function(){var e=this,t=this.state.ethValue,n=this.props,i=n.purchaseLP,r=n.claim,u=n.balances;return Object(a.jsx)(s.Fragment,{children:Object(a.jsxs)("div",{className:"base-background",children:[Object(a.jsx)("div",{className:"rocket-container"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"eth-border actions",children:[Object(a.jsxs)("div",{className:"amount",children:[Object(a.jsx)("input",{className:"title",placeholder:"AMOUNT",value:t,onChange:function(t){return e.changeEthValue(t)}}),Object(a.jsxs)("div",{className:"image-wrap",children:["ETH",Object(a.jsx)("img",{src:I,alt:""})]})]}),Object(a.jsxs)("div",{className:"border-wrap",children:[Object(a.jsx)("div",{className:"title",children:"LOCKED LP"}),Object(a.jsxs)("div",{className:"number",children:[u.lockedLP,"00"]})]}),Object(a.jsx)("div",{className:"send-eth button eth",onClick:function(){i(t)},children:Object(a.jsx)("div",{className:"title",children:"SEND ETH"})}),Object(a.jsx)("div",{className:"claim-lp button claim",onClick:function(){r()},children:Object(a.jsx)("div",{className:"title",children:"CLAIM LP"})})]}),Object(a.jsx)("div",{className:"eth-border",children:Object(a.jsxs)("div",{className:"bordered-data-container",children:[Object(a.jsxs)("div",{className:"bordered-data",children:[Object(a.jsx)("div",{className:"title",children:"MAX FUEL"}),Object(a.jsx)("div",{className:"value",children:"999ETH"})]}),Object(a.jsxs)("div",{className:"bordered-data",children:[Object(a.jsx)("div",{className:"title",children:"LOCK PERIOD"}),Object(a.jsxs)("div",{className:"value",children:[u.lockPeriod,"DAY"]})]}),Object(a.jsxs)("div",{className:"bordered-data",children:[Object(a.jsx)("div",{className:"title",children:"LP BOOST"}),Object(a.jsxs)("div",{className:"value",children:[u.lpBoost,"%"]})]}),Object(a.jsxs)("div",{className:"bordered-data",children:[Object(a.jsx)("div",{className:"title",children:"LP BURN"}),Object(a.jsxs)("div",{className:"value",children:[u.lpBurn,"%"]})]})]})})]})]})})}}]),n}(s.PureComponent)),F=Object(p.b)((function(e){return{balances:e.balance}}),(function(e){return{purchaseLP:function(t){e(function(e){return function(){var t=Object(v.a)(j.a.mark((function t(n){var a,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:return a=t.sent,t.next=5,a.eth.getAccounts();case 5:return s=t.sent,t.next=8,new a.eth.Contract(w,k);case 8:return i=t.sent,t.next=11,new a.eth.Contract(g,"0x8C7424c3000942e5A93De4a01Ce2eC86c06333Cb");case 11:return t.sent,t.prev=12,t.next=15,i.methods.purchaseLP().send({from:s[0],value:a.utils.toWei("".concat(e))});case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(12),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[12,17]])})));return function(e){return t.apply(this,arguments)}}()}(t))},claim:function(){e(function(){var e=Object(v.a)(j.a.mark((function e(t){var n,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return n=e.sent,e.next=5,n.eth.getAccounts();case 5:return a=e.sent,e.next=8,new n.eth.Contract(w,k);case 8:return s=e.sent,e.prev=9,e.next=12,s.methods.claimLP().send({from:a[0]});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t){return e.apply(this,arguments)}}())},getLockedLP:function(){e(function(){var e=Object(v.a)(j.a.mark((function e(t){var n,a,s,i,r,u,p,c,o,d,l,y,m,b,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=5,O();case 5:return n=e.sent,e.next=8,n.eth.getAccounts();case 8:return a=e.sent,e.next=11,new n.eth.Contract(w,k);case 11:return s=e.sent,e.prev=12,i=0,r=0,u=0,p=0,c=0,e.next=21,s.methods.config().call();case 21:return o=e.sent,d=o.stakeDuration,e.next=25,s.methods.lockedLPLength(a[0]).call();case 25:return l=e.sent,e.next=28,s.methods.getLockedPeriod().call();case 28:return p=e.sent,e.next=31,s.methods.feeUINT().call();case 31:if(c=e.sent,u=+u,p=Math.round(p/24/60/60),"0"===l){e.next=54;break}return e.next=37,s.methods.getLockedLP(a[0],l-1).call();case 37:y=e.sent,i=y[1],m=0,d<(new Date).getTime()/1e3-y[2]?m++:i=0,i=+n.utils.fromWei(i+""),i=parseFloat(i).toFixed(2),b=0;case 44:if(!(b<l-m)){e.next=52;break}return e.next=47,s.methods.getLockedLP(a[0],b).call();case 47:f=e.sent,r=n.utils.toBN(r).add(n.utils.toBN(f[1]));case 49:b++,e.next=44;break;case 52:r=0!==r?+n.utils.fromWei(r+""):0,r=parseFloat(r.toFixed(2));case 54:return d=d/60/60/24,e.next=57,t({type:"GET_LIQUID",payload:{lockedLP:+i+ +r,lockPeriod:p,lpBurn:u,lpBoost:c}});case 57:e.next=62;break;case 59:e.prev=59,e.t0=e.catch(12),console.log(e.t0);case 62:case"end":return e.stop()}}),e,null,[[12,59]])})));return function(t){return e.apply(this,arguments)}}())}}}))(S),U=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)(B,{}),Object(a.jsx)(b.b,{path:"/",children:Object(a.jsx)(b.a,{to:"/"})}),Object(a.jsx)(F,{})]})}}]),n}(s.Component),R={authorization:!1},V={lockedLP:0,lockPeriod:0,lpBurn:0},E=Object(c.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHORIZATION":return Object.assign({authorization:t.payload});default:return e}},balance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIQUID":var n=t.payload,a=n.lockPeriod,s=n.lockedLP,i=n.lpBurn,r=n.lpBoost;return Object.assign({lockPeriod:a,lockedLP:s,lpBurn:i,lpBoost:r});default:return e}}}),H=(n(506),Object(c.d)(E,Object(c.a)(o.a))),z=function(){return Object(a.jsx)(p.a,{store:H,children:Object(a.jsx)(u.a,{children:Object(a.jsx)(U,{})})})};r.a.render(Object(a.jsx)(z,{}),document.getElementById("root"))}},[[507,1,2]]]);
//# sourceMappingURL=main.1029169a.chunk.js.map