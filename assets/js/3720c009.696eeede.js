"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3751],{3821:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});n(3900);var a=n(7515),s=n(4181),r=n(8512),l=n(2678),i=n(5123),c=n(3806),u=n(4974),o=n(966);function g(t){let{title:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{title:e}),(0,o.jsx)(c.Z,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:n}=t;return(0,o.jsx)(s.FG,{className:(0,a.Z)(r.k.page.docsTagsListPage),children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,o.jsx)(u.Z,{as:"h1",children:n}),(0,o.jsx)(i.Z,{tags:e})]})})})})}function d(t){const e=(0,l.M)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{...t,title:e}),(0,o.jsx)(h,{...t,title:e})]})}},1254:function(t,e,n){n.d(e,{Z:function(){return i}});n(3900);var a=n(7515),s=n(3707),r={tag:"tag_TpAi",tagRegular:"tagRegular_ha55",tagWithCount:"tagWithCount_mjGL"},l=n(966);function i(t){let{permalink:e,label:n,count:i}=t;return(0,l.jsxs)(s.Z,{href:e,className:(0,a.Z)(r.tag,i?r.tagWithCount:r.tagRegular),children:[n,i&&(0,l.jsx)("span",{children:i})]})}},5123:function(t,e,n){n.d(e,{Z:function(){return u}});n(3900);var a=n(2678),s=n(1254),r=n(4974),l={tag:"tag_BmfI"},i=n(966);function c(t){let{letterEntry:e}=t;return(0,i.jsxs)("article",{children:[(0,i.jsx)(r.Z,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(s.Z,{...t})},t.permalink)))}),(0,i.jsx)("hr",{})]})}function u(t){let{tags:e}=t;const n=(0,a.P)(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:n.map((t=>(0,i.jsx)(c,{letterEntry:t},t.letter)))})}},2678:function(t,e,n){n.d(e,{M:function(){return s},P:function(){return r}});var a=n(1207);const s=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(t){const e={};return Object.values(t).forEach((t=>{const n=function(t){return t[0].toUpperCase()}(t.label);null!=e[n]||(e[n]=[]),e[n].push(t)})),Object.entries(e).sort(((t,e)=>{let[n]=t,[a]=e;return n.localeCompare(a)})).map((t=>{let[e,n]=t;return{letter:e,tags:n.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);