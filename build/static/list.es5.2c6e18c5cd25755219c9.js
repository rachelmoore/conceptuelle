(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{218:function(e,t,n){"use strict";n.r(t);var a=n(4),l=n(0),s=n(3),r=n(44),c=n(205),i=n(1);var o=Object(s.connect)((function(e){var t=e.state,n=e.item,a=t.source.author[n.author],l=new Date(n.date);return Object(i.jsx)("article",null,Object(i.jsx)(r.a,{link:n.link},Object(i.jsx)(j,{dangerouslySetInnerHTML:{__html:n.title.rendered}})),Object(i.jsx)("div",null,a&&Object(i.jsx)(u,{link:a.link},Object(i.jsx)(b,null,"By ",Object(i.jsx)("b",null,a.name))),Object(i.jsx)(x,null," ","on ",Object(i.jsx)("b",null,l.toDateString()))),t.theme.featured.showOnList&&Object(i.jsx)(c.a,{id:n.featured_media}),n.excerpt&&Object(i.jsx)(d,{dangerouslySetInnerHTML:{__html:n.excerpt.rendered}}))})),j=Object(a.a)("h1",{target:"e1p5zhim0",label:"Title"})({name:"7nr29g",styles:"font-size:2rem;color:#FFFFFF;margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box;"}),b=Object(a.a)("span",{target:"e1p5zhim1",label:"AuthorName"})({name:"15x42d",styles:"color:#FFFFFF;font-size:0.9em;"}),u=Object(a.a)(r.a,{target:"e1p5zhim2",label:"StyledLink"})({name:"qar1bk",styles:"padding:15px 0;"}),x=Object(a.a)("span",{target:"e1p5zhim3",label:"PublishDate"})({name:"15x42d",styles:"color:#FFFFFF;font-size:0.9em;"}),d=Object(a.a)("div",{target:"e1p5zhim4",label:"Excerpt"})({name:"ea9qw",styles:"line-height:1.6em;color:#FFFFFF;"}),O=n(204);var m=Object(s.connect)((function(e){var t=e.state,n=e.actions,a=t.source.get(t.router.link),s=a.next,c=a.previous;return Object(l.useEffect)((function(){s&&n.source.fetch(s)}),[]),Object(i.jsx)("div",null,s&&Object(i.jsx)(r.a,{link:s},Object(i.jsx)(p,null,"← Older posts")),c&&s&&" - ",c&&Object(i.jsx)(r.a,{link:c},Object(i.jsx)(p,null,"Newer posts →")))})),p=Object(a.a)("em",{target:"esft81u0",label:"Text"})({name:"xhf1f8",styles:"display:inline-block;margin-top:16px;"});t.default=Object(s.connect)((function(e){var t=e.state,n=t.source.get(t.router.link);return Object(i.jsx)(F,null,Object(i.jsx)(g,null,n.isTaxonomy&&Object(i.jsx)(h,null,n.taxonomy,":"," ",Object(i.jsx)("b",null,Object(s.decode)(t.source[n.taxonomy][n.id].name))),n.isAuthor&&Object(i.jsx)(h,null,"Author: ",Object(i.jsx)("b",null,Object(s.decode)(t.source.author[n.id].name))),n.items.map((function(e){var n=e.type,a=e.id,l=t.source[n][a];return Object(i.jsx)(o,{key:l.id,item:l})})),Object(i.jsx)(m,null)),Object(i.jsx)(O.a,null))}));var F=Object(a.a)("section",{target:"exiu6z10",label:"Container"})({name:"krvwu5",styles:"display:flex;flex-direction:row;justify-content:center;background-color:#202020;width:100%;margin:0;padding:24px;list-style:none;"}),g=Object(a.a)("section",{target:"exiu6z11",label:"ListContainer"})({name:"1520ssh",styles:"background-color:#202020;width:738px;margin:0;padding:24px;list-style:none;"}),h=Object(a.a)("h3",{target:"exiu6z12",label:"Header"})({name:"1hqlsua",styles:"font-weight:300;text-transform:capitalize;color:#FFFFFF;"})}}]);