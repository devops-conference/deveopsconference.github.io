(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"5pKv":function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,a,t){e.exports=t("uekQ")},RNiq:function(e,a,t){"use strict";t.r(a);var n=t("0iUn"),r=t("sLSF"),l=t("MI3g"),c=t("a7VT"),o=t("Tit0"),i=t("q1tI"),s=t.n(i),m=t("m/Pd"),u=t.n(m),d=t("HohS"),p=t.n(d),E=t("NGwb"),g=t.n(E),f=t("yJra"),v=t("UXZV"),b=t.n(v);function h(){return(h=b.a||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var k=t("4mXO"),w=t.n(k),N=t("pLtp"),I=t.n(N);function O(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=I()(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(w.a){var l=w()(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var y=function(e){var a=e.children,t=e.backgroundImage,n=e.title,r=e.alignCenter,l=O(e,["children","backgroundImage","title","alignCenter"]);return s.a.createElement("div",h({},l,{className:"mini-section",style:t?{backgroundImage:t}:{background:"#1d1d1d"}}),s.a.createElement("div",{className:"mini-section-content ".concat(r&&"align-center")},s.a.createElement("div",{className:"mini-section-body"},n&&s.a.createElement("div",{className:"title ".concat(!r&&"title-space")},s.a.createElement("h1",null,n)),a)))};y.defaultProps={alignCenter:!1};var j=y,C=t("zrwo"),D=t("AT/M"),S=t("vYYK"),x=t("6BQ9"),_=t.n(x),A=function(e){var a=new Date(e),t=new Date,n=Math.abs(a-t)/1e3,r=Math.floor(n/86400);n-=86400*r;var l=Math.floor(n/3600)%24;n-=3600*l;var c=Math.floor(n/60)%60;return n-=60*c,{days:r,hours:l,minutes:c,seconds:_()(n%60)}},R=function(e){var a=new Date(e);return new Date<a},T=function(e){function a(){var e,t;Object(n.default)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=Object(l.default)(this,(e=Object(c.default)(a)).call.apply(e,[this].concat(o))),Object(S.a)(Object(D.default)(t),"state",{dateDown:{days:0,hours:0,minutes:0,seconds:0,intervalId:0}}),t}return Object(o.default)(a,e),Object(r.default)(a,[{key:"componentDidMount",value:function(){var e=this,a=setInterval(function(){e.setState(Object(C.a)({},e.state,{dateDown:A(e.props.dateStartEvent),intervalId:a}))},1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.state.dateDown,a=e.days,t=e.hours,n=e.minutes,r=e.seconds;return R(this.props.dateStartEvent)?s.a.createElement("div",{className:"time-down"},s.a.createElement("div",{className:"time"},s.a.createElement("p",null,a),s.a.createElement("label",null,"DIAS")),s.a.createElement("span",null,":"),s.a.createElement("div",{className:"time"},s.a.createElement("p",null,t),s.a.createElement("label",null,"HORAS")),s.a.createElement("span",null,":"),s.a.createElement("div",{className:"time"},s.a.createElement("p",null,n),s.a.createElement("label",null,"MINUTOS")),s.a.createElement("span",null,":"),s.a.createElement("div",{className:"time"},s.a.createElement("p",null,r),s.a.createElement("label",null,"SEGUNDOS"))):R(this.props.dateFinishEvent)?(clearInterval(this.state.intervalId),s.a.createElement("div",null,s.a.createElement("h2",null,"Evento em andamento!"))):(clearInterval(this.state.intervalId),s.a.createElement("div",null,s.a.createElement("h2",null,"Evento encerrado!")))}}]),a}(s.a.Component);T.defaultProps={dateEvent:"04/22/2019"};var P=T,M=t("ZHh6"),q=t("00EI"),F=p()().publicRuntimeConfig.BACKEND_URL,z=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"footer-info"},s.a.createElement("div",{className:"footer-social-network"},q.a.footer.socialsNetwork.map(function(e){return s.a.createElement("a",{key:e.name,href:e.url,target:"_blank"},s.a.createElement("img",{src:"".concat(F).concat(e.icon),alt:e.name}))})),s.a.createElement("br",null),s.a.createElement("div",{className:"footer-copyright"},s.a.createElement("br",null),s.a.createElement("h5",null,q.a.footer.copyrigth),s.a.createElement("h5",null,"Site desenvolvido por ",s.a.createElement("a",{href:"https://dijalmasilva.github.io",target:"_blank"},"Dijalma Silva"),"."))))},B=function(e){function a(){var e,t;Object(n.default)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=Object(l.default)(this,(e=Object(c.default)(a)).call.apply(e,[this].concat(o))),Object(S.a)(Object(D.default)(t),"createCharsAnimated",function(e){for(var a=[],t=0;t<e.length;t++)a.push(s.a.createElement(g.a,{className:"word",key:t,animateIn:"fadeInDownBig",animateOnce:!0,delay:70*t},e.charAt(t)));return a}),t}return Object(o.default)(a,e),Object(r.default)(a,[{key:"render",value:function(){var e=this.props,a=e.text,t=e.className;return s.a.createElement("span",{className:"animated-text ".concat(t||"")},this.createCharsAnimated(a))}}]),a}(s.a.Component),K=p()().publicRuntimeConfig.BACKEND_URL,U=function(e){function a(){return Object(n.default)(this,a),Object(l.default)(this,Object(c.default)(a).apply(this,arguments))}return Object(o.default)(a,e),Object(r.default)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("title",null,q.a.title)),s.a.createElement(M.a,null),s.a.createElement(f.a,{title:s.a.createElement("img",{className:"logo",src:"".concat(K).concat(q.a.logo)}),backgroundImage:"url('".concat(K,"/static/img/section-background/black.jpg')"),backdrop:!0,alignCenter:!0,firstSection:!0},s.a.createElement("p",null,"17 de agosto de 2019 - Auditório Ariano Suassuna - TCE"),s.a.createElement(P,{dateStartEvent:q.a.dateEventStart,dateFinishEvent:q.a.dateEventFinish}),s.a.createElement("br",null),s.a.createElement("a",{className:"button large",href:"#inscription"},"Inscrições")),s.a.createElement(f.a,{title:q.a.about.title,alignCenter:!0,firstSection:!0},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"descr-font"},s.a.createElement("p",null,"DevOps é um dos conceitos mais discutidos do momento e trata-se de uma cultura que nasceu como um conjunto de práticas para integração entre as equipes de desenvolvimento de softwares, operações (infraestrutura ou sysadmin) e de apoio envolvidas (como controle de qualidade) e a adoção de processos automatizados para produção rápida e segura de aplicações e serviços. Venha conhecer nesta conferência diversas ferramentas, casos de sucesso e dicas práticas de como DevOps pode lhe ajudar e ser aplicado na sua carreira e empresa."),s.a.createElement("br",null),s.a.createElement("p",null,"O evento está no seu primeiro ano e tem como objetivo fomentar a cultura de colaboração entre as equipes de desenvolvimento e de operação implementando uma cultura ágil voltada para o negócio. Venha conhecer como aplicar o DevOps dentro da sua rotina diária, com palestras sobre os temas mais atuais do mercado, contado com experiência e cases de sucesso que as empresas têm adotado. Essa é uma excelente oportunidade para alunos, comunidade técnica, profissionais técnicos, gestores e diretores conhecerem a cultura através de palestras a nível nacional."))),s.a.createElement(j,{title:"Palestrantes",backgroundImage:"url('".concat(K,"/static/img/section-background/dark-background.png')"),alignCenter:!0},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"palestrantes"},q.a.palestrantes&&q.a.palestrantes.map(function(e,a){return s.a.createElement("div",{className:"palestrante",key:a},s.a.createElement("img",{src:"".concat(K).concat(e.img),alt:e.name}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,e.name),s.a.createElement("hr",null),s.a.createElement("p",null,e.profession))}))),s.a.createElement(j,{title:"Programação"},s.a.createElement("div",{className:"programaca"},q.a.programaca&&q.a.programaca.map(function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"programacao",key:a},s.a.createElement("img",{src:"".concat(K).concat(e.img)})),s.a.createElement("br",null),s.a.createElement("br",null))}))),s.a.createElement(j,{title:"Patrocinadores",backgroundImage:"url('".concat(K,"/static/img/section-background/dark-background.png')"),alignCenter:!0},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"patrocinadores"},q.a.patrocinadores&&q.a.patrocinadores.map(function(e,a){return s.a.createElement("div",{className:e.name+" patrocinador",key:a},s.a.createElement("img",{src:"".concat(K).concat(e.img),alt:e.name}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,e.name))}))),s.a.createElement(j,{title:"Organizadores",alignCenter:!0},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"organizadores"},q.a.organizadores&&q.a.organizadores.map(function(e,a){return s.a.createElement("div",{className:"organizador",key:a},s.a.createElement("img",{src:"".concat(K).concat(e.img),alt:e.name}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,e.name),s.a.createElement("hr",null),s.a.createElement("p",null,e.profession))}))),s.a.createElement(j,{title:"Inscrições Gratuitas",backgroundImage:"url('".concat(K,"/static/img/section-background/dark-background.png')"),id:"inscription",alignCenter:!0},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("p",null,"As inscrições estão disponíveis no período de 17/06/2019 a 16/08/2019"),s.a.createElement("p",null,"Incentivamos a doação de um 1kg de alimento no momento do credenciamento. Todos os alimentos serão doados a uma instituição de caridade."),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("a",{className:"button large",href:"https://www.sympla.com.br/devops-conference__554372",target:"_blank"},"Link para Inscrição"))),s.a.createElement(j,{title:"Apoio",backgroundImage:"url('".concat(K,"/static/img/section-background/black.jpg')"),alignCenter:!0},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"apoiadores"},q.a.apoiadores&&q.a.apoiadores.map(function(e,a){return s.a.createElement("div",{className:e.name+" apoiador",key:a},s.a.createElement("img",{src:"".concat(K).concat(e.img),alt:e.name}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,e.name))}))),s.a.createElement(j,{alignCenter:!0},s.a.createElement("div",{className:"social"},s.a.createElement(g.a,{animateIn:"pulse",duration:2}," ",s.a.createElement("img",{src:"".concat(K,"/static/img/icons/instagram_white.png"),href:"https://www.instagram.com/".concat(q.a.hashTag),target:"_blank",alt:"instagram"}),s.a.createElement("br",null)),s.a.createElement(g.a,{animateIn:"pulse",duration:2}," ",s.a.createElement("img",{src:"".concat(K,"/static/img/icons/facebook_white.png"),alt:"facebook"}),s.a.createElement("br",null)),s.a.createElement(g.a,{animateIn:"pulse",duration:2}," ",s.a.createElement("img",{src:"".concat(K,"/static/img/icons/twitter-white.png"),alt:"twitter"}),s.a.createElement("br",null))),s.a.createElement("h1",{className:"follow-twitter",align:"left"},s.a.createElement("a",{href:"https://www.instagram.com/".concat(q.a.hashTag),target:"_blank"},s.a.createElement(B,{text:"@"+q.a.hashTag,className:"text-styled"})," ")),s.a.createElement("br",null)),s.a.createElement(j,null,s.a.createElement("br",null),s.a.createElement("div",{className:"maps"},s.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.896147127442!2d-34.87990134556883!3d-7.128999696264386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1629016d1091cb1!2sCentro+Cultural+Ariano+Suassuna!5e0!3m2!1spt-BR!2sbr!4v1560875453071!5m2!1spt-BR!2sbr"}),s.a.createElement("img",{src:"".concat(K,"/static/img/f.jpg"),alt:"ariano suassuna"})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("hr",null)),s.a.createElement(z,null))}}]),a}(s.a.Component);a.default=U},XWtR:function(e,a,t){var n=t("5T2Y").parseInt,r=t("oc46").trim,l=t("5pKv"),c=/^[-+]?0[xX]/;e.exports=8!==n(l+"08")||22!==n(l+"0x16")?function(e,a){var t=r(String(e),3);return n(t,a>>>0||(c.test(t)?16:10))}:n},dEVD:function(e,a,t){var n=t("Y7ZC"),r=t("XWtR");n(n.G+n.F*(parseInt!=r),{parseInt:r})},oc46:function(e,a,t){var n=t("Y7ZC"),r=t("Jes0"),l=t("KUxP"),c=t("5pKv"),o="["+c+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),m=function(e,a,t){var r={},o=l(function(){return!!c[e]()||"​"!="​"[e]()}),i=r[e]=o?a(u):c[e];t&&(r[t]=i),n(n.P+n.F*o,"String",r)},u=m.trim=function(e,a){return e=String(r(e)),1&a&&(e=e.replace(i,"")),2&a&&(e=e.replace(s,"")),e};e.exports=m},uekQ:function(e,a,t){t("dEVD"),e.exports=t("WEpk").parseInt},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);