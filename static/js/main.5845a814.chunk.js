(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{48:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n,a,i,r,o=c(1),j=c.n(o),s=c(35),b=c.n(s),d=(c(48),c(13)),u=c(18),m=c(74),h=c(73),f=c(14),p={mobile:"@media screen and (max-width: 599px)"},O=c(2),l=Object(f.a)(h.a)(n||(n=Object(u.a)(["\n  background-color: whitesmoke;\n  border: 5px solid transparent;\n  &:hover {\n    background-color: pink;\n    border: 5px solid pink;\n    cursor: pointer;\n  }\n"]))),x=f.a.div(a||(a=Object(u.a)(["\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  height: 180px;\n  "," {\n    height: 100px;\n  }\n"])),(function(e){return e.picture}),p.mobile),g=function(e){return Object(O.jsxs)(l,{container:!0,item:!0,textAlign:"center",display:"block",boxShadow:10,mb:2,onClick:function(){return e.handleCharacterClick(e.character)},children:[Object(O.jsx)(h.a,{item:!0,children:Object(O.jsx)(m.a,{variant:"h6",m:"auto",children:e.character.name})}),Object(O.jsx)(x,{picture:e.character.picture})]})},v=function(e,t){return{name:e,picture:t}},S=c(75),k=Object(f.a)(h.a)(i||(i=Object(u.a)(["\n  background-color: pink;\n"]))),w=Object(f.a)(h.a)(r||(r=Object(u.a)(["\n  justify-content: end;\n  "," {\n    justify-content: center !important;\n    margin: 0 auto;\n  }\n"])),p.mobile),E=function(e){return Object(O.jsx)(k,{container:!0,item:!0,direction:"row",boxShadow:10,p:1,mx:"auto",mb:4,children:Object(O.jsxs)(h.a,{container:!0,item:!0,direction:"row",m:1,children:[Object(O.jsx)(w,{item:!0,m:1,mb:0,sm:2,children:Object(O.jsx)(m.a,{variant:"h5",children:"CatMemory!"})}),Object(O.jsxs)(w,{container:!0,item:!0,m:1,mb:0,sm:9,children:[Object(O.jsx)(h.a,{item:!0,children:Object(O.jsxs)(m.a,{variant:"h5",textAlign:"center",children:["Score: ",e.currentScore]})}),Object(O.jsx)(h.a,{item:!0,children:Object(O.jsx)(m.a,{variant:"h5",textAlign:"center",mx:2,children:"|"})}),Object(O.jsx)(h.a,{item:!0,children:Object(O.jsxs)(m.a,{variant:"h5",textAlign:"center",children:["Best: ",e.bestScore,"/15"]})})]})]})})},y=c.p+"static/media/catOne.d6ece169.jpeg",A=c.p+"static/media/catTwo.27191850.jpeg",C=c.p+"static/media/catThree.5a6c47f1.jpeg",M=c.p+"static/media/catFour.b9ed3abe.jpeg",T=c.p+"static/media/catFive.bbe6989e.jpeg",B=c.p+"static/media/catSix.28eeb4c2.jpeg",F=c.p+"static/media/catSeven.a2868afd.jpeg",I=c.p+"static/media/catEight.8dd7b72b.jpeg",J=c.p+"static/media/catNine.31960918.jpeg",U=c.p+"static/media/catTen.fcd6ff0b.jpeg",z=c.p+"static/media/catEleven.780be413.jpeg",H=c.p+"static/media/catTwelve.0e923f06.jpeg",L=c.p+"static/media/catThirteen.9f911e87.jpeg",N=c.p+"static/media/catFourteen.db5bebb6.jpeg",R=c.p+"static/media/catFifteen.f13b3acc.jpeg",q=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];Object(o.useEffect)((function(){var e=v("Uhtred",y),t=v("Beocca",A),c=v("Leofric",C),a=v("Alfred",M),i=v("Brida",T),r=v("Mildrith",B),o=v("Iseult",F),j=v("Aelswith",I),s=v("Ragnar",J),b=v("Ubba",U),d=v("Hild",z),u=v("Sihtric",H),m=v("Osferth",L),h=v("Eadith",N),f=v("Aldhelm",R),p=[];p.push(e,t,c,a,i,r,o,j,s,b,d,u,m,h,f),n((function(e){return p}))}),[]);var a=Object(o.useState)([]),i=Object(d.a)(a,2),r=i[0],j=i[1],s=Object(o.useState)([]),b=Object(d.a)(s,2),u=b[0],m=b[1],f=Object(o.useState)([]),p=Object(d.a)(f,2),l=p[0],x=p[1],k=Object(o.useState)(),w=Object(d.a)(k,2),q=w[0],D=w[1],G=Object(o.useState)(0),K=Object(d.a)(G,2),P=K[0],Q=K[1],V=Object(o.useState)(0),W=Object(d.a)(V,2),X=W[0],Y=W[1],Z=function(e){D((function(t){return e}))};return Object(o.useEffect)((function(){if(c.length>0){for(var e=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],t=[],n=[],a=9;a>0;){var i=Math.floor(Math.random()*e.length);t.push(e[i]);var r=e.indexOf(e[i]);e.splice(r,1),a--}t.forEach((function(e){n.push(c[e])})),j((function(e){return n}))}}),[c,l]),Object(o.useEffect)((function(){!function(e){var t=e.map((function(t){return Object(O.jsx)(h.a,{item:!0,xs:3,sm:2,m:1,children:Object(O.jsx)(g,{handleCharacterClick:Z,character:t})},e.indexOf(t))}));m((function(e){return t}))}(r)}),[r]),Object(o.useEffect)((function(){P>X&&Y(P)}),[P,X]),Object(o.useEffect)((function(){void 0!==q&&(l.some((function(e){return e.name===q.name}))?(x([]),D(void 0),Q((function(e){return 0}))):(x((function(e){return e.concat(q)})),Q((function(e){return e+1})),D((function(e){}))))}),[q,l]),Object(O.jsx)(S.a,{children:Object(O.jsxs)(h.a,{container:!0,direction:"row",children:[Object(O.jsx)(E,{currentScore:P,bestScore:X}),Object(O.jsx)(h.a,{container:!0,item:!0,direction:"row",justifyContent:"center",children:[u]})]})})};var D=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(q,{})})};b.a.render(Object(O.jsx)(j.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.5845a814.chunk.js.map