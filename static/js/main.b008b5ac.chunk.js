(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,function(e,t,n){e.exports=n(40)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(11),r=n.n(o),l=(n(17),n(1)),c=n(2),s=n(4),m=n(3),g=n(5),u=(n(19),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={certifications:[{key:1,image:"images/sba-wosb-white.png",imageURL:"",altTag:""},{key:2,image:"images/wbenc-white.png",imageURL:"",altTag:""},{key:3,image:"images/wbe-white.png",imageURL:"",altTag:""},{key:4,image:"images/vosb-white.png",imageURL:"",altTag:""},{key:5,image:"images/lede-white.png",imageURL:"",altTag:""},{key:6,image:"images/vbe-white.png",imageURL:"",altTag:""},{key:7,image:"images/vbe-white.png",imageURL:"",altTag:""}]},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"thumb-cert-container"},i.a.createElement("div",{className:"main-container"},this.state.certifications.map(function(e){return i.a.createElement("img",{src:e.image,key:e.key,height:"70",className:"certPreview",alt:e.altTag})})))}}]),t}(a.Component)),h=(n(21),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={navigation:[{key:1,navTitle:"Services",navURL:"#services"},{key:2,navTitle:"certifications",navURL:"#certifications"},{key:3,navTitle:"About Us",navURL:"#about us"},{key:4,navTitle:"Contact Us",navURL:"#"}],scrolled:!1},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){!0!==window.scrollY<100?e.setState({scrolled:!0}):e.setState({scrolled:!1})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return i.a.createElement("div",{className:this.state.scrolled?"navigation-container scrolled":"navigation-container"},i.a.createElement("div",{className:"main-container"},i.a.createElement("div",{className:"float-right"},i.a.createElement("ul",null,this.state.navigation.map(function(e){return i.a.createElement("li",{key:e.key},i.a.createElement("a",{href:e.navURL},e.navTitle))}))),i.a.createElement("div",{className:"float-left"},i.a.createElement("img",{src:"images/jg-logo-v2.png",height:"110",alt:"J&G Demolition",className:this.state.scrolled?"logo-min logo":"logo"}),i.a.createElement("p",{className:this.state.scrolled?"logo-text logo-text-min":"logo-text logo-text-full"},"J&G ",i.a.createElement("br",null),"Demolition")),i.a.createElement("div",{className:"clear"})))}}]),t}(a.Component)),y=(n(23),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"position-relative"},i.a.createElement("p",{className:"hero-text"},"J&G Demolition is a licensed family-owned demolition and hazardous materials remediation contractor, serving commercial and residential clients in Ohio."),i.a.createElement("img",{className:"center-image",src:"images/hero-image-v2.png",alt:""}))}}]),t}(a.Component)),d=(n(25),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"section-divider"},i.a.createElement("h2",{id:this.props.title},this.props.title))}}]),t}(a.Component)),p=(n(8),n(6)),b=n.n(p),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(b.a,{left:!0},i.a.createElement("div",{className:"service-container"},i.a.createElement("div",{className:"service-content-container left-padding float-left"},i.a.createElement("img",{src:"images/service-example.jpg",width:"260",height:"260",alt:"",className:"float-left"}),i.a.createElement("div",{className:"service-text text-padding-left float-left"},i.a.createElement("h2",null,this.props.title),i.a.createElement("p",null,this.props.description)),i.a.createElement("div",{className:"clear"})),i.a.createElement("div",{className:"triangle-left"}),i.a.createElement("div",{className:"clear"})))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(b.a,{right:!0},i.a.createElement("div",{className:"service-container"},i.a.createElement("div",{className:"service-content-container right-padding float-right"},i.a.createElement("img",{src:"images/service-example.jpg",width:"260",height:"260",alt:"",className:"float-right"}),i.a.createElement("div",{className:"service-text text-padding-right float-right"},i.a.createElement("h2",null,this.props.title),i.a.createElement("p",null,this.props.description)),i.a.createElement("div",{className:"clear"})),i.a.createElement("div",{className:"triangle-right"}),i.a.createElement("div",{className:"clear"})))}}]),t}(a.Component),w=(n(32),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-container work-locations"},i.a.createElement("div",{className:"center"},i.a.createElement("img",{src:"images/work-locations.png",alt:"",height:"",width:"",className:"float-left"}),i.a.createElement("p",{className:"text float-left"},"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."),i.a.createElement("div",{className:"clear"})))}}]),t}(a.Component)),k=(n(34),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={certificates:[{key:1,image:"images/sba-wosb.png",title:"SBA WOSB",date:"Received on: 2/20/2018",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:2,image:"images/wbe.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:4,image:"images/wbe.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:5,image:"images/vosb.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:6,image:"images/vosb.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:7,image:"images/vosb.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:8,image:"images/vosb.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:9,image:"images/vosb.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:10,image:"images/vosb.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"},{key:11,image:"images/vosb.png",title:"WBE",date:"Received on: 3/14/2017",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better?"}]},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-container center-block"},this.state.certificates.map(function(e){return i.a.createElement("div",{key:e.key,className:"certificate float-left"},i.a.createElement("img",{className:"cert",src:e.image,width:"300",alt:""}),i.a.createElement("h2",{className:"title"},e.title),i.a.createElement("p",{className:"date"},e.date),i.a.createElement("p",{className:"description"},e.description))}),i.a.createElement("div",{className:"clear"}))}}]),t}(a.Component)),E=(n(36),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"circle-container"},i.a.createElement("img",{src:"images/ServiceExample.png",alt:""}))}}]),t}(a.Component)),j=(n(38),function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u,null),i.a.createElement(h,null),i.a.createElement(y,null),i.a.createElement(d,{title:"services"}),i.a.createElement(v,{position:"left",title:"demolition",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."}),i.a.createElement(f,{position:"right",title:"demolition",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."}),i.a.createElement(v,{position:"left",title:"demolition",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."}),i.a.createElement(f,{position:"right",title:"demolition",description:"You know when grown-ups tell you 'everything's going to be \x1fne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."}),i.a.createElement(w,null),i.a.createElement(d,{title:"certifications"}),i.a.createElement(k,null),i.a.createElement(d,{title:"about us"}),i.a.createElement(E,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.b008b5ac.chunk.js.map