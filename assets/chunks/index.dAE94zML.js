import{T as S,a7 as h,a8 as z,_ as n,a9 as i,aa as f,ab as y,ac as C,ad as u,y as B}from"./LoadingOutlined.ZDLiInSo.js";const s=(r,e)=>new S(r).setAlpha(e).toRgbString(),a=(r,e)=>new S(r).lighten(e).toHexString(),M=r=>{const e=h(r,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},T=(r,e)=>{const t=r||"#000",o=e||"#fff";return{colorBgBase:t,colorTextBase:o,colorText:s(o,.85),colorTextSecondary:s(o,.65),colorTextTertiary:s(o,.45),colorTextQuaternary:s(o,.25),colorFill:s(o,.18),colorFillSecondary:s(o,.12),colorFillTertiary:s(o,.08),colorFillQuaternary:s(o,.04),colorBgElevated:a(t,12),colorBgContainer:a(t,8),colorBgLayout:a(t,0),colorBgSpotlight:a(t,26),colorBorder:a(t,26),colorBorderSecondary:a(t,19)}},x=(r,e)=>{const t=Object.keys(z).map(l=>{const c=h(r[l],{theme:"dark"});return new Array(10).fill(1).reduce((d,F,g)=>(d[`${l}-${g+1}`]=c[g],d),{})}).reduce((l,c)=>(l=n(n({},l),c),l),{}),o=e??i(r);return n(n(n({},o),t),f(r,{generateColorPalettes:M,generateNeutralColorPalettes:T}))},m=x;function v(r){const{sizeUnit:e,sizeStep:t}=r,o=t-2;return{sizeXXL:e*(o+10),sizeXL:e*(o+6),sizeLG:e*(o+2),sizeMD:e*(o+2),sizeMS:e*(o+1),size:e*o,sizeSM:e*o,sizeXS:e*(o-1),sizeXXS:e*(o-1)}}const A=(r,e)=>{const t=e??i(r),o=t.fontSizeSM,l=t.controlHeight-4;return n(n(n(n(n({},t),v(e??r)),C(o)),{controlHeight:l}),y(n(n({},t),{controlHeight:l})))},X=A;function p(){const[r,e,t]=B();return{theme:r,token:e,hashId:t}}const H={defaultConfig:u,defaultSeed:u.token,useToken:p,defaultAlgorithm:i,darkAlgorithm:m,compactAlgorithm:X};export{H as t};
