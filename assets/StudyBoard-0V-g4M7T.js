import{_ as S,r as d,c,b as t,F as r,e as b,u as m,f as i,o as n,w as f,g as l,t as e,p as v,a as y}from"./index-1tUcD__F.js";const I=[{title:"노마드코더 JS 챌린지",desc:"JAVASCRIPT",date:"2024-01-10"},{title:"TO DO LIST",desc:"VUE3 / 수정+완료 기능 추가",date:"2024-01-10"}],_=s=>(v("data-v-a4abe78b"),s=s(),y(),s),k={class:"inner"},w=_(()=>t("h2",null,"Study List",-1)),B={class:"board"},V={class:"item"},x={class:"title"},L=_(()=>t("i",{class:"bi bi-pencil-square me-1"},null,-1)),T={class:"desc"},g=_(()=>t("i",{class:"bi bi-dot"},null,-1)),C={class:"date"},D={__name:"StudyBoard",setup(s){const u=I;return(N,A)=>{const p=d("router-link"),h=d("router-view");return n(),c(r,null,[t("div",k,[w,t("ul",B,[(n(!0),c(r,null,b(m(u),(o,a)=>(n(),c("li",{key:a},[t("div",V,[i(p,{to:`/ex/${a}`},{default:f(()=>[t("p",x,[L,l(" 예제"+e(a+1)+" - "+e(o.title),1)])]),_:2},1032,["to"]),t("span",T,[g,l(" "+e(o.desc),1)]),t("span",C,e(o.date),1)])]))),128))])]),i(h)],64)}}},F=S(D,[["__scopeId","data-v-a4abe78b"]]);export{F as default};