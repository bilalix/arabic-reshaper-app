(this["webpackJsonparabic-reshaper-app"]=this["webpackJsonparabic-reshaper-app"]||[]).push([[0],{73:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),o=(a(73),a(16)),l=a(14),s=a(128),j=a(127),b=a(61),u=a(60),d=a.n(u),h=a(59),p=a.n(h),m=a(119),g=a(131),O=a(6),x=Object(m.a)((function(e){return{logo:{marginTop:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center"},title:{margin:e.spacing(1),backgroundColor:e.palette.primary.main}}}));var f=function(){var e=x();return Object(O.jsxs)("div",{className:e.logo,children:[Object(O.jsx)("img",{className:"Header-logo",src:"/logo.png",alt:"Logo",height:"100px"}),Object(O.jsx)("h1",{children:"Arabic Reshaper"}),Object(O.jsx)(g.a,{severity:"info",dir:"rtl",children:"Arabic Reshaper \u0647\u0648 \u0645\u0648\u0642\u0639 \u064a\u0633\u0645\u062d \u0628\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0649 \u0643\u062a\u0627\u0628\u0629 \u0645\u0641\u0647\u0648\u0645\u0629 \u0645\u0646 \u0642\u0628\u0644 \u0627\u063a\u0644\u0628 \u0628\u0631\u0627\u0645\u062c \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0645\u062b\u0644 Photoshop \u0648 After Effects \u0648 Premiere Pro \u0648 Avid Media Composer \u0648 \u0628\u0631\u0627\u0645\u062c \u0627\u062e\u0631\u0649 \u0643\u062b\u064a\u0631\u0629"}),Object(O.jsx)(g.a,{severity:"info",children:"Arabic Reshaper is a website that allows you to convert arabic text to a format compatible with many softwares like PhotoShop, After Effects, Premiere Pro, Avid Media Composer etc.."})]})},v=a(129),y=a(123),w=a(57),T=a.n(w),A=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main}}}));function C(){var e=A(),t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),j=s[0],b=s[1];return Object(n.useEffect)((function(){!function(){var e=T.a.ArabicShaper.convertArabic(i);b(Object(l.a)(e).reverse().join(""))}()}),[i]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y.a,{}),Object(O.jsxs)("div",{dir:"rtl",className:e.paper,children:[Object(O.jsx)(v.a,{id:"outlined-multiline-static-original",name:"originalText",margin:"normal",label:"\u0627\u0644\u0646\u0635 \u0627\u0644\u0623\u0635\u0644\u064a",placeholder:"\u0623\u062f\u062e\u0644 \u0627\u0644\u0646\u0635 \u0647\u0646\u0627",multiline:!0,rows:5,fullWidth:!0,variant:"outlined",onChange:function(e){return r(e.target.value)},value:i,required:!0,autoFocus:!0}),Object(O.jsx)("h2",{children:j&&Object(O.jsx)("span",{children:"\u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u0646\u0635 \u0623\u0633\u0641\u0644\u0647"})}),Object(O.jsx)(v.a,{id:"outlined-multiline-static-reshaped",name:"reshapedText",margin:"normal",label:"\u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0639\u062f\u0644",dir:"rtl",multiline:!0,rows:5,fullWidth:!0,variant:"outlined",value:j})]})]})}var k=a(12),P=a(58),S=a.n(P),F=a(130),B=a(133),D=a(124),E=a(125),I=a(87),N=a(132),L=a(126),M=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,marginLeft:"20px",textDecoration:"none"}}}));function R(e){var t=M(),a=e.bgTheme,n=e.setBgTheme,i=e.icon;return Object(O.jsx)("div",{className:t.root,children:Object(O.jsx)(D.a,{position:"static",dir:"rtl",style:{background:"#2E3B55"},children:Object(O.jsxs)(E.a,{children:[Object(O.jsx)(I.a,{variant:"h6",className:t.title,children:Object(O.jsx)(L.a,{href:"/help",color:"inherit",style:{textDecoration:"none"},children:"\u0645\u0633\u0627\u0639\u062f\u0629"})}),Object(O.jsx)(N.a,{edge:"end",color:"inherit","aria-label":"mode",dir:"rtl",onClick:function(){return n(!a)},children:i})]})})})}var W=Object(k.b)({plugins:[].concat(Object(l.a)(Object(F.a)().plugins),[S()()])});var G={palette:{type:"light"}},J={palette:{type:"dark"}},q=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],r=a?Object(O.jsx)(d.a,{}):Object(O.jsx)(p.a,{}),c=Object(b.a)(a?G:J,{overrides:{MuiOutlinedInput:{multiline:{fontWeight:"bold",fontSize:"20px"}}},direction:"rtl",typography:{fontFamily:["Tajawal","sans-serif"].join(",")}});return Object(O.jsx)(j.a,{theme:c,children:Object(O.jsx)(B.b,{jss:W,children:Object(O.jsxs)(s.a,{component:"main",maxWidth:"lg",children:[Object(O.jsx)(R,{bgTheme:a,setBgTheme:i,icon:r}),Object(O.jsx)(f,{}),Object(O.jsx)(C,{})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(q,{})}),document.getElementById("root")),z()}},[[83,1,2]]]);
//# sourceMappingURL=main.287a33ef.chunk.js.map