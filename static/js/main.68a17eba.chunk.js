(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(66)),r(n(143))},121:function(t,e,n){t.exports=n(353)},126:function(t,e,n){},130:function(t,e,n){},142:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["out of this registry","Domain is not available"];e.errorMatchers={errorHeader:function(t){return r.find(function(e){return t.toLowerCase().startsWith(e.toLowerCase())})},noMatchFor:function(t){return(/No match for \"[^\"]+\"/gi.exec(t)||[""])[0]},domainNotFound:function(t){return(/The domain [^\s]+ was not found/gi.exec(t)||[""])[0]}}},143:function(t,e,n){"use strict";var r=n(45),a=n(67),i=n(144),o=n(68),s=n(69),u=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function o(t){try{u(r.next(t))}catch(e){i(e)}}function s(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0});var c=n(32),l=n(72),p=n(71),d=n(158),m=n(159),h=n(25),f=n(66),g=n(161),v=function(){function t(){o(this,t)}return s(t,[{key:"eachField",value:function(t,e){return this.eachFieldInner(t,e)}},{key:"buildMapping",value:function(t){return u(this,void 0,void 0,r.mark(function e(){var n,o,s,d,g,v,y,w,b,k,O=this;return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.sync(t),o=p.partition(n,function(t){return".txt"===h.extname(t).toLowerCase()}),s=i(o,2),d=s[0],g=s[1],v=m.default(50),y=new f.WhoisParser,e.t0=[],e.t1=a,e.next=8,Promise.all(d.map(function(t){return v(function(){return u(O,void 0,void 0,r.mark(function e(){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=y,e.next=3,c.promises.readFile(t,"utf8");case 3:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 5:case"end":return e.stop()}},e)}))})}));case 8:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.t4=a,e.next=13,Promise.all(g.map(function(t){return v(function(){return u(O,void 0,void 0,r.mark(function e(){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,c.promises.readFile(t,"utf8");case 3:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 5:case"end":return e.stop()}},e)}))})}));case 13:return e.t5=e.sent,e.t6=(0,e.t4)(e.t5),e.t7=function(t){return!t.error},w=e.t0.concat.call(e.t0,e.t3,e.t6).filter(e.t7),b=w.map(function(t){return t.data}).map(this.resolveDomainDates.bind(this)),k=b.reduce(function(t,e){return p.fromPairs(Object.keys(e).map(function(n){return[n,p.uniq(p.compact([].concat(a(t[n]||[]),[e[n]?e[n].field:void 0])))]}))},{}),e.abrupt("return",k);case 20:case"end":return e.stop()}},e,this)}))}},{key:"resolveDomainDates",value:function(t){var e=p.take(this.findDateFields(t),3);return{updated_date:e.find(function(t){return/^.*updat|chang|modif|actual.*$/gi.test(t.field)}),creation_date:e.find(function(t){return/^.*crea|registe|activat|registration.*$/gi.test(t.field)}),registry_expiry_date:e.find(function(t){return/^.*expir|avail|renew|free|until.*$/gi.test(t.field)})}}},{key:"parseDate",value:function(t){if(/(19[78][0-9]|199[0-9]|20[0-9]{2}|2100)/gi.test(t)){var e=g.parseDate(t);return e?d(e).toDate():void 0}}},{key:"findDateFields",value:function(t){var e=this,n=[];return this.eachField(t,function(t,r){if(p.isString(r)){var a=e.parseDate(r);a&&!/.*phone|postal|street.*/gi.test(t)&&n.push({field:t,value:a})}}),n}},{key:"eachFieldInner",value:function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=Object.keys(t),a=0;a<r.length;a++){var i=r[a],o=t[i],s=p.compact([n,i]).join(".");p.isPlainObject(o)?this.eachFieldInner(o,e,s):e(s,o)}}}]),t}();e.WhoisAnalyzer=v},353:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),i=n(20),o=n.n(i),s=(n(126),n(45)),u=n.n(s),c=n(47),l=n(110),p=n(111),d=n(112),m=n(119),h=n(113),f=n(120),g=n(115),v=n.n(g),y=n(64),w=n(117),b=n.n(w),k=n(118),O=n.n(k),S=n(46),x=n.n(S),N=(n(129),n(130),n(44)),j=n.n(N),D=n(114),C=n(31),A=n.n(C),T='Domain Name: GAZIGA.COM\nRegistry Domain ID: 1563408937_DOMAIN_COM-VRSN\nRegistrar WHOIS Server: whois.godaddy.com\nRegistrar URL: http://www.godaddy.com\nUpdated Date: 2018-07-25T16:02:09Z\nCreation Date: 2009-07-24T08:51:20Z\nRegistrar Registration Expiration Date: 2019-07-24T08:51:20Z\nRegistrar: GoDaddy.com, LLC\nRegistrar IANA ID: 146\nRegistrar Abuse Contact Email: abuse@godaddy.com\nRegistrar Abuse Contact Phone: +1.4806242505\nDomain Status: clientTransferProhibited http://www.icann.org/epp#clientTransferProhibited\nDomain Status: clientUpdateProhibited http://www.icann.org/epp#clientUpdateProhibited\nDomain Status: clientRenewProhibited http://www.icann.org/epp#clientRenewProhibited\nDomain Status: clientDeleteProhibited http://www.icann.org/epp#clientDeleteProhibited\nRegistrant Organization: None\nRegistrant State/Province: \nRegistrant Country: BY\nRegistrant Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=GAZIGA.COM\nAdmin Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=GAZIGA.COM\nTech Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=GAZIGA.COM\nName Server: NS-1077.AWSDNS-06.ORG\nName Server: NS-2005.AWSDNS-58.CO.UK\nName Server: NS-815.AWSDNS-37.NET\nName Server: NS-221.AWSDNS-27.COM\nDNSSEC: unsigned\nURL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/\n>>> Last update of WHOIS database: 2019-03-29T11:00:00Z <<<\n\nFor more information on Whois status codes, please visit https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en\n\nNotes: \n\nIMPORTANT: Port43 will provide the ICANN-required minimum data set per \nICANN Temporary Specification, adopted 17 May 2018. \nVisit https://whois.godaddy.com to look up contact data for domains \nnot covered by GDPR policy.\n\nThe data contained in GoDaddy.com, LLC\'s WhoIs database,\nwhile believed by the company to be reliable, is provided "as is"\nwith no guarantee or warranties regarding its accuracy.  This\ninformation is provided for the sole purpose of assisting you\nin obtaining information about domain name registration records.\nAny use of this data for any other purpose is expressly forbidden without the prior written\npermission of GoDaddy.com, LLC.  By submitting an inquiry,\nyou agree to these terms of usage and limitations of warranty.  In particular,\nyou agree not to use this data to allow, enable, or otherwise make possible,\ndissemination or collection of this data, in part or in its entirety, for any\npurpose, such as the transmission of unsolicited advertising and\nand solicitations of any kind, including spam.  You further agree\nnot to use this data to enable high volume, automated or robotic electronic\nprocesses designed to collect or compile this data for any purpose,\nincluding mining this data for your own personal or commercial purposes. \n\nPlease note: the registrant of the domain name is specified\nin the "registrant" section.  In most cases, GoDaddy.com, LLC \nis not the registrant of domain names listed in this database.',R=function(t){function e(){var t,n;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={result:"",log:"",src:"",snake:!0,mapping:'{\n      "domain_mapped": [\n        "domain_name"\n      ]\n}'},n}return Object(f.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setState(Object(c.a)({src:T},this.parse(T)));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"parse",value:function(t){var e=this;try{var n="";return{result:JSON.stringify(new D.WhoisParser({snakeCase:this.state.snake,trace:function(t){console.log(t),n+=t},mapping:function(){try{return JSON.parse(e.state.mapping)}catch(t){return{}}}()}).parse(t),null,2),log:n}}catch(r){return{result:"",log:JSON.stringify(r,Object.getOwnPropertyNames)}}}},{key:"render",value:function(){var t=this,e=this.props.classes;return a.a.createElement("div",{className:e.root},a.a.createElement(v.a,{position:"static",color:"default"},a.a.createElement(b.a,null,a.a.createElement(O.a,{variant:"h4",color:"inherit"},"Whois Parser"))),a.a.createElement(A.a,{container:!0,spacing:24,style:{margin:0,width:"100%"}},a.a.createElement(A.a,{item:!0,xs:6},a.a.createElement(x.a,{id:"mapping",label:"Field Mapping",multiline:!0,rows:"10",value:this.state?this.state.mapping:"",className:e.textField,margin:"normal",variant:"outlined",onChange:function(e){return t.setState(Object(c.a)({mapping:e.target.value},t.parse(t.state.src)))}})),a.a.createElement(A.a,{item:!0,xs:6},a.a.createElement(j.a,{style:{marginTop:15}},a.a.createElement("div",{style:{overflow:"scroll",whiteSpace:"pre",height:"230px"}},this.state.log))),a.a.createElement(A.a,{item:!0,xs:6},a.a.createElement(x.a,{id:"src",label:"Whois Text",multiline:!0,rows:"20",value:this.state?this.state.src:"",className:e.textField,margin:"normal",variant:"outlined",onChange:function(e){return t.setState(Object(c.a)({src:e.target.value},t.parse(e.target.value)))}})),a.a.createElement(A.a,{item:!0,xs:6},a.a.createElement(x.a,{id:"dest",label:"Whois JSON",value:this.state?this.state.result:"",multiline:!0,rows:"20",defaultValue:"Default Value",className:e.textField,margin:"normal",variant:"outlined"}))))}}]),e}(r.Component),P=Object(y.withStyles)(function(t){return{root:{flexGrow:1,width:"100%",marginTop:3*t.spacing.unit,overflowX:"auto"},paper:{padding:2*t.spacing.unit,textAlign:"center",color:t.palette.text.secondary},content:{width:"100%",marginTop:3*t.spacing.unit,overflowX:"auto"},formControl:{margin:t.spacing.unit,minWidth:120},button:{margin:t.spacing.unit},link:{margin:t.spacing.unit},table:{minWidth:700},textField:{width:"100%"}}})(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},66:function(t,e,n){"use strict";var r=n(67),a=n(68),i=n(69);Object.defineProperty(e,"__esModule",{value:!0});var o=n(134),s=n(71),u=n(142),c=function(){function t(e){a(this,t),this.opts=Object.assign({snakeCase:!0,mapping:{},trace:function(){}},e)}return i(t,[{key:"parse",value:function(t){var e=this,n=this.opts,r=t;this.trace("Original Text",r),t=this.stripComments(t),this.trace("Comments stripped",t),t=this.reamoveNonAscii(t),this.trace("NON ASCII Removed & Diacritics removed",t),t=this.alignTextLeft(t),this.trace("Aligned to left",t);var a=s.compact(this.trimLines(t.split("\n")));if(a.length<=5)return this.errorResult(a.join("\n").trim()||"No Data");for(var i=Object.keys(u.errorMatchers),o=0;o<i.length;o++){var c=i[o],l=(0,u.errorMatchers[c])(t);if(l)return this.errorResult("[".concat(c,"] ").concat(l))}var p=this.splitTextGroups(t);if(this.trace("Text splitted into ".concat(p.length," groups")),s.each(p,function(t,n){e.trace("Group ".concat(n),t)}),!p.length)return this.errorResult("Empty result");var d=p.map(function(t){return e.parseGroup(t,n)}),m={},h=!0,f=!1,g=void 0;try{for(var v,y=d[Symbol.iterator]();!(h=(v=y.next()).done);h=!0){var w=v.value;m=Object.assign({},m,w)}}catch(R){f=!0,g=R}finally{try{h||null==y.return||y.return()}finally{if(f)throw g}}for(var b=this.opts.mapping,k=Object.keys(b),O=0;O<k.length;O++){var S=k[O],x=b[S],N=!0,j=!1,D=void 0;try{for(var C,A=x[Symbol.iterator]();!(N=(C=A.next()).done);N=!0){var T=C.value;s.get(m,T)&&s.set(m,S,s.get(m,T))}}catch(R){j=!0,D=R}finally{try{N||null==A.return||A.return()}finally{if(j)throw D}}}return 0===Object.keys(m).length?this.errorResult("No data"):this.parserResult(m)}},{key:"mergeResults",value:function(t){return{data:Object.assign.apply(Object,[{}].concat(r(t))),error:t.filter(function(t){return!!t.error}).join("\n")}}},{key:"trimLine",value:function(t){return s.trim(t,"\t ")}},{key:"trimLines",value:function(t){return t.map(this.trimLine)}},{key:"reamoveNonAscii",value:function(t){return s.deburr(t).replace(/[^\x00-\x7F]+/gi,"")}},{key:"parserResult",value:function(t){return{data:t,error:""}}},{key:"errorResult",value:function(t){return{data:{},error:t}}},{key:"indent",value:function(t){return t.split("\n").map(function(t){return"    "+t}).join("\n")}},{key:"trace",value:function(t,e){var n=[o.default.cyan(">>>>> ".concat(t,":")),e?this.indent("".concat(o.default.cyan("BEGIN>>")).concat(o.default.gray(e)).concat(o.default.cyan("<<END"))):"",""].join("\n");this.opts.trace(n)}},{key:"stripComments",value:function(t){return t=(t=s.reject(t.split("\n"),function(t){return/^\s*([\#\%]|([\\-]{3,})).*/gi.test(t)}).join("\n")).split(">>> ")[0]}},{key:"parseGroup",value:function(t,e){t=this.normalize(t),this.trace("Normalized Text",t);for(var n=s.compact(t.split("\n").map(function(t){return s.trim(t," \t")})).filter(function(t){return/^[a-zA-Z].*/gi.test(t)}),r={},a=s.compact(n.map(this.parseField)),i=s.groupBy(a,function(t){return t.key}),o=Object.keys(i),u=0;u<o.length;u++){var c=o[u],l=i[c];1===l.length?r[c]=l[0].value:r[c]=l.map(function(t){return t.value})}return r=this.arraysToObjects(r),this.opts.snakeCase&&(r=this.keysToSnakeCase(r)),r}},{key:"splitTextGroups",value:function(t){var e=this,n=[],r="",a=t.split("\n"),i=!0,o=!1,s=void 0;try{for(var u,c=a[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var l=u.value;/.*[a-zA-Z0-9]+.*/gi.test(l)?r+=l+"\n":(r&&n.push(r),r="")}}catch(p){o=!0,s=p}finally{try{i||null==c.return||c.return()}finally{if(o)throw s}}return r&&n.push(r),n.map(function(t){return e.alignTextLeft(t.trimRight())})}},{key:"keysToSnakeCase",value:function(t){for(var e={},n=Object.keys(t),r=0;r<n.length;r++){var a=n[r];e[s.snakeCase(a)]=s.isPlainObject(t[a])?this.keysToSnakeCase(t[a]):t[a]}return e}},{key:"arraysToObjects",value:function(t){for(var e=Object.keys(t),n=0;n<e.length;n++){var r=e[n],a=t[r];s.isArray(a)&&s.every(a,function(t){return/.*\:[ \t].*/gi.test(t)})?t[r]=this.parseGroup(a.join("\n")):s.isString(a)&&/.*\:[ \t].*/gi.test(a)&&(t[r]=this.parseGroup(a))}return t}},{key:"normalize",value:function(t){t=(t=(t=(t=t.replace(/([\.]{2,})/gi,function(t,e){return new Array(e.length+1).join(" ")})).split("\n").map(function(t){return t.replace(/^\*\* /gi,"")}).join("\n")).replace(/\s+\:/gi,":")).split("\n").map(function(t){return t.replace(/^\[([^\]]+)\]/gi,"$1:")}).join("\n"),t=this.normalizeTabs(t);var e=[],n=s.compact(t.split("\n")).filter(function(t){return/^[a-zA-Z\t ].*/gi.test(t)}),r="",a=0,i=!0,o=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var p=c.value,d=a<n.length-1?n[a+1]:void 0;/^[a-zA-Z].*/gi.test(p)&&d&&d.startsWith("\t")?r=(/^([a-zA-Z ]+)\:.*/gi.exec(p.trim())||["",""])[1]:p.startsWith("\t")?e.push(r?"".concat(r,": ").concat(p.trim()):p.trim()):(e.push(p.trim()),r=""),a++}}catch(m){o=!0,u=m}finally{try{i||null==l.return||l.return()}finally{if(o)throw u}}return e.join("\n")}},{key:"measureTabs",value:function(t){return t.split("\n").map(function(t){return{line:t,pad:t.trim()?(/^([\t ]+).*/gi.exec(t)||["",""])[1].length:Number.MAX_SAFE_INTEGER}})}},{key:"alignTextLeft",value:function(t){var e=this.measureTabs(t),n=s.min(e.map(function(t){return t.pad}))||0;return e.map(function(t){return{line:t.line.substring(n),pad:t.pad-n}}).map(function(t){return t.line}).join("\n").trim()}},{key:"normalizeTabs",value:function(t){return this.measureTabs(this.alignTextLeft(t)).map(function(t){return t.pad?"\t"+s.trim(t.line,"\t "):t.line}).join("\n")}},{key:"parseField",value:function(t){var e=t.split(":");if(!(e.length<2)){var n=s.trim(e[0]," ."),r=s.drop(e,1).join(":");return" "!==r[0]&&"\t"!==r[0]&&r[0]?void 0:{key:n,value:r.trim()}}}}]),t}();e.WhoisParser=c}},[[121,1,2]]]);
//# sourceMappingURL=main.68a17eba.chunk.js.map