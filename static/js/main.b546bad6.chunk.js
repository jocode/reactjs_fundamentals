(this["webpackJsonpplatzi-badges"]=this["webpackJsonpplatzi-badges"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/platziconf_logo.eb33b95c.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/badge-header.ed7c58ea.svg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.6841730f.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/astronautas.608d335d.svg"},function(e,t,a){e.exports=a(59)},,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),s=a.n(l),c=(a(38),a(39),a(8)),o=a(13),i=a(2),m=a(3),u=a(5),d=a(4),p=a(6),h=(a(40),a(28)),f=a.n(h),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(c.b,{to:"/reactjs_fundamentals/",className:"Navbar__brand"},r.a.createElement("img",{className:"Navbar__brand-logo",src:f.a,alt:"logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf"))))}}]),t}(r.a.Component);var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),e.children)},v=a(1),E=a.n(v),N=(a(46),a(19)),j=a.n(N),O=a(16),y=(a(47),a(31)),_=a.n(y);var w=function(e){var t=e.email,a=_()(t);return r.a.createElement("img",{className:e.className,src:"http://gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"Avatar"})},C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BadgesListItem"},r.a.createElement(w,{className:"BadgesListItem__avatar",email:this.props.badge.email,alt:"".concat(this.props.badge.firstName," ").concat(this.props.badge.lastName)}),r.a.createElement("div",null,r.a.createElement("strong",null,this.props.badge.firstName," ",this.props.badge.lastName),r.a.createElement("br",null),r.a.createElement("label",{className:"twitter"},"@",this.props.badge.twitter),r.a.createElement("br",null),this.props.badge.jobTitle))}}]),t}(r.a.Component);var B=function(e){var t=function(e){var t=r.a.useState(""),a=Object(O.a)(t,2),n=a[0],l=a[1],s=r.a.useState(e),c=Object(O.a)(s,2),o=c[0],i=c[1];return r.a.useMemo((function(){var t=e.filter((function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(n.toLowerCase())}));i(t)}),[e,n]),{query:n,setQuery:l,filteredBadges:o}}(e.badges),a=t.query,n=t.setQuery,l=t.filteredBadges;return 0===l.length?r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:function(e){n(e.target.value)}})),r.a.createElement("h3",null,"No badges were found"),r.a.createElement(c.b,{to:"/badges/new",className:"btn btn-primary"},"Create new Badge")):r.a.createElement("div",{className:"BadgeList"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:function(e){n(e.target.value)}})),r.a.createElement("ul",{className:"list-unstyled"},l.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(c.b,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id)},r.a.createElement(C,{badge:e})))}))))},S=(a(50),a(51),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),t}(n.Component));function x(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement(S,null))}a(52);var T=function(e){return r.a.createElement("div",{className:"PageError"},e.error.message)},k="http://jocode.github.io.api:3001",I=function(e){return new Promise((function(t){return setTimeout(t,e)}))},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return I(D(e,t))};function A(e){var t,a,n,r,l=arguments;return E.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:{},s.next=3,E.a.awrap(M());case 3:return t.headers={"Content-Type":"application/json",Accept:"application/json"},a=k+e,s.next=7,E.a.awrap(fetch(a,t));case 7:return n=s.sent,s.next=10,E.a.awrap(n.json());case 10:return r=s.sent,s.abrupt("return",r);case 12:case"end":return s.stop()}}))}var L={badges:{list:function(){return A("/badges")},create:function(e){return A("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return A("/badges/".concat(e))},update:function(e,t){return A("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return A("/badges/".concat(e),{method:"DELETE"})}}},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0},a.fetchData=function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({loading:!0,error:null}),t.prev=1,t.next=4,E.a.awrap(L.badges.list());case 4:e=t.sent,a.setState({loading:!1,data:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),null,null,[[1,8]])},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(),this.intervalId=setInterval(this.fetchData,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return!0!==this.state.loading||this.state.data?this.state.error?r.a.createElement(T,{error:this.state.error}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:j.a,alt:"Logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(c.b,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(B,{badges:this.state.data}))))):r.a.createElement(x,null)}}]),t}(r.a.Component),P=a(15),J=a(20),V=(a(53),a(12)),z=a.n(V),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log("Button was clicked")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"jobTitle",value:this.props.formValues.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"twitter",value:this.props.formValues.twitter})),this.props.error&&r.a.createElement("p",{className:"text-danger"},this.props.error.message),r.a.createElement("button",{type:"submit",onClick:this.handleClick,className:"btn btn-primary"},"Save")))}}]),t}(r.a.Component),U=(a(54),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:j.a,alt:"Imagen de la conferencia"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement(w,{className:"Badge__avatar",email:this.props.email,alt:"Avatar"}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null),this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("div",null,"@",this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},"#platziconf"))}}]),t}(r.a.Component)),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},a.handleChange=function(e){a.setState({form:Object(J.a)({},a.state.form,Object(P.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a.setState({loading:!0,error:null}),t.prev=2,t.next=5,E.a.awrap(L.badges.create(a.state.form));case 5:a.setState({loading:!1}),a.props.history.push("/badges"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),null,null,[[2,9]])},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"BadgeNew__hero-image img-fluid",src:z.a,alt:"logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(U,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"TWITTER",jobTitle:this.state.form.jobTitle||"JOB_TITLEBa",email:this.state.form.email,avatarUrl:"https://avatars0.githubusercontent.com/u/24928806?s=460&v=4"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"New Attendant"),r.a.createElement(R,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error}))),r.a.createElement("hr",null)))}}]),t}(r.a.Component),W=(a(55),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},a.fetchData=function(e){var t;return E.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,E.a.awrap(L.badges.read(a.props.match.params.badgeId));case 4:t=e.sent,a.setState({loading:!1,form:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),null,null,[[1,8]])},a.handleChange=function(e){a.setState({form:Object(J.a)({},a.state.form,Object(P.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a.setState({loading:!0,error:null}),t.prev=2,t.next=5,E.a.awrap(L.badges.update(a.props.match.params.badgeId,a.state.form));case 5:a.setState({loading:!1}),a.props.history.push("/badges"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),null,null,[[2,9]])},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeEdit__hero"},r.a.createElement("img",{className:"BadgeEdit__hero-image img-fluid",src:z.a,alt:"logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(U,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"TWITTER",jobTitle:this.state.form.jobTitle||"JOB_TITLEBa",email:this.state.form.email,avatarUrl:"https://avatars0.githubusercontent.com/u/24928806?s=460&v=4"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Edit Attendant"),r.a.createElement(R,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error}))),r.a.createElement("hr",null)))}}]),t}(r.a.Component));var q=function(){return r.a.createElement("h1",null,"404: Not Found")};a(56),a(57);var Q=function(e){return e.isOpen?s.a.createPortal(r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"Modal__container"},r.a.createElement("button",{onClick:e.onClose,className:"Modal__close-button"},"X"),e.children)),document.getElementById("modal")):null};var X=function(e){return r.a.createElement(Q,{isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("div",{className:"DeleteBadgeModal"},r.a.createElement("h1",null,"Are you sure?"),r.a.createElement("p",null,"Yor are about to delete this badge"),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4"},"Delete"),r.a.createElement("button",{onClick:e.onClose,className:"btn btn-primary"},"Cancel"))))};var Y=function(e){var t=function(e){var t=r.a.useState(0),a=Object(O.a)(t,2),n=a[0],l=a[1];return n>e&&l(0),[n,l]}(4),a=Object(O.a)(t,2),n=(a[0],a[1],e.badge);return r.a.createElement("div",null,r.a.createElement("div",{className:"BadgeDetails__hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:z.a,alt:"Logo de la Conferencia"})),r.a.createElement("div",{className:"col-6 BadgeDetails__hero-attendant-name"},r.a.createElement("h1",null,n.firstName," ",n.lastName))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(U,{firstName:n.firstName,lastName:n.lastName,email:n.email,twitter:n.twitter,jobTitle:n.jobTitle})),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Actions"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(c.b,{className:"btn btn-primary mb-4",to:"/badges/".concat(n.id,"/edit")},"Edit")),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onOpenModal,className:"btn btn-danger"},"Delete"),r.a.createElement(X,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge})))))))},G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0,modalIsOpen:!1},a.fetchData=function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({loading:!0,error:null}),t.prev=1,t.next=4,E.a.awrap(L.badges.read(a.props.match.params.badgeId));case 4:e=t.sent,a.setState({loading:!1,data:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),null,null,[[1,8]])},a.handleCloseModal=function(){a.setState({modalIsOpen:!1})},a.handleOpenModal=function(){a.setState({modalIsOpen:!0})},a.onDeleteBadge=function(e){return E.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,E.a.awrap(L.badges.remove(a.props.match.params.badgeId));case 4:a.setState({loading:!1}),a.props.history.push("/badges"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),null,null,[[1,8]])},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(x,null):this.state.error?r.a.createElement(T,{error:this.state.error}):r.a.createElement(Y,{badge:this.state.data,onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,modalIsOpen:this.state.modalIsOpen,onDeleteBadge:this.onDeleteBadge})}}]),t}(r.a.Component),K=(a(58),a(32)),Z=a.n(K),$=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("img",{src:z.a,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),r.a.createElement("h1",null,"Badge Management System"),r.a.createElement(c.b,{className:"btn btn-primary",to:"/reactjs_fundamentals/badges"},"Start")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},r.a.createElement("img",{src:Z.a,alt:"Astronauts",className:"img-fluid p-4"})))))}}]),t}(n.Component);var ee=function(){return r.a.createElement(c.a,null,r.a.createElement(b,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/reactjs_fundamentals/",component:$}),r.a.createElement(o.a,{exact:!0,path:"/reactjs_fundamentals/badges",component:F}),r.a.createElement(o.a,{exact:!0,path:"/reactjs_fundamentals/badges/new",component:H}),r.a.createElement(o.a,{exact:!0,path:"/reactjs_fundamentals/badges/:badgeId",component:G}),r.a.createElement(o.a,{exact:!0,path:"/reactjs_fundamentals/badges/:badgeId/edit",component:W}),r.a.createElement(o.a,{component:q}))))},te=document.getElementById("app");s.a.render(r.a.createElement(ee,null),te)}],[[33,1,2]]]);
//# sourceMappingURL=main.b546bad6.chunk.js.map